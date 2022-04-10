const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CauseSchema = new Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  needs: [{ type: Schema.Types.ObjectId, ref: 'Need' }]
});

module.exports = mongoose.model("Cause", CauseSchema);