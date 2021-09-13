//Importing Express
const express = require('express');

//Setting router
const router = express.Router();

//Importing User SignUp Schema
const Candidate = require('../../../Schemas/Candidate/Candidate');

//Routing to specific location
router.get('/candidates', async (req,res,next)=>{
    await Candidate.find().then(success =>{
        res.send(success);
    }).catch(err=>{
        console.log(err);
    });

    console.log("Getting data");
});

//Exporting Router
module.exports = router;
