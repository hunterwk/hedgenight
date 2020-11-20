import React, {useEffect} from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./App.css";

function History() {
    const history = useHistory();
    const handleHistory = () => {
        history.push("/homepage")
    }

    useEffect(() => { 
        history.push("/homepage")
    }
    , [])

    return (
        <Router>
            <div className="HistoryPage">
                <header>History</header>
                <br />
                <div className="back2homepage">
                    <button onClick={handleHistory}>Return to homepage</button>
                </div>
            </div>
        </Router>
    );
}

export default History;