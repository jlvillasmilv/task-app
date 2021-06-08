import React, { useState, useEffect } from "react";

function  TaskEditor ({ task, updateTask, setEditing }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");

  const [ usetask, setTask ] = useState(task)

  const onCreateNewTask = (e) => {
  	e.preventDefault();

    if(setName.length > 0){
        updateTask({ id: usetask.id, desc: desc, name: name });
        setName("");
        setDesc("");
    }
    
  }

  const onCancel = (e) => {
    e.preventDefault();
    setEditing(false);
  }

  useEffect(
    () => {
      setTask(task)
    },
    
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setTask({ ...usetask  , [name]: value })
  }

  return (
    <div className="my-1">
      	<div className="mb-3">
		  <label htmlFor="name" className="form-label">Name</label>
		  <input
		   className="form-control"
		   type="text"
		   id="name"
           value={usetask.name}
           onChange={handleInputChange}
		   />
		</div>
		<div className="mb-3">
		  <label htmlFor="description" className="form-label">Description</label>
		  <textarea className="form-control"
       id="description"
        rows="3"
         value={usetask.description} onChange={handleInputChange}></textarea>
		</div>

     
      <button className="btn btn-primary mt-1" onClick={onCreateNewTask}>
        Update
      </button>

      <button onClick={onCancel} className="btn btn-secondary mt-1 mx-1">
        Cancel
      </button>
    </div>
  );
};

export default TaskEditor ;