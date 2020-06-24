import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "./Auth";
import PrivateRoute from "./PrivateRoute";

import Home from "./components/home";
import Login from "./components/User/userLoginPage";
import Signup from "./components/User/userSignupPage";

// Admin imports
import AdminLoginPage from "./components/Admin/adminLoginPage";
import AdminHomePage from "./components/Admin/adminHomePage";

// User imports
import UserHome from "./components/User/userHome";
import UserGiftResult from "./components/User/userGiftResult";
import UserGiftRecord from "./components/User/userGiftRecord";

// Business imports
import BusinessInfo from "./components/Business/businessInfoPage";
import RegisterBusinessPage from "./components/Business/businessRegisterPage";
import BusinessHome from "./components/Business/businessHomePage";
import BusinessPendingPage from "./components/Business/businessPendingPage";
import BusinessAddShopPage from "./components/Business/businessAddShopPage";
import BusinessGiftSelectShop from "./components/Business/BusinessGiftSelectShop";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          {/* User Routes */}
          <Route path="/userHome" component={UserHome} />
          <Route path="/giftResult" component={UserGiftResult} />
          <Route path="/giftRecord" component={UserGiftRecord} />

          {/* Business Routes */}
          <Route path="/businessInfo" component={BusinessInfo} />
          <Route path="/registerBusiness" component={RegisterBusinessPage} />
          <Route path="/businessHome" component={BusinessHome} />
          <Route path="/businessPending" component={BusinessPendingPage} />
          <Route path="/addShop" component={BusinessAddShopPage} />
          <Route
            path="/businessGiftSelectShop"
            component={BusinessGiftSelectShop}
          />

          {/* Admin Routes */}
          <Route path="/admin" component={AdminLoginPage} />
          <Route path="/adminHome" component={AdminHomePage} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
