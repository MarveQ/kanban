import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Kanban from "./components/Kanban";
import {fetchStatuses} from "./api/StatusesServeses";
import {fetchTasks, postTask} from "./api/TasksServeses";
import {useFetching} from "./hooks/useFetching";
import MyModal from "./components/ui/Modul/MyModal";
import CreateModal from "./components/CreateModal";

function App() {
    const [tasks, setTasks] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [getStatuses, isStatusesLoader, statusesError] = useFetching(async () => {
        const res = await fetchStatuses();
        setStatuses(res.data);
    });
    const [getTasks, isTasksLoader, tasksError] = useFetching(async () => {
        const res = await fetchTasks();
        setTasks(res.data);
    });
    const [openModal, setOpenModal] = useState(false);
    const priorities = [1, 2, 3, 4, 5, 6];

    const createTask = async (newTask) => {
        try{
            await postTask(newTask);
            await getTasks();
        }
        catch(err){
            alert("Something went wrong")
        }
    }

    useEffect(() => {
        getStatuses();
        getTasks();
    }, [])

    return (
        <div className="App">
            <h1>Kanban board</h1>
            <button type="button" className="btn btn-secondary" onClick={() => setOpenModal(true)}>Create new task</button>
            <Kanban
                isStatusesLoader={isStatusesLoader}
                isTasksLoader={isTasksLoader}
                statusesError={statusesError}
                tasksError={tasksError}
                tasks={tasks}
                statuses={statuses}
            />
            <MyModal
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <CreateModal
                    createTask={createTask}
                    priorities={priorities}
                    statuses={statuses}
                    setOpenModal={setOpenModal}
                />
            </MyModal>
        </div>
    );
}

export default App;