const mongoose = require('mongoose');
const config = require('../../config');
const registerSchema = require('../../schema/register_schema');

mongoose.connect(config.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const register = async (formdata) => {
    try{
        var registerschema = new registerSchema();
        var doc;

        registerschema.name = formdata.name;
        registerschema.emailId = formdata.email;
        registerschema.company = formdata.company;
        registerschema.companyURL = formdata.companyURL;
        if (formdata.password == formdata.retypePassword){
            registerschema.password = formdata.password;
        }else{
            return "password doesn't match";
        }
        registerschema.mobile = formdata.mobile;
        doc = await registerschema.save();
        return doc._id
    }catch(err){
        return err;
    }
}

const login = async(formdata)=>{
    try{
        var query = registerSchema.findOne({
            emailId: formdata.email,
            password: formdata.password
        });
        var doc = await query.exec();
        return doc;
    }catch(err){
        return err;
    }
}

const update = async(id, formdata)=>{
    try{
        var query = registerSchema.findOne({
            _id:id
        }).update(formdata);

        var doc = await query.exec();
        return doc;
    }catch(err){
        return err;
    }
}

const getAccount = async (id) => {
    try{
        var query = registerSchema.findOne({
            _id: mongoose.Types.ObjectId(id)
        })
        let doc = await query.exec();
        return doc;
    }catch(err){
        return err;
    }
}


module.exports = {
    register,
    login,
    update,
    getAccount
};
