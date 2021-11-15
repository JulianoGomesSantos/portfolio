import axios from "axios";

const api = axios.create({
  baseURL: "http://locahosto:4000",
});

export default api;
