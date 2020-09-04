import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect,Link,NavLink } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import CreateList from "./pages/createList"
import API from "./utils/API"
import Jumbotron from "./components/JumboTron"
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      login:false
    }
  }
 componentDidMount(){
  
  console.log(this.state.login)
 }
  redirect(){
    
    
    if(!this.state.login ){
      console.log("profile test");
    
    this.setState({login:true})
    console.log(this.state.login)
    }
    if(this.state.login && localStorage.getItem("id")=== null){
      console.log("test");
      this.setState({login:false})
      console.log(this.state.login)
    }
    console.log(this.state.login)
  }
  render(){
    
    return(
      <div>
      
      <Router>
        
      <Jumbotron  redirect ={()=> this.redirect()} login={this.state.login} ></Jumbotron>
        <Switch>
        <Route exact path="/" component= {Login}/>
              <Route exact path="/signup" component={() => <SignUp redirect ={()=> this.redirect()} login={this.state.login} />} />
              <Route exact path ="/createList"component={() => <CreateList  flights={this.flights} />} />
              <Route exact path ="/profile"component={() => <Profile />} />
      </Switch>
        
      {this.state.login?<Redirect to="/profile" />:<Redirect to="/"/>}
    </Router>
    </div>
    )
  }
}

export default App;
