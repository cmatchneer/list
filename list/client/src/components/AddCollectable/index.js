import React from "react";
import API from "../../utils/API";
import "./style.css";

class AddCollectable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            itemName:"",
            itemType:"",
            limitedEdition:false
        }
    }
    collectable = ()=>{
        let newCollectable={
            itemName:this.state.itemName,
            itemType:this.state.itemType,
            limitedEdition:this.state.limitedEdition,
            userId:JSON.parse(localStorage.getItem("id")),
            ListTypeId:this.props.id
        }
        API.addCollectable(newCollectable).then(response =>{
            console.log(response);
            this.setState({itemName:""})
            this.setState({itemType:""})
            this.setState({limitedEdition:false})
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
        this.collectable();
    };
    handleCheck = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        console.log(this.state.limitedEdition);
    }
    deleteList =(id)=>{
        API.deleteList(id).then(response=>{
            console.log(response)
        })
    }
    render(){
        return(<div>
             <form class="add_collectable">
                
                    <p class="formCollectable">Add a Collectable</p>
                    <div >
                        <input
                            className="collectableForm"
                            id="itemName"
                            type="text"
                            value={this.state.itemName}
                            placeholder="Item Name"
                            name="itemName"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            className="collectableForm"
                            id="itemType"
                            type="text"
                            value={this.state.itemType}
                            placeholder="Type of Item"
                            name="itemType"
                            onChange={this.handleInputChange}
                            required
                        />
                    <div class="checkbox">
                        <p class="limitedTitle">Limited Edition</p>
                        <input
                          type="checkbox"
                          id="limitedEdition"
                          name="limitedEdition"
                          onChange={this.handleCheck}
                          checked={this.state.limitedEdition}
                          
                        />
                    </div>
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
        </div>)
    }

}
export default AddCollectable