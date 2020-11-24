import React, { useState, useEffect } from "react";
import { useAuth } from "../../util/authContext";
import "../HomePage/styles.css";
import API from "../../util/API";

const TimerText = (props) => {
  const { isLoggedIn } = useAuth();
  const [notes, setNotes] = useState(props.useTimer.notes);
  const [title, setTitle] = useState(props.useTimer.name);

  async function handleSaveTask(evt) {
    evt.preventDefault();

    try {
      props.useTimer._id.toString()
        ? API.updateTask({ name: title, notes: notes })
        : API.createTasks({ name: title, notes: notes });
      console.log({
        name: title,
        notes: notes,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mx-auto">
      <form>
        <section>
          <section className="sessionTitle">
            <label htmlFor="name header">Session Title:</label>
            <br />
            <input
              type="text"
              value={title}
              onChange={(evt) => setTitle(evt.target.value)}
            ></input>
          </section>
          <article className="sessionNotes">
            <br />
            <label htmlFor="notes">Session Notes:</label>
            <br />
            <textarea
              value={notes}
              type="text"
              onChange={(evt) => setNotes(evt.target.value)}
            ></textarea>
            <br />
          </article>
          <article className="saveTimeBtn">
            <button
              className={`button button-secondary`}
              onClick={handleSaveTask}
            >
              Save
            </button>
          </article>
          <br />
        </section>
      </form>
    </div>
  );
};

export default TimerText;
