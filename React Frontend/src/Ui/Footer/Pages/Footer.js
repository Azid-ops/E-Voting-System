import React from 'react';

import Aux from '../../../HOC/Auxiliary';
import Foot from '../../../Assets/Images/foot.webp';

import classes from './Footer.css'
import { NavLink } from 'react-router-dom';
const Footer = () =>{
    return(
        <Aux>
            <div className={classes.container}>
                <img src={Foot} alt="Footer Pic" />
                <div className={classes.centered}>
                    <h1>View All Features & Capabilities</h1>
                    <br />
                    <NavLink to="/" className={classes.Learn}>
                        Learn More
                    </NavLink>
                </div>
            </div>
        </Aux>
    )
}
export default Footer;