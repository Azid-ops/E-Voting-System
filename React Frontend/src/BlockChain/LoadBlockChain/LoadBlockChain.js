//Importing React, useState, useEffect
import React, { useState, useEffect } from 'react';

//Importing BrowserRouter,Switch,Route
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Importing Web3
import Web3 from 'web3';

//Importing Aux Functional Component
import Aux from '../../HOC/Auxiliary';

//Importing Account Functional Component
import Account from '../../Account/Pages/Account';

const LoadBlockChainData = () =>{
    //Creating Network State
    const [myNetwork,setNetwork] = useState("Please Select Server with your Wallet");

    //Creating Account State
    const [account,setAccount] = useState("Please Select Account with your Wallet");

    //Creating loadBlockChainData Function
    const loadBlockChainData = async () =>{

        //Creating Web3 object so that we can interact with Blockchain
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    
        //Getting Current User Network from Web3 object
        const network = await web3.eth.net.getNetworkType();

        //Getting Current User Account from Web3 object
        const account = await web3.eth.getAccounts();

        //Updating State of Network
        setNetwork(network);

        //Updating State of Account
        setAccount(account);

    }

    //Creating UseEffect Hook
    useEffect(()=>{

        //// note mutable flag
        let isMounted = true; 

        //Triggering loadBlockChainData function
        loadBlockChainData();

        // cleanup toggles value, if unmounted
        return () => { isMounted = false }; 

    });

    //Returning JSX
    return(
        <Aux>
            <BrowserRouter>
                <Switch>
                    <Route path="/instructions" exact>
                        <Account network={myNetwork} account={account}/>
                    </Route>

                    <Route path="/register">
                        <Account network={myNetwork} account={account}/>
                    </Route> 
                </Switch>
            </BrowserRouter>
        </Aux>
    )
}

//Exporting LoadBlockChainData Functional Component
export default LoadBlockChainData;