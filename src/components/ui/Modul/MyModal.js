import React from 'react';
import classes from "./MyModal.module.css";

const MyModal = ({modalState, setModalState, children}) => {
    const modalStateNames = ['CreateModal', 'DeleteModal', 'UpdateModal'];

    return (
        <div className={modalState.isOpen ? classes.modal + " " + classes.modal_active : classes.modal}
             onClick={() => setModalState({
                 isOpen: false,
                 mode: null,
                 data: null
             })}>
            <div className={modalState.isOpen ? classes.content + " " + classes.content_active : classes.content}
                 onClick={(e) => e.stopPropagation()}>
                {children.find((child, i) => modalState.mode === modalStateNames[i])}
            </div>
        </div>
    );
};

export default MyModal;