//Importing React
import React from 'react';

//Importing NavLink and Link
import { NavLink, Link } from 'react-router-dom';

//Importing Aux Functional Component
import Aux from '../../../HOC/Auxiliary';

//Importing Footer Functional Component
import Footer from '../../../Ui/Footer/Pages/Footer';

//Importing HomeNav Functional Component
import HomeNav from '../../../Ui/Navigation/HomeNav';

//Importing classes from UserLogin.css File
import classes from './UserLogin.css';

//Creating UserLogin Functional Component
const UserLogin = props =>{

    //Returning JSX
    return(
        <Aux>
            <HomeNav />
            <div className={classes.center}>
                <div className={classes.vote}>
                    <h1 className={classes.myVote}>E-Voting</h1>
                    <p className={classes.admin}>User Login</p>
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
                    <Link 
                        to="#"
                        type="submit" 
                        className={classes.Login}
                        onClick={props.PostData}
                    >
                        Login
                    </Link>
                    <br />
                    <br />
                </div>
                <div className={classes.center1}>
                    <div className={classes.subDiv}>
                        <br />
                        <NavLink to="/" className={classes.pass}>
                            Send Password?
                        </NavLink>
                        <br />
                        <p className={classes.pass}>
                            New to E-Voting?
                            <NavLink 
                                to="/userSignup"
                                className={classes.anchor}
                            >
                                Signup
                            </NavLink>
                        </p>
                        <p>If you have a problem logging in,<NavLink to="/" className={classes.anchor}>click here</NavLink> to email us</p>
                    </div>
                </div>
                <br />
            </div>
            <Footer />
        </Aux>
    )
}

//Exporting UserLogin Functional Component
export default UserLogin;