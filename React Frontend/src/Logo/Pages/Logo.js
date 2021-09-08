//Importing React, Component
import React from 'react';

//Importing Aux Functional Component
import Aux from '../../HOC/Auxiliary';

//Import Image
import logo from '../../Assets/Images/logo.png';

// Import classes from Logo.css File
import classes from './Logo.css';

//Creating Logo Functional Component
const Logo = () =>{

    //Returning JSX
    return(
        <Aux>
            <div className={classes.Logo}>
                <img src={logo} alt="Logo"/>
            </div>
        </Aux>
    )
    
}

// Exporting Logo Functional Component
export default Logo;