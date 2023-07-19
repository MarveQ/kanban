import axios from "axios";
const url = 'https://expressjs-server.vercel.app/tasks'
export async function fetchTasks() {
    const response = await axios.get(url);
    return response
}

export async function postTask(newTask) {
    const response = await axios.post(url, newTask);
    return response
}

export async function updateTask (id, updatedTask) {
    const response = await axios.patch(`${url}/${id}`, updatedTask)
    return response
}

export async function  deleteTask(id) {
    const response = await  axios.delete(`${url}/${id}`);
    return response
}

