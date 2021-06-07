import React, { useState, useEffect } from "react";
import { TaskRow } from "./components/TaskRow";
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";
 
function App() {

  const [taskItems, setTaskItems] = useState([
    {name: 'Tasks One', description: '', completed: false},
    {name: 'Tasks Two', description: '', completed: false},
    {name: 'Tasks Three', description: '', completed: true},      
  ]);

  const [showCompleted, setshowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
        setTaskItems(JSON.parse(data))
    } else {
          
          setTaskItems([           
          ]);
          setshowCompleted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const toggleTask = task =>
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, completed: !t.completed } : t))
    );


  const taskTableRows = doneValue =>
    taskItems
      .filter(task => task.completed === doneValue)
      .map(task => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  const createNewTask = (taskName) => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, description: '', completed: false }]);
    }
  };



  return (
    <div className="App">

     

      <div className="row">
        <div className="col-md-6" > 
          <TaskBanner taskItems={taskItems} />
          <table className="table table-striped table-bordered">
            <tbody>{taskTableRows(false)}</tbody>
          </table>

        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="Completed Tasks"
            isChecked={showCompleted}
            total={taskItems.filter(t => t.completed).length}
            callback={checked => setshowCompleted(checked)}
          />
        </div>
        {showCompleted && (
          <table className="table table-striped table-bordered">
            <tbody>{taskTableRows(true)}</tbody>
          </table>
        )}

        </div>

       <div className="col-md-6" >  <TaskCreator callback={createNewTask} /> </div>

      </div>

   </div>
  );
}

export default App;
