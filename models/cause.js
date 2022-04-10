const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CauseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  needs: [{ type: Schema.Types.ObjectId, ref: 'Need' }]
});

module.exports = mongoose.model("Cause", CauseSchema);