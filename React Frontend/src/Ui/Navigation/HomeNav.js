//Importing React
import React from 'react';

//Importing Aux Functional Component
import Aux from '../../HOC/Auxiliary';

//Importing Logo Functional Component
import Logo from '../../Logo/Pages/Logo';

//Importing classes from HomeNav.css File
import classes from './HomeNav.css';

//Importing NaviagtionItems Functional Component
import NavigationItems from './NavigationItems/NavigationItems';

//Creating HomeNav Functional Component
const HomeNav = () =>{

    //Returning JSX
    return(
        <Aux>
            <header className={classes.Toolbar}>
                <Logo />
                <nav>
                    <NavigationItems /> 
                </nav>
            </header>
        </Aux>
    )
}

//Exporting HomeNav Functional Component
export default HomeNav;