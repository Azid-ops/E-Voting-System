//Importing Mongoose
const mongoose = require('mongoose');

//Creating Schema
const Schema = mongoose.Schema;

//Creating Schema Object
const Candidate = new Schema({

    //Setting Values and their type
    name:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },

    age:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },
    party:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },
    qualification:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    }
});

//Exporting SignUp Model
module.exports = mongoose.model("Candidate", Candidate);