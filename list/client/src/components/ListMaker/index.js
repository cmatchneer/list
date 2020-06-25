import React from "react";
import API from "../../utils/API";
import AddToBookList from "../AddToBookList";
import EachBook from "../EachBook";
import AddToCheckList from "../AddToCheckList"
import EachCheckListItem from"../EachCheckListItem"
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
            case "Check List":
            this.checkList(this.props.id);
            break;
        }
    }
    bookList = (id)=>{
        let bookList = []
        API.getBookList(id).then(response =>{
            for(let i=0; i< response.data[0].Books.length;i++){
            bookList.push(response.data[0].Books[i])
            
        }
            this.setState({item:bookList})
        })
    }
    checkList =(id)=>{
        let checkList = []
        API.getCheckList(id).then(response =>{
            for(let i=0;i<response.data[0].CheckLists.length;i++){
                checkList.push(response.data[0].CheckLists[i])
            }
            this.setState({item:checkList})
        })
    }
   
    render(){
        
        if(this.props.category === "Book List"){
            return(
            <div>
                 <h4>{this.props.category}</h4>
                {this.state.item.map(item =>{
                    if(this.props.category === "Book List"){
                        return(<div>    
                                  <EachBook
                                    id={item.id}
                                    author={item.author}
                                    finished={item.finished}
                                    genre={item.genre}
                                    title={item.title}
                                   />
                                </div>)
                        }
                })}
                <AddToBookList id={this.props.id}/>
            </div>)
        }
        if(this.props.category === "Check List"){
            return(<div>
                <h4>{this.props.category}</h4>
                {this.state.item.map(item =>{
                    if(this.props.category === "Check List"){
                        return(<div>
                                <EachCheckListItem
                                    id={item.id}
                                    task={item.task}
                                    done={item.done}
                                />
                              
                                </div>)
                        }
                })}
                <AddToCheckList id={this.props.id}/>
            </div>)
        }
        return(<div>
        </div>)
    }
}
export default ListMaker;