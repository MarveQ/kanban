import axios from "axios";

export async function fetchTasks() {
    const response = await axios.get('https://expressjs-server.vercel.app/tasks');
    return response
}

export async function postTask(newTask) {
    const response = await axios.post('https://expressjs-server.vercel.app/tasks', newTask);
    return response
}