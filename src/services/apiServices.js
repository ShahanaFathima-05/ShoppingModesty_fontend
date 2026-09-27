import axios from "axios";

const apiServices = axios.create({
  baseURL: "https://shoppingmodesty-backend.onrender.com",
  timeout:5000
});

export default apiServices;