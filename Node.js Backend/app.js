//Importing Express
const express = require('express');

// Initializing Express 
const app = express();

//Importing mongoose
const mongoose = require('mongoose');

//Importing SignUp Route
const User = require('./Routes/UserSignup/UserSignup');

const Voting = require('./Routes/Voting/voting');

//Importing Path
const path = require('path');

//Importing Signin Route
const UserSignin = require('./Routes/UserSignin/UserSignin');

const Candidate =  require('./Routes/BlockChainData/CandidatesData/CandidatesData');

const getCandidates = require('./Routes/BlockChainData/GetCandidates/GetCandidates');
//Importing Body-Parser
app.use(express.json());

//Home Route
app.get('/', (req,res,next)=>{
    console.log("Node server is up to date");
});

//SignUp Route
app.use(User);

//SignIn Route
app.use(UserSignin);

//Voting Route
app.use(Voting);

//CanidiateData Route
app.use(Candidate)

app.use(getCandidates);

//Use for production Build
if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('final-year-project/build'));

    app.get('*', (req,res)=>{
       res.sendFile(path.resolve(__dirname, 'final-year-project', 'build', 'index.html'));
    })
}

//Decalring and Initializing Port Number
const port = process.env.port || 5000;

//Connecting to mongoose Database
mongoose.connect('mongodb+srv://Mahad:Mahad123@cluster0.btoqm.mongodb.net/fyp').then(()=>{
    
    //Listening to Port
    app.listen(port,()=>{
        console.log("Listening");
    });
    
}
//Checking For Errors
).catch(err=>{
    console.log(err);
});