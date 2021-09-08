//import React
import React from 'react';

//Importing Aux Functional Component
import Aux from '../../../HOC/Auxiliary';

//Importing NavigationItem Functional Component
import NavigationItem from '../NavigationItem/NavigationItem';

//Importing classes from NavigationItem.css File
import classes from './NavigationItems.css';

//Creating NavigationItems Functional Component
const NavigationItems = () =>{

    //Returning JSX
    return(
        <Aux>
            <ul className={classes.NavigationItem}>
                <NavigationItem active link="/user">
                    User Login
                </NavigationItem>

                <NavigationItem link="/admin">
                    Admin Login
                </NavigationItem>
            </ul>
        </Aux>
    )
}

//Exporting Navigationitems Functional Component
export default NavigationItems;