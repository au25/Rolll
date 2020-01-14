import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Login from "./components/login";
import Signup from "./components/signup";
import ForBusiness from "./components/forBusiness";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forBusiness" component={ForBusiness} />
      </div>
    </Router>
  );
}

const Home = () => {
  return <div>This is the home page.</div>;
};

export default App;
