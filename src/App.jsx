import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route} from "react-router-dom";


import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Teste01',
      completed: false,
    },

    {
      id: '2',
      title: 'Teste02',
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
        if(task.id == taskId) return {... task, completed: !task.completed}
        
        return task;
    });

    setTasks(newTasks);

  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)
    
    setTasks(newTasks);
  };

  const handleTaskAddiion = (taskTitle) => {
    const newTasks = [...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  }

  return (
    <Router>
      <div className="container">
        <Header/>
        <Route path={"/"} exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddiion}/>
            <Tasks 
              tasks={tasks} 
              handleTaskClick={handleTaskClick} 
              handleTaskDeletion={handleTaskDeletion}
            /> 
          </>
        )}
      />
      <Route path="/:taskTitle" exact render={TaskDetails}/>
      </div> 
    </Router>
  );
}

export default App;
