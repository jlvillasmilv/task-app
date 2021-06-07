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
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} removeTask={removeTask}/>
      ));

  const createNewTask = (taskName) => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, description: '', completed: false }]);
    }
  };


  const removeTask = (taskName) => {
    console.log(taskName);
     const newList = taskItems.filter((item) => item.name !== taskName);
      setTaskItems(newList);
  };


  return (
    <div className="App">

     

      <div className="row">
        <div className="col-md-6" > 
          <TaskBanner taskItems={taskItems} />
         
           {taskTableRows(false)}
      

        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="Completed Tasks"
            isChecked={showCompleted}
            total={taskItems.filter(t => t.completed).length}
            callback={checked => setshowCompleted(checked)}
          />
        </div>
        {showCompleted && (
         
            <div>{taskTableRows(true)}</div>

        )}

        </div>

       <div className="col-md-6" >  <TaskCreator callback={createNewTask} /> </div>

      </div>

   </div>
  );
}

export default App;
