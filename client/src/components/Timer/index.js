import React, { useState, useEffect } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//using this package will allow us to store the seconds state as a number when it is added to the database for easier usage later
const TimeFormat = require('hh-mm-ss')

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  //essentially creates a start and pause button instead of making 2 buttons 
  function toggle() {
    setIsActive(!isActive);
  }

  //will be the save to database functionality
  function save() {

  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    //clearing the interval out at the end 
    return () => clearInterval(interval);
  }, [isActive, seconds]);



  return (
    <div className="container mx-auto">
      <div className="app">
        <div className="time">
          <span className="timer-span">{TimeFormat.fromS(seconds, 'hh:mm:ss')}</span>
        </div>
        <div className="row">
          <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
            {isActive ? 'Pause' : 'Start Timer'}
          </button>


        </div>
        <div className="row">
          <form method="post">
            <label for="name">Session Title:</label><br />
            <input type="text"></input><br />
            <label for="notes">Session Notes:</label><br />
            <input type="text"></input><br />
            <button className={`button button-secondary`} onClick={save}>
              Save
        </button>
          </form><br />

        </div>
      </div>
    </div>
  );
};

export default Timer;