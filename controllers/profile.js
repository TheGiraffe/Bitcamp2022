const Profile = require("../models/profile.js");
const Skill = require("../models/skill.js");
const Career = require("../models/career.js");
const Cause = require("../models/cause.js");
const mongoose = require('mongoose')

function index(req, res){
    Promise.all([
        Profile.find({}),
        Cause.find({}),
        Skill.find({}),
        Career.find({}),
    ])
    
    .then(results => {
        res.render('profiles/index',{
            profiles: results[0],
            causes:  results[1],
            skills:  results[2],
            careers:  results[3],
            title: "What I Can Do Today"
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

    Profile.find()
    .populate('causes','name').populate('skills','name').populate('interests','name').exec((err, causes, skills, interests) => {
        console.log("Populated Profile " + causes + skills + interests);
      })
      
      res.redirect('profiles')


}

module.exports = {
    index,
    renderquiz,
    submitquiz
}