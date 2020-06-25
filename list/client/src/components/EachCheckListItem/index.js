import React from "react";
import API from "../../utils/API";
import "./style.css";

class EachCheckListItem extends React.Component{
    constructor(props){
        super(props)
        
    }
    deleteItem = (id)=>{
        API.deleteFromCheckList(id).then(response =>{
            console.log(response)
            
        })
    }
    finishedItem =(id)=>{
        API.completedCheckListItem(id).then(response=>{
            console.log(response)
        })
    }
    render(){
        console.log(this.props);
        return(
            <div>
                {this.props.done? 
                <div>
                    <div style={{backgroundColor: "green"}}><p>{this.props.task}</p></div>
                    <button onClick={()=>this.deleteItem(this.props.id)}>Delete</button>
                </div>
                :
                <div>
                    <div style={{backgroundColor:"red"}}><p>{this.props.task}</p></div>
                    <button onClick={()=>this.finishedItem(this.props.id)}>Completed</button>
                    <button onClick={()=>this.deleteItem(this.props.id)}>Delete</button>
                </div>
                }
                
            </div>
        )
    }
}
export default EachCheckListItem