import {React, useContext} from 'react';
import { Redirect, Route} from 'react-router-dom';
//import { useAuth } from './context/auth';
import Header from './Header';
import Footer from './Footer';
import {UserContext} from './UserContext';
import Box from "@mui/material/Box";

const PrivateLayoutRoute = (props) => {
    const { loggedInUser } = useContext(UserContext);
    if (loggedInUser) {
        return (<Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
         }}>
             <Header />
            <Route 
            path={props.path} 
            exact={props.exact} 
            render={(routerProps) => <props.component {...routerProps} />}
            />
            <Footer/>

        </Box>);
    } else {
        return (
            <Redirect to="/"/>
        )
    }
}

export default PrivateLayoutRoute;