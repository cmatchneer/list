import axios from "axios"
import { func } from "prop-types";
import AddCollectable from "../components/AddCollectable";

export default{
    login(userInfo){
        return axios.post("/api/login", userInfo)
    },
    signUp(userInfo){
        return axios.post("/api/users",userInfo)
    },
    userList(userId){
        return axios.get("/api/users/userLists/" + userId)
    },
    deleteList(id){
        return axios.delete("/api/listType/"+id)
    },
    createList(listInfo){
        return axios.post("/api/listType",listInfo)
    },
    getBookList(id){
        return axios.get("/api/books/"+ id)
    },
    addBook(bookInfo){
        return axios.post("/api/books", bookInfo)
    },
    deleteBook(id){
        return axios.delete("/api/books/"+id)
    },
    purchasedBook(id){
        return axios.put("/api/books/purchased/"+id)
    },
    getCheckList(id){
        return axios.get("/api/checkList/"+id)
    },
    addToCheckList(newItem){
        return axios.post("/api/checkList", newItem)
    },
    deleteFromCheckList(id){
        return axios.delete("/api/checkList/"+id)
    },
    completedCheckListItem(id){
        return axios.put("/api/checkList/"+id)
    },
    getCollectablesList(id){
        return axios.get("/api/collectables/"+id)
    },
    addCollectable(collectable){
        return axios.post("/api/collectables",collectable)
    },
    deleteCollectable(id){
        return axios.delete("/api/collectables/"+id)
    },
    deleteGame(id){
        return axios.delete("/api/games/"+id)
    },
    addGame(game){
        return axios.post("/api/games",game)
    },
    purchasedGame(id){
        return axios.put("/api/games/owned/"+id)
    },
    getGamesList(id){
        return axios.get("/api/games/"+id)
    },
    addToShoppingList(item){
        return axios.post("/api/shoppingList", item)
    },
    getShoppingList(id){
        return axios.get("/api/shoppingList/"+id)
    },
    deleteShoppingItem(id){
        return axios.delete("/api/shoppingList/"+id)
    },
    purchasedShoppingItem(id){
        return axios.put("/api/shoppingList/purchased/"+id)
    },
    addToWishList(item){
        return axios.post("/api/wishList",item)
    },
    getWishList(id){
        return axios.get("/api/wishList/"+id)
    },
    deleteFromWishList(id){
        return axios.delete("/api/wishList/"+id)
    },
    boughtFromWishList(id){
        return axios.put("/api/wishList/"+id)
    }
}