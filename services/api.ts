import axios from "axios";

const api = axios.create({
  baseURL: "http://locahosto:3000",
});

export default api;
