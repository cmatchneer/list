import React, { Component } from "react";
// import Button from "../components/Button";
import API from "../utils/API";
import {BrowserRouter as Router, Redirect,Link} from 'react-router-dom';
import "./style.css";
class Login extends Component {
  
    render(){
        return(
            <div>
              <div className="landing">
                <h3 id="landingTitle">Welcome to Make A list App</h3>
                <p id="landingText">Hello there need to make and track and a list from a checklist to wish list to just helping
                  keep track of the stuff you have well then join us here at Make A List. Already part of our team then sign
                  in above
                </p>
                <Link id= "signUpLandingPage"className="link"to="/signup"><button id= "signUpLandingPage" >Sign Up</button> </Link>
              </div>
         
        
            </div>
        )
    }

}
export default Login;