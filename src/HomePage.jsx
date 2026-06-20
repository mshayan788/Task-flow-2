import './App.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function HomePage() {
const [tasks, setTasks] = useState([
  {
    id: 1,
    text: "Finish the landing page assignment",
    completed: true,
    category: "WORK"
  },
  {
    id: 2,
    text: "Read CSS Grid documentation",
    completed: false,
    category: "WORK"
  },
  {
    id: 3,
    text: "Buy groceries for the week",
    completed: false,
    category: "SHOPPING"
  },
  {
    id: 4,
    text: "Call the dentist to book a checkup",
    completed: false,
    category: "PERSONAL"
  },
  {
    id: 5,
    text: "Water the plants",
    completed: true,
    category: "PERSONAL"
  },
  {
    id: 6,
    text: "Review pull requests on GitHub",
    completed: false,
    category: "WORK"
  }
]);
  
const addTask = () => {
  const taskText = prompt("Enter your task");

  if (!taskText) return;

  const taskCategory = prompt("Enter category: WORK / SHOPPING / PERSONAL");

  if (!taskCategory) return;

  setTasks([
    ...tasks,
    {
      id: Date.now(),
      text: taskText,
      completed: false,
      category: taskCategory.toUpperCase()
    }
  ]);
};
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};
const toggleTask = (id) => {
  setTasks(
    tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
};
const navigate = useNavigate();



  return (

    <div className="App">
       

  <header className="header">

    <div className="logo">
      <h3>TaskFlow</h3>
    </div>

    <nav className="navbar">

      <div className="home">
        <a href="#">Home</a>
      </div>

      <div className="add-task-nav">
       <button
  id="addTaskBtn"
  onClick={() => navigate("/Page3")}
>
  + Add Task
</button>
    </div> 

    </nav>

  </header>

 

  <section className="features">

    <div className="container feature-content">

      <div className="text-content">

        <div className="heading">
          <h1>My Tasks</h1>
        </div>

        <div className="text">
          <p>Here's what you're working on today.</p>
        </div>

      </div>

      <div className="main-button">
        <button onClick={addTask}>+ Add Task</button>
      </div>

    </div>

  </section>

 

  <div className="container">

    <div className="stats">

      <div className="card">
        <p>TOTAL</p>
        <h1>{tasks.length}</h1>
      </div>

      <div className="card">
        <p>COMPLETED</p>
        <h1 className="blue">
  {tasks.filter(task => task.completed).length}
</h1>
      </div>

      <div className="card">
        <p>REMAINING</p>
        <h1>
  {tasks.filter(task => !task.completed).length}
</h1>
      </div>

    </div>

  

    <div className="task-container">

     {tasks.map((task) => (
    <div
  key={task.id}
  className={`task ${task.completed ? "completed" : ""}`}
>
      <div className="left">
        <input
  type="checkbox"
  checked={task.completed}
  onChange={() => toggleTask(task.id)}
/>

        <span className="task-text">
          {task.text}
        </span>
      </div>

  <div className="right">
  <span className={`tag ${task.category.toLowerCase()}`}>
    {task.category}
  </span>

  <button
    className="delete-btn"
    onClick={() => deleteTask(task.id)}
  >
    Delete
  </button>
</div>
    </div>
  ))}

    </div>
    </div>
    </div>

  );
}


export default HomePage;
