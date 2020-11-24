import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../util/API";
import '../HomePage/styles.css';
import "./styles.css";

const TimeFormat = require("hh-mm-ss");



function RecentHistory(props) {
  const [data, setData] = useState([]);
  const history = useHistory()
  useEffect(() => {
    API.findTasks().then(({ data }) => {
      let newData = data.slice(Math.max(data.length - 4,0))
      setData(newData);
      console.log(newData)
      console.log(data[data.length -2])
    });
  }, []);

  return (
    
    <div className="HistoryCard container mx-auto">
      <h3 className="text-align-center"> Recent Sessions:</h3>
      <div className="row">
        
        {data.length === 0 ? (
          <h4 className="text-center">You dont have any previous sessions!</h4>
        ) : (
          data.map((tasks) => 
            <div className="col-12"key={tasks._id.toString()}>
            <div className="card">
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
        ))}
      </div>
    </div>
  );
}

export default RecentHistory;
