import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Login from "./pages/login";
// import SignUp from "./pages/signup";
// import Profile from "./pages/profile";
// import CreateList from "./pages/createList"
import API from "./utils/API"
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
  loginCheck = ()=>{
    if(localStorage.getItem("id")!== null && this.state.login === false){
      this.setState({backToLogin:null});
      this.setState({login:true})
      this.getLists(JSON.parse(localStorage.getItem("id")))
    }
  }
  componentDidMount = ()=>{
    // this.loginCheck();
  }

  componentDidUpdate = ()=>{ 
    // this.getLists();
  }

  render(){
    return(
      
      <Router>
        <div>hello
        <Switch>
        <Route exact path="/" component={() => <Login loginCheck={this.loginCheck} />} />
              {/* <Route exact path="/signup" component={() => <SignUp loginCheck={this.loginCheck} />} />
              <Route exact path ="/createList"component={() => <CreateList  flights={this.flights} />} />
              <Route exact path ="/profile"component={() => <Profile  flights={this.flights} />} /> */}
      </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
