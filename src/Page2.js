import "./Page2.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Page2() {

const navigate = useNavigate();
const [status, setStatus] = useState("In Progress");
const handleComplete = () => {
  const updatedChecklist = checklist.map((item) => ({
    ...item,
    done: true,
  }));

  setChecklist(updatedChecklist);
  setStatus("Completed");
};
const [checklist, setChecklist] = useState([
  { text: "Sketch the layout on paper", done: true },
  { text: "Write the HTML structure", done: true },
  { text: "Add the CSS styles", done: false },
  { text: "Test on a small screen", done: false },
]);
const toggleCheck = (index) => {
  const updated = checklist.map((item, i) =>
    i === index ? { ...item, done: !item.done } : item
  );
  setChecklist(updated);
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

        <h1>Task Details</h1>

        <p>A closer look at this task.</p>

      </div>

      

      <div className="top-right">

     <button
  type="button"
  id="backBtn"
  onClick={() => navigate("/")}
>
  ← Back to list
</button>

      </div>

    </div>

  </section>

  

  <section className="main-section">

    <div className="container content-layout">

     

      <div className="left-card">

       

        <div className="work-tag">
          WORK
        </div>

        

        <h2 className="task-title">
          Finish the landing page assignment
        </h2>

        

        <p className="task-date">
          Created on May 18, 2026 · Due May 25, 2026
        </p>

        

        <p className="description">
       Build a 4-section responsive landing page using HTML and CSS flexbox.<br />
       The page should include a navbar, a hero section, a features section<br />
       with three cards, and a footer. Use semantic HTML tags and add a few<br />
       comments to explain the flexbox properties used.
        </p>

        

        <h3 className="checklist-heading">
          Checklist
        </h3>

        <div className="checklist">
  {checklist.map((item, index) => (
    <label
      key={index}
      className={`check-item ${item.done ? "completed" : ""}`}
    >
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => toggleCheck(index)}
      />

      <span className="check-text">
        {item.text}
      </span>
    </label>
  ))}
</div>

        

        <div className="button-group">

          <button
  className="complete-btn"
  id="completeBtn"
  onClick={handleComplete}
>
  Mark Complete
</button>

       <button
  type="button"
  className="edit-btn"
  id="editBtn"
  onClick={() => navigate("/Page3")}
>
  Edit Task
</button>

        </div>

      </div>

      

      <div className="right-section">

       

        <div className="info-card">

          <h4>STATUS</h4>

         <p className="blue-text" id="statusText">
  {status}
</p>

        </div>

        

        <div className="info-card">

          <h4>PRIORITY</h4>

          <p id="priorityText">
            High
          </p>

        </div>

       

        <div className="info-card">

          <h4>CATEGORY</h4>

          <p>
            Work
          </p>

        </div>

        

        <div className="info-card">

          <h4>DUE DATE</h4>

          <p>
            May 25, 2026
          </p>

        </div>

        <div className="info-card">

          <h4>ASSIGNED TO</h4>

          <p>
            You
          </p>

        </div>

      </div>

    </div>
    </section>
    </div>
    
  );
}

export default Page2;