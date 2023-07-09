import React from 'react';

const CreateModal = ({priorities}) => {
    return (
        <div>
            <h3>Create new task</h3>
            <div className="input-group mb-3">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Task name"></input>
                    <label htmlFor="floatingInputGroup">Task name</label>
                </div>
            </div>
            <div className="input-group mb-3">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Description"></input>
                    <label htmlFor="floatingInputGroup">Description</label>
                </div>
            </div>
            <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    {priorities.map(el => <option key={el} value={el}>{el}</option>)}
                </select>
                <label htmlFor="floatingInputGroup">Priority</label>
            </div>
        </div>
    );
};

export default CreateModal;