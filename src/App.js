import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "../src/Auth";
import PrivateRoute from "./PrivateRoute";

import Navigation from "./components/navigation";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import ForBusiness from "./components/Business/businessInfoPage";
import UserHome from "./components/userHome";
import RegisterBusiness from "./components/Business/registerBusinessPage";

import Gift from "./components/gift";

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
          <Route path="/businessHome" component={ForBusiness} />
          <Route path="/registerBusiness" component={RegisterBusiness} />
          {/* <Gift /> */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
