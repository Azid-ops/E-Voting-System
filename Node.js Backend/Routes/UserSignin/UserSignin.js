//Importing Express
const express = require('express');

//Setting router
const router = express.Router();

//Importing User SignUp Schema
const User = require('../../Schemas/UserSignup');

//Routing to specific location
router.use('/Usersignin', async (req,res,next)=>{

    //Requiring Email and Password from React
    const {email,password} = req.body;

    //Checking if Rntered Email exists or no
    User.findOne({email:email}).then(user=>{
        if(user)
        {
            //Checking if password is correct or no
            if(user.password === password)
            {
                //Returning Pass Status
                res.status(200);
                res.json();
            } 
        }
    });
    
});

//Exporting Router
module.exports = router;