const mongoose = require("mongoose");

const db = mongoose.connection

mongoose.connect(process.env.ATLAS_URI)

// database connection event
db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})