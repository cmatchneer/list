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
    }
}