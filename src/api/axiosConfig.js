import axios from "axios";

export default axios.create({
    baseURL: 'https://a2d1-2403-d4c0-ffff-62c8-1ee-d35d-2d88-f30c.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})