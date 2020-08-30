const Router =  require("express");
const router = Router();
const { addDeal,
        updateDeal, 
        deleteDeal,
        addTask,
        updateTask,
        deleteTask,
        addAppointment,
        getDeals,
        getTasks,
        getSchedules
    } = require("../../models/tools/clienmanagement");

router.post("/adddeal", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await addDeal(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

router.post("/getDeals", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await getDeals(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

router.post("/updatedeal", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await updateDeal(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

router.post("/deletedeal", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await deleteDeal(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

router.post("/addtask", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await addTask(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

router.post("/getTasks", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await getTasks(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

router.post("/updatetask", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await updateTask(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

router.post("/deletetask", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await deleteTask(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

router.post("/addappointment", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await addAppointment(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

router.post("/getSchedules", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await getSchedules(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

module.exports = router;