//Importing Express
const express = require('express');

//Setting router
const router = express.Router();

//Importing User SignUp Schema
const Candidate = require('../../../Schemas/Candidate/Candidate');

//Routing to specific location
router.post('/blockchain', async (req,res,next)=>{

    //Requiring Email and Password from React
    const {name,age,party,qualification} = req.body;

    console.log(name);
    
    new Candidate({
        name,age,party,qualification
    }).save().then(success=>{
        //Sending Pass Response
        res.status(200);
        res.json();
    }).catch(err=>{
        console.log(err);
    });
});

//Exporting Router
module.exports = router;