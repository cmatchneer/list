import React, { Component } from "react";
import {BrowserRouter as Router, Redirect,Link} from "react-router-dom";
import API from "../utils/API";
import "./style.css";


class CreateList extends Component {
    constructor(){
        super()
      
      }
    state = {
        catergory:"Book List",
        name:"",
        loggedIn:false
    };
    
    toggleSelected(id, key){
        console.log(this.state);
        // let temp = this.state[key]
        // temp[id].selected = !temp[id].selected
        // this.setState({
        //   [key]: temp
        // })
      }
    loginCheck(){
        let id =JSON.parse(localStorage.getItem("id"))
       
        if(id === null){
            this.setState({loggedIn:false})
        }
        else if(id){
            this.setState({loggedIn:true})
        }
    }
    componentDidMount = ()=>{
        this.getInitialState()
        this.loginCheck();
      }
      getInitialState = ()=>{
          this.setState({catergory:"Book List"})
          console.log(this.state.catergory);
      }
      componentDidUpdate = ()=>{
        console.log(this.state.catergory)
      }
      handleChange =(e)=>{
        this.setState({catergory:e.target.value});
      }
      handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const listInfo = {
            category: this.state.catergory,
            listName: this.state.name,
            UserId:JSON.parse(localStorage.getItem("id"))
        }
        API.createList(listInfo)
        .then(res => {
            this.setState({catergory:"Book List"})
            this.setState({name:""})
            
        }); 
    };
render(){
    return(
        <div>
            {this.state.loggedIn? 
            <div id="wholeListPage">
                <div className="col-md-12" >
                <h5 id="dropdownType">List Type:</h5>
                <select id="dropdownMenu" value={this.state.catergory} onChange={this.handleChange}>
                    <option className="dropdownItems" value="Book List">Book List</option>
                    <option value="Check List">Check List</option>
                    <option value="Collectables">Collectables</option>
                    <option value="Game List">Game List</option>
                    <option value="ShoppingList">Shopping List</option>
                    <option value="Wish List">Wish List</option>
                </select>
                
                
            <form>
           
                <div id="listHeader"><h5>List Name:</h5></div>

                    <div id="listForm">
                        <input
                            className="form-control"
                            id="name"
                            type="text"
                            value={this.state.emailAddress}
                            placeholder="List Name here"
                            name="name"
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div >
                        <button id="listButton" onClick={this.handleFormSubmit}type="submit"className="signup-Button">
                        SUBMIT
                        </button>
                    </div>
                    
                </form>
                </div>
            </div>
           : <p>need to login</p> }
        </div>
    )
}
}
export default CreateList;
