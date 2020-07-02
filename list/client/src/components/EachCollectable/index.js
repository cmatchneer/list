import React from "react";
import API from "../../utils/API";
import "./style.css";

class EachCollectable extends React.Component{
    constructor(props){
        super(props)
        
    }
    deleteCollectables = (id)=>{
        API.deleteCollectable(id).then(response =>{
            console.log(response)
            this.setState({changesMade:true})
        })
    }
    render(){
        return(<div>
            {this.props.limitedEdition?
                <div>
                    <h4>{this.props.itemName}</h4>
                    <p>{this.props.itemType}</p>
                    <p>Limited Edition</p>
                    <button onClick={()=>this.deleteCollectables(this.props.id)}>Delete</button>
                </div>
            :
                <div>
                    <h4>{this.props.itemName}</h4>
                    <p>{this.props.itemType}</p>
                    <button onClick={()=>this.deleteCollectables(this.props.id)}>Delete</button>
                </div>
            }
        </div>)
    }
}
export default EachCollectable