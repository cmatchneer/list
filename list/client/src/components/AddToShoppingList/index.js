import React from "react";
import API from "../../utils/API";
import "./style.css";

class AddToShoppingList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            itemName:"",
            amount:0,
            category:"shopping list",
            purchased:false
        }
    }
    item = ()=>{
        let newItem={
            itemName:this.state.itemName,
            category:this.state.category,
            amount:this.state.amount,
            purchased:this.state.purchased,
            userId:JSON.parse(localStorage.getItem("id")),
            ListTypeId:this.props.id
        }
        API.addToShoppingList(newItem).then(response =>{
            console.log(response);
            this.setState({itemName:""})
            this.setState({amount:0})
            this.setState({purchased:false})
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
        this.item();
    };
    deleteList =(id)=>{
        API.deleteList(id).then(response=>{
            console.log(response)
        })
    }
   
    render(){
        return(<div>
             <form class="add_shopping">
                
                <p id="shoppingTitle"class="formTitle">Add to Shopping List</p>

                    <div >
                        <input
                            className="shoppingForm"
                            id="itemName"
                            type="text"
                            value={this.state.itemName}
                            placeholder="Item Name"
                            name="itemName"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            className="shoppingForm"
                            id="amount"
                            type="number"
                            value={this.state.amount}
                            placeholder="Amount you Need"
                            name="amount"
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
        </div>)
    }

}
export default AddToShoppingList