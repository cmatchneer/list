import React from "react";
import API from "../../utils/API";
import AddToBookList from "../AddToBookList";
import "./style.css";

class ListMaker extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            item:[]
        }

    }
    componentDidMount=()=>{
        this.createList(this.props.category)
    }
    createList = (category)=>{
        switch(category){
            case "Book List":
            this.bookList(this.props.id)
            break;
        }
        
    }
    bookList = (id)=>{
        
        let bookList = []
        API.getBookList(id).then(response =>{
            for(let i=0; i< response.data[0].Books.length;i++){
            console.log(response.data[0].Books)
            bookList.push(response.data[0].Books[i])
        }
            this.setState({item:bookList})
        })
        
    }
   
    render(){
        console.log(this.props.id)
        if(this.props.category === "Book List"){
            return(<div>
                 
                {this.state.item.map(item =>{
                // console.log(item.id);
                    if(this.props.category === "Book List"){
                        return(<div>
                            <h4>{this.props.category}</h4>
                       
                        </div>)
                        }
                })}
                <AddToBookList id={this.props.id}/>
            </div>)
        }
        return(<div>
        </div>)
    }
}
export default ListMaker;