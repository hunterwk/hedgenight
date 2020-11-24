import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/HomePage/styles.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Navbar from "./components/Navbar";
import HistoryCard from "./components/History";
import { ProvideAuth } from "./util/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Logo from "./components/Logo/hedgenightlogo.png";
import GoT from "./components/GoTblock";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import API from "./util/API";



function App() {
  const [useTimer, setTimer]= useState({
    name: "",
    notes: "",
    duration: 0
  })
  
  return (
    <ProvideAuth>
      <Router>
        <div className="row align-items-center">
          <div className="col-8 float-left">
            <img src={Logo} alt="hedgenight" />
          </div>
          <div className="col-4 float-right">
            <GoT />
          </div>
        </div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage useTimer={useTimer} setTimer={setTimer}/>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <ProtectedRoute path="/protected/History">
            <HistoryCard setTimer={setTimer} />
          </ProtectedRoute>
        </Switch>
      </Router>
      <Footer />
    </ProvideAuth>
  );
}

export default App;
