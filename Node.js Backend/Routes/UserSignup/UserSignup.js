//Importing Express
const express = require('express');

//Setting router
const router = express.Router();

//Importing User SignUp Schema
const SignupUser = require('../../Schemas/UserSignup');

//Routing to specific location
router.post('/Usersignup', async (req,res,next)=>{

    //Requiring Name,Email,Password,Re-Enter Password from React
    const {name,email,password,retype} = req.body;

    //Creating SignUp object
    const UserSignup = new SignupUser({
        name,email,password,retype
    });

    //Checking if Password is equal to Re-Type Password that user entered
    if(password === retype)
    {
        //Saving Details to Database
        UserSignup.save().then(result=>{

            //Sending Pass Response
            res.status(200);
            res.json();
        });
    }
    
});

//Exporting Router
module.exports = router;