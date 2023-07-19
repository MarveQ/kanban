import React, {useState} from 'react';
import MyButton from "../ui/Button/MyButton";

const DeleteModal = ({modalState, deleteTask, setModalState}) => {
    const  [confirmInputValue, setConfirmInputValue] = useState('');
     const onDelete = () => {
         deleteTask(modalState.data._id);
         onCancel();
     }
     const onCancel = () => {
         setModalState({
             isOpen: false,
             mode: null,
             data: null
         });
         setConfirmInputValue('');
     }

    return (
        <div className="text-center ">
            <h2 className="mb-3">Delete this task?</h2>
            <p className="mb-3">Task name: <b>{modalState.data?.name}</b></p>
            <p className="mb-3">To confirm, type <b>{modalState.data?.name}</b> in the box below</p>
            <input
                value={confirmInputValue}
                onChange={(event) => setConfirmInputValue(event.target.value)}
                style={{width: "200px"}}
            >
            </input>

            <div className="d-flex justify-content-end">
                <MyButton onClick={onDelete} disabled={confirmInputValue !== modalState.data?.name}>Delete</MyButton>
                <MyButton onClick={onCancel}>Cancel</MyButton>
            </div>

        </div>
    );
}

export default DeleteModal;