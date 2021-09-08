//Importing React
import React from 'react';

//Importing Aux Functional Component
import Aux from '../../HOC/Auxiliary';

//Importing Information Functional Component
import Information from '../../Information/Pages/Information';

//Importing MainNav FunctionalComponent
import MainNav from '../../Ui/Navigation/MainNav/MainNav';

//Creating Home Functional Component
const Home = () =>{

    //Returning JSX Component
    return(
        <Aux>
            <MainNav />
            <Information />
        </Aux>
    )
}

export default Home;