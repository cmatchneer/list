import React, { Component } from "react";
import API from "../utils/API";
import {BrowserRouter as Router, Redirect,Link} from "react-router-dom";
import ListMaker from "../components/ListMaker"


class Profile extends Component {
    constructor(props){
        super(props)
    
       
      }
    state = {
        email: "",
        lists: [],
        item:"",
        loggedIn:false
    };
    componentDidMount = ()=>{
        this.getLists(JSON.parse(localStorage.getItem("id")));
        this.loggedOut()
        
      }
      
      getLists =(id)=>{
          
        const userLists = []
        if(!id){
            this.setState({loggedIn:true})
        }else{
        API.userList(id).then(response =>{
          // console.log(response.data[0].ListTypes)
          for(let i = 0; i < response.data[0].ListTypes.length; i++){
            userLists.push(response.data[0].ListTypes[i]);
          }
          this.setState({lists:userLists})
          this.setState({loggedIn:false})
          
        })
        }
      }
      loggedOut = ()=>{
          if(!this.state.loggedIn){
              this.setState({lists:[]})
          }
      }
    
render(){
    return(
        <div>
            {this.state.loggedIn?<p>need to login</p>
           
            : 
            this.state.lists.map(list =>{
                    // console.log(list)
                    return(<div>
                        <h2>{list.listName}</h2>
                        <ListMaker
                            id={list.id}
                            category={list.category}
                            key={list.id}
                        />
                    </div>)
                })
            }
        </div>
    )
}
}
export default Profile;
