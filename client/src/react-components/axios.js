import axios from "axios";
const instance = axios.create(
  {
    // baseURL: "http://localhost:8001",
    baseURL: "https://tinder-clone-backend-roman.herokuapp.com",
  },
  { withCredentials: true }
  // to send request with credential like cookies
);

export default instance;
