//Importing React
import React from 'react';

//Importing Aux Functional Component
import Aux from '../../HOC/Auxiliary';

//Importing Image
import Reliable from '../../Assets/Images/privacy.webp';

//Importing Image
import Key from '../../Assets/Images/key.svg';

//Importing Image
import Web from '../../Assets/Images/web.webp';

//Importing Image
import Voter from '../../Assets/Images/voter.svg'; 

//Importing Image
import Flexible from '../../Assets/Images/flexible.svg';

//Importing Image
import Election from '../../Assets/Images/election.svg';

//Importing Image
import Inner from '../../Assets/Images/inner.webp';

//Import classes from Features.css
import classes from './Features.css';

//Creating Feature Functional Component
const Features = () =>{

    //Returning JSX
    return(
        <Aux>
            <div className={classes.decision}>
                <h1 className={classes.make}>Make your decision-making process modern, secure, and effective.</h1>
                <p className={classes.make}>Upgrade from manually counting ballots to an online election system without sacrificing the integrity of your vote.</p>
            </div>
            
            <h1 className={classes.vote}>An online voting system with your needs at the forefront.</h1>
            <p className={classes.pooling}>From secure polling software to the management of complex virtual voting events - we offer a range of <br />online voting software options that exceed expectation.</p>

            <div className={classes.ReliableDiv}>
                <img className={classes.Reliable} src={Reliable} alt="Reliable"/>
                <h2>A reliable online voting tool for your group</h2>
                <p>Run online elections among your group for a single important event. Or manage consistent, recurring votes.</p>
            </div>

            <div className={classes.ReliableDiv}>
                <img className={classes.Reliable} src={Key} alt="Key"/>
                <h2>Key electronic voting features</h2>
                <p>Never again worry about people voting twice or other forms of vote manipulation. Get results instantly. Dive deeper into vote statistics.</p>
            </div>

            <div className={classes.ReliableDiv}>
                <img className={classes.Reliable} src={Web} alt="Web"/>
                <h2>Web app-based voting platform</h2>
                <p>Send eligible voters to a personalized voting website, no online voting app download required.</p>
            </div>

            <div className={classes.ReliableDiv}>
                <img className={classes.Reliable} src={Voter} alt="Voter"/>
                <h2>A pleasant way to cast votes</h2>
                <p>Your voters deserve a fair and easy to use voting website, accessible from any device.</p>
            </div>

            <div className={classes.ReliableDiv}>
                <img className={classes.Reliable} src={Flexible} alt="Flexible"/>
                <h2>Flexible implementation options</h2>
                <p>Choose how involved you want to be. Self-administer your vote or let us manage the voting experience.</p>
            </div>

            <div className={classes.ReliableDiv}>
                <img className={classes.Reliable} src={Election} alt="Election"/>
                <h2>Online election system integrations</h2>
                <p>Each vote is unique. Customization options include technical integrations, paper ballots, vote consulting, and more.</p>
            </div>
            <br />
            <br />
            <br />
            <div className={classes.decision}>
                <h1 className={classes.make}>Election software means robust security measures you can rely on.</h1>
                <div className={classes.inner}>
                    <p className={classes.online}>Our online election security measures protect you, your data, and your organization against risk.</p>
                    <li className={classes.safe}><strong>Safeguard organizational data.</strong><p className={classes.myP}>Our cybersecurity measures protect your sensitive data.</p></li>
                    <li className={classes.safe}><strong>Eliminate the risk of double voting and voter fraud.</strong><p className={classes.myP}>Closed voting events enable trustworthy decision making.</p></li>
                    <li className={classes.safe}><strong>Prove the integrity of your vote.</strong><p className={classes.myP}>Our robust auditing tools let you demonstrate an accountable voting process.</p></li>
                    <br />
                </div>
                <div className={classes.outer}>
                    <img className={classes.innerPic} src={Inner} alt="Inner"/>
                </div>
            </div>
        </Aux>
    )
}

//Exporting Features Functional Component
export default Features;