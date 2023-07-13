import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children, onClick, disabled}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={classes.myButton}>
            {children}
        </button>
    );
};

export default MyButton;