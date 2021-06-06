import React, { useState } from 'react';
import { TaskRow } from "./components/TaskRow";
 
function App() {

  const [taskItems, setTaskItems] = useState([
    {name: 'Tasks One', done: false},
    {name: 'Tasks Two', done: false},
    {name: 'Tasks Three', done: true},      
  ]);

  const toggleTask = task =>
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    );


  const taskTableRow = () => 
    taskItems.map(task => (
      <TaskRow task={task} key={task.name} />
    ))
  

  return (
    <div className="App">
      <h1>Hello!! </h1>
      <table>
        <thead>
          <tr> 
            <td>Nombre</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>{taskTableRow()}</tbody>
      </table>
   </div>
  );
}

export default App;
