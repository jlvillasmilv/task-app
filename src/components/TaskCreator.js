import React, { useState } from "react";

export const TaskCreator = props => {
  const [newTaskName, setNewTaskName] = useState("");
  const [desc, setDesc] = useState("");

  const updateNewTaskValue = e => setNewTaskName(e.target.value);

  const createNewTask = (e) => {
  	e.preventDefault();

    setNewTaskName('');
    setDesc("");

    props.callback(newTaskName, desc );
    
  }

  return (
    <div className="my-1">
      	<div className="mb-3">
		  <label htmlFor="name" className="form-label">Name</label>
		  <input
		   className="form-control"
		   type="text"
		   id="name"
           value={newTaskName}
           onChange={updateNewTaskValue}
		   />
		</div>
		<div className="mb-3">
		  <label htmlFor="description" className="form-label">Description</label>
		  <textarea className="form-control" id="description" rows="3" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
		</div>

     
      <button className="btn btn-primary mt-1" onClick={createNewTask}>
        Add
      </button>
    </div>
  );
};
