import React, { useState, useEffect } from "react";

const TaskEditor = props => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");

  const [ usetask, setTask ] = useState(props.task)

  const onCreateNewTask = (e) => {
  	e.preventDefault();

    if(setName.length > 0){
        props.updateTask(usetask.id, usetask);
        setName("")
        setDesc("");
    }
    
  }

  const onCancel = (e) => {
    e.preventDefault();
    props.setEditing(false);
  }

  useEffect( () => { setTask(props.task) },  [ props ] )

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
	       name="name"
           value={usetask.name}
           onChange={handleInputChange}
		   />
		</div>
		<div className="mb-3">
		  <label htmlFor="description" className="form-label">Description</label>
		  <textarea className="form-control"
               id="description"
               rows="3"
               name="description"
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
export default TaskEditor;
