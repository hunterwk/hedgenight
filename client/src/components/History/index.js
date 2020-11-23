import { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";
import API from "../../util/API";
import '../HomePage/styles.css';
import "./styles.css";

const TimeFormat = require("hh-mm-ss");



function HistoryPage() {
  const { logout, user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    API.findTasks().then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div className="HistoryCard container mx-auto">
      <div className="row">
        {data.length === 0 ? (
          <h3 className="text-center">You dont have any previous sessions!</h3>
        ) : (
          data.map((tasks) => (
            <div className="col-8">
            <div className="card" key={tasks._id.toString()}>
              <div className="card-body">
                <h4 className="card-title">Title: {tasks.name}</h4>
                <h5 className="card-text">
                  Duration: {TimeFormat.fromS(tasks.duration)}
                </h5>
                <p className="card-text">
                  Notes:
                  <br />
                  {tasks.notes}
                </p>
              </div>
            </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HistoryPage;
