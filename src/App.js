import "./App.css";
import LoginForm from "./components/Forms/LoginForm";
import SignUpForm from "./components/Forms/SignUpForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
