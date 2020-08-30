const Router =  require("express");
const router = Router();
const {
    getPerformance
} = require("../../models/dashboard/dashboard");

router.post("/getPerformance", async function(req, res){
    try{
        data = req.fields;
        if(data!=null){
            response = await getPerformance(data);
            res.json({Status:200, Data: response})
        }else{
            res.json({Status:400,Data:"Action failed!"});
        }
    }catch(err){
        res.json({Status:400,Error:err});
    }
});

// router.get("/updatePerformnace", async function(req, res){
//     try{
//         data = req.fields;
//         if(data!=null){
//             response = await addClient(data);
//             res.json({Status:200, Data: response})
//         }else{
//             res.json({Status:400,Data:"Action failed!"});
//         }
//     }catch(err){
//         res.json({Status:400,Error:err});
//     }
// });

// router.get("/performance", async function(req, res){
//     try{
//         data = req.fields;
//         if(data!=null){
//             response = await addClient(data);
//             res.json({Status:200, Data: response})
//         }else{
//             res.json({Status:400,Data:"Action failed!"});
//         }
//     }catch(err){
//         res.json({Status:400,Error:err});
//     }
// });

module.exports = router;