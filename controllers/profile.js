const Profile = require("../models/profile.js");
const Skill = require("../models/skill.js");
const Career = require("../models/career.js");

function index(req, res){
    Profile.find({})
    .then(profiles => {
        console.log(profiles)
        res.render('dashboard/index',{
            profiles,
            title: "hi"
        })
    })
    .catch(err => console.error(err))
}

module.exports = {
    index
}