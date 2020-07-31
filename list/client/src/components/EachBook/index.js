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
        
        <div class="container">
            <h5 class="title">{this.props.title}</h5>
            <p class="author">{this.props.author}</p>
            <p class="genre">{this.props.genre}</p>
            {this.props.finished?
            <p class="done">Already Read This</p>
            : <div>
                <p class="done">To Be Read</p>
                <button class="finish" onClick={()=>this.finishedBook(this.props.id)}>Finished</button>
            </div>
            }
            <button class="delete" onClick={()=>this.deleteBook(this.props.id)}>Delete</button>
        </div>
        
        </div>)
    }
}
export default EachBook