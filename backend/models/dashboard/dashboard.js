const mongoose = require('mongoose');
const config = require('../../config');
const clientSchema = require('../../schema/client_schema');
const {
    DealSchema 
}= require('../../schema/client_management_schema')

let options = { 
                useNewUrlParser: true, 
                useUnifiedTopology: true, 
                useCreateIndex: true
            };

mongoose.connect(config.mongoUrl, options);

const getPerformance = async (data) =>{
    try{
        if("id" in data) {
            let clients = await clientSchema.aggregate([
                {
                  '$match': {
                    'accountId': mongoose.Types.ObjectId(data.id)
                  }
                }, {
                  '$lookup': {
                    'from': 'deals', 
                    'localField': '_id', 
                    'foreignField': 'clientId', 
                    'as': 'deal'
                  }
                }, {
                  '$lookup': {
                    'from': 'schedules', 
                    'localField': '_id', 
                    'foreignField': 'clientId', 
                    'as': 'schedule'
                  }
                }, {
                  '$lookup': {
                    'from': 'tasks', 
                    'localField': '_id', 
                    'foreignField': 'clientId', 
                    'as': 'task'
                  }
                }, {
                  '$project': {
                    '_id': 0,
                    'deal': 1,
                    'task': 1,
                    'schedule': 1
                  }
                }
              ]);
            
            let deals = tasks = schedules = [];

            for(client=0;client<clients.length;client++){
              // console.log(clients[client]["deal"]);
              deals = deals.concat(clients[client]["deal"]);
              tasks = tasks.concat(clients[client]["task"]);
              schedules = schedules.concat(clients[client]["schedule"]);
            }
            // let Accounts = purchases = session = [];
            
            // deals.forEach((deal)=>Accounts.push(Number(deal.dealValue)))

            return {
              deals: deals,
              tasks: tasks,
              schedule: schedules };
            }
    }catch(err){
        console.error(err);
        return err;
    }
}

module.exports = {
    getPerformance
}