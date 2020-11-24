import { useEffect, useState } from "react";
import API from "../../util/API";
import "./styles.css";
import Timer from "../Timer";
import AboutUs from "../AboutUs";
import LoginPage from "../LoginPage";
import HistoryPage from "../History";
import { useAuth } from "../../util/authContext"
import RecentHistory from "../RecentHistory";
import 'bootstrap/dist/css/bootstrap.css';
import TimerText from "../TimerText";

function HomePage(props) {
  const { isLoggedIn } = useAuth()

  return (
    <div className="row">
    <div className="col-4 timer mx-auto">
      <Timer useTimer={props.useTimer}/>
      </div>
      <div className="col-4 mx-auto">
      {isLoggedIn ? <TimerText useTimer={props.useTimer}/> : <AboutUs />}  
      </div>
      <div className="col-4 mx-auto">
        {isLoggedIn ? <RecentHistory /> : <LoginPage />}
      </div>
    </div>
  );
}
export default HomePage;
