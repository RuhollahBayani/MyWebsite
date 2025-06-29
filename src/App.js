import React from 'react';
import HomeScreen from './HomeScreen';
//import CounterButton from './CounterButton';
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import SignInScreen from "./SignInScreen";
import PricingScreen from "./PricingScreen";
import TemplateRoute from "./TemplateRoute";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import PrivateLayoutRoute from "./PrivateLayoutRoute";
import ProfileScreen from './ProfileScreen';
import PortfolioScreen from './PortfolioScreen';
import ContactmeScreen from './ContactmeScreen';
import { UserContext } from './UserContext';
//import { Redirect } from 'react-router-dom';


function App(props) {
  const [user, setUser] = React.useState({
    loggedIn: false,
    email: '',
    firstName: '',
    lastName: '',
    avatar: '',
    jsonwebtoken: '',
  });

  const updateUser = (userData) => setUser(userData);

  return (
    <UserContext.Provider value={{ ...user, updateUser }}>
    <React.Fragment>
    <BrowserRouter>
       <Switch>
        <TemplateRoute path="/" exact={true} component={HomeScreen}/>
        <TemplateRoute path="/pricing" exact={true} component={PricingScreen}/>
        <TemplateRoute path="/portfolio" exact={true} component={PortfolioScreen}/>
        <TemplateRoute path="/register" exact={true} component={RegistrationScreen}/>
        <TemplateRoute path="/contactme" exact={true} component={ContactmeScreen}/>
        <TemplateRoute path="/login" exact={true} component={LoginScreen}/>
        <PrivateLayoutRoute path="/profile" exact={true} component={ProfileScreen}/>
       </Switch>
      </BrowserRouter>
   </React.Fragment>
   </UserContext.Provider>
  );
}

export default App;
