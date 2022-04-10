const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String },
    googleId: { type: String },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
},{
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);