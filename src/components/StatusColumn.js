import React from 'react';
import Task from "./Task";

const StatusColumn = ({status, statusesTitle, tasks, setModalState, changeTask}) => {

    return (
        <div className="col">
            <h3>{status.title}</h3>
            {tasks.sort((a, b) => a.priority < b.priority ? 1 : -1).filter(task => task.status === status.title).map(task =>
                <Task key={task._id}
                      status={status}
                      statusesTitle={statusesTitle}
                      task={task}
                      setModalState={setModalState}
                      changeTask={changeTask}
                />
            )}

        </div>
    );
};

export default StatusColumn;