import React from "react";
import API from "../../utils/API";
import "./style.css";

class EachBook extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    deleteBook = (id)=>{
        API.deleteBook(id).then(response =>{
            console.log(response)
            this.setState({changesMade:true})
        })
    }
    purchasedBook =(id)=>{
        API.purchasedBook(id).then(response=>{
            console.log(response)
            this.setState({changesMade:true})
        })
    }
   
    render(){
        console.log(this.props);
        return(<div>
            <h4>{this.props.title}</h4>
            <p>{this.props.author}</p>
            <p>{this.props.genre}</p>
            <button onClick={()=>this.purchasedBook(this.props.id)}>Purchased</button>
            <button onClick={()=>this.deleteBook(this.props.id)}>Delete</button>
        </div>)
    }
}
export default EachBook