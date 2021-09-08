//Importing React
import React from 'react';

//Importing MainNavItems Functional Component
import MainNavItems from '../MainNavItems/MainNavItems';

//Importing Aux Functional Component
import Aux from '../../../HOC/Auxiliary';

//Imporitng Logo Functional Component
import Logo from '../../../Logo/Pages/Logo';

//Importing classes from MainNav.css File
import classes from './MainNav.css';

//Creating MainNav Functional Component
const MainNav = () =>{

    //Returning JSX
    return(
        <Aux>
            <header className={classes.Toolbar}>
                <Logo />
                <nav>
                    <MainNavItems />
                </nav>
            </header>
        </Aux>
    )
}

//Exporting MainNav Functional Component
export default MainNav;