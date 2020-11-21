import React, {useEffect} from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./App.css";

function DataCard(entryID) {
    const prevEntry = 
}

function History() {
    const history = useHistory();

    useEffect(() => {
        history.push("/");
    }, []);

    return (
        <Router>
            <div className="HistoryPage">
                <header>History</header>
                <br />
                <div className="back2homepage">
                    <button>Return to homepage</button>
                </div>
            </div>
        </Router>
    );
}

export default History;