import axios from 'axios'

export default axios.create({
    baseURL:"http://192.168.126.69:8080", //IP za kazdym razem sie zmienia!!!!
    headers:{
        "Content-Type":"application/json"
    }
})