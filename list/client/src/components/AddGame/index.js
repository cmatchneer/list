import React from "react";
import API from "../../utils/API";
import "./style.css";

class AddGame extends React.Component{
  
    constructor(props){
        super(props)
        this.state={
            title:"",
            type:"",
            owned:false
        }
    }
    newGame = ()=>{
        let newGame={
            title:this.state.title,
            type:this.state.type,
            owned:this.state.owned,
            userId:JSON.parse(localStorage.getItem("id")),
            ListTypeId:this.props.id
        }
        API.addGame(newGame).then(response =>{
            console.log(response);
            this.setState({title:""})
            this.setState({type:""})
            this.setState({owned:false})
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
        this.newGame();
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
    render(){
        return(<div>
             <form>
                <div className="sign-up-header">Add a Game</div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            id="title"
                            type="text"
                            value={this.state.title}
                            placeholder="title"
                            name="title"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            className="form-control"
                            id="type"
                            type="text"
                            value={this.state.type}
                            placeholder="Type of Game"
                            name="type"
                            onChange={this.handleInputChange}
                            required
                        />
                        <p>Do You Own the Game</p>
                        <input
                          type="checkbox"
                          id="owned"
                          name="owned"
                          onChange={this.handleCheck}
                          checked={this.state.owned}
                          
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

export default AddGame