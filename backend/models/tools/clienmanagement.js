const mongoose = require('mongoose');
const config = require('../../config');
const {
        DealSchema, 
        TaskSchema,
        AppointmentSchema} = require('../../schema/client_management_schema');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
    };

mongoose.connect(config.mongoUrl, options);

const addDeal = async (data) => {
    try{
        let res, ret;
        let dealSchema = new DealSchema();
        ret = await DealSchema.findOne({clientId: data.clientId, tag: data.tag});
        if(ret){
            res = "Tag name already exist!";
        }else{
            dealSchema.clientId  = data.clientId;
            dealSchema.dealValue = data.dealValue;
            dealSchema.tag = data.tag;
            dealSchema.deadline = data.deadline;
            res = await dealSchema.save();
            res = {Token: res._id};
        }
        return res;
    }catch(err){
        return err;
    }
}

const getDeals = async (data) => {
    let ret;
    try{
        ret = await DealSchema.find({clientId: data.clientId})
    }catch(err){
        ret = "error"
    }
    return ret;
}

const deleteDeal = async(data) => {
    try{
        let res, ret;
        ret = await DealSchema.findOneAndDelete({clientId: data.clientId, tag: data.tag});
        if(ret) {
            res = "deleted";
        }else {
            res = "failed";
        }
        return res;
    }catch(err){
        return err;
    }
}

const updateDeal = async (data) => {
    try{
        let res, ret;
        ret = await DealSchema.findOneAndUpdate({...data})
        if(ret) {
            res = "updated";
        }else {
            res = "failed";
        }
        return res;
    }catch(err){
        return err;
    }
}

const addTask = async (data) => {
    try{
        let res, ret;
        let taskSchema = new TaskSchema();
        ret = await TaskSchema.findOne({tag: data.tag});
        if(ret){
            res = "Tag name already exist!";
        }else{
            taskSchema.clientId = data.clientId;
            taskSchema.tag = data.tag;
            taskSchema.taskDescription = data.task;
            taskSchema.deadline = data.deadline;
            res = await taskSchema.save();
            res = {Token: res._id};
        }
        return res;
    }catch(err){
        return err;
    }
}

const getTasks = async (data) => {
    let ret;
    try{
        ret = await TaskSchema.find({clientId: data.clientId})
    }catch(err){
        ret = "error"
    }
    return ret;
}

const updateTask = async (data) => { 
    try{
        let res;
        ret = await TaskSchema.findOneAndUpdate({...data});
        if(ret){
            res = "updated";
        }else{
            res = "failed";
        }
        return res;
    }catch(err){
        return err;
    }
}

const deleteTask = async (data) => {
    try{
        let res, ret;
        ret = await TaskSchema.findOneAndDelete({tag: data.tag});
        if(ret) {
            res = "deleted";
        }else {
            res = "failed";
        }
        return res;
    }catch(err){
        return err;
    }
}

const addAppointment = async (data) => {
    try{
        let res, ret;
        let appointmentSchema = new AppointmentSchema();
        ret = await AppointmentSchema.findOne({tag: data.tag});
        if(ret){
            res = "Tag name already exist!";
        }else{
            appointmentSchema.clientId = data.clientId;
            appointmentSchema.tag = data.tag;
            appointmentSchema.agenda = data.agenda;
            appointmentSchema.deadline = data.deadline;
            res = await appointmentSchema.save();
            res = {Token: res._id};
        }
        return res;
    }catch(err){
        return err;
    }
}

const getSchedules = async (data) => {
    let ret;
    try{
        ret = await AppointmentSchema.find({clientId: data.clientId})
    }catch(err){
        ret = "error"
    }
    return ret;
}

module.exports = {
    addDeal,
    updateDeal,
    deleteDeal,
    addTask,
    updateTask,
    deleteTask,
    addAppointment,
    getDeals,
    getTasks,
    getSchedules
};