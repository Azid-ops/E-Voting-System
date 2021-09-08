//Importing React
import React from 'react';

//Importing NavLink
import { NavLink } from 'react-router-dom';

//Importing Aux Component
import Aux from '../../HOC/Auxiliary';

//Importing HomeNav Component
import HomeNav from '../../Ui/Navigation/HomeNav';

//Importing classes from Admin.css
import classes from './Admin.css';

//Creating Admin Component
const Admin = props =>{

    //Returning JSX
    return(
        <Aux>
            <HomeNav />
            <div className={classes.center}>
                <div className={classes.vote}>
                    <h1 className={classes.myVote}>E-Voting</h1>
                    <p className={classes.admin}>Administrator Login</p>
                    <hr />
                    <br />
                    <form method="POST">
                        <input 
                            value={props.user.email}
                            onChange={props.handleInput}
                            type="email" 
                            placeholder="Email" 
                            name="email"
                        />

                        <br />
                        <br />

                        <input
                            value={props.user.password} 
                            onChange={props.handleInput}
                            type="password" 
                            placeholder="Password" 
                            name="password"
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
                        <br />
                        <NavLink to="/" className={classes.pass}>
                            Send Password?
                        </NavLink>
                        <p>If you have a problem logging in,<NavLink to="/">click here</NavLink> to email us</p>
                    </div>
                </div>
                
                <br />
                
            </div>
        </Aux>
    )
}

//Exporting Admin Functional Component
export default Admin;