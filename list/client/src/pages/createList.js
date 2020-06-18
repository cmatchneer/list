import React, { Component } from "react";


class CreateList extends Component {
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
        <div>CreateList</div>
    )
}
}
export default CreateList;
