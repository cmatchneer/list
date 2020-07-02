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
      lists:[],
      login:false,
      backToLogin:null,
      changePage:null
    }
  }
  getLists =(id)=>{
    console.log(id);
   
      const userLists = []
      API.userList(id).then(response =>{
       console.log(response)
        for(let i = 0; i < response.data[0].ListTypes.length; i++){
         userLists.push(response.data[0].ListTypes[i]);
        }
        this.setState({lists:userLists})
        console.log(this.state.lists);
      })
    
  }
  redirect(){
    console.log(this.state.changePage);
    if(this.state.changePage === null){
    this.setState({changePage:"/profile"})
    }else{
      this.setState({changePage:null})
    }
  }
  render(){
    
    return(
      <div>
      
      <Router>
        
      <Jumbotron getLists={()=>this.getLists(JSON.parse(localStorage.getItem("id")))} redirect ={()=> this.redirect()}></Jumbotron>
        <Switch>
        <Route exact path="/" component= {Login}/>
              <Route exact path="/signup" component={() => <SignUp loginCheck={this.loginCheck} />} />
              <Route exact path ="/createList"component={() => <CreateList  flights={this.flights} />} />
              <Route exact path ="/profile"component={() => <Profile getLists={()=>this.getLists(JSON.parse(localStorage.getItem("id")))} />} />
      </Switch>
        
      {this.state.changePage?<Redirect to={this.state.changePage} />:<Redirect to="/"/>}
    </Router>
    </div>
    )
  }
}

export default App;
