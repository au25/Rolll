import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "../src/Auth";
import PrivateRoute from "./PrivateRoute";

import Navigation from "./components/navigation";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import ForBusiness from "./components/forBusiness";
import UserHome from "./components/userHome";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation />
          <PrivateRoute path="/" exact component={UserHome} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forBusiness" component={ForBusiness} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
