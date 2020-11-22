import React, { useState, useEffect} from "react";
import "./styles.css";
import API from "../../util/API";

//using this package will allow us to store the seconds state as a number when it is added to the database for easier usage later
const TimeFormat = require("hh-mm-ss");

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [notes, setNotes] = useState("");
  const [title, setTitle] = useState("");
  const [task, setTask] = useState({
    title: "",
    notes: "",
    duration: seconds
  })

  
  //essentially creates a start and pause button instead of making 2 buttons
  function toggle() {
    setIsActive(!isActive);
  }

  //will be the save to database functionality
  function handleSaveTask(evt) {
    evt.preventDefault();
    try {
      setTask({title: title,
      notes: notes,
      duration: seconds})
      API.createTasks(task)
      console.log(task)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    //clearing the interval out at the end
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="container mx-auto col-6 col-s-9">
      <div className="app">
        <div className="time">
          <span className="timer-span">
            {TimeFormat.fromS(seconds, "hh:mm:ss")}
          </span>
        </div>
        <div className="row">
          <button
            className={`button button-primary button-primary-${
              isActive ? "active" : "inactive"
            }`}
            onClick={toggle}
          >
            {isActive ? "Pause" : "Start Timer"}
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="row">
          <form>
            <label for="name header">Session Title:</label>
            <br />
            <input 
            type="text"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}></input>
            <br />
            <label for="notes">Session Notes:</label>
            <br />
            <textarea
              value={notes}
              type="text"
              onChange={(evt) => setNotes(evt.target.value)}
            ></textarea>
            <br />
            <button
              className={`button button-secondary`}
              onClick={handleSaveTask}
            >
              Save
            </button>
            <p className="text-muted">
              Log in or create an account if you would like to save a session.
            </p>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Timer;
