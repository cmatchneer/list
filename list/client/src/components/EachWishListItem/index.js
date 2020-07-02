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
            {this.props.done?
                <div>
                    <h4>{this.props.name}</h4>
                    <p>{this.props.type}</p>
                    <p>{this.props.category}</p>
                    <p>Done</p>
                    <button onClick={()=>this.deleteItem(this.props.id)}>Delete</button>
                </div>
            :
                <div>
                    <h4>{this.props.name}</h4>
                    <p>{this.props.type}</p>
                    <p>{this.props.category}</p>
                    <p>not done</p>
                    <button onClick={()=>this.deleteItem(this.props.id)}>Delete</button>
                    <button onClick={()=>this.purchasedItem(this.props.id)}>Buy</button>
                </div>
            }

        </div>)
    }

}
export default EachWishListItem