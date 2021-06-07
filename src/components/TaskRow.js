
import React from "react";

export const TaskRow = props => (
  <tr key={props.task.name}>
    <td>
      <input
        type="checkbox"
        checked={props.task.completed}
        onChange={() => props.toggleTask(props.task)}
      />
    </td>
    <td>{props.task.name}</td>
    <td>
      <button className="btn btn-primary btn-sm mx-1"> Edit </button>
      <button className="btn btn-danger  btn-sm "> Delete </button>
    </td>
  </tr>
);

