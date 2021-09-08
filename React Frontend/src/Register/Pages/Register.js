//Importing React
import React from 'react';

//Importing Aux Functional Component
import Aux from '../../HOC/Auxiliary';

//Importing MainNav Functional Component
import MainNav from '../../Ui/Navigation/MainNav/MainNav';

//Importing classes from Register.css File
import classes from './Register.css';

//Creating Register Functional Component
const Register = props =>{
    //Returning JSX
    return(
        <Aux>
            <MainNav />
            <div className={classes.center}>
                <div className={classes.vote}>
                    <h1 className={classes.myVote}>E-Voting</h1>
                    <p className={classes.admin}>Voting Registration</p>
                    <hr />
                    <br />
                    <form method="POST">
                        <input 
                            value={props.user.idCard}
                            onChange={props.handleInput}
                            type="string" 
                            placeholder="Id-Card Number" 
                            name="idCard"
                        />

                        <br />
                        <br />

                        <input
                            value={props.user.account} 
                            onChange={props.handleInput}
                            type="string" 
                            name="account"
                        />
                    </form>
                    <br />
                    <br />
                    <button 
                        type="submit" 
                        className={classes.Login}
                        onClick={props.PostData}
                    >
                        Login
                    </button>
                    <br />
                    <br />
                </div>
                <div className={classes.center1}>
                    <div className={classes.subDiv}>
                        <p>One Time Registration for every Election</p>
                    </div>
                </div>
                <br />
            </div>
        </Aux>
    )
}

//Exporting Register Functional Component
export default Register;