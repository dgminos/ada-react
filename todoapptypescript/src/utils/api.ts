import axios from "axios";

const api = axios.create({
    baseURL: "https://to-do-app-23c01-default-rtdb.firebaseio.com/",
});

export { api };


