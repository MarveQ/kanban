import React from 'react';
import Task from "./Task";

const StatusColumn = ({status, tasks}) => {
    return (
        <div className="col">
            <h3>{status.title}</h3>

            {tasks.filter(task => task.status === status.title).map(task =>
                <Task key={task._id} task={task}/>
            )}

        </div>
    );
};

export default StatusColumn;