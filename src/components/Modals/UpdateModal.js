import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import MyButton from "../ui/Button/MyButton";

const UpdateModal = ({modalState, setModalState, priorities, statuses, changeTask, args}) => {
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
            <Button color="danger" onClick={toggle}>
                Update
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );


    // return (
    //     <div>
    //         <h3>Update task</h3>
    //         <div className="input-group mb-3">
    //             <div className="form-floating">
    //                 <input value={updateTask.name}
    //                        onChange={(event) => setUpdateTask({...updateTask, name: event.target.value})}
    //                        type="email"
    //                        className="form-control"
    //                        id="floatingInput"
    //                        placeholder="Task name"
    //                 >
    //                 </input>
    //                 <label htmlFor="floatingInputGroup">Task name</label>
    //             </div>
    //         </div>
    //         <div className="input-group mb-3">
    //             <div className="form-floating">
    //                 <input value={updateTask.description}
    //                        onChange={(event) => setUpdateTask({...updateTask, description: event.target.value})}
    //                        type="email"
    //                        className="form-control"
    //                        id="floatingInput"
    //                        placeholder="Description"
    //                 >
    //                 </input>
    //                 <label htmlFor="floatingInputGroup">Description</label>
    //             </div>
    //         </div>
    //         <div className="form-floating mb-3">
    //             <select value={updateTask.priority}
    //                     onChange={(event) => setUpdateTask({...updateTask, priority: event.target.value})}
    //                     className="form-select"
    //                     id="floatingSelect"
    //                     aria-label="Floating label select example"
    //             >
    //                 <option defaultValue=""></option>
    //                 {priorities.map(el => <option key={el} value={el}>{el}</option>)}
    //             </select>
    //             <label htmlFor="floatingInputGroup">Priority</label>
    //         </div>
    //         <div className="form-floating mb-3">
    //             <select value={updateTask.status}
    //                     onChange={(event) => setUpdateTask({...updateTask, status: event.target.value})}
    //                     className="form-select"
    //                     id="floatingSelect"
    //                     aria-label="Floating label select example"
    //             >
    //                 <option defaultValue=""></option>
    //                 {statuses.map(el => <option key={el._id} value={el.title}>{el.title}</option>)}
    //             </select>
    //             <label htmlFor="floatingInputGroup">Status</label>
    //         </div>
    //         <MyButton onClick={onCreate}>Update</MyButton>
    //         <MyButton onClick={onCancel}>Cancel</MyButton>
    //     </div>
    // );
};

export default UpdateModal;