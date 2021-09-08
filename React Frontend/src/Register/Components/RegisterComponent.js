//Importing React and useState
import React, {useState} from 'react';

//Importing useHistory
import { useHistory } from 'react-router-dom';

//Importing Aux Functional Component
import Aux from '../../HOC/Auxiliary';

//Importing Register Functional Component
import Register from '../Pages/Register';

//Creating RegisterComponent
const RegisterComponent = props =>{

    //Initializing history
    const history = useHistory();

    //Creating useState
    const [user,setUser] = useState({

        //Initialzing email equal to Empty String
        idCard:"",

        //Initialzing password equal to Empty String
        account:""
    });

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

    //Creating PostData function which will send requests to Node.js
    const PostData  = async (event) =>{

        //Cancelling default Events
        event.preventDefault();

        //Initializing user state value to email and passowrd
        const {idCard, account} = user;

        //Sending Request to Node.js using Fetch API
        const res = await fetch("/voting", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },

            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                idCard, account
            })
        });
    }

    //Returning JSX
    return(
        <Aux>
            <Register handleInput={handleInput} PostData={PostData} account={props.account} user={user}/>
        </Aux>
        
    )
}

// Exporting RegisterComponent Functional Component
export default RegisterComponent;