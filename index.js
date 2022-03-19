const mongoose = require("mongoose");
const app = require("./app");

const user = "mongoadmin";
const password = "mongopass";
const serverUrl = "localhost";
const serverPort = "27017";
const dataBaseName = "mongodb";
const URL_MONGODB ="mongodb://"+ serverUrl + ":" + serverPort + "/" + dataBaseName + "?authSource=admin";

const PORT= 8888;

mongoose.connect(URL_MONGODB,
    {
        user:user,
        pass:password,
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },
    (err,res)=>{
    try {
        if(err){
            throw err
        }else{
            console.log("La conexion ha sido establecida...");
            app.listen(PORT,()=>{ 
                console.log(`Best App is listening at http://localhost:${PORT}`);
            })
        }
    } catch (error) {
        console.error(error);
    }
});

