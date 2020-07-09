import React, { Component } from "react";
import {BrowserRouter as Router, Redirect,Link} from "react-router-dom";
import API from "../utils/API";

class Signup extends Component {
    constructor(props){
        super(props)
        this.redirect = () => props.redirect()
      }
    state = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        signIn:false
    };
    signedIn = ()=> {
        let id =JSON.parse(localStorage.getItem("id"))

        if(id && this.state.signIn){
            this.setState({signIn:false})
          
        }
        
    }
    loginCheck(){
        console.log(this.props);
        let id =JSON.parse(localStorage.getItem("id"))
       
        // if(id === null && this.props.login){
        //     this.setState({signIn:false})
        // }
        // else 
        if(id && !this.props.login){
            // this.setState({signIn:true})
            this.redirect()
        }
    }
    componentDidMount = ()=>{
        this.loginCheck();
      }
    
      componentDidUpdate = ()=>{ 
        this.loginCheck();
      }
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const loginInfo = {
            email: this.state.emailAddress,
            password: this.state.password
        }
        API.signUp(loginInfo)
        .then(res => {
            localStorage.clear();
            localStorage.setItem("id", res.data.id);
            this.setState({signIn:true})
            this.redirect();
        }); 
    };
   
      render() {
          console.log(this.props.login)
        return(
            <div className="sign-up-container">
            {this.props.login?<div>
               <h2>Welcome to the Make a List App lets get you making lists</h2>
               <Link id= "signUpLandingPage"className="link"to="/createList"> <button onClick = {this.signedIn} id= "signUpLandingPage" >Sign Up</button> </Link>
               </div>
               :
                <form>
                <div className="sign-up-header">SIGN UP</div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            id="email-address"
                            type="text"
                            value={this.state.emailAddress}
                            placeholder="Email Address"
                            name="emailAddress"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            className="form-control"
                            id="password"
                            type="password"
                            value={this.state.password}
                            placeholder="********"
                            name="password"
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="pull-right">
                        <button
                        onClick={this.handleFormSubmit}
                        type="submit"
                        className="signup-Button"
                        >
                        SUBMIT
                        </button>
                    </div>
                </form>
               
               
               }
            </div>
          )
      }
}
export default Signup;