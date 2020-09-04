import React from "react";
import API from "../../utils/API";
import AddToBookList from "../AddToBookList";
import EachBook from "../EachBook";
import AddToCheckList from "../AddToCheckList"
import EachCheckListItem from"../EachCheckListItem"
import AddCollectable from "../AddCollectable"
import EachCollectable from"../EachCollectable"
import AddGame from "../AddGame"
import EachGame from "../EachGame"
import AddToShoppingList from "../AddToShoppingList"
import EachShoppingItem from "../EachShoppingItem"
import AddToWishList from "../AddToWishList"
import EachWishListItem from "../EachWishListItem"
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
    componentDidUpdate =()=>{
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
            case "Collectables":
            this.collectables(this.props.id)
            break;
            case "Game List":
            this.gameList(this.props.id)
            break;
            case "ShoppingList":
            this.shoppingList(this.props.id)
            break;
            case "Wish List":
            this.wishList(this.props.id)
            break;
        }
    }
    wishList(id){
        let wishList =[]
        API.getWishList(id).then(response=>{
            for(let i=0;i<response.data[0].WishLists.length;i++){
                wishList.push(response.data[0].WishLists[i])
            }
            this.setState({item:wishList})
        })
    }
    shoppingList =(id)=>{
        let shoppingList=[]
        API.getShoppingList(id).then(response=>{
            for(let i=0;i<response.data[0].ShoppingItems.length;i++){
                shoppingList.push(response.data[0].ShoppingItems[i])
            }
            this.setState({item:shoppingList})
        })
    }
    gameList =(id) =>{
        let gameList=[]
        API.getGamesList(id).then(response =>{
           
            for(let i=0;i<response.data[0].Games.length;i++){
                gameList.push(response.data[0].Games[i])
            }
            this.setState({item:gameList})
        })
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
    collectables =(id)=>{
        let collectables=[]
        API.getCollectablesList(id).then(response =>{
            for(let i=0;i<response.data[0].Collectables.length;i++){
                collectables.push(response.data[0].Collectables[i])
            }
            this.setState({item:collectables})
        })
    }
    deleteList =(id)=>{
        API.deleteList(id).then(response=>{
            console.log(response)
        })
    }
   
    render(){
        
        if(this.props.category === "Book List"){
            return(
            <div>
                 <h4 class="category">{this.props.category}</h4>
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
                <AddToBookList id={this.props.id} />
                 
            </div>)
        }
        if(this.props.category === "Check List"){
            return(<div>
                <h4 class="category">{this.props.category}</h4>
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
                <AddToCheckList id={this.props.id} />
               
                
            </div>)
        }
        if(this.props.category==="Collectables"){
            return(<div>
                  <h4 class="category">{this.props.category}</h4>
                {this.state.item.map(item =>{
                    if(this.props.category === "Collectables"){
                        return(<div>
                                 <EachCollectable
                                    id={item.id}
                                    itemName={item.itemName}
                                    itemType={item.itemType}
                                    limitedEdition={item.limitedEdition}
                                />
                                </div>)
                        }
                })}
                <AddCollectable id={this.props.id}/>
                
            </div>
            )
        }
        if(this.props.category === "Game List"){
            return(<div>
                <h4 class="category">{this.props.category}</h4>
                {this.state.item.map(item =>{
                    if(this.props.category === "Game List"){
                       
                        return(<div>
                            <EachGame
                                id ={item.id}
                                owned={item.owned}
                                title={item.title}
                                type={item.type}
                            />
                        </div>)
                    }
                })}
                <AddGame id={this.props.id}/>
                
            </div>)
        }
        if(this.props.category=== "ShoppingList"){
            return(<div>
                <h4 class="category">{this.props.category}</h4>
                {this.state.item.map(item =>{
                    if(this.props.category === "ShoppingList"){
                        return(<div>
                            <EachShoppingItem
                                id ={item.id}
                                amount={item.amount}
                                purchased={item.purchased}
                                name={item.itemName}
                            />
                        </div>)
                    }
                })}
                <AddToShoppingList id={this.props.id}/>
                
            </div>)
        }
        if(this.props.category=== "Wish List"){
            return(<div>
                <h4 class="category">{this.props.category}</h4>
                {this.state.item.map(item =>{
                    if(this.props.category === "Wish List"){
                        
                        return(<div>
                            <EachWishListItem
                                id ={item.id}
                                category={item.category}
                                type={item.itemType}
                                name={item.itemName}
                                done={item.purchased}
                            />
                        </div>)
                    }
                })}
                <AddToWishList id={this.props.id}/>
                
            </div>)
        }
        return(<div>
        </div>)
    }
}
export default ListMaker;