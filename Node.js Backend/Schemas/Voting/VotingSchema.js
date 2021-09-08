//Importing Mongoose
const mongoose = require('mongoose');

//Creating Schema
const Schema = mongoose.Schema;

//Creating Schema Object
const VotingSchema = new Schema({

    //Setting Values and their type
    idCard:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },

    //Setting Values and their type
    account:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },

});

//Exporting SignUp Model
module.exports = mongoose.model("Voting", VotingSchema);