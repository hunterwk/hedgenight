import { useEffect, useState } from "react";
import API from "../../util/API";

function AboutUs() {

    const [data, setData] = useState("");
    useEffect(() => {
        API.getPublicExample().then((response) => {
          setData(response.data);
        });
      }, []);
      return (
        <div className="col-sm">
          <div className="card">
            <h2 className="about-title"> Effortlessly organize and track your day to day</h2>
            <p className="about-text">Manage your projects better by creating timed tasks that you can store and pick up where you left off anytime</p>
            <br />
            <p className="about-text">Like a wandering Hedge Knight of the Seven kingdoms, free-lance developers work to the beat of their own drum but we're here to provide you with some assistance along the way</p>
          </div>
        </div>
        
      );
}

export default AboutUs;