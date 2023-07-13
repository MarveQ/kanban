import React from 'react';
import classes from "./MyModal.module.css";

const MyModal = ({openModal, setOpenModal, children}) => {
    return (
        <div className={openModal ? classes.modal + " " + classes.modal_active : classes.modal} onClick={() => setOpenModal(false)}>
            <div className={openModal ? classes.content + " " + classes.content_active : classes.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;