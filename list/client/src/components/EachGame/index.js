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
            {this.props.owned?
                <div>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.type}</p>
                    <p>Owned</p>
                    <button onClick={()=>this.deleteGame(this.props.id)}>Delete</button>
                </div>
            :
                <div>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.type}</p>
                    <button onClick={()=>this.deleteGame(this.props.id)}>Delete</button>
                    <button onClick={()=>this.purchasedGame(this.props.id)}>Owned</button>
                </div>
            }

        </div>)
    }

}
export default EachGame