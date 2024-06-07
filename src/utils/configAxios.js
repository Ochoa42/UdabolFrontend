import axios from "axios";

const axiosUdabol = axios.create({
    baseURL:"https://localhost:7254"
})

export {axiosUdabol}