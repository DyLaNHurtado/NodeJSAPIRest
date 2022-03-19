const Task = require('../model/Task');
//post
async function postTask(req,res){
    const task= new Task();
    const params = req.body;

    task.title=params.title;
    task.description=params.description;

    try{
        const taskStore = await task.save();

        if(!taskStore){
            res.status(404).send({msg:"No se ha guardado la tarea"});
        }else{
            res.status(200).send({task:taskStore});
        }

    }catch(error){
        res.status(500).send(error);
    }
}
//getAll
async function getAll(req,res){
                        //Object.find({atributo:true}) muestra los que atributo sea true
    try{                //Ordenar de menor a mayor por fechas de creacion
        const tasks= await Task.find().sort({created_at:-1});
        if(!tasks){
            res.status(404).send({msg:"error al obtener tareas"});
        }else{
            res.status(200).send(tasks);
        }
    }catch(error){
        res.status(500).send(error);
    }
}
async function getById(req,res){
    const idTask= req.params.id;
    try{
        const task= await Task.findById(idTask);
        if(!task){
            res.status(404).send({msg:"error al obtener tarea"});
        }else{
            res.status(200).send(task);
        }
    }catch(error){
        res.status(500).send(error);
    }
}

async function putTask(req,res){
    const idTask= req.params.id;
    const params= req.body;
    try{
        const task= await Task.findByIdAndUpdate(idTask,params);
        if(!task){
            res.status(404).send({msg:"No se ha podido actualizar la tarea"});
        }else{
            res.status(200).send({msg:"Update realizado con exito!"});
        }
    }catch(error){
        res.status(500).send(error);
    }
}

async function deleteTask(req,res){
    const idTask= req.params.id;
    try{
        const task= await Task.findByIdAndDelete(idTask);
        if(!task){
            res.status(404).send({msg:"No se ha podido eliminar la tarea"});
        }else{
            res.status(200).send({msg:"Delete realizado con exito!"});
        }
    }catch(error){
        res.status(500).send(error);
    }
}

module.exports={
    getAll,
    getById,
    postTask,
    putTask,
    deleteTask,
}