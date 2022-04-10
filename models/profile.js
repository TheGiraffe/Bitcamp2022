const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: { type: String, required: true },
  isOrg: { type: Boolean, required: true },
  causes: [{ type: Schema.Types.ObjectId, ref: 'Cause' }],
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
  interests: [{ type: Schema.Types.ObjectId, ref: 'Skill' }], // Skill interests, i.e. skills they are interested in learning but may not be very experienced in yet.
  dislikes: [{ type: Schema.Types.ObjectId, ref: 'Skill' }], // Skills that they have no interest in learning / don't feel very strongly about
  futurePlans: { type: Schema.Types.ObjectId, ref: 'Career' }, // Data on potential future income level and other potentially relevant future career details
  careerStatus: { type: Schema.Types.ObjectId, ref: 'Career' }, // Data on current income level and other potentially relevant career details
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
},{
    timestamps: true,
}
);

module.exports = mongoose.model('Profile', ProfileSchema);