import axios from "axios";

const instance = axios.create({
  baseURL: "https://facebookclone-mern.herokuapp.com/",
});

export default instance;
