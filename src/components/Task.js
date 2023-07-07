import React from 'react';

const Task = ({task}) => {
    return (
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">{task.name}</h5>
                    <p className="card-text">{task.description}</p>
                    <a href="#" className="btn btn-primary">Update</a>
                </div>
            </div>
    );
};

export default Task;