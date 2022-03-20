const mongoose = require("mongoose");
const app = require("./app");

const user = "mongoadmin";
const password = "mongopass";
const serverUrl = "0.0.0.0"|| "localhost";
const serverPort = "27017";
const dataBaseName = "mongodb";
const URL_MONGODB ="mongodb://"+user+":"+password+"@"+ serverUrl + ":" + serverPort + "/" + dataBaseName + "?authSource=admin";

const PORT= process.env.PORT || '8888';

mongoose.connect(URL_MONGODB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },
    (err,res)=>{
    try {
        if(err){
            throw err;
        }else{
            console.log("MongoDB connection successful!");
            app.listen(PORT,()=>{ 
                console.log(`Best App is listening at http://localhost:${PORT}...`);
            });
        }
    } catch (error) {
        console.error(error);
    }
});

