import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children, onClick, disabled, style}) => {
    return (
        <button style={style}
                className={classes.myButton}
                disabled={disabled}
                onClick={onClick}
        >{children}</button>
    );
};

export default MyButton;