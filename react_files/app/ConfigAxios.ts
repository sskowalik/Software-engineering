import axios from 'axios'

export default axios.create({
    baseURL:"192.168.137.46:8080",
    headers:{
        "Content-Type":"application/json"
    }
})