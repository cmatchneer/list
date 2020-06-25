import React from "react";
import API from "../../utils/API";
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
            // console.log(response.data[0].Books[0])
            bookList.push(response.data[0].Books[0])
            this.setState({item:bookList})
        })
        
    }
   
    render(){
        // console.log(this.props.id)
        return(<div>
            
            {this.state.item.map(item =>{
                console.log(item);
                if(this.props.category === "Book List"){
                    return(<div>
                        <h4>{this.props.category}</h4>
                    </div>)
                }
            })}
        </div>)
    }
}
export default ListMaker;