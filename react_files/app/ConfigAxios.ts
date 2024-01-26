import axios from 'axios'

export default axios.create({
    baseURL:"http://192.168.126.69:8080", //IP za kazdym razem sie zmienia!!!! // 192.168.137.183 -seba
    headers:{
        "Content-Type":"application/json"
    }
})