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
                <div class="noneActive">
                    <p class="shoppingName">{this.props.name}</p>
                    <button class="itemDelete" onClick={()=>this.deleteItem(this.props.id)}>Delete</button>
                </div>
            :
                <div class="active">
                    <p class="shoppingName">{this.props.name}</p>
                    <p class="shoppingAmount">{this.props.amount}</p>
                    <div id="shoppingButtons" class="buttons">
                     <button class="itemDelete" onClick={()=>this.deleteItem(this.props.id)}>Delete</button>
                    <button class="shoopingItemPurchase"onClick={()=>this.purchasedItem(this.props.id)}>Done</button>
                </div>
                </div>
                
            }

        </div>)
    }

}
export default EachShoppingItem