//Importing React and useState
import React, {useState} from 'react';

//Importing useHistory
import { useHistory } from 'react-router-dom';

//Importing Aux Functional Component
import Aux from '../../../HOC/Auxiliary';

//Import UserLogin Functional Component
import UserLogin from '../Pages/UserLogin';

//Creating UserLoginComponent
const UserLoginComponent = () =>{

    //Initializing history
    const history = useHistory();

    //Creating useState
    const [user,setUser] = useState({

        //Initialzing email equal to Empty String
        email:"",

        //Initialzing password equal to Empty String
        password:""
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
        const {email, password} = user;

        //Sending Request to Node.js using Fetch API
        const res = await fetch("/Usersignin", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },

            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                email, password
            })
        });
        
        //Checking if response is equal to 200
        if(res.status === 200)
        {
            //Move to isntructions link
            history.push("/instructions");

        }
    }

    //Returning JSX
    return(
        <Aux>
            <UserLogin user={user} handleInput={handleInput} PostData={PostData} />
        </Aux>
        
    )
}

// Exporting UserLoginComponent Functional Component
export default UserLoginComponent;