import React, { Component } from "react";
import Dropdown from "../components/Dropdown"
import {BrowserRouter as Router, Redirect,Link} from "react-router-dom";


class CreateList extends Component {
    constructor(props){
        super(props)
   
       
      }
    state = {
        category:[{
            id:1,
            type:"book list",
            selected: false,
            key: 'list'
        },{
            id:2,
            type:"check list",
            selected: false,
            key: 'list'
        },{
            id:3,
            type:"collectable",
            selected: false,
            key: 'list'
        },{
            id:4,
            type:"game list",
            selected: false,
            key: 'list'
        },{
            id:5,
            type:"shopping list",
            selected: false,
            key: 'list'
        },{
            id:6,
            type:"wish list",
            selected: false,
            key: 'list'
        }],
        loggedIn:false
        
    };
    toggleSelected(id, key){
        console.log(key)
        console.log(this.state.category);
        // let temp = this.state.category[key]
        // temp[id].selected = !temp[id].selected
        // this.setState({
        //   [key]: temp
        // })
      }
    loginCheck(){
        console.log(this.state.category);
        let id =JSON.parse(localStorage.getItem("id"))
       
        if(id === null){
            this.setState({loggedIn:false})
        }
        else if(id){
            this.setState({loggedIn:true})
        }
    }
    componentDidMount = ()=>{
        
        this.loginCheck();
      }
render(){
    return(
        <div>
            {this.state.loggedIn? 
            <div>
             <Dropdown
                title="Select category"
                list={this.state.category}
                toggleItem={this.toggleSelected}
            />
              
            </div>
           : <p>need to login</p> }
        </div>
    )
}
}
export default CreateList;
