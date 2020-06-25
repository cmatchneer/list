import axios from "axios"
import { func } from "prop-types";

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
    }
}