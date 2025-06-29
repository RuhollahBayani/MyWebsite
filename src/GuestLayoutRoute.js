import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer"
import { UserContext } from './UserContext';

const GuestLayoutRoute = (props) => {
    const {loggedIn} = React.useContext(UserContext);
    
    if (!loggedIn) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <Route 
                path={props.path} 
                exact={props.exact} 
                render={(routerProps) => <props.component {...routerProps} />} 
                />
                <Footer />
            </div>
        );
    } else {
        return (
            <Redirect to="/" />
        );
    }
};

export default GuestLayoutRoute;