import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Navbar from "./components/Navbar";
import ProtectedExamplePage from "./components/ProtectedExamplePage";
import { ProvideAuth } from "./util/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Notes from "./components/Dashboard/notes.js";
import Timer from "./components/Dashboard/timer.js";
import Quotes from "./components/Dashboard/quotes.js";
import History from "./components/History/index.js";


function App() {
  return (
    <ProvideAuth>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <ProtectedRoute path="/protected/example">
            <ProtectedExamplePage />
          </ProtectedRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
