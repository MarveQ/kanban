import React from 'react';
import FileLoader from "../utils/FileLoader";
import StatusColumn from "./StatusColumn";

const Kanban = ({statusesError, isStatusesLoader, isTasksLoader, tasksError, tasks, statuses}) => {
    if(isStatusesLoader || isTasksLoader) return <FileLoader/>
    if(statusesError) return <h2>{statusesError}</h2>
    if(tasksError) return <h2>{tasksError}</h2>

    return (
        <div>
            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map(status => (
                        <StatusColumn key={status._id} status={status} tasks={tasks}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Kanban;