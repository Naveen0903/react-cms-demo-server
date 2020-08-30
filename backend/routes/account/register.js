const Router =  require("express");
const router = Router();
const register = require("./../../models/accounts/register_data");

router.post("/register", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await register.register(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Registration failed!"});
        }
    }catch(err){
        res.json({Status:400,Data:"Something went wrong", Error:err});
    }
})

router.post("/login", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await register.login(data);
            res.json({Status:200,Token:response._id, Data: response.password});
        }else{
            res.json({Status:400, Data:"Login failed!"});
        }
    }catch(err){
        res.json(err);
    }
});

router.post("/update", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await register.update(data.id, data);
            res.json({Status:200, Data: response});
        }else{
            res.json({Status:400, Data:"Update failed"});
        }
    }catch(err){
        res.json(err);
    }
});

router.post("/getAccount", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await register.getAccount(data.id);
            res.json({Status:200, Data: response});
        }else{
            res.json({Status:400, Data:"Update failed"});
        }
    }catch(err){
        res.json(err);
    }
})


module.exports = router;