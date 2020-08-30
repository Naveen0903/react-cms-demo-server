const Router =  require("express");
const router = Router();
const { addClient,
        deleteClient,
        getClients} = require("../../models/clients/clients")

router.post("/addclient", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await addClient(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

router.post("/deleteclient", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await deleteClient(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
        console.log(err)
    }
})

router.post("/getClients", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await getClients(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
})
// router.post
module.exports = router;