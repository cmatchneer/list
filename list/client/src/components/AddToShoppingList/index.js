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
   
    render(){
        return(<div>
             <form>
                <div className="sign-up-header">Add to Shopping List</div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            id="itemName"
                            type="text"
                            value={this.state.itemName}
                            placeholder="Item Name"
                            name="itemName"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            className="form-control"
                            id="amount"
                            type="number"
                            value={this.state.amount}
                            placeholder="Amount you Need"
                            name="amount"
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
        </div>)
    }

}
export default AddToShoppingList