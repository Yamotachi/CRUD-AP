const baseUrl = 'http://127.0.0.1:8000/api/user';
import axios from "axios";
const user = {};

user.list = async () => {
    const urlList = baseUrl+"/role"
    const res = await axios.get(urlList)
    .then(response => {return response.data })
    .catch(error =>{ return error; })
    return res;
}

user.save = async(data) => {
    const urlSave = baseUrl+"/create"
    const res = await axios.post(urlSave, data)
    .then(response => { return response.data; })
    .catch(error => { return error; })
    return res;
}

user.listUser = async() => {
    const urlList = baseUrl+"/list"
    const res = await axios.get(urlList)
    .then(response => { return response.data })
    .catch(error => { return error; })
    return res;
}

user.get = async (id) => {
    const urlGet = baseUrl+"/get/"+id
    const res = await axios.get(urlGet)
    .then(response => { return response.data })
    .catch(error => { return error; })
    return res;
}

user.update = async (data) => {
    const urlUpdate = baseUrl+"/update/"+data.id
    const res = await axios.put(urlUpdate, data)
    .then(response=>{ return response.data })
    .catch(error => { return error; })
    return res;
}

user.delete = async (id) => {
    const urlDelete = baseUrl+"/delete/"+id
    const res = await axios.delete(urlDelete)
    .then(response => { return response.data })
    .catch(error => { return error; })
    return res;
  }

export default user