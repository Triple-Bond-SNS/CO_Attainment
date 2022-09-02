import axios from "axios";

const URL = "http://localhost:8000";

export const addStud = async(data) =>{
    try{
        return await axios.post(`${URL}/add`, data);
    }
    catch(error){
        console.log('Error while calling add student API', error);
    }
}

export const getData = async() =>{
    try{
        return await axios.get(`${URL}/student-info`);
    }
    catch(error){
         console.log('Error while calling get data API', error);
    }
}

export const getUser = async(id) =>{
    try{
        return await axios.get(`${URL}/${id}`);
    }
    catch(error){
        console.log("Error while calling get user API", error);
    }
}

export const editStud = async(user, id) =>{
    try{
        return await axios.post(`${URL}/${id}`, user);
    }
    catch(error){
        console.log("Error while calling edit data API", error);
    }
}

export const delUser = async(id) =>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }
    catch(error){
        console.log("Error while calling delete data API", error);
    }
}