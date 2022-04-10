const Cause = require("../models/cause.js");

function index(req, res){
    Cause.find({})
    .then(causes => {
        console.log(causes)
        res.render('causes/index',{
            causes,
            title: "hi"
        })
    })
    .catch(err => console.error(err))
}

function create(req, res){
    Cause.create(req.body)
    .then(cause => res.redirect(req.get('referer')))
    .catch(err => console.error(err))
}

module.exports = {
    index,
    create
}