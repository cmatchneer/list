import React from "react";
import API from "../../utils/API";
import "./style.css";

class AddToCheckList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            task:"",
            done:false
        }
    }
    addItem = ()=>{
        let newItem={
            task:this.state.task,
            done:this.state.done,
            userId:JSON.parse(localStorage.getItem("id")),
            ListTypeId:this.props.id
        }
        API.addToCheckList(newItem).then(response=>{
            console.log(response)
        })
    }
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
          [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.addItem();
    }
    deleteList =(id)=>{
        API.deleteList(id).then(response=>{
            console.log(response)
        })
    }
    render(){
        return(
            <div>
                 <form class="add_checkList"> 
                <div ></div>
                    <p class="formTitle">Add to Check List</p>
                    <div >
                        <input
                            className="checkForm"
                            id="task"
                            type="text"
                            value={this.state.task}
                            placeholder="The Task"
                            name="task"
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
                        SUBMIT
                        </button>
                        <button class="deleteList" onClick={()=>this.deleteList(this.props.id)}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddToCheckList