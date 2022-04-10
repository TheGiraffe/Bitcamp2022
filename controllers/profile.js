const Profile = require("../models/profile.js");
const Skill = require("../models/skill.js");
const Career = require("../models/career.js");
const Cause = require("../models/cause.js");
const mongoose = require('mongoose')

function index(req, res){
    Profile.find({})
    .then(profiles => {
        console.log(profiles)
        res.render('profiles/index',{
            profiles,
            title: "hi"
        })
    })
    .catch(err => console.error(err))
}

function renderquiz(req, res){
    Promise.all([
        Cause.find({}),
        Skill.find({}),
        Career.find({}),
    ])
    
    .then(results => {
        res.render('profiles/quiz',{
            causes:  results[0],
            skills:  results[1],
            careers:  results[2],
            title: "Quiz"
        })
    })
    .catch(err => console.error(err))
}


function submitquiz(req,res){
    req.body.isOrg = !!req.body.isOrg;
    console.log(req.body.causes)
    Promise.all([
        Cause.find({"_id": req.body.causes}).catch(err => console.error(err)),
        Skill.find({"_id": String(req.body.skills)}).catch(err => console.error(err)),
        Skill.find({"_id": String(req.body.interests)}).catch(err => console.error(err)),
    ])
    .then( results =>{
        Profile.create({
            name: req.body.name,
            isOrg: req.body.isOrg,
            causes: results[0],
            skills: results[1],
            interests: results[2],
        })
        .then(res.redirect('profiles'))
    })
    .catch(err => console.error(err))
}

module.exports = {
    index,
    renderquiz,
    submitquiz
}