//Importing React
import React from 'react';

//Importing Navlink
import { NavLink } from 'react-router-dom';

//Importing Aux Functional Component
import Aux from '../../../HOC/Auxiliary';

//Importing MainNav Functional Component
import MainNav from '../../Navigation/MainNav/MainNav';

//Importing AddCandidate.css File
import classes from './AddCandidate.css';

//Creating AddCandidate Functional Component
const AddCandidate = props =>{
    //Returning JSX
    return(
        <Aux>
            <MainNav />
            <div className={classes.center}>
                <div className={classes.vote}>
                    <h1 className={classes.myVote}>Add Candidates</h1>
                    <p className={classes.admin}>Only Admin</p>
                    <hr />
                    <br />
                    <form method="POST">
                        <input
                            value={props.user.name} 
                            onChange={props.handleInput}
                            type="text" 
                            placeholder="Name" 
                            name="name"
                        />

                        <br />
                        <br />

                        <input
                            value={props.user.party} 
                            onChange={props.handleInput}
                            type="string" 
                            placeholder="Party" 
                            name="party"
                        />

                        <br />
                        <br />

                        <input
                            value={props.user.age} 
                            onChange={props.handleInput}
                            type="number" 
                            placeholder="Age" 
                            name="age"
                        />

                        <br />
                        <br />

                        <input
                            value={props.user.occupation} 
                            onChange={props.handleInput}
                            type="string" 
                            placeholder="Qualification" 
                            name="qualification"
                        />

                        <br />
                        <br />

                    </form>
                    <button 
                        type="submit"
                        onClick={props.PostData}
                    >
                        Add
                    </button>
                    <br />
                    <br />
                </div>
                <div className={classes.center1}>
                    <div className={classes.subDiv}>
                        <br />
                        <p>If you have a problem logging in,<NavLink to="/" className={classes.anchor}>click here</NavLink> to email us</p>
                    </div>
                </div>
                <br />
            </div>
        </Aux>
    )   
   
}

export default AddCandidate;