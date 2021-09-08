//Importing Express
const express = require('express');

//Setting router
const router = express.Router();

//Importing Voting Schema
const VotingSchema = require('../../Schemas/Voting/VotingSchema');

//Routing to specific location
router.post('/voting', async (req,res,next)=>{

    //Requiring idCard and account
    const {idCard,account} = req.body;

    //Creating SignUp object
    const votingSchema = new VotingSchema({
        idCard,account
    });

    //Saving Details to Database
    votingSchema.save().then(result=>{
        //Sending Pass Response
        res.status(200);
        res.json();
    });
});

//Exporting Router
module.exports = router;