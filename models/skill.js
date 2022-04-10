const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    name: { type: String, required: true},
    description: { type: String },
    });

module.exports = mongoose.model('Skill', SkillSchema);