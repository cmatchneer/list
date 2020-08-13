import React from "react";
import API from "../../utils/API";
import "./style.css";

class EachGame extends React.Component{
    constructor(props){
        super(props)
        
    }
    deleteGame = (id) =>{
        API.deleteGame(id).then(response =>{
            console.log(response)
        })
    }
    purchasedGame = (id) =>{
        console.log(id);
        API.purchasedGame(id).then(response =>{
            console.log(response)
        })
    }
    render(){
        console.log(this.props)
        return(<div>
            
                <div class="container">
                    <h5 class="title">{this.props.title}</h5>
                    <p class="type">{this.props.type}</p>
                    {this.props.owned?
                    <div>
                        <p class="done">Owned</p>
                        <button class="finish" onClick={()=>this.purchasedGame(this.props.id)}>Owned</button>
                    </div>
                    :
                    console.log("holding")
                    }
                    <button class="delete" onClick={()=>this.deleteGame(this.props.id)}>Delete</button>
                </div>
        </div>)
    }

}
export default EachGame