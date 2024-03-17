import axios from "axios";

export default axios.create({
    baseURL: 'https://db65-59-89-210-173.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})