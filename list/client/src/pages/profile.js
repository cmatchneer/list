import React, { Component } from "react";


class Profile extends Component {
    constructor(props){
        super(props)
    //    this.flights = () => props.flights(localStorage.getItem("id")) 
       
      }
    state = {
        email: "",
        flights: [],
        item:""
    };
render(){
    return(
        <div>profile</div>
    )
}
}
export default Profile;
