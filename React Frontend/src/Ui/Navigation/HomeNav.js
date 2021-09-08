//Importing React
import React from 'react';

//Importing Link
import { Link } from 'react-router-dom';

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
                <Link to="/" className={classes.brand}>
                    <div>E-Voting</div>
                </Link>
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