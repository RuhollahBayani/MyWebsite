import { Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footer from "./Footer"

function TemplateRoute (props){
 return (
    <React.Fragment>
        <Header/>
        <Route 
        path={props.path}
        exact={props.exact}
        render={(routerProps) => <props.component {...routerProps} />}
        />
        <Footer/>
    </React.Fragment>
 )
}

export default TemplateRoute