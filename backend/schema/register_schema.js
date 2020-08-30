const mongoose  =require('mongoose');
const Schema    = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var RegisterSchema = new Schema({
    name: {type: String, required: true},
    company: { type: String, required:true },
    companyURL: { type: String, required:true},
    emailId: {type: String, required: true, createindex: { unique: true}},
    password: {type: String, required: true},
    mobile: {type:String, required: true}
});

RegisterSchema.plugin(timestamps);

module.exports = mongoose.model('Accounts', RegisterSchema);