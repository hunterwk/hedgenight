import React, { useState, useEffect } from 'react';

//using this package will allow us to store the seconds state as a number when it is added to the database for easier usage later
const TimeFormat = require ('hh-mm-ss')

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
    <div className="app">
      <div className="time">
        {TimeFormat.fromS(seconds, 'hh:mm:ss')}
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className={`button button-secondary`} onClick={save}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Timer;