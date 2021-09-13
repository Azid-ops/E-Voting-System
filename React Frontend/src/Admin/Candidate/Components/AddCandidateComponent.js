//Importing React
import React, {useState} from 'react';

import Aux from '../../../HOC/Auxiliary';

import AddCandidate from '../Pages/AddCandidate';

import Voting from '../../../voting';

//Importing Web3
import Web3 from 'web3';

const AddCandidateComponent = () => {

    const [user,setUser] = useState({

        //Initialzing name equal to Empty String
        name:"",
    
        //Initialzing email equal to Empty String
        age:"",
    
        //Initialzing password equal to Empty String
        party:"",
    
        //Initialzing retype equal to Empty String
        qualification:""
    });

    //Creating Web3 object so that we can interact with Blockchain
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

    //Creating Variable named name and value
    let name,value;

    

    //Creating handleInput Function
    const handleInput = (event) =>{

        //Getting name from Form and saving it into name variable
        name=event.target.name;

        //Getting value from Form and saving it into value variable
        value=event.target.value;

        //Changing State
        setUser({
            
            //Creating Copy of the state and giving value to each name
            ...user, [name]:value
        });
    }


    const postData = async (event) => {

        event.preventDefault();

        const myAccount = await web3.eth.getAccounts();
        console.log("Happening");
        await Voting.methods.addMembers(user.name,user.party,user.age,user.qualification).send({from:myAccount[0]}).then(success=>{
            console.log(success);
        });

        //Initializing user state value to email,name,password and retype
        const {
            name,
            age,
            party,
            qualification
        } = user;


        //Sending Request to Node.js using Fetch API
        const res = await fetch("/blockchain", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },

            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                name,age,party,qualification
            })
        });
    }

    return(
        <Aux>
            <AddCandidate handleInput={handleInput} user={user} PostData={postData}/>
        </Aux>
    )
}

export default AddCandidateComponent;