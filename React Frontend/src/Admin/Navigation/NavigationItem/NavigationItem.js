//Importing React
import React from 'react';

//Importing Link
import { Link } from 'react-router-dom';

//Importing Aux Functional Component
import Aux from '../../../HOC/Auxiliary';

//Importing classes from NavigationItem.css File
import classes from './NavigationItem.css';

//Creating NavigationItem Functional Component
const NavigationItem = props =>{

    //Returning JSX
    return(
        <Aux>
            <li className={classes.NavigationItem}>
                <Link
                    to={props.link} 
                    className={
                    props.active 
                    ? 
                    classes.active 
                    :
                    null
                    }
                >
                    {props.children}
                </Link>
            </li>
        </Aux>
    ) 
};

// Exporting NavigationItem Functional Component
export default NavigationItem;