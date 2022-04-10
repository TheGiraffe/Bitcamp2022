const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NeedSchema = new Schema({
name: { type: String, required: true},
description: { type: String },
});

const CauseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  needs: [{ type: Schema.Types.ObjectId, ref: 'Need' }]
});
//var Need = mongoose.model('Need', NeedSchema);
//var Cause = mongoose.model("Cause", CauseSchema);

module.exports = mongoose.model("Cause", CauseSchema);