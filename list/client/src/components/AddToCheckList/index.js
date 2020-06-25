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
    render(){
        return(
            <div>
                 <form>
                <div className="sign-up-header">Add to Check List</div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            id="task"
                            type="text"
                            value={this.state.task}
                            placeholder="The Task"
                            name="task"
                            onChange={this.handleInputChange}
                            required
                        />
                     
                    </div>
                    <div className="pull-right">
                        <button
                        onClick={this.handleFormSubmit}
                        type="submit"
                        className="signup-Button"
                        >
                        SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddToCheckList