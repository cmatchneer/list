import React from "react";
import API from "../../utils/API";
import "./style.css";

class EachShoppingItem extends React.Component{
    constructor(props){
        super(props)
        
    }
    deleteItem = (id) =>{
        API.deleteShoppingItem(id).then(response =>{
            console.log(response)
        })
    }
    purchasedItem = (id) =>{
       
        API.purchasedShoppingItem(id).then(response =>{
            console.log(response)
        })
    }
    render(){
        
        return(<div>
            {this.props.purchased?
                <div style={{backgroundColor: "green"}}>
                    <h4>{this.props.name}</h4>
                    <p>Bought</p>
                    <button onClick={()=>this.deleteItem(this.props.id)}>Delete</button>
                </div>
            :
                <div style={{backgroundColor: "red"}}>
                    <h4>{this.props.name}</h4>
                    <p>{this.props.amount}</p>
                    <button onClick={()=>this.deleteItem(this.props.id)}>Delete</button>
                    <button onClick={()=>this.purchasedItem(this.props.id)}>Owned</button>
                </div>
            }

        </div>)
    }

}
export default EachShoppingItem