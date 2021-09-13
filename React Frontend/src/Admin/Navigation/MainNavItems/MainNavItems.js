//Import React
import React from 'react';

//Importing Aux Functional Component
import Aux from '../../../HOC/Auxiliary';

//Importing NavigationItem Functional Component
import NavigationItem from '../NavigationItem/NavigationItem';

//Importing classes from MainNavItems.css File
import classes from './MainNavItems.css';


const MainNavItems = () =>{
    return(
        <Aux>
            <ul className={classes.NavigationItem}>
                <NavigationItem active link="/adminHome">
                    Candidate Details
                </NavigationItem>

                <NavigationItem link="/addCandidate">
                    Add Candidate
                </NavigationItem>

                <NavigationItem link="#">
                    Register
                </NavigationItem>

                <NavigationItem link="#">
                    Change State
                </NavigationItem>

                <NavigationItem link="#">
                    Logout
                </NavigationItem>
            </ul>
        </Aux>
    )
}

export default MainNavItems;