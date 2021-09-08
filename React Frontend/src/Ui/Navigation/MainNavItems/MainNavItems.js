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
                <NavigationItem active link="instructions">
                    Instructions
                </NavigationItem>

                <NavigationItem link="register">
                    Register
                </NavigationItem>

                <NavigationItem link="#">
                    Voting
                </NavigationItem>

                <NavigationItem link="#">
                    Result
                </NavigationItem>

                <NavigationItem link="#">
                    About
                </NavigationItem>
            </ul>
        </Aux>
    )
}

export default MainNavItems;