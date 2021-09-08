//Importing React 
import React from 'react';

// Importing Aux Component
import Aux from '../../HOC/Auxiliary';

//Importing BrowserRouter, Switch, Route
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Importing RegisterComponent Functional Component
import RegisterComponent from '../../Register/Components/RegisterComponent';

//Importing Classes from Account.css File
import classes from './Account.css';

//Creating Account FunctionalComponent
const Account = (props) =>{

    //Returning JSX
    return(
        <Aux>
            <div className={classes.toCenter}>
                <div className={classes.userDetails}>
                    <p className={classes.network}>Network: {props.network}</p>
                    <p className={classes.account}>Account: {props.account}</p>
                </div>
            </div>

            <BrowserRouter>
                <Switch>
                    <Route path="/register">
                        <RegisterComponent account={props.account}/>
                    </Route> 
                </Switch>
            </BrowserRouter>
        </Aux>
    )
}

//Exporting Account Functional Component
export default Account;