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
      backToLogin:null
    }
  }
  getLists =(id)=>{
    const userLists = []
    API.userList(id).then(response =>{
      // console.log(response.data[0].ListTypes)
      for(let i = 0; i < response.data[0].ListTypes.length; i++){
        userLists.push(response.data[0].ListTypes[i]);
      }
      this.setState({lists:userLists})
      console.log(this.state.lists);
    })
  }
 


  render(){
    console.log(this.state.login);
    return(
      <div>
      
      <Router>
      <Jumbotron login={this.state.login} getLists={()=>this.getLists(JSON.parse(localStorage.getItem("id")))}></Jumbotron>
        <Switch>
        <Route exact path="/" component={() => <Login loginCheck={this.loginCheck} />} />
              <Route exact path="/signup" component={() => <SignUp loginCheck={this.loginCheck} />} />
              <Route exact path ="/createList"component={() => <CreateList  flights={this.flights} />} />
              <Route exact path ="/profile"component={() => <Profile  flights={this.flights} />} />
      </Switch>
      
    </Router>
    </div>
    )
  }
}

export default App;
