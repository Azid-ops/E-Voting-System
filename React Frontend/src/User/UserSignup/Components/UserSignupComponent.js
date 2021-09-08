//Importing React and useState
import React, {useState} from 'react';

//Importing UsersSignup Functional Component
import UserSignup from '../Pages/UserSignup';

//Importing useHistory
import { useHistory } from 'react-router-dom';

//Importing Aux Functional Component
import Aux from '../../../HOC/Auxiliary';

//Creating UserSignupComponent
const UserSignupComponent = () =>{

    //Initializing history
    const history = useHistory();

    //Creating useState
    const [user,setUser] = useState({

        //Initialzing name equal to Empty String
        name:"",

        //Initialzing email equal to Empty String
        email:"",

        //Initialzing password equal to Empty String
        password:"",

        //Initialzing retype equal to Empty String
        retype:""
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

        //Initializing user state value to email,name,password and retype
        const {name, email, password, retype} = user;

        //Sending Request to Node.js using Fetch API
        const res = await fetch("/Usersignup", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },

            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                name,email, password,retype
            })
        });
        
        //Checking if response is equal to 200
        if(res.status === 200)
        {
            //Move to isntructions link
            history.push("/user")
        }
    }

    //Returning JSX
    return(
        <Aux>
            <UserSignup user={user} handleInput={handleInput} PostData={PostData}/>
        </Aux>
        
    )
}

//Exporting UserSignupComponent Functional Component
export default UserSignupComponent;