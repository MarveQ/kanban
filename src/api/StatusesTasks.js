import axios from "axios";

export async function fetchTasks() {
    const response = await axios.get('https://expressjs-server.vercel.app/tasks');
    return response
}