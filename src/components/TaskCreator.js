import React, { useState } from "react";

  const TaskCreator = props => {
    const initialFormState = { id: null, name: '', description: '', completed: false }
    const [ usetask, setTask ] = useState(initialFormState)
  
    const handleInputChange = event => {
      const { name, value } = event.target
  
      setTask({ ...usetask, [name]: value })
    }

  return (

    <form
			onSubmit={event => {
				event.preventDefault()
				if (!usetask.name || !usetask.description) return

				props.createNewTask(usetask)
				setTask(initialFormState)
			}}>

        <div className="my-1">
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={usetask.name}
                  onChange={handleInputChange} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control"
                      name="description"
                      rows="3"
                      value={usetask.description} onChange={handleInputChange} ></textarea>
          </div>        
          <button className="btn btn-primary mt-1" > Add </button>
        </div>
    </form>
  )
}

export default TaskCreator;