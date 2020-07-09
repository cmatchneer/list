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
    finishedBook =(id)=>{
        API.finishedBook(id).then(response=>{
            console.log(response)
            this.setState({changesMade:true})
        })
    }
   
    render(){
        console.log(this.props);
        return(<div>
        {this.props.finished?
        <div>
            <h4>{this.props.title}</h4>
            <p>{this.props.author}</p>
            <p>{this.props.genre}</p>
            <p>Already Read This</p>
            <button onClick={()=>this.deleteBook(this.props.id)}>Delete</button>
        </div>
        :
        <div>
            <h4>{this.props.title}</h4>
            <p>{this.props.author}</p>
            <p>{this.props.genre}</p>
            <button onClick={()=>this.finishedBook(this.props.id)}>Finished</button>
            <button onClick={()=>this.deleteBook(this.props.id)}>Delete</button>
        </div>
        }
        </div>)
    }
}
export default EachBook