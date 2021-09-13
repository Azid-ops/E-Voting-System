//Importing React and UseState
import React, {useState} from 'react';

//Importing Admin Functional Component
import Admin from '../Pages/Admin';

//Creating AdminComponent Functional Component
const AdminComponent = () =>{

    //Creating User useState
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

        //Initializing user state value to email and password
        const {email, password} = user;

        //Sending Request to Node.js using Fetch API
        await fetch("/signup", {

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
    }

    //Returning JSX
    return(
        <Admin user={user} handleInput={handleInput} PostData={PostData}/>
    )
}

//Exporting AdminComponent Functional Component
export default AdminComponent;