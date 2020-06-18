import React, { Component } from "react";
import API from "../utils/API";


class Profile extends Component {
    constructor(props){
        super(props)
    //   this.getLists = () => props.getLists(JSON.parse(localStorage.getItem("id")))
       
      }
    state = {
        email: "",
        lists: [],
        item:"",
        loggedIn:false
    };
    componentDidMount = ()=>{
        this.getLists(JSON.parse(localStorage.getItem("id")))
        
      }
      getLists =(id)=>{
          console.log(id);
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
          console.log(this.state.lists);
        })
        }
      }
render(){
    return(
        <div>
            {this.state.loggedIn?<p>need to login</p>
           
            :  <p>profile</p>}
        </div>
    )
}
}
export default Profile;
