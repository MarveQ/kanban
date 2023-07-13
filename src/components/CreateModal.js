import React, {useState} from 'react';
import MyButton from "./ui/Button/MyButton";

const CreateModal = ({priorities, statuses, createTask, setOpenModal}) => {
    const initialTask = {name: "", description: "", priority: priorities[0], status: statuses[0]?.title};
    const [newTask, setNewTask] = useState(initialTask);
    const onCreate = () => {
        createTask(newTask);
        setOpenModal(false);
        setNewTask(initialTask);
    }
    const onCancel = () => {
        setOpenModal(false);
        setNewTask(initialTask);
    }

    return (
        <div>
            <h3>Create new task</h3>
            <div className="input-group mb-3">
                <div className="form-floating">
                    <input value={newTask.name}
                           onChange={(event) => setNewTask({...newTask, name: event.target.value})}
                           type="email"
                           className="form-control"
                           id="floatingInput"
                           placeholder="Task name"
                    >
                    </input>
                    <label htmlFor="floatingInputGroup">Task name</label>
                </div>
            </div>
            <div className="input-group mb-3">
                <div className="form-floating">
                    <input value={newTask.description}
                           onChange={(event) => setNewTask({...newTask, description: event.target.value})}
                           type="email"
                           className="form-control"
                           id="floatingInput"
                           placeholder="Description"
                    >
                    </input>
                    <label htmlFor="floatingInputGroup">Description</label>
                </div>
            </div>
            <div className="form-floating mb-3">
                <select value={newTask.priority}
                        onChange={(event) => setNewTask({...newTask, priority: event.target.value})}
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                >
                    {priorities.map(el => <option key={el} value={el}>{el}</option>)}
                </select>
                <label htmlFor="floatingInputGroup">Priority</label>
            </div>
            <div className="form-floating mb-3">
                <select value={newTask.status}
                        onChange={(event) => setNewTask({...newTask, status: event.target.value})}
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                >
                    {statuses.map(el => <option key={el._id} value={el.title}>{el.title}</option>)}
                </select>
                <label htmlFor="floatingInputGroup">Status</label>
            </div>
            <MyButton onClick={onCreate}>Create</MyButton>
            <MyButton onClick={onCancel}>Cancel</MyButton>
        </div>
    );
};

export default CreateModal;