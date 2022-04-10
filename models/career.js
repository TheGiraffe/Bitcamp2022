const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CareerSchema = new Schema({
    title: { type: String, required: true },
    research: { 
        type: String,
        enum: ['not a researcher', 'early career researcher', 'established researcher'],
        default: 'not a researcher'
     },
    teaching: {
        type: String, 
        enum: ['not a teacher','teacher','teaching assistant','tutor'],
        default: 'not a teacher'
    },
    income: { 
        type: String, 
        enum: ['student','low income','mid income', 'high income', 'unemployed', 'not sure'],
        default: 'student'
    },
    donate: { type: String },

});

module.exports = mongoose.model('Career', CareerSchema);