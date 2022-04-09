const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CauseModelSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  quote: { type: String, required: true },
});

module.exports = mongoose.model("quotes", QuoteModelSchema);