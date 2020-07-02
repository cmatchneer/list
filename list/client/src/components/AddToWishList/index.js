import React from "react";
import API from "../../utils/API";
import "./style.css";

class AddToWishList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            itemName:"",
            category:"",
            itemType:"",
            purchased:false
        }
    }
    wishListItem = ()=>{
        let newCollectable={
            itemName:this.state.itemName,
            category:this.state.category,
            itemType:this.state.itemType,
            purchased:this.state.purchased,
            userId:JSON.parse(localStorage.getItem("id")),
            ListTypeId:this.props.id
        }
        API.addToWishList(newCollectable).then(response =>{
            console.log(response);
            this.setState({itemName:""})
            this.setState({itemType:""})
            this.setState({category:""})
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
        this.wishListItem();
    };
    
    render(){
        return(<div>
             <form>
                <div className="sign-up-header">Add Your Wish List</div>

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
                            id="itemType"
                            type="text"
                            value={this.state.itemType}
                            placeholder="Type of Item"
                            name="itemType"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            className="form-control"
                            id="category"
                            type="text"
                            value={this.state.category}
                            placeholder="Category"
                            name="category"
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
export default AddToWishList