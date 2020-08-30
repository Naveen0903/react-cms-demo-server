const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var DealSchema = new Schema({
    clientId: {type: Schema.Types.ObjectId, required: true},
    dealValue: {type: String, required: true},
    tag: { type: String, required:true , createindex: { unique: true}},
    deadline: { type: Date, required:true}
});

var TaskSchema = new Schema({
    clientId: {type: Schema.Types.ObjectId, required: true},
    tag: {type: String, required: true, createindex: { unique: true}},
    taskDescription: { type: String, required:true },
    deadline: { type: Date, required:true}
})

var AppointmentSchema = new Schema({
    clientId: {type: Schema.Types.ObjectId, required: true},
    tag: {type: String, required: true, createindex: { unique: true}},
    agenda: { type: String, required:true },
    deadline: { type: Date, required:true}
})

DealSchema.plugin(timestamps);
TaskSchema.plugin(timestamps);
AppointmentSchema.plugin(timestamps);


module.exports = {
    DealSchema: mongoose.model('deals', DealSchema),
    TaskSchema: mongoose.model('tasks', TaskSchema),
    AppointmentSchema: mongoose.model('schedules', AppointmentSchema)
};