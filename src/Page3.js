import "./Page3.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function Page3() {
const [dueDate, setDueDate] = useState("");
const [category, setCategory] = useState("Work");
const [priority, setPriority] = useState("Medium");
const handleClear = () => {
  setTaskTitle("");
  setDescription("");
  setDueDate("");
  setCategory("Work");
  setPriority("Medium");
  setReminder(false);
};
const [taskTitle, setTaskTitle] = useState("");
const [description, setDescription] = useState("");
const [reminder, setReminder] = useState(false);

const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/page2");
};

  return (
    <div>
     <header className="header">

    <div className="logo">
      <h3>TaskFlow</h3>
    </div>

    <nav className="navbar">

      <div className="home">
        <Link to="/">Home</Link>
      </div>

      <div className="add-task-nav">
        <a href="#">Add Task</a>
      </div>

    </nav>

  </header>

 

  <section className="top-section">

    <div className="container top-content">

      

      <div className="top-left">
        <h1>Add a New Task</h1>

        <p>
          Fill in the details below to add a task to your list.
        </p>
      </div>

      

      <div className="top-right">
       <Link to="/">
  <button id="backBtn">
    ← Back
  </button>
</Link>
      </div>

    </div>

  </section>

 

  <div className="form-container">

    <form id="taskForm" onSubmit={handleSubmit}>

    

      <div className="form-group">

        <label>Task title</label>

        <input
          type="text"
          id="taskTitle"
          placeholder="e.g. Finish the homework assignment"
          required
        />

        <small>Keep it short and clear.</small>

      </div>

      
      <div className="form-group">

        <label>Description (optional)</label>

        <textarea
          id="description"
          placeholder="Add any extra details, links, or notes..."
        ></textarea>

      </div>

      

      <div className="row">

        

        <div className="form-group">

          <label>Due date</label>

          <div className="date-box">

            <input
  type="date"
  id="dueDate"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>

            <i className="fa-regular fa-calendar"></i>

          </div>

        </div>

        

        <div className="form-group">

          <label>Category</label>

          <input
  type="text"
  id="category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
/>

        </div>

      </div>

      

      <div className="form-group">

        <label>Priority</label>

        <div className="priority-box">

          <label className="priority-option">
            <input
  type="radio"
  name="priority"
  value="Low"
  checked={priority === "Low"}
  onChange={(e) => setPriority(e.target.value)}
/>
            <span>Low</span>
          </label>

          <label className="priority-option active">
           <input
  type="radio"
  name="priority"
  value="Medium"
  checked={priority === "Medium"}
  onChange={(e) => setPriority(e.target.value)}
/>
            <span>Medium</span>
          </label>

          <label className="priority-option">
           <input
  type="radio"
  name="priority"
  value="High"
  checked={priority === "High"}
  onChange={(e) => setPriority(e.target.value)}
/>
            <span>High</span>
          </label>

        </div>

      </div>

      
      <div className="checkbox-area">

        <input type="checkbox" id="reminder" />

        <label htmlFor="reminder">
          Send me a reminder one day before the due date
        </label>

      </div>

      

      <div className="button-group">

<button type="reset" className="clear-btn">
  Clear
</button>
        <button type="submit" className="add-btn">
    Add Task
</button>

      </div>

    </form>
   </div>
  </div>
  );
}

export default Page3;