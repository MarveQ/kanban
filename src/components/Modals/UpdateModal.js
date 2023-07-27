import React, {useState} from 'react';
//import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import MyButton from "../ui/Button/MyButton";

const UpdateModal = ({modalState, setModalState, priorities, statuses, changeTask}) => {
    const initialTask = {
        name: modalState.data.name,
        description: modalState.data.description,
        priority: modalState.data.priority,
        status: modalState.data.status
    };
    const [updateTask, setUpdateTask] = useState(initialTask);

    const onCreate = () => {
        changeTask(modalState.data._id, updateTask);
        onCancel();
    }
    const onCancel = () => {
        setModalState({
            isOpen: false,
            mode: "CreateModal",
            data: null
        });
    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <h3>Update task</h3>
            <div className="input-group mb-3">
                <div className="form-floating">
                    <input value={updateTask.name}
                           onChange={(event) => setUpdateTask({...updateTask, name: event.target.value})}
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
                    <input value={updateTask.description}
                           onChange={(event) => setUpdateTask({...updateTask, description: event.target.value})}
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
                <select value={updateTask.priority}
                        onChange={(event) => setUpdateTask({...updateTask, priority: event.target.value})}
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                >
                    <option defaultValue=""></option>
                    {priorities.map(el => <option key={el} value={el}>{el}</option>)}
                </select>
                <label htmlFor="floatingInputGroup">Priority</label>
            </div>
            <div className="form-floating mb-3">
                <select value={updateTask.status}
                        onChange={(event) => setUpdateTask({...updateTask, status: event.target.value})}
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                >
                    <option defaultValue=""></option>
                    {statuses.map(el => <option key={el._id} value={el.title}>{el.title}</option>)}
                </select>
                <label htmlFor="floatingInputGroup">Status</label>
            </div>
            <MyButton onClick={onCreate}>Update</MyButton>
            <MyButton onClick={onCancel}>Cancel</MyButton>
        </div>
    );



};

export default UpdateModal;