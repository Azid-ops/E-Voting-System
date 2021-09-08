//Impoorting React
import React from 'react';

//Importing Aux Functional Component
import Aux from '../../HOC/Auxiliary';

//Importing HomeNav Functional Component
import HomeNav from '../../Ui/Navigation/HomeNav';

//Importing Image
import Vote from '../../Assets/Images/e-vote.jpg';

//Importing Features Functional Component
import Features from './Features';

//Import Footer Functional Component
import Footer from '../../Ui/Footer/Pages/Footer';

//Import IndexPage.css File
import './indexPage.css'

//Creating indexpage Functional Component
const indexpage = () =>{

    //Returning JSX
    return(
        <Aux>
            <HomeNav />
            <img src={Vote} alt="voting" />
            <Features />
            <Footer />
        </Aux>
    )
}

//Exporting indexpage Functional Component
export default indexpage;