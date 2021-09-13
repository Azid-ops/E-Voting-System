import {React, useEffect, useState} from 'react';
import Home from '../Pages/Home';
import Aux from '../../../HOC/Auxiliary';
import Profile from '../../../Assets/Images/profile.png';
import classes from './HomeComponent.css';

const HomeComponent = () =>{

    const [checkData,setCheckData] = useState([]);

    const callData = async () =>{
        try
        {
            const res = await fetch('/candidates', {
                method: "GET",
                headers:{
                    Accept:"application/json",
                    
                    "Content-Type":"application/json "
                }
            });

            const data = await res.json();

            setCheckData(data);
        
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect(()=>{
        callData();
    });

    const myData = (dat) =>{
        if(dat.length === 0)
        {
            return(
                <h1 className={classes.preview}>No Data to Preview</h1>
            )
        }
        else
        {
            return dat.map((post)=>{
                return <div className={classes.data}key={post._id}>
                    <li className={classes.myList}>
                        <div className={classes.candi}>
                            <img className={classes.profile} src={Profile} alt="profile" />
                            <div>
                                <p>Name: {post.name}</p>
                                <br />
                                <p>Age: {post.age}</p>
                                <br />
                                <p>Party: {post.party}</p>
                                <br />
                                <p>Qualification: {post.qualification}</p>
                            </div>
                            <button className={classes.Election}>Delete Member</button>
                         
                        </div>
                        
                    </li>
                </div>
            })
        }
    }



    return(
        <Aux>
            <div className={classes.mainDiv}>
                <Home />
                {myData(checkData)}
            </div>
            
        </Aux>
    )
}

export default HomeComponent;