import React from "react";
import {Link,Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";


class Jumbotron extends React.Component{
    constructor(props){
        super(props)
        
        this.redirect = () => props.redirect()
        
      }
      state = {
        email: "",
        password:"",
        login:false
      };
     
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
          
          this.setState({login:true})
         
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
        this.setState({email:""});
        this.setState({password:""})
        this.setState({login: false});
        this.redirect();
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
                      <button onClick={this.logout} id="logout">Log Out</button>
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
                    {this.props.changePage?<Redirect to="/"/>:<Redirect to={this.state.changePage} />}
            </div>
        </div>
      </div>
    )
      }

}
export default Jumbotron;
