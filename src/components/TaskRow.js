
import React from "react";

export const TaskRow = props => (

   <div className={"mt-1 alert "+ (props.task.completed ? 'alert-success' : 'alert-warning')}  role="alert" key={props.task.name}>
    <div className="row">
      <div className="col-md-1">
         <input
          type="checkbox"
          checked={props.task.completed}
          onChange={() => props.toggleTask(props.task)}
        />
        
      </div>
      <div className="col-md-8">
         {props.task.name}
      </div>
      <div className="col-md-3 text-end">
         <button className="btn btn-primary btn-sm mx-1"> E </button>
         <button className="btn btn-danger  btn-sm " onClick={() => props.removeTask(props.task.name)}> X </button>
      </div>    
    </div>  
     
      
   </div>

);

