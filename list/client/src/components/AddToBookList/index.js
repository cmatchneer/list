import React from "react";
import API from "../../utils/API";
import "./style.css";

class AddToBookList extends React.Component{
    constructor(props){
        super(props)
       
        this.state={
            title:"",
            author:"",
            genre:"",
            finished:false
        }
    }
    addBook =()=>{
        let bookInfo ={
            title:this.state.title,
            author:this.state.author,
            genre:this.state.genre,
            finished:this.state.finished,
            userId:JSON.parse(localStorage.getItem("id")),
            ListTypeId:this.props.id
        }
        API.addBook(bookInfo).then(response =>{
            this.setState({title:""});
            this.setState({author:""});
            this.setState({genre:""});
        })
    }
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.addBook();
    };
    deleteList =(id)=>{
        API.deleteList(id).then(response=>{
            console.log(response)
        })
    }
    render(){
        
        return(<div>
             <form class="add_book">
                <div></div>
                    <p class="formTitle">Add a book</p>

                    <div>
                        <input
                            className="bookForm"
                            id="title"
                            type="text"
                            value={this.state.title}
                            placeholder="Book Title"
                            name="title"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            className="bookForm"
                            id="author"
                            type="text"
                            value={this.state.author}
                            placeholder="The Author"
                            name="author"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            className="bookForm"
                            id="genre"
                            type="text"
                            value={this.state.genre}
                            placeholder="The Genre"
                            name="genre"
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div class="buttons">
                        <button
                        onClick={this.handleFormSubmit}
                        type="submit"
                        className="addToList"
                        >
                        Add to List
                        </button>
                        
                        <button class="deleteList" onClick={()=>this.deleteList(this.props.id)}>Delete</button>
                    </div>
                </form>
                
        </div>)
    }
}
export default AddToBookList