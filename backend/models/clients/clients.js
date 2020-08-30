const mongoose = require('mongoose');
const config = require('../../config');
const clientSchema = require('../../schema/client_schema');

let options = { useNewUrlParser: true, 
                useUnifiedTopology: true, 
                useCreateIndex: true
            };

mongoose.connect(config.mongoUrl, options);

const addClient = async (formdata) => {
    try{
        let returnRes = "";
        var clientschema = new clientSchema();
        clientschema.accountId = mongoose.Types.ObjectId(formdata.accountId);
        clientschema.name = formdata.name;
        clientschema.emailId = formdata.email;
        clientschema.company = formdata.company;
        clientschema.companyURL = formdata.companyURL;
        clientschema.mobile = formdata.mobile;
        clientschema.address = (formdata.address==undefined || formdata.address == null)?"":formdata.address;
        clientschema.role = formdata.role;
        returnRes = await clientschema.save();
        return {Token: returnRes._id};
    }catch(err){
        return err;
    }
}

const deleteClient = async (id) => {
    try{
        let res = await clientSchema.deleteOne({
            "_id": mongoose.Types.ObjectId(id.clientId), 
            "accountId": mongoose.Types.ObjectId(id.accountId)
        });
        return res;
    }catch(err){
        return err;
    }
}

const getClients = async (id) => {
    try{
        let res = await clientSchema.find({
            "accountId": mongoose.Types.ObjectId(id.accountId)
        });
        return res;
    }catch(err){
        return err;
    }
}

module.exports = {
    addClient,
    deleteClient,
    getClients
}