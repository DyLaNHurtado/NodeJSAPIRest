const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('../service/jwt');


async function register(req,res){
    const user = new User();
    const {email,password} = req.body;
    try {
        if(!email || !password){
            throw{msg:"Rellene los campos para registrarse"};
        }
            const foundEmail = await User.findOne({email});
            if(foundEmail){throw{msg:"El email ya esta en uso."}}
            const salt = bcrypt.genSaltSync(10);
            user.email=email;
            user.password= await bcrypt.hash(password,salt);
            user.save();
            res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function login(req,res){
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            throw{msg:"Error en el email o password"};
        }
        const passwordSuccess=await bcrypt.compare(password,user.password);
        console.log(passwordSuccess)
        if(!passwordSuccess){
            throw{msg:"Error en el email o password"};
        }
        res.status(200).send({token: jwt.createToken(user,"12h")});

    } catch (error) {
        res.status(500).send(error);
    }
}

async function protected(req,res){
    try {
        console.log("sfkdf");

    } catch (error) {
        res.status(500).send(error);
    }
}
module.exports = {
    register,
    login,
    protected,
}