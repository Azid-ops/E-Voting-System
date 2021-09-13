//Importing React
import React from 'react';

//Importing Aux Functional Component
import Aux from '../../../HOC/Auxiliary';

//Importing MainNav Functional Component
import MainNav from '../../Navigation/MainNav/MainNav';

//Importing Home.css File
import classes from './Home.css';

//Creating Home Functional Component
const Home = (props,event) =>{
    //Returning JSX
    return(
        <Aux>
            <MainNav />
        </Aux>
    )
}

export default Home;