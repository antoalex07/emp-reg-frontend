import axios from "axios";

export default axios.create({
    baseURL: 'https://2fbd-117-207-233-110.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})