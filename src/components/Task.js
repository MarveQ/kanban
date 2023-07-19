import React from 'react';
import MyButton from "./ui/Button/MyButton";
import buttonClasses from './ui/Button/MyButton.module.css'

const statusButtonStyle = {
    position: "absolute",
    top: "49px",
    width: "10%",
    height: "77%",
    padding: "4px",
    margin: 0,
    border: "1px solid #d2d2d2",
}

const Task = ({statusesTitle, task, setModalState, changeTask}) => {
    return (
        <div className="card mb-3">
            <div className="card-header">
                <h5 className="card-title">{task.name}</h5>
            </div>
            <div className="card-body">
                <MyButton
                    disabled={statusesTitle.indexOf(task.status) === 0}
                    onClick={() => changeTask(task._id, {status: statusesTitle[statusesTitle.indexOf(task.status) - 1]})}
                    style={{...statusButtonStyle, borderRadius: "0 0 0 5px", left: 0}}
                >&larr;</MyButton>

                <p className="card-text">{task.description}</p>
                <div className="d-flex justify-content-center align-items-baseline">
                    <p className="card-text me-2">Priority: {task.priority}</p>
                    <MyButton
                        disabled={task.priority === "6"}
                        onClick={() => changeTask(task._id, {priority: +task.priority + 1})}
                        className={buttonClasses.myButton}
                        style={{width: "30px", padding: "4px", marginRight: "2px"}}
                    >
                        &uarr;
                    </MyButton>
                    <MyButton
                        disabled={task.priority === "1"}
                        onClick={() => changeTask(task._id, {priority: task.priority - 1})}
                        style={{width: "30px", padding: "4px"}}
                    >
                        &darr;
                    </MyButton>
                </div>

                <button onClick={() => setModalState({
                    isOpen: true,
                    mode: "UpdateModal",
                    data: task,
                })}
                        className="btn btn-primary">Update
                </button>

                <button onClick={() => setModalState({
                    isOpen: true,
                    mode: "DeleteModal",
                    data: task
                })} className="btn btn-danger">Delete
                </button>

            </div>

            <MyButton
                disabled={statusesTitle.indexOf(task.status) === statusesTitle.length - 1}
                onClick={() => changeTask(task._id, {status: statusesTitle[statusesTitle.indexOf(task.status) + 1]})}
                style={{...statusButtonStyle, borderRadius: "0 0 5px 0", right: 0}}
            >&rarr;</MyButton>
        </div>
    );
};

export default Task;


/*<div className="d-flex justify-content-center align-items-baseline gap-1">
    <MyButton
        disabled={statusesTitle.indexOf(task.status) === 0}
        onClick = {() => changeTask(task._id, {status: statusesTitle[statusesTitle.indexOf(task.status) -1]})}
        style={{width: "40px", padding: "4px", marginRight: "3px"}}
    >&larr;</MyButton>
    <button className="btn btn-primary">Update</button>
    <button onClick={() => setOpenModal({
        isOpen: true,
        mode: "DeleteModal",
        data: task
    })} className="btn btn-danger">Delete</button>
    <MyButton
        disabled={statusesTitle.indexOf(task.status) === statusesTitle.length-1}
        onClick = {() => changeTask(task._id, {status: statusesTitle[statusesTitle.indexOf(task.status) +1]})}
        style={{width: "40px", padding: "4px", marginRight: "3px"}}
    >&rarr;</MyButton>
</div>*/