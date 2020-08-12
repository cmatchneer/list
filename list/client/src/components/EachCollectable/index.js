import React from "react";
import API from "../../utils/API";
import "./style.css";

class EachCollectable extends React.Component{
    constructor(props){
        super(props)
        
    }
    deleteCollectables = (id)=>{
        API.deleteCollectable(id).then(response =>{
            console.log(response)
            this.setState({changesMade:true})
        })
    }
    render(){
        return(<div >
            
                <div class="container">
                    <h5 class="title">{this.props.itemName}</h5>
                    <div class="box">
                    <p id="collect" class="item">{this.props.itemType}</p>
                    {this.props.limitedEdition?
                        <img class="itsLimited" src="https://previews.123rf.com/images/alexwhite/alexwhite1710/alexwhite171001332/88258700-limited-edition-red-glossy-round-web-icon-circle-isolated-internet-button-for-webdesign-and-smartpho.jpg"/>:console.log("place holder")}
                    </div>
                    <button class="delete" onClick={()=>this.deleteCollectables(this.props.id)}>Delete</button>
                </div>
            
            
        </div>)
    }
}
export default EachCollectable