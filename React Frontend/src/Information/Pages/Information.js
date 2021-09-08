//Importing React
import React from 'react';

//Importing NavLink
import { NavLink } from 'react-router-dom';

//Importing LoadBlockChainData Functional Component
import LoadBlockChainData from '../../BlockChain/LoadBlockChain/LoadBlockChain';

//Importing Aux Functional Component
import Aux from '../../HOC/Auxiliary';

//Importing classes from Information.css File
import classes from './Information.css';

//Create Information Functional Component
const Information = (props) =>{

    //Returning JSX
    return(
        <Aux>
            <LoadBlockChainData />
            <div className={classes.information}>
                <div className={classes.innerDiv}>
                    <h1 className={classes.info}>Instructions</h1>
                    <div className={classes.content}>
                        <h3>Welcome</h3>
                        <p>These are few Guidelines for User:</p>
                        <p>1. Voter Registration</p>
                        <ul>
                            <li>For Casting the vote the voter needs to regiester himself.For this registration purpose, the user will be a provided a voter registration form on this website.</li>
                            <li>The Voter can only in registration phase.After the registration is over the user cannot register adn thus will not be able to vote.</li>
                            <li>For Registration, the user will have to enter this national card number and the account address which the user will be using for voting purposes.</li>
                            <li>At the first stage the user's age will be checked.If is user is 18 or above 18 years of age then only he is eligible to vote.</li>
                            <li>The second is email verification.The stage is required to validate the voter itself.After entering the national id card number and succesfull age verification.</li>                        
                            <li>After successfull email registration user will be able to vote.</li>
                        </ul>
                        <p>2. Voting Process</p>
                        <ul>
                            <li>Overall, voting process is divided into three phases. All of which will be initialized and terminated by the admin.User have to participate in the process 
                            <br/> according to curent phase.</li>
                            <br />
                        </ul>
                        <p>1. Registration Phase:</p>
                        <ul>
                            <li>During the phase the registration of users(which are going to cast the votes) will be carried out.</li>
                        </ul>
                        <br />
                        <p>2. Voting Phase:</p>
                        <ul>
                            <li>After initialization of voting phase from the admin,user can cast the vote in voting section by clicking Vote button.</li>
                            <li>Then the transaction will be initiated and after succesfull transaction vote will be casted.</li>
                            <li>Same User will not be able to vote twice.</li>
                        </ul>
                        <br />
                        <p>3. Result Phase:</p>
                        <ul>
                            <li>This is the final stage of whole voting process during which the result will of election will be displayed at "Result" section.</li>
                        </ul>
                        <br />
                        <br />
                        <NavLink className={classes.next} to="/register">Next</NavLink>
                    </div>    
                </div>
            </div>
            <br />
        </Aux>
    )
}

//Exporting Inforamtion Functional Component
export default Information;