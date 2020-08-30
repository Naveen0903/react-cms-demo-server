const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var ClientSchema = new Schema({
    accountId: {type: Schema.Types.ObjectId, required: true},
    name: {type: String, required: true},
    company: { type: String, required:true },
    companyURL: { type: String, required:true},
    emailId: {type: String, required: true, createindex: { unique: true}},
    mobile: {type:String, required: true},
    address: {type:String, default:""},
    role:{type:String, required:true}
});

ClientSchema.plugin(timestamps);

module.exports = mongoose.model('Clients', ClientSchema);