import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3002",
    //  baseURL: process.env.REACT_APP_BASE_URL ||
})
export { api };

const baseURL= "http://localhost:3002";
export {baseURL}
export let ACCESS_TOKEN = 'ACCESS_TOKEN'
export  function gatAllProduct(){
    return api.get(`/products`)
} 
