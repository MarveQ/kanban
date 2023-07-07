import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Kanban from "./components/Kanban";
import {fetchStatuses} from "./api/StatusesServeses";
import {fetchTasks} from "./api/StatusesTasks";
import {useFetching} from "./hooks/useFetching";

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

    useEffect(() => {
        getStatuses();
        getTasks();
    }, [])

    return (
        <div className="App">
            <h1>Kanban board</h1>
            <Kanban
                isStatusesLoader={isStatusesLoader}
                isTasksLoader={isTasksLoader}
                statusesError={statusesError}
                tasksError={tasksError}
                tasks={tasks}
                statuses={statuses}
            />
        </div>
    );
}

export default App;