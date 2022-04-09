const express = require("express");

// Context from tutorial:
// causeRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /cause

const causeRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This will help convert the id from string to ObjectId for the _id
const ObjectId = require("mongodb").ObjectId;

// Help you get a list of all the causes.
causeRoutes.route("/cause").get(function (req, res) {
    let db_connect = dbo.getDb("causeDB");
    db_connect
      .collection("causes")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

// Help get a single cause by id
causeRoutes.route("/cause/:id").get(function (req, res){
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("causes")
        .findOne(myquery, function(err, result){
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you create a new cause.
causeRoutes.route("/cause/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      name: req.body.name,
      description: req.body.description,
      needs: req.body.needs,
    };
    db_connect.collection("causes").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

// This section will help you update a cause by id.
causeRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();  
  let myquery = { _id: ObjectId( req.params.id )};  
  let newvalues = {    
    $set: {      
      name: req.body.name,     
      description: req.body.description,
      needs: req.body.needs,  
  },  
};
});


// This section will help you delete a cause
causeRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("causes").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = causeRoutes;