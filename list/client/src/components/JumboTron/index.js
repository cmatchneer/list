import React from "react";
import {Link,Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";
import Dropdown from 'react-bootstrap/Dropdown'

class Jumbotron extends React.Component{
    constructor(props){
        super(props)
        this.getLists = () => props.getLists(JSON.parse(localStorage.getItem("id"))) 
      }
      state = {
        email: "",
        password:"",
        changePage:null,
        login:false,
      };
      redirect(){
        if(this.state.changePage === null){
        this.setState({changePage:"/profile"})
        }
        else{
            this.setState({changePage:"/"})
        }
      }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = event => {
        
        event.preventDefault();
        const credentials = {
            email:this.state.email,
            password:this.state.password
        }
       
        
        if (!credentials.email || !credentials.password) {
            return;
        }else{
          
        API.login(credentials).then(response =>{
            console.log(response);
            localStorage.clear();
            localStorage.setItem("id", response.data.id);
            this.redirect();
            this.loginCheck()
           
        })}
      }
      loginCheck = ()=>{
        if(localStorage.getItem("id")!== null && this.state.login === false){
          this.setState({backToLogin:null});
          this.setState({login:true})
          this.getLists(JSON.parse(localStorage.getItem("id")))
        }
      }
      componentDidMount = ()=>{
        this.loginCheck();
      }
    
      componentDidUpdate = ()=>{ 
        this.loginCheck();
      }
      logout = ()=>{
        localStorage.clear();
        // this.redirect();
        this.setState({login: false});
      }
      render(){
        
            return(
                
        <div className="jumbotron">
            <div className="row">
                <div className="col-md=4">
                    <ul className="lead">
                        <li><Link className="link"to="/">HomePage</Link></li>
                        <li><Link className="link"to="/signup">Sign Up</Link></li>
                        <li><Link className="link"to="/createList">Make A List</Link></li>
                        <li><Link className="link"to="/profile">Profile</Link></li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h1 className="display-4">List Maker</h1>
                </div>
      
                <div className="col-md-3">
                    {this.state.login?
                       <Link className="link" to="/"><button onClick={this.logout} id="logout">Log Out</button> </Link> 
                        :<form className="form-container">
                            <div className="form-group">
                            <label htmlFor="email"></label>
                            <input
                                onChange={this.handleInputChange}
                                value={this.state.email}
                                name="email"
                                type="text"
                                className="form-control"
                                placeholder="Enter Email"
                                id="email"
                            />
          
                            <label htmlFor="password"></label>
                            <input
                                onChange={this.handleInputChange}
                                value={this.state.password}
                                name="password"
                                type="text"
                                className="form-control"
                                placeholder="Enter Password"
                                id="password"
                            />
                           <button onClick={this.handleFormSubmit} className="login-button">Login</button>
                        </div>
                    </form>}
            </div>
        </div>
      </div>
    )
      }

}
export default Jumbotron;
