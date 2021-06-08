import React, { useState } from "react";

function  TaskCreator ({ task, createNewTask }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const onCreateNewTask = (e) => {
  	e.preventDefault();

     if(setName.length > 0){
        createNewTask({ desc: desc, name: name });
        setName("");
        setDesc("");

     }

  }

  return (
    <div className="my-1">
      	<div className="mb-3">
		  <label htmlFor="name" className="form-label">Name</label>
		  <input
		   className="form-control"
		   type="text"
		   id="name"
           value={name}
           onChange={(e) => setName(e.target.value)}
		   />
		</div>
		<div className="mb-3">
		  <label htmlFor="description" className="form-label">Description</label>
		  <textarea className="form-control"
       id="description"
        rows="3"
         value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
		</div>

     
      <button className="btn btn-primary mt-1" onClick={onCreateNewTask}>
        Add
      </button>
    </div>
  );
};

export default TaskCreator  ;