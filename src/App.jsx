import React, { useState } from "react";
import Tasks from "./components/Tasks";

import {v4 as uuidv4} from 'uuid';

import "./App.css";
import AddTask from "./components/AddTask";

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
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddiion}/>
        <Tasks tasks={tasks}/>
      </div> 
    </>
  );
}

export default App;
