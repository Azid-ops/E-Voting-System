//Importing React
import React from 'react';

//Importing BrowserRouter, Redirect,Route,Switch
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

//Importing AdminComponent Functional Component
import AdminComponent from '../Admin/Admin/AdminLogin/Components/AdminComponent';

//Importing Aux Functional Component
import Aux from '../HOC/Auxiliary';

//Importing IndexPage Functional Component
import Indexpage from '../Index/Pages/indexPage';

//Importing UserSignupComponent Functional Component
import UserSignupComponent from '../User/UserSignup/Components/UserSignupComponent';

//Importing User Functional Component
import User from '../../src/User/UserLogin/Components/UserLoginComponent';

//Importing Home Functional Component
import Home from '../Home/Pages/Home';

//Importing LoadBlockChainData Functional Component
import LoadBlockChainData from '../BlockChain/LoadBlockChain/LoadBlockChain';

//Importing AddCandidate Functional Component
import AddCandidateComponent from '../Admin/Candidate/Components/AddCandidateComponent';


import HomeComponent from '../Admin/Home/Components/HomeComponent';

//Creating App Functional Component
const App = () => {

  //Returning JSX
  return (
    <Aux>
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact>
            <Indexpage />
          </Route>

          <Route path = "/admin" exact>
            <AdminComponent />
          </Route>

          <Route path = "/instructions" exact>
            <Home />
          </Route>

          <Route path = "/user" exact>
            <User />
          </Route>

          <Route path = "/register" exact>
            <LoadBlockChainData />
          </Route>

          <Route path = "/userSignup" exact>
            <UserSignupComponent />
          </Route>

          <Route path = "/adminHome" exact>
            <HomeComponent />
          </Route>

          <Route path = "/addCandidate" exact>
            <AddCandidateComponent />
          </Route>
          
          <Route path = "/adminSignup" exact>
            <AddCandidateComponent />
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Aux>
  );
}

//Exporting Default App Functional Component
export default App;