import './App.css';
import {useEffect, useMemo, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Kanban from "./components/Kanban";
import {fetchStatuses} from "./api/StatusesServeses";
import {deleteTask, fetchTasks, postTask, updateTask} from "./api/TasksServeses";
import {useFetching} from "./hooks/useFetching";
import MyModal from "./components/ui/Modul/MyModal";
import CreateModal from "./components/Modals/CreateModal";
import DeleteModal from "./components/Modals/DeleteModal";
import UpdateModal from "./components/Modals/UpdateModal";
import {useSearch} from "./hooks/useSearch";

function App() {
    const [statuses, setStatuses] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [getStatuses, isStatusesLoader, statusesError] = useFetching(async () => {
        const res = await fetchStatuses();
        setStatuses(res.data);
    });
    const [getTasks, isTasksLoader, tasksError] = useFetching(async () => {
        const res = await fetchTasks();
        setTasks(res.data);
    });
    const [modalState, setModalState] = useState({
        isOpen: false,
        mode: null,
        data: null
    });
    //ModalState
    const priorities = [1, 2, 3, 4, 5, 6];

    const createTask = async (newTask) => {
        try {
            await postTask(newTask);
            await getTasks();
        } catch (err) {
            alert("Something went wrong")
        }
    }

    const changeTask = async (id, updatedTask) => {
        try {
            await updateTask(id, updatedTask);
            await getTasks();
        } catch (err) {
            alert("Something went wrong")
        }
    }

    const removeTask = async (id) => {
        try {
            await deleteTask(id);
            await getTasks();
        } catch (err) {
            alert("Something went wrong")
        }
    }

    const [searchQuery, setSearchQuery] = useState('');

    const searchedTask = useSearch(tasks, searchQuery);

    useEffect(() => {
        getStatuses();
        getTasks();
    }, [])

    return (
        <div className="App">
            <h1>Kanban board</h1>
            <button type="button"
                    className="btn btn-secondary"
                    onClick={() => setModalState({
                        isOpen: true,
                        mode: "CreateModal",
                        data: null
                    })}>Create new task
            </button>

            <input type="text" placeholder="Find Task" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>

            <Kanban
                isStatusesLoader={isStatusesLoader}
                isTasksLoader={isTasksLoader}
                statusesError={statusesError}
                tasksError={tasksError}
                tasks={searchedTask}
                statuses={statuses}
                setModalState={setModalState}
                changeTask={changeTask}
            />

            <MyModal
                modalState={modalState}
                setModalState={setModalState}
            >
                <CreateModal
                    createTask={createTask}
                    priorities={priorities}
                    statuses={statuses}
                    setModalState={setModalState}
                />

                <DeleteModal
                    modalState={modalState}
                    setModalState={setModalState}
                    deleteTask={removeTask}
                />

                <UpdateModal
                    modalState={modalState}
                    setModalState={setModalState}
                    priorities={priorities}
                    statuses={statuses}
                    changeTask={changeTask}
                />
            </MyModal>
        </div>
    );
}

export default App;