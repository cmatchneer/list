import React from "react";
import API from "../../utils/API";
import "./style.css";

class EachWishListItem extends React.Component{
    constructor(props){
        super(props)
        
    }
    deleteItem = (id) =>{
        API.deleteFromWishList(id).then(response =>{
            console.log(response)
        })
    }
    purchasedItem = (id) =>{
        console.log(id);
        API.boughtFromWishList(id).then(response =>{
            console.log(response)
        })
    }
    render(){
        console.log(this.props)
        return(<div>
            
                <div class="container">
                    <h5 class="itemName">{this.props.name}</h5>
                    <p class="itemType">{this.props.type}</p>
                    <p class="itemCategory">{this.props.category}</p>
                    {this.props.done?
                    <div>
                        <p class="done">Owned</p>
                    </div>
                    :<div>
                        <p class="done">Not Owned</p>
                        <button id="buy"class="finish" onClick={()=>this.purchasedItem(this.props.id)}>Buy</button>
                    </div>}
                    <button id="deleteItem"class="delete" onClick={()=>this.deleteItem(this.props.id)}>Delete</button>
                </div>
            

        </div>)
    }

}
export default EachWishListItem