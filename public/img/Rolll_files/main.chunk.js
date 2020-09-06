(this["webpackJsonpowo"] = this["webpackJsonpowo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Business/businessManageShopPage.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Business/businessManageShopPage.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".add_businessManageShop_countryCss {\n  margin: 0;\n}\n\n.add_businessManageShop_regionCss {\n  margin: 0;\n}\n\n.manageShop_selectCountry {\n  width: 100%;\n  border: 0;\n  height: 60px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border-radius: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  font-size: 16px;\n  outline: none;\n  color: rgba(0, 0, 0, 0.6);\n  padding: 0 0 0 8px;\n  font-weight: bold;\n}\n\n.manageShop_selectRegion {\n  width: 100%;\n  border: 0;\n  height: 60px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border-radius: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  font-size: 16px;\n  outline: none;\n  color: rgba(0, 0, 0, 0.6);\n  padding: 0 0 0 8px;\n  font-weight: bold;\n}\n\n.alert-enter {\n  opacity: 0;\n  transform: scale(0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.alert-enter-active {\n  opacity: 1;\n  transform: translateX(0);\n  transition: opacity 300ms, transform 300ms;\n  width: 80%;\n}\n\n.alert-enter-done {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n}\n\n.alert-exit {\n  opacity: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.alert-exit-active {\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 300ms, transform 300ms;\n  width: 80%;\n}\n\n.gift_template-enter {\n  opacity: 0;\n  transform: scale(0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.gift_template-enter-active {\n  opacity: 1;\n  transform: translateX(0);\n  transition: opacity 300ms, transform 300ms;\n  width: 100%;\n}\n\n.gift_template-enter-done {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.gift_template-exit {\n  opacity: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.gift_template-exit-active {\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 300ms, transform 300ms;\n  width: 100%;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Business/styles.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Business/styles.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".alert-enter {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  .alert-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: opacity 300ms, transform 300ms;\n  }\n  .alert-exit {\n    opacity: 1;\n  }\n  .alert-exit-active {\n    opacity: 0;\n    transform: scale(0.9);\n    transition: opacity 300ms, transform 300ms;\n  }\n  ", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/User/giftAnimation.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/User/giftAnimation.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* reset */\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* body {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  min-height: 100vh;\n  padding: 20px;\n\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n} */\n\n/* other */\n.info {\n  margin: 20px 0;\n  text-align: center;\n}\n\np {\n  color: #2e2e2e;\n  margin-bottom: 20px;\n}\n\n/* block-$ */\n.block-effect {\n  font-size: calc(8px + 6vw);\n}\n\n.block-reveal {\n  --bc: #4a4a4a;\n  --d: 0.1s;\n  --t: calc(var(--td) + var(--d));\n\n  color: transparent;\n  padding: 4px;\n\n  position: relative;\n  overflow: hidden;\n\n  animation: revealBlock 0s var(--t) forwards;\n}\n\n.block-reveal::after {\n  content: \"\";\n\n  width: 0%;\n  height: 100%;\n  padding-bottom: 4px;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  background: var(--bc);\n  animation: revealingIn var(--td) var(--d) forwards,\n    revealingOut var(--td) var(--t) forwards;\n}\n\n/* animations */\n@keyframes revealBlock {\n  100% {\n    color: #0f0f0f;\n  }\n}\n\n@keyframes revealingIn {\n  0% {\n    width: 0;\n  }\n\n  100% {\n    width: 100%;\n  }\n}\n\n@keyframes revealingOut {\n  0% {\n    transform: translateX(0);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n.h1_container {\n  --td: 0.6s;\n  /* margin: 19% 0 0 0; */\n  width: 70%;\n}\n", ""]);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth */ "./src/Auth.js");
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PrivateRoute */ "./src/PrivateRoute.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var _components_User_userLoginPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/User/userLoginPage */ "./src/components/User/userLoginPage.js");
/* harmony import */ var _components_User_userSignupPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/User/userSignupPage */ "./src/components/User/userSignupPage.js");
/* harmony import */ var _components_tos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tos */ "./src/components/tos.js");
/* harmony import */ var _components_privacyPolicy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/privacyPolicy */ "./src/components/privacyPolicy.js");
/* harmony import */ var _components_Admin_adminLoginPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Admin/adminLoginPage */ "./src/components/Admin/adminLoginPage.js");
/* harmony import */ var _components_Admin_adminHomePage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Admin/adminHomePage */ "./src/components/Admin/adminHomePage.js");
/* harmony import */ var _components_User_userHome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/User/userHome */ "./src/components/User/userHome.js");
/* harmony import */ var _components_User_userGiftResult__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/User/userGiftResult */ "./src/components/User/userGiftResult.js");
/* harmony import */ var _components_User_userGiftRecord__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/User/userGiftRecord */ "./src/components/User/userGiftRecord.js");
/* harmony import */ var _components_Business_businessInfoPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Business/businessInfoPage */ "./src/components/Business/businessInfoPage.js");
/* harmony import */ var _components_Business_businessRegisterPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Business/businessRegisterPage */ "./src/components/Business/businessRegisterPage.js");
/* harmony import */ var _components_Business_businessHomePage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Business/businessHomePage */ "./src/components/Business/businessHomePage.js");
/* harmony import */ var _components_Business_businessPendingPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Business/businessPendingPage */ "./src/components/Business/businessPendingPage.js");
/* harmony import */ var _components_Business_businessAddShopPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Business/businessAddShopPage */ "./src/components/Business/businessAddShopPage.js");
/* harmony import */ var _components_Business_BusinessGiftSelectShop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Business/BusinessGiftSelectShop */ "./src/components/Business/BusinessGiftSelectShop.js");
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/App.js";








 // Admin imports


 // User imports



 // Business imports








function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: "/",
    exact: true,
    component: _components_home__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/home",
    component: _components_home__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/login",
    component: _components_User_userLoginPage__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/signup",
    component: _components_User_userSignupPage__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/tos",
    component: _components_tos__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/privacyPolicy",
    component: _components_privacyPolicy__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/userHome",
    component: _components_User_userHome__WEBPACK_IMPORTED_MODULE_11__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/giftResult",
    component: _components_User_userGiftResult__WEBPACK_IMPORTED_MODULE_12__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/giftRecord",
    component: _components_User_userGiftRecord__WEBPACK_IMPORTED_MODULE_13__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/businessInfo",
    component: _components_Business_businessInfoPage__WEBPACK_IMPORTED_MODULE_14__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/registerBusiness",
    component: _components_Business_businessRegisterPage__WEBPACK_IMPORTED_MODULE_15__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/businessHome",
    component: _components_Business_businessHomePage__WEBPACK_IMPORTED_MODULE_16__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/businessPending",
    component: _components_Business_businessPendingPage__WEBPACK_IMPORTED_MODULE_17__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/addShop",
    component: _components_Business_businessAddShopPage__WEBPACK_IMPORTED_MODULE_18__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/businessGiftSelectShop",
    component: _components_Business_BusinessGiftSelectShop__WEBPACK_IMPORTED_MODULE_19__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/admin",
    component: _components_Admin_adminLoginPage__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/adminHome",
    component: _components_Admin_adminHomePage__WEBPACK_IMPORTED_MODULE_10__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Auth.js":
/*!*********************!*\
  !*** ./src/Auth.js ***!
  \*********************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ "./src/firebase.js");

var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/Auth.js";


const AuthContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
const AuthProvider = ({
  children
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        currentUser = _useState2[0],
        setCurrentUser = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Runs everytime auth state changes
    _firebase__WEBPACK_IMPORTED_MODULE_2__["default"].auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      user.getIdTokenResult().then(IdTokenResult => {
        user.adminRole = IdTokenResult.claims.adminRole;
        user.shopRole = IdTokenResult.claims.shopRole;
        user.userRole = IdTokenResult.claims.userRole;
        user.approvedShop = IdTokenResult.claims.approvedShop;
        console.log("------------------------------");
        console.log("admin role: " + user.adminRole);
        console.log("user role: " + user.userRole);
        console.log("shop role: " + user.shopRole);
        console.log("approved shop: " + user.is_approve);
        console.log(user);
        console.log("------------------------------");
      });
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AuthContext.Provider, {
    value: {
      currentUser
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, children);
};

/***/ }),

/***/ "./src/PrivateRoute.js":
/*!*****************************!*\
  !*** ./src/PrivateRoute.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth */ "./src/Auth.js");

var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/PrivateRoute.js";



/**
 * Authenticate user and returns token
 * @param {} param0 
 */

const PrivateRoute = (_ref) => {
  let RouteComponent = _ref.component,
      rest = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component"]);

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
        currentUser = _useContext.currentUser;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: routeProps => !!currentUser ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RouteComponent, Object.assign({}, routeProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

/***/ }),

/***/ "./src/components/Admin/adminHomePage.js":
/*!***********************************************!*\
  !*** ./src/components/Admin/adminHomePage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");

var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Admin/adminHomePage.js";





 // Required for side-effects

__webpack_require__(/*! firebase/functions */ "./node_modules/firebase/functions/dist/index.esm.js");

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  shopInfoContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "25px"
  },
  unapprovedTitleContainer: {
    margin: "50px 0 25px 0",
    fontSize: "20px"
  },
  approvedTitleContainer: {
    margin: "50px 0 25px 0",
    fontSize: "20px"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        allShopSnapshot = _useState2[0],
        setAllShopSnapshot = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        allApproveUser = _useState4[0],
        setAllApproveUser = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState6 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        allUnapproveUser = _useState6[0],
        setAllUnapproveUser = _useState6[1];

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const classes = useStyles();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  const db = _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function fetchAllBusinessUser() {
      const businessUserCollection = await db.collection("businessUser").get();
      const businessUserDoc = businessUserCollection.docs;

      for (let i = 0; i < businessUserDoc.length; i++) {
        if (businessUserDoc[i].data().is_approve == "false") {
          setAllUnapproveUser(user => [...user, {
            id: businessUserDoc[i].id,
            first_name: businessUserDoc[i].data().first_name,
            last_name: businessUserDoc[i].data().last_name,
            phone_number: businessUserDoc[i].data().phone_number,
            shop_address: businessUserDoc[i].data().shop.shop_address,
            shop_floor: businessUserDoc[i].data().shop.shop_floor,
            shop_name: businessUserDoc[i].data().shop.shop_name,
            email: businessUserDoc[i].data().email,
            approveShop: businessUserDoc[i].data().is_approve
          }]);
        }

        if (businessUserDoc[i].data().is_approve == "true") {
          setAllApproveUser(user => [...user, {
            id: businessUserDoc[i].id,
            first_name: businessUserDoc[i].data().first_name,
            last_name: businessUserDoc[i].data().last_name,
            phone_number: businessUserDoc[i].data().phone_number,
            shop_address: businessUserDoc[i].data().shop.shop_address,
            shop_floor: businessUserDoc[i].data().shop.shop_floor,
            shop_name: businessUserDoc[i].data().shop.shop_name,
            email: businessUserDoc[i].data().email,
            approveShop: businessUserDoc[i].data().is_approve
          }]);
        }
      }
    }

    fetchAllBusinessUser();
  }, []);
  /**
   * Renders the list of unapproved shop from allUnapproveUser state
   */

  function RenderUnapproveUser() {
    return allUnapproveUser.map(data => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.shopInfoContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, data.email), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Status: ", data.approveShop == "false" ? "Not Approved" : "Approved"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: e => {
        approveUser(data);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Grand Approval Permission")));
  }

  const approveUser = data => {
    // Change the custom claim of shop to not approved
    const addBusinessUserApproved = _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].functions().httpsCallable("addBusinessUserApproved");
    addBusinessUserApproved({
      email: data.email
    }).then(result => {
      console.log(result);
    }); // Updates database that the approveShop status to true

    db.collection("businessUser").doc(data.id).update({
      is_approve: "true"
    }); // Set state of unapproved shop to filter out new approved shop

    setAllUnapproveUser(allUnapproveUser.filter(shop => {
      return shop.id != data.id;
    })); // Set state of approved shop and add new approved shop

    setAllApproveUser(user => [...user, {
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      shop_address: data.shop_address,
      shop_floor: data.shop_floor,
      shop_name: data.shop_name,
      email: data.email,
      approveShop: data.approveShop
    }]);
  };
  /**
   * Renders the list of approved shop from allApproveUser state
   */


  function RenderApproveUser() {
    return allApproveUser.map(data => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.shopInfoContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, data.email), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "Status: ", data.approveShop == "false" ? "Not Approved" : "Approved", " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: () => {
        removeApproveUser(data);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "Remove Approval Permission")));
  }

  const removeApproveUser = data => {
    // Change the custom claim of shop to not approved
    const removeBusinessUserApproved = _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].functions().httpsCallable("removeBusinessUserApproved");
    removeBusinessUserApproved({
      email: data.email
    }).then(result => {
      console.log(result);
    }); // Updates database that the approveShop status to false

    db.collection("businessUser").doc(data.id).update({
      is_approve: "false"
    }); // Set new state of approved shop to filter new unapproved shop

    setAllApproveUser(allApproveUser.filter(shop => {
      return shop.id != data.id;
    })); // Set new state of unapproved shop and add new unapproved shop

    setAllUnapproveUser(shop => [...shop, {
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      shop_address: data.shop_address,
      shop_floor: data.shop_floor,
      shop_name: data.shop_name,
      email: data.email,
      approveShop: data.approveShop
    }]);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.adminHomePageContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.unapprovedTitleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Not Approved"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RenderUnapproveUser, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.approvedTitleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Approved"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RenderApproveUser, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: async e => {
      e.preventDefault();
      await _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signOut();
      history.push('/home');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Log out"));
});

/***/ }),

/***/ "./src/components/Admin/adminLoginForm.js":
/*!************************************************!*\
  !*** ./src/components/Admin/adminLoginForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Admin/adminLoginForm.js";






 // Required for side-effects

__webpack_require__(/*! firebase/functions */ "./node_modules/firebase/functions/dist/index.esm.js");
/**
 * CSS of the page
 */


const CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"]);
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  signupFormContainer: {
    display: "flex",
    flexDirection: "column"
  }
}));
/**
 * Currently unused validation styles
 */

const ValidationTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important" // override inline-style

    }
  }
})(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"]);
/**
 * This is the signup component
 */

const AdminLoginPage = () => {
  const classes = useStyles();
  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    password: "",
    email: ""
  }),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        loginValue = _useState2[0],
        setLoginValue = _useState2[1];
  /**
   * Onclick function that logs in user
   */


  async function userLogin(e) {
    e.preventDefault();

    try {
      const credential = await _firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth().signInWithEmailAndPassword(loginValue.email, loginValue.password);
    } catch (error) {
      console.log(error);
    } // If user is logged in, route to user home page


    if (currentUser != null) {
      currentUser.getIdTokenResult().then(idTokenResult => {
        if (idTokenResult.claims.adminRole) {
          history.push("/adminHome");
        }
      });
    }
  }
  /**
   * Adds "admin role" to a user
   */


  async function makeAdmin(e) {
    e.preventDefault();
    console.log("Making admin..."); // Get e-mail

    const addAdminRole = _firebase__WEBPACK_IMPORTED_MODULE_8__["default"].functions().httpsCallable("addAdminRole");
    addAdminRole({
      email: loginValue.email
    }).then(result => {
      console.log(result);
    });
  }
  /**
   * Returns the form for logging in
   */


  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: classes.signupFormContainer,
    noValidate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CssTextField, {
    label: "Email",
    onChange: e => setLoginValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, loginValue, {
      email: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CssTextField, {
    type: "password",
    label: "Password",
    onChange: e => setLoginValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, loginValue, {
      password: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    onClick: userLogin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "LOG IN"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CssTextField, {
    label: "Email",
    onChange: e => setLoginValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, loginValue, {
      email: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    onClick: makeAdmin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, "Make Admin"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(AdminLoginPage));

/***/ }),

/***/ "./src/components/Admin/adminLoginPage.js":
/*!************************************************!*\
  !*** ./src/components/Admin/adminLoginPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _adminLoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminLoginForm */ "./src/components/Admin/adminLoginForm.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _landingPageNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../landingPageNavigation */ "./src/components/landingPageNavigation.js");
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Admin/adminLoginPage.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  signupPageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  fbButton: {
    width: "300px"
  },
  googleButton: {
    width: "300px"
  },
  accountMsg: {
    width: "300px"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const classes = useStyles();
  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
        currentUser = _useContext.currentUser;

  if (currentUser != null) {
    currentUser.getIdTokenResult().then(idTokenResult => {
      if (idTokenResult.claims.adminRole) {
        history.push("/adminHome");
      }
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.signupPageContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_landingPageNavigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.formContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adminLoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
});

/***/ }),

/***/ "./src/components/Business/BusinessGiftSelectShop.js":
/*!***********************************************************!*\
  !*** ./src/components/Business/BusinessGiftSelectShop.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _businessSelectShopNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./businessSelectShopNavigation */ "./src/components/Business/businessSelectShopNavigation.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-div-100vh */ "./node_modules/react-div-100vh/lib/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles.css */ "./src/components/Business/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/BusinessGiftSelectShop.js";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  div100Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fbackground_35.png?alt=media&token=a5be174a-cd06-4d97-b282-be6b33e71946")',
    backgroundColor: "rgba(237, 232, 218, 0.7)"
  },
  selectShopOuterContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    overflow: "scroll"
  },
  selectShopContainer: {
    display: "flex",
    width: "70%",
    flexDirection: "column",
    alignItems: "center"
  },
  giftInfo_container: {
    margin: "48px 0 0 0"
  },
  chooseShopText: {
    fontSize: "16px",
    width: "100%",
    margin: "40px 0 26px 0",
    display: "flex",
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold"
  },
  giftImage: {
    width: "40%",
    overflow: "hidden"
  },
  giftTitle: {
    width: "60%",
    display: "flex",
    justifyContent: "center"
  },
  giftTitle_text: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 10px 0",
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "CoreSans, sans-serif"
  },
  giftIntro_text: {
    margin: "0 0 20px 0",
    fontSize: "16px",
    color: "rgba(0, 0, 0, 0.6)",
    fontFamily: "CoreSans, sans-serif"
  },
  giftDescription_container: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "0 15px 0 35px"
  },
  chanceText_container: {
    margin: "10px 0 0 0",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "right"
  },
  rewardText_container: {
    margin: "10px 0 0 0",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.8)"
  },
  chanceText: {
    margin: "3px 0 0 0"
  },
  rewardText: {
    margin: "3px 0 0 0"
  },
  imageDescription_container: {
    border: "3px solid rgb(0, 0, 0, 0.3)",
    padding: "15px",
    borderRadius: "5px"
  },
  giftImageContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px 0"
  },
  applyGiftShopContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "0 0 15px 0"
  },
  shopName_text: {
    width: "60%",
    fontSize: "16px",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: "21px",
    padding: "5px"
  },
  shopEnabled_message: {
    fontSize: "14px",
    color: "#4caf50",
    margin: "0 0 5px 0",
    fontFamily: "CoreSans, sans-serif",
    margin: "0 0 5px 0"
  },
  shopName_disable: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "52px"
  },
  shopName_select: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  selectShop_button: {
    width: "40%",
    fontSize: "14px",
    padding: "10px 5px",
    backgroundColor: "#4caf50",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px"
  },
  enableGift_button: {
    fontSize: "12px",
    padding: "12px 15px",
    backgroundColor: "#4caf50",
    fontSize: "14px",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    height: "50px",
    width: "126px",
    padding: "6px 8px"
  },
  enableGift_backButton: {
    margin: "5px 0 0 0",
    textTransform: "none"
  },
  disableGift_button: {
    width: "40%",
    fontSize: "13px",
    padding: "10px 5px",
    backgroundColor: "rgba(204, 0, 0, 0.7)",
    letterSpacing: "1px",
    textTransform: "none",
    color: "white"
  },
  renderShop_container: {
    margin: "0 0 25px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  location
}) {
  const classes = useStyles();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  /**
   * States for showing and hiding gift options and choosing shop
   */

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        showSelection = _useState2[0],
        setShowSelection = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        showConfirmation = _useState4[0],
        setShowConfirmation = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState6 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        selectShop = _useState6[0],
        setSelectShop = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState8 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
        giftRecord = _useState8[0],
        setGiftRecord = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState10 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
        activeGift = _useState10[0],
        setActiveGift = _useState10[1];

  const _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState12 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
        userDbInfo = _useState12[0],
        setUserDbInfo = _useState12[1];
  /**
   * Props from parent from <Link> route
   */


  const parentShopInfo = location.state.parentShopInfo;
  const gift = location.state.selectGift;
  const giftDuration = location.state.giftDuration.gift_duration;
  const userId = location.state.userId;
  const db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
  console.log("this is the selected gift info");
  console.log(gift);

  const fetch_giftRecord = async () => {
    const template_exist = await db.collection("businessUser").doc(userId).collection("giftRecord").doc(gift.gift_name).get();
    setGiftRecord(template_exist);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    fetch_giftRecord();
    const db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();

    const fetch_userDbInfo = async () => {
      const user = await db.collection("businessUser").doc(userId).get();
      setUserDbInfo(user);
    };

    fetch_userDbInfo();
  }, []);
  /**
   * Shows the shop selection component
   * Sets the shop clicked to be the selected shop
   * @param {*} shop
   */

  const handleShopClick = shop => {
    console.log("onclick before creating");
    console.log(giftRecord.data());
    setShowConfirmation(true);
    setSelectShop(shop);
  };
  /**
   * Checks if the shop already has an active gift and renders the shop list
   */


  const RenderShop = () => {
    if (giftRecord && giftRecord.id) {
      /**
       * Function that checks if a shop has a gift already and if that gift is active
       */
      const hasActiveGift = shop => {
        // checks to see if giftRecord collection exists
        if (giftRecord.exists) {
          const giftRecordArray = giftRecord.data()[gift.gift_name]; // Bracket notation, same as . notation but dynamic for parem

          const currentTime = moment__WEBPACK_IMPORTED_MODULE_10___default()(firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()).toDate());
          /**
           * Starts checking at the end of the array for the newest gift
           * If it does, check to see if current time is before expiry time of newest gift
           */

          for (let i = giftRecordArray.length - 1; i >= 0; i--) {
            if (giftRecordArray[i].shop_name == shop.shop_name) {
              if (currentTime.isBefore(giftRecordArray[i].gift_expiry_date)) {
                return true;
              }
            }
          }
        }

        return false;
      };

      const handleGiftDisable = async (shop, index) => {
        console.log("disable");
        const giftRecordArray = giftRecord.data()[gift.gift_name];
        const currentTime = moment__WEBPACK_IMPORTED_MODULE_10___default()(firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()).toDate());

        if (giftRecord && giftRecord.id) {
          for (let i = giftRecordArray.length - 1; i >= 0; i--) {
            if (giftRecordArray[i].shop_name == shop.shop_name) {
              if (currentTime.isBefore(giftRecordArray[i].gift_expiry_date)) {
                console.log(giftRecordArray[i].gift_id);
                console.log(i);
                giftRecordArray[i].gift_expiry_date = moment__WEBPACK_IMPORTED_MODULE_10___default()(firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()).toDate()).format(); // Changes expiry date in business user

                db.collection("businessUser").doc(userId).collection("giftRecord").doc(gift.gift_name).set(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, giftRecord.data(), {
                  [gift.gift_name]: giftRecordArray
                })); // Changes expiry date in gift Collection - city and cityArea

                const cityAreaRef = db.collection("gift").doc(shop.shop_country).collection(shop.shop_region).doc(shop.shop_city).collection("area").doc(shop.shop_area);
                const cityRefSnapshop = await cityAreaRef.get();
                console.log(cityRefSnapshop.data());
                let claimedGifts = cityRefSnapshop.data().gift;
                const cityRef = db.collection("gift").doc(shop.shop_country).collection(shop.shop_region).doc(shop.shop_city);
                console.log("before change");
                console.log(claimedGifts);

                for (let j = claimedGifts.length - 1; j >= 0; j--) {
                  if (claimedGifts[j].gift_id == giftRecordArray[i].gift_id) {
                    console.log("changing expiry date");
                    claimedGifts[j].gift_expiry_date = moment__WEBPACK_IMPORTED_MODULE_10___default()(firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()).toDate()).format();
                  }
                }

                console.log("new claimed gift array");
                console.log(claimedGifts);
                await cityAreaRef.set({
                  gift: claimedGifts
                });
                await cityRef.set({
                  gift: claimedGifts
                });
              }
            }
          }

          fetch_giftRecord();
        }
      };
      /**
       * Returns the list of shop
       */


      return parentShopInfo.shop.map((shop, index) => {
        if (hasActiveGift(shop)) {
          return showSelection && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: classes.applyGiftShopContainer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 355
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: classes.shopEnabled_message,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 356
            },
            __self: this
          }, "Gift enabled for this shop."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: classes.shopName_disable,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 359
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: classes.shopName_text,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 360
            },
            __self: this
          }, shop.shop_name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
            className: classes.disableGift_button,
            onClick: () => {
              handleGiftDisable(shop, index);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 361
            },
            __self: this
          }, "Disable")));
        } else {
          return showSelection && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: classes.applyGiftShopContainer,
            onClick: () => {
              handleShopClick(shop);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 376
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: classes.shopName_select,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 382
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: classes.shopName_text,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 383
            },
            __self: this
          }, shop.shop_name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
            className: classes.selectShop_button,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 384
            },
            __self: this
          }, "Enable")));
        }
      });
    }

    return null;
  };
  /**
   * Creates the gift, write to the database
   * Sets shopShop state to false, which hides the modal
   */


  const createGift = async () => {
    const db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
    const currentTimeStamp = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date());
    const gift_creation_date = moment__WEBPACK_IMPORTED_MODULE_10___default()(currentTimeStamp.toDate()).format();
    const add_duration = moment__WEBPACK_IMPORTED_MODULE_10___default()(currentTimeStamp.toDate()).add(giftDuration, "days").format();
    const gift_expiry_date = moment__WEBPACK_IMPORTED_MODULE_10___default()(add_duration).endOf("day").toString();
    /**
     * Creates gift in gift collection where user can access
     * Gets the ID of document before creating it
     */

    const giftDocRef = db.collection("gift").doc();
    console.log("this is the select shop info");
    console.log(selectShop);
    const cityAreaRef = db.collection("gift").doc(selectShop.shop_country).collection(selectShop.shop_region).doc(selectShop.shop_city).collection("area").doc(selectShop.shop_area);
    const cityAreaRefSnapshop = await cityAreaRef.get(); // console.log(cityRefSnapshop);

    const cityRef = db.collection("gift").doc(selectShop.shop_country).collection(selectShop.shop_region).doc(selectShop.shop_city);
    const cityRefSnapshop = await cityRef.get();
    console.log("this is city ref");
    console.log(cityRefSnapshop);
    const giftName = "gift";
    /**
     * If cityArea reference in database exists, update the array with the new gift (push)
     * Else creates the reference and push gift inside
     */

    if (cityAreaRefSnapshop.exists) {
      await cityAreaRef.update({
        [giftName]: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({
          gift_name: gift.gift_name,
          gift_id: giftDocRef.id,
          [giftDocRef.id]: "gift_id",
          gift_creation_timeStamp: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()),
          gift_creation_date: gift_creation_date,
          gift_expiry_date: gift_expiry_date,
          shop_address: selectShop.shop_address,
          shop_name: selectShop.shop_name,
          shop_city: selectShop.shop_city,
          gift_description: gift.gift_description,
          gift_intro: gift.gift_intro,
          image_url: gift.image_url,
          shop_area: selectShop.shop_area
        })
      });
    } else {
      await cityAreaRef.set({
        [giftName]: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({
          gift_name: gift.gift_name,
          gift_id: giftDocRef.id,
          [giftDocRef.id]: "gift_id",
          gift_creation_timeStamp: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()),
          gift_creation_date: gift_creation_date,
          gift_expiry_date: gift_expiry_date,
          shop_address: selectShop.shop_address,
          shop_name: selectShop.shop_name,
          shop_city: selectShop.shop_city,
          gift_description: gift.gift_description,
          gift_intro: gift.gift_intro,
          image_url: gift.image_url,
          shop_area: selectShop.shop_area
        })
      });
    }
    /**
     * If city reference in database exists, update the array with the new gift (push)
     * Else creates the reference and push gift inside
     */


    if (cityRefSnapshop.exists) {
      await cityRef.update({
        [giftName]: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({
          gift_name: gift.gift_name,
          gift_id: giftDocRef.id,
          [giftDocRef.id]: "gift_id",
          gift_creation_timeStamp: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()),
          gift_creation_date: gift_creation_date,
          gift_expiry_date: gift_expiry_date,
          shop_address: selectShop.shop_address,
          shop_name: selectShop.shop_name,
          shop_city: selectShop.shop_city,
          gift_description: gift.gift_description,
          gift_intro: gift.gift_intro,
          image_url: gift.image_url,
          shop_area: selectShop.shop_area
        })
      });
    } else {
      await cityRef.set({
        [giftName]: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({
          gift_name: gift.gift_name,
          gift_id: giftDocRef.id,
          [giftDocRef.id]: "gift_id",
          gift_creation_timeStamp: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()),
          gift_creation_date: gift_creation_date,
          gift_expiry_date: gift_expiry_date,
          shop_address: selectShop.shop_address,
          shop_name: selectShop.shop_name,
          shop_city: selectShop.shop_city,
          gift_description: gift.gift_description,
          gift_intro: gift.gift_intro,
          image_url: gift.image_url,
          shop_area: selectShop.shop_area
        })
      });
    }
    /**
     * Checks if any gift using default gifts exists
     * If it does, then update the array
     * If not, create the collection and document
     */


    console.log(giftRecord.exists);

    if (giftRecord && giftRecord.exists) {
      console.log("template exists, now updating...");
      console.log(giftRecord.exists);
      console.log(giftRecord);
      await db.collection("businessUser").doc(userId).collection("giftRecord").doc(gift.gift_name).update({
        [gift.gift_name]: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({
          gift_name: gift.gift_name,
          gift_id: giftDocRef.id,
          [giftDocRef.id]: "gift_id",
          gift_creation_timeStamp: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()),
          gift_creation_date: gift_creation_date,
          gift_expiry_date: gift_expiry_date,
          shop_address: selectShop.shop_address,
          shop_name: selectShop.shop_name,
          shop_city: selectShop.shop_city,
          shop_area: selectShop.shop_area
        })
      });
      fetch_giftRecord();
    } else {
      console.log("doesnt exist");
      console.log(giftRecord);
      const new_giftRecord_ref = db.collection("businessUser").doc(userId).collection("giftRecord").doc(gift.gift_name);
      await new_giftRecord_ref.set({
        [gift.gift_name]: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({
          gift_name: gift.gift_name,
          gift_id: giftDocRef.id,
          [giftDocRef.id]: "gift_id",
          gift_creation_timeStamp: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()),
          gift_creation_date: gift_creation_date,
          gift_expiry_date: gift_expiry_date,
          shop_address: selectShop.shop_address,
          shop_name: selectShop.shop_name,
          shop_city: selectShop.shop_city,
          shop_area: selectShop.shop_area
        })
      });
      console.log("new gift record created");
      fetch_giftRecord();
    }

    setShowConfirmation(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_div_100vh__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.div100Container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.selectShopOuterContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.selectShopContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.giftInfo_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.chooseGiftContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.giftTitle_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: this
  }, gift.gift_name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.giftIntro_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }, gift.gift_intro), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.imageDescription_container,
    style: {
      backgroundColor: "#e0eee0",
      borderColor: "#3d9140"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.giftImageContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: classes.giftImage,
    src: gift.image_url,
    alt: "lol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.giftDescription_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.chanceText_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  }, gift.gift_description.chance.map(chance => {
    {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: classes.chanceText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        },
        __self: this
      }, chance * 100, "%");
    }
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.rewardText_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }, gift.gift_description.reward.map(reward => {
    {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: classes.rewardText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623
        },
        __self: this
      }, reward);
    }
  })))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.chooseShopText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632
    },
    __self: this
  }, "Choose shop to apply:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.renderShop_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RenderShop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_12__["CSSTransition"], {
    in: showConfirmation,
    timeout: 300,
    classNames: "alert",
    unmountOnExit: true,
    onEnter: () => setShowSelection(false),
    onExited: () => setShowSelection(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    key: "lol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.enableGift_button,
    onClick: () => createGift(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644
    },
    __self: this
  }, "Enable Gift"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.enableGift_backButton,
    onClick: () => setShowConfirmation(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: this
  }, "Back")))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_businessSelectShopNavigation__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/Business/businessActiveGiftPage.js":
/*!***********************************************************!*\
  !*** ./src/components/Business/businessActiveGiftPage.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _setupUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setupUI */ "./src/components/setupUI.js");
/* harmony import */ var _setupUI__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_setupUI__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _businessNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./businessNavigation */ "./src/components/Business/businessNavigation.js");
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessActiveGiftPage.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const classes = useStyles();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "this is the active gifty page.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/Business/businessAddShopPage.js":
/*!********************************************************!*\
  !*** ./src/components/Business/businessAddShopPage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-material-ui-form-validator */ "./node_modules/react-material-ui-form-validator/lib/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _businessManageShopPage_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./businessManageShopPage.css */ "./src/components/Business/businessManageShopPage.css");
/* harmony import */ var _businessManageShopPage_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_businessManageShopPage_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessAddShopPage.js";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  addShopText: {
    fontSize: "16px",
    margin: "28px 0 15px 0",
    width: "100%",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold" // borderBottom: "1px solid rgba(0, 0, 0, 0.7)"

  },
  outerFormContainer: {},
  formContainer: {},
  countryOuterContainer: {
    margin: "0 0 28px 0",
    width: "100%"
  },
  regionOuterContainer: {
    margin: "0 0 28px 0",
    width: "100%"
  },
  countryErrorMessage: {
    fontSize: "12.5px",
    color: "#f44336",
    padding: "5px 0 0 14px",
    fontFamily: "CoreSans, sans-serif"
  },
  regionErrorMessage: {
    fontSize: "12.5px",
    color: "#f44336",
    padding: "5px 0 0 14px",
    fontFamily: "CoreSans, sans-serif"
  },
  addButton_container: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  addText: {
    fontWeight: "bold",
    backgroundColor: "#4caf50",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "126px",
    height: "50px",
    margin: "0 0 28px 0"
  },
  location_errorText: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "13px",
    color: "rgba(204, 0, 0, 1)",
    margin: "3px 0 0px 0px"
  }
});
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(255, 255, 255, 0.7)"
      }
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0"
      }
    },
    MuiButton: {
      root: {
        height: "60px",
        width: "100%",
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50"
          }
        }
      }
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "0 0 28px 0"
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px"
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: "0",
        justifyContent: "center"
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        height: "70px"
      },
      content: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: "16px",
        fontFamily: "CoreSans, sans-serif"
      }
    },
    MuiNativeSelect: {
      root: {
        margin: "15px 0 10px 0",
        padding: "0 0 0 11px"
      },
      select: {
        "&$select": {
          backgroundColor: "transparent"
        }
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo,
  parentShopInfo,
  setParentShopInfo
}) {
  const classes = useStyles();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    shop_name: "",
    shop_address: "",
    shop_city: "",
    shop_country: "",
    shop_region: "",
    shop_area: ""
  }),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        shopInfo = _useState2[0],
        setShopInfo = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        locationInfo = _useState4[0],
        setLocationInfo = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    regionDisable: true,
    cityDisable: true,
    cityAreaDisable: true
  }),
        _useState6 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        selectDisable = _useState6[0],
        setSelectDisable = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cityArea: true,
    city: true,
    region: true,
    country: false
  }),
        _useState8 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
        locationValid = _useState8[0],
        setLocationValid = _useState8[1];

  const db = firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"]();
  let countryArray = [];
  let regionArray = [];
  let cityArray = [];
  let cityAreaArray = [];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const fetchCountryInfo = async () => {
      const countryCollection = await db.collection("country").get();
      countryCollection.docs.map(country => countryArray.push(country.id));
      setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
        countryArray: countryArray,
        regionArray: regionArray,
        cityArray: cityArray,
        cityAreaArray: cityAreaArray
      }));
    };

    fetchCountryInfo();
  }, []);
  /**
   * Handler for shop information inputs
   * @param {*} index Parameter to indicate which index in array to update
   */

  function handleShopProfileChange(e) {
    e.preventDefault();
    const _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
    setShopInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shopInfo, {
      [name]: value
    }));
  }
  /**
   * Adds shop to the database
   * Updates parent state of shop information
   */


  function handleShopProfileUpdate(e) {
    e.preventDefault();
    const db = firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"]();
    db.collection("businessUser").doc(userDbInfo.id).update({
      shop: firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
        shop_name: shopInfo.shop_name,
        shop_address: shopInfo.shop_address,
        shop_city: shopInfo.shop_city,
        shop_country: shopInfo.shop_country,
        shop_region: shopInfo.shop_region,
        shop_area: shopInfo.shop_area
      })
    });

    let newShopInfo = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parentShopInfo);

    newShopInfo.shop.push(shopInfo);
    setParentShopInfo(newShopInfo);
  }

  const handleCountryChange = async e => {
    setShopInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shopInfo, {
      shop_country: e.target.value
    }));
    const regionCollection = await db.collection("country").doc(e.target.value).collection("region").get();
    regionCollection.docs.map(region => regionArray.push(region.id));
    setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
      regionArray: regionArray
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      regionDisable: false,
      cityDisable: true,
      cityAreaDisable: true
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      country: true,
      region: false,
      city: false,
      cityArea: false
    }));
  };

  const handleRegionChange = async e => {
    setShopInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shopInfo, {
      shop_region: e.target.value
    }));
    const cityCollection = await db.collection("country").doc(shopInfo.shop_country).collection("region").doc(e.target.value).collection("city").get();
    cityCollection.docs.map(city => cityArray.push(city.id));
    setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
      cityArray: cityArray
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      cityDisable: false,
      cityAreaDisable: true
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      region: true
    }));
  };

  const handleCityChange = async e => {
    setShopInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shopInfo, {
      shop_city: e.target.value
    }));
    const cityAreaCollection = await db.collection("country").doc(shopInfo.shop_country).collection("region").doc(shopInfo.shop_region).collection("city").doc(e.target.value).collection("area").get();
    cityAreaCollection.docs.map(cityArea => cityAreaArray.push(cityArea.id));
    setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
      cityAreaArray: cityAreaArray
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      cityAreaDisable: false
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      city: true
    }));
  };

  const handleCityAreaChange = async e => {
    setShopInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shopInfo, {
      shop_area: e.target.value
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      cityArea: true
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.addShopText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, "Add Shop"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.outerFormContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__["ValidatorForm"], {
    className: classes.formContainer,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleShopProfileUpdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__["TextValidator"], {
    id: "filled-basic",
    label: "Shop Name",
    variant: "filled",
    name: "shop_name",
    value: shopInfo.shop_name,
    validators: ["required"],
    errorMessages: ["Shop name is requred"],
    onChange: e => handleShopProfileChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__["TextValidator"], {
    id: "filled-basic",
    label: "Address",
    variant: "filled",
    name: "shop_address",
    value: shopInfo.shop_address,
    validators: ["required"],
    errorMessages: ["Address is requred"],
    onChange: e => handleShopProfileChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, "Country"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: shopInfo.shop_country,
    onChange: e => handleCountryChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }), locationInfo ? locationInfo.countryArray.map(country => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: country,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, country);
  }) : null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, "Region"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: shopInfo.shop_region,
    onChange: e => handleRegionChange(e),
    disabled: selectDisable.regionDisable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }), locationInfo ? locationInfo.regionArray.map(region => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: region,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, region);
  }) : null), locationValid.region ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, "Select a Region")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, "City"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: shopInfo.shop_city,
    onChange: e => handleCityChange(e),
    disabled: selectDisable.cityDisable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }), locationInfo ? locationInfo.cityArray.map(city => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: city,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }, city);
  }) : null), locationValid.city ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, "Select a City")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, "Area"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: shopInfo.shop_area,
    onChange: e => handleCityAreaChange(e),
    disabled: selectDisable.cityAreaDisable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }), locationInfo ? locationInfo.cityAreaArray.map(area => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: area,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }, area);
  }) : null), locationValid.cityArea ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, "Select an Area")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.addButton_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.addText,
    type: "submit",
    disabled: !(locationValid.cityArea && locationValid.city && locationValid.region && locationValid.country),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }, "Add")))));
});

/***/ }),

/***/ "./src/components/Business/businessCreateGiftPage.js":
/*!***********************************************************!*\
  !*** ./src/components/Business/businessCreateGiftPage.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _businessManageShopPage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./businessManageShopPage.css */ "./src/components/Business/businessManageShopPage.css");
/* harmony import */ var _businessManageShopPage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_businessManageShopPage_css__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessCreateGiftPage.js";










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  chooseGiftText: {
    fontSize: "16px",
    width: "70%",
    margin: "45px 0 35px 0",
    display: "flex",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    borderBottom: "1px solid black"
  },
  giftOfferText: {
    fontSize: "16px",
    width: "70%",
    margin: "35px 0 15px 0",
    display: "flex",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    borderBottom: "1px solid black"
  },
  giftTitle_text: {
    fontWeight: "bold",
    margin: "0 0 10px 0"
  },
  giftIntro_text: {
    margin: "0 0 20px 0"
  },
  giftInfoContainer: {
    fontSize: "16px",
    width: "70%",
    margin: "12px 0 15px 0",
    display: "flex",
    flexDirection: "column",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif"
  },
  chooseGiftAppearContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  chooseGiftContainer: {
    margin: "12px 0 30px 0"
  },
  linkContainer: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.87)"
  },
  imageDescription_container: {
    border: "3px solid rgb(0, 0, 0, 0.3)",
    padding: "15px",
    borderRadius: "5px"
  },
  giftImageContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px 0"
  },
  giftImage: {
    width: "40%",
    overflow: "hidden"
  },
  giftTitle: {
    width: "60%",
    display: "flex",
    justifyContent: "center"
  },
  giftDescription_container: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "0 15px 0 35px"
  },
  chanceText_container: {
    color: "rgba(0, 0, 0, 0.8)",
    margin: "10px 0 0 0",
    textAlign: "right",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold"
  },
  rewardText_container: {
    color: "rgba(0, 0, 0, 0.8)",
    margin: "10px 0 0 0",
    fontFamily: "CoreSans, sans-serif"
  },
  chanceText: {
    margin: "3px 0 0 0"
  },
  rewardText: {
    margin: "3px 0 0 0"
  },
  giftSelectButton_container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "15px 0 0 0"
  },
  giftSelectButton: {
    fontWeight: "bold",
    backgroundColor: "#4caf50",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "126px",
    height: "50px"
  },
  nextButton: {
    fontWeight: "bold",
    backgroundColor: "#4caf50",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "126px",
    height: "50px",
    margin: "0 0 35px 0"
  },
  disableButton: {
    fontWeight: "bold",
    backgroundColor: "lightgray",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "126px",
    height: "50px",
    margin: "0 0 35px 0"
  }
});
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  overrides: {
    MuiButton: {
      root: {
        height: "60px",
        width: "100%",
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50"
          }
        }
      }
    },
    MuiNativeSelect: {
      root: {
        height: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.7)"
      },
      select: {
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
        padding: "8px 0 8px 12px",
        height: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        "&:focus": {
          backgroundColor: "rgba(255, 255, 255, 0.7)"
        }
      }
    },
    MuiFormControl: {
      root: {
        width: "70%",
        margin: "0 0 28px 0"
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo,
  parentShopInfo
}) {
  const classes = useStyles();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        durationChosen = _useState2[0],
        setDurationChosen = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        giftChosen = _useState4[0],
        setGiftChosen = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState6 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        selectGift = _useState6[0],
        setSelectGift = _useState6[1];

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    gift_duration: ""
  }),
        _React$useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
        giftDuration = _React$useState2[0],
        setGiftDuration = _React$useState2[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState8 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
        activeDiv = _useState8[0],
        setActiveDiv = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState10 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
        showTemplateContainer = _useState10[0],
        setShowTemplateContainer = _useState10[1];

  const _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState12 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
        showContainer = _useState12[0],
        setShowContainer = _useState12[1];

  const userId = userDbInfo.id;
  /**
   * Sets gift duration state
   * Sets gift chosen state for validation
   */

  const handleGiftDuration = e => {
    const _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
    setGiftDuration(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, giftDuration, {
      [name]: value
    }));
    setDurationChosen(!durationChosen);
    setShowTemplateContainer(true);
    setShowContainer(true);
  };
  /**
   * Handle gift click, set validation to chosen and gift state to be passed to next component
   */


  const handleGiftClick = gift => {
    setGiftChosen(true);
    setSelectGift(gift);
    setActiveDiv(gift.gift_name);
  };
  /**
   * Renders the gift templates
   */


  const RenderGift = () => {
    return parentShopInfo.gift.map(gift => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.chooseGiftContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.giftTitle_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, gift.gift_name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.giftIntro_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, gift.gift_intro), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.imageDescription_container,
      style: {
        backgroundColor: gift.gift_name === activeDiv ? "#e0eee0" : "#f5f5f5",
        borderColor: gift.gift_name === activeDiv ? "#3d9140" : "rgba(0, 0, 0, 0.2)"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.giftImageContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      className: classes.giftImage,
      src: gift.image_url,
      alt: "lol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.giftDescription_container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.chanceText_container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, gift.gift_description.chance.map(chance => {
      {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: classes.chanceText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, chance * 100, "%");
      }
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.rewardText_container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, gift.gift_description.reward.map(reward => {
      {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: classes.rewardText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, reward);
      }
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.giftSelectButton_container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.giftSelectButton,
      onClick: () => handleGiftClick(gift),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, "Select"))));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.chooseGiftText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, "1. Choose Gift Duration"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.selectEmpty,
    value: giftDuration.gift_duration,
    name: "gift_duration",
    onChange: handleGiftDuration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, "Select Duration"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "3 Days"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "7 Days"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, "30 Days "))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_9__["CSSTransition"], {
    in: showContainer,
    timeout: 300,
    classNames: "gift_template",
    unmountOnExit: true,
    onEnter: () => setShowTemplateContainer(false),
    onExited: () => setShowTemplateContainer(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.chooseGiftAppearContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.giftOfferText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, "2. Choose Gift Template"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.giftInfoContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, parentShopInfo.gift ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RenderGift, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }) : null), giftChosen && durationChosen && selectGift.gift_name ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    className: classes.linkContainer,
    to: {
      pathname: "/businessGiftSelectShop",
      state: {
        userId,
        parentShopInfo,
        selectGift,
        giftDuration
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.nextButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "Next")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.disableButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "Next")))));
});

/***/ }),

/***/ "./src/components/Business/businessGiftHistoryPage.js":
/*!************************************************************!*\
  !*** ./src/components/Business/businessGiftHistoryPage.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _setupUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setupUI */ "./src/components/setupUI.js");
/* harmony import */ var _setupUI__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_setupUI__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _businessNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./businessNavigation */ "./src/components/Business/businessNavigation.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessGiftHistoryPage.js";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  giftInfo_outerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  recordText: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.7)",
    width: "70%",
    margin: "50px 0 10px 0",
    borderBottom: "1px solid black"
  },
  giftInfo_innerContainer: {
    width: "70%",
    margin: "15px 0px",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    borderBottom: "1px solid black" // padding: "0 0 10px 0",

  },
  shopName_text: {
    fontWeight: "bold"
  },
  giftName_text: {// fontWeight: "bold"
  },
  giftCreation_date: {
    display: "flex"
  },
  giftExpiry_date: {
    display: "flex"
  },
  startDate_text: {
    margin: "0 5px 0 0"
  },
  startDate: {
    fontWeight: "bold"
  },
  endDate_text: {
    margin: "0 5px 0 0"
  },
  endDate: {
    fontWeight: "bold"
  },
  disableButton_container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center" // display: "flex",
    // justifyContent: "center",
    // margin: "10px"

  },
  disable_button: {
    fontSize: "14px",
    fontWeight: "bold",
    backgroundColor: "rgba(204, 0, 0, 0.7)",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "94px",
    height: "35px",
    margin: "10px 0",
    borderRadius: "2px"
  },
  shopInfo_container: {
    backgroundColor: "#4a4a4a",
    color: "#fbfcfc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0"
  },
  expire_rewardInfo_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0 10px 0px",
    backgroundColor: "white"
  },
  live_text: {
    backgroundColor: "green",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    padding: "6px 15px",
    letterSpacing: "1px",
    margin: "0 10px 0 0"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo
}) {
  const classes = useStyles();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        giftRecord = _useState2[0],
        setGiftRecord = _useState2[1];

  const db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
  const currentTime = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()).toDate();
  /**
   * Fetch gift records before component mounts
   */

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetch_giftRecord();
  }, []);
  /**
   * Fetches gift record and populate gift array
   */

  const fetch_giftRecord = async () => {
    const db_giftRecord = await db.collection("businessUser").doc(userDbInfo.id).collection("giftRecord").get();
    let giftRecordArray = [];
    db_giftRecord.docs.map(doc => {
      for (let giftTemplate in doc.data()) {
        doc.data()[giftTemplate].map(gift => {
          // Adds all gifts
          giftRecordArray.push(gift); // Adds only gifts that expired
          // if (currentTime > moment(gift.gift_expiry_date)) {
          //   giftRecordArray.push(gift);
          // }
        });
      }
    }); // Sorts the gift, newest at the front

    giftRecordArray.sort(function compareDate(a, b) {
      const dateA = moment__WEBPACK_IMPORTED_MODULE_9___default()(a.gift_expiry_date);
      const dateB = moment__WEBPACK_IMPORTED_MODULE_9___default()(b.gift_expiry_date);
      return dateB - dateA;
    });
    setGiftRecord(giftRecordArray);
  };
  /**
   * Disables the gift on shop side and public gift side
   */


  const disableGift = async gift => {
    // Get gift array from shop that needs to be updated
    const giftArrayRef = db.collection("businessUser").doc(userDbInfo.id).collection("giftRecord").doc(gift.gift_name);
    const giftArray = await giftArrayRef.get();
    const giftArrayCopy = giftArray.data()[gift.gift_name];

    for (let i = giftArrayCopy.length - 1; i >= 0; i--) {
      if (giftArrayCopy[i].gift_id == gift.gift_id) {
        console.log("updating array at index: " + i);
        giftArrayCopy[i].gift_expiry_date = moment__WEBPACK_IMPORTED_MODULE_9___default()(firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()).toDate()).format();
      }
    }

    console.log({
      [gift.gift_name]: giftArrayCopy
    });
    console.log(giftArray.data());
    giftArrayRef.set({
      [gift.gift_name]: giftArrayCopy
    }); // Updating array of gift in location
    // Gets shop information first to cross match address to ensure gift belongs to that shop

    const businessUser_ref = db.collection("businessUser").doc(userDbInfo.id);
    const businessUser_info = await businessUser_ref.get();
    const shopArray = businessUser_info.data().shop;

    for (let k = 0; k < shopArray.length; k++) {
      if (shopArray[k].shop_address == gift.shop_address) {
        const shopLocation_ref = db.collection("gift").doc(shopArray[k].shop_country).collection(shopArray[k].shop_region).doc(shopArray[k].shop_city).collection("area").doc(shopArray[k].shop_area);
        const cityRefSnapshop = await shopLocation_ref.get();
        let claimedGifts = cityRefSnapshop.data().gift;

        for (let j = claimedGifts.length - 1; j >= 0; j--) {
          if (claimedGifts[j].gift_id == gift.gift_id) {
            claimedGifts[j].gift_expiry_date = moment__WEBPACK_IMPORTED_MODULE_9___default()(firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now(new Date()).toDate()).format();
          }
        }

        shopLocation_ref.set({
          gift: claimedGifts
        });
      }
    }
  };

  const RenderGiftHistory = () => {
    if (giftRecord && giftRecord[0]) {
      // Renders gift information
      // If gift has not expire, renders diable button as well
      return giftRecord.map(gift => currentTime < moment__WEBPACK_IMPORTED_MODULE_9___default()(gift.gift_expiry_date) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.giftInfo_innerContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.shopInfo_container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.shopName_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, gift.shop_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.shopAddress_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, gift.shop_address), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.shopCity_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, gift.shop_city)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.expire_rewardInfo_container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.giftName_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, gift.gift_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.giftCreation_date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.startDate_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Start time:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.startDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_9___default()(gift.gift_creation_date).format("LL"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.giftExpiry_date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.endDate_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "End time:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.endDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_9___default()(gift.gift_expiry_date).format("LL"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.disableButton_container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.live_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Live"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: classes.disable_button,
        onClick: () => disableGift(gift),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Disable")))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.giftInfo_innerContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.shopName_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, gift.shop_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.shopAddress_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, gift.shop_address), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.shopCity_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, gift.shop_city), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.giftName_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, gift.gift_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.giftCreation_date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.startDate_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Start time:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.startDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_9___default()(gift.gift_creation_date).format("LL"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.giftExpiry_date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.endDate_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "End time:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.endDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_9___default()(gift.gift_expiry_date).format("LL")))));
    } else return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, "No gift record");
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.giftInfo_outerContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.recordText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "Gift Record"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RenderGiftHistory, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/Business/businessHomePage.js":
/*!*****************************************************!*\
  !*** ./src/components/Business/businessHomePage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _businessNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./businessNavigation */ "./src/components/Business/businessNavigation.js");

var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessHomePage.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  home_container: {
    // backgroundImage:
    //   'url("https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fbackground_35.png?alt=media&token=a5be174a-cd06-4d97-b282-be6b33e71946")',
    backgroundColor: "rgba(241, 241, 241, 0.7)"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  location
}) {
  const classes = useStyles();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        userAuthInfo = _useState2[0],
        setUserAuthnfo = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        userDbInfo = _useState4[0],
        setUserDbInfo = _useState4[1];

  console.log("business home");
  console.log(location);
  _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().onAuthStateChanged(user => {
    if (user != null) {
      setUserAuthnfo(user);
    }
  });
  /**
   * Sets initial state of userDbInfo and shopInfo
   */

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function fetchUserInfo() {
      if (userAuthInfo && userAuthInfo.uid) {
        const db = _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
        const user = await db.collection("businessUser").doc(userAuthInfo.uid).get();
        setUserDbInfo(user);
      }
    }

    fetchUserInfo();
  }, [userAuthInfo]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.home_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.bgImage_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, userDbInfo && userDbInfo.data() ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_businessNavigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    userDbInfo: userDbInfo,
    location: location,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }) : null));
});

/***/ }),

/***/ "./src/components/Business/businessInfoPage.js":
/*!*****************************************************!*\
  !*** ./src/components/Business/businessInfoPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _businessLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./businessLogin */ "./src/components/Business/businessLogin.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _landingPageNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../landingPageNavigation */ "./src/components/landingPageNavigation.js");
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessInfoPage.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_businessLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })));
});

/***/ }),

/***/ "./src/components/Business/businessLogin.js":
/*!**************************************************!*\
  !*** ./src/components/Business/businessLogin.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-material-ui-form-validator */ "./node_modules/react-material-ui-form-validator/lib/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessLogin.js";










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  welcomeText: {
    fontSize: "14px",
    fontSize: "16px",
    margin: "80px 0 28px 0",
    display: "flex",
    width: "70%",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif"
  },
  passwordContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  businessLoginContainer: {
    width: "100vw",
    display: "flex",
    justifyContent: "center"
  },
  root: {
    margin: "0 0 32px 0",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  forgotPasswordText: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    padding: "28px 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)"
  },
  dontHaveAccountText: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    padding: "28px 0 28px 0"
  },
  signUpText: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif"
  },
  registerBusinessLinkContainer: {
    textDecoration: "none"
  },
  signupButton: {
    width: "100%"
  },
  register_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  register_button: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.09) !important",
    color: "black"
  }
});
/**
 * Overrides MUI theme css
 */

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(205, 239, 245, 0.4)",
        "&$focused": {
          backgroundColor: "rgba(205, 239, 245, 0.8) !important"
        }
      },
      underline: {
        "&$focused": {// borderBottom: "1px solid black",
        },
        "&:after": {
          borderBottom: "2px solid black"
        }
      }
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0"
      }
    },
    MuiButton: {
      root: {
        // backgroundColor: "rgba(0, 0, 0, 0.05)",
        backgroundColor: "#4caf50 !important",
        height: "60px"
      },
      text: {
        color: "white",
        letterSpacing: "1px"
      }
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "0 0 28px 0"
      }
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "black"
        }
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px"
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const classes = useStyles();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    password: "",
    email: ""
  }),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        loginValue = _useState2[0],
        setLoginValue = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        showPassword = _useState4[0],
        setShowPassword = _useState4[1];
  /**
   * Shows password when eye icon is clicked
   */


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  /**
   * Checks user auth status
   * If approved, takes user to approved home page else pending page
   */


  _firebase__WEBPACK_IMPORTED_MODULE_6__["default"].auth().onAuthStateChanged(user => {
    if (user != null) {
      currentUser.getIdTokenResult().then(idTokenResult => {
        if (idTokenResult.claims.is_approve) {
          history.push("/businessHome");
        } else {
          history.push("/businessPending");
        }
      });
    }
  });
  /**
   * Signs business user in
   */

  const businessLogin = async () => {
    await _firebase__WEBPACK_IMPORTED_MODULE_6__["default"].auth().signInWithEmailAndPassword(loginValue.email, loginValue.password);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.businessLoginContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["ValidatorForm"], {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: businessLogin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.welcomeText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Welcome back!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    id: "filled-basic",
    label: "Email",
    variant: "filled",
    value: loginValue.email,
    validators: ["required", "isEmail"],
    errorMessages: ["Email address is requred", "Email address is not valid"],
    onChange: e => setLoginValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, loginValue, {
      email: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.passwordContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    id: "filled-basic",
    label: "Password",
    variant: "filled",
    type: showPassword ? "text" : "password",
    value: loginValue.password,
    validators: ["required"],
    errorMessages: ["Password is required"],
    onChange: e => setLoginValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, loginValue, {
      password: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.passwordIcon,
    "aria-label": "toggle password visibility",
    onClick: handleClickShowPassword,
    onMouseDown: handleMouseDownPassword,
    edge: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, showPassword ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "LOG IN"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.forgotPasswordText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "Forgot Your Password?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.register_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.dontHaveAccountText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, "Don't have an account?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.register_button,
    onClick: () => history.push("/registerBusiness"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "Register"))))));
});

/***/ }),

/***/ "./src/components/Business/businessManageShopPage.css":
/*!************************************************************!*\
  !*** ./src/components/Business/businessManageShopPage.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./businessManageShopPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Business/businessManageShopPage.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./businessManageShopPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Business/businessManageShopPage.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./businessManageShopPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Business/businessManageShopPage.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/Business/businessManageShopPage.js":
/*!***********************************************************!*\
  !*** ./src/components/Business/businessManageShopPage.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _businessAddShopPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./businessAddShopPage */ "./src/components/Business/businessAddShopPage.js");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-material-ui-form-validator */ "./node_modules/react-material-ui-form-validator/lib/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _businessManageShopPage_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./businessManageShopPage.css */ "./src/components/Business/businessManageShopPage.css");
/* harmony import */ var _businessManageShopPage_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_businessManageShopPage_css__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessManageShopPage.js";














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  manageShop_text: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.7)",
    width: "80%",
    margin: "50px 0 20px 0"
  },
  formContainer: {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  countryContainer: {
    margin: "0 0 28px 0",
    width: "100%"
  },
  regionContainer: {
    margin: "0 0 28px 0"
  },
  countryErrorMessage: {
    fontSize: "12.5px",
    color: "#f44336",
    padding: "5px 0 0 14px",
    fontFamily: "CoreSans, sans-serif"
  },
  regionErrorMessage: {
    fontSize: "12.5px",
    color: "#f44336",
    padding: "5px 0 0 14px",
    fontFamily: "CoreSans, sans-serif"
  },
  updateButton: {
    width: "50%",
    border: "0",
    height: "50px",
    backgroundColor: "#4caf50 !important",
    borderRadius: "0",
    borderRadius: "4px",
    fontSize: "16px",
    outline: "none",
    color: "white",
    padding: "6px 8px",
    margin: "0 0 15px 0",
    textTransform: "none",
    letterSpacing: "1px"
  },
  deleteShopContainer: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0 0 28px 0"
  },
  deleteShopButton: {
    fontSize: "12px",
    height: "40px"
  },
  openCloseForm: {
    margin: "28px 0 20px 0",
    fontWeight: "bold",
    backgroundColor: "#4caf50",
    color: "white",
    textTransform: "none",
    letterSpacing: "1px",
    padding: "6px 8px",
    width: "126px",
    height: "50px"
  },
  addShop_container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    borderTop: "1px solid rgba(0, 0, 0, 0.2)"
  }
}));
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(255, 255, 255, 0.7)"
      }
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0"
      }
    },
    MuiButton: {
      root: {
        height: "60px",
        width: "100%",
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50"
          }
        }
      }
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "0 0 28px 0"
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px"
      }
    },
    MuiExpansionPanel: {
      root: {
        width: "80%",
        position: "none"
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: "0",
        justifyContent: "center",
        margin: "20px 0 0 0"
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        height: "60px",
        padding: "0",
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
      },
      content: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: "16px",
        fontFamily: "CoreSans, sans-serif"
      }
    },
    MuiPaper: {
      elevation1: {
        boxShadow: "none"
      },
      root: {
        backgroundColor: "none"
      }
    }
  }
});
const db = _firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
let countryArray = [];
let regionArray = [];
let cityArray = [];
let cityAreaArray = [];
/**
 * Form outside of export function so input doesnt unfocus after single character change
 */

const FormComponent = ({
  classes,
  setParentShopInfo,
  parentShopInfo,
  handleShopProfileUpdate,
  handleRemoveShop
}) => {
  return parentShopInfo.shop ? parentShopInfo.shop.map((shop, index) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_9__["default"], {
    expandIcon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: undefined
    }),
    "aria-controls": "panel1a-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, shop.shop_name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__["ValidatorForm"], {
    key: index,
    className: classes.formContainer,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleShopProfileUpdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__["TextValidator"], {
    id: "filled-basic",
    label: "Shop Name",
    variant: "filled",
    InputLabelProps: {
      shrink: true
    },
    value: shop.shop_name,
    validators: ["required"],
    errorMessages: ["Shop name is requred"],
    name: "shop_name",
    onChange: e => handleShopProfileChange(setParentShopInfo, parentShopInfo, index, e),
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__["TextValidator"], {
    id: "filled-basic",
    label: "Address",
    variant: "filled",
    InputLabelProps: {
      shrink: true
    },
    value: shop.shop_address,
    validators: ["required"],
    errorMessages: ["Address is requred"],
    name: "shop_address",
    onChange: e => handleShopProfileChange(setParentShopInfo, parentShopInfo, index, e),
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__["TextValidator"], {
    id: "filled-basic",
    label: "Country",
    variant: "filled",
    InputLabelProps: {
      shrink: true
    },
    value: shop.shop_country,
    validators: ["required"],
    errorMessages: ["Country is requred"],
    name: "shop_country",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__["TextValidator"], {
    id: "filled-basic",
    label: "Region",
    variant: "filled",
    InputLabelProps: {
      shrink: true
    },
    value: shop.shop_region,
    validators: ["required"],
    errorMessages: ["Region is requred"],
    name: "shop_region",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__["TextValidator"], {
    id: "filled-basic",
    label: "City",
    variant: "filled",
    InputLabelProps: {
      shrink: true
    },
    value: shop.shop_city,
    validators: ["required"],
    errorMessages: ["City is requred"],
    name: "shop_city",
    disabled: true // onChange={(e) =>
    //   handleShopProfileChange(
    //     setParentShopInfo,
    //     parentShopInfo,
    //     index,
    //     e
    //   )
    // }
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__["TextValidator"], {
    id: "filled-basic",
    label: "Area",
    variant: "filled",
    InputLabelProps: {
      shrink: true
    },
    value: shop.shop_area,
    validators: ["required"],
    errorMessages: ["Area is requred"],
    name: "shop_cityArea",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.deleteShopContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.deleteShopButton,
    onClick: e => handleRemoveShop(shop, e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: undefined
  }, "Delete Shop")))))) : null;
};

const handleRegionChange = (setParentShopInfo, parentShopInfo, index, region) => {
  let shopInfoCopy = parentShopInfo.shop;
  shopInfoCopy[index].shop_region = region;
  setParentShopInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, parentShopInfo, {
    shop: shopInfoCopy
  }));
};

const handleCountryChange = async (e, setParentShopInfo, parentShopInfo, index, locationInfo, selectDisable, locationValid, setLocationInfo, setSelectDisable, setLocationValid) => {
  let shopInfoCopy = parentShopInfo.shop;
  shopInfoCopy[index].shop_country = e.target.value;
  setParentShopInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, parentShopInfo, {
    shop: shopInfoCopy
  }));
  const regionCollection = await db.collection("country").doc(e.target.value).collection("region").get();
  regionCollection.docs.map(region => regionArray.push(region.id));
  setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, locationInfo, {
    regionArray: regionArray
  }));
  setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, selectDisable, {
    regionDisable: false,
    cityDisable: true,
    cityAreaDisable: true
  }));
  setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, locationValid, {
    country: true,
    region: false,
    city: false,
    cityArea: false
  }));
};
/**
 * Handler for shop information inputs
 * @param {*} index Parameter to indicate which index in array to update
 */


const handleShopProfileChange = (setParentShopInfo, parentShopInfo, index, e) => {
  e.preventDefault();
  const _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
  let shopInfoCopy = parentShopInfo.shop;
  shopInfoCopy[index][name] = value;
  setParentShopInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, parentShopInfo, {
    shop: shopInfoCopy
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo,
  parentShopInfo,
  setParentShopInfo
}) {
  const classes = useStyles();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        countryErrorState = _useState2[0],
        setCountryErrorState = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        regionErrorState = _useState4[0],
        setRegionErrorState = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState6 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        newParentShopInfo = _useState6[0],
        setNewParentShopInfo = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        _useState8 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        showButton = _useState8[0],
        setShowButton = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState10 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
        showMessage = _useState10[0],
        setShowMessage = _useState10[1];

  const _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState12 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
        locationInfo = _useState12[0],
        setLocationInfo = _useState12[1];

  const _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    regionDisable: true,
    cityDisable: true,
    cityAreaDisable: true
  }),
        _useState14 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
        selectDisable = _useState14[0],
        setSelectDisable = _useState14[1];

  const _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cityArea: true,
    city: true,
    region: true,
    country: false
  }),
        _useState16 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState15, 2),
        locationValid = _useState16[0],
        setLocationValid = _useState16[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const fetchCountryInfo = async () => {
      // console.log("this is the profile page");
      const countryCollection = await db.collection("country").get();
      countryCollection.docs.map(country => countryArray.push(country.id));
      console.log("this is userDB data");
      console.log(userDbInfo.data()); // let cityCollection = await db
      // .collection("country")
      // .doc(userDbInfo.data().user_country)
      // .collection("region")
      // .doc(userDbInfo.data().user_region)
      // .collection("city")
      // .get();
      // cityCollection.docs.map((city) => cityArray.push(city.id));
      //   setLocationInfo({
      //     ...locationInfo,
      //     countryArray: countryArray,
      //     regionArray: regionArray,
      //     cityArray: cityArray,
      //     cityAreaArray: cityAreaArray,
      //   });
    };

    fetchCountryInfo();
    setNewParentShopInfo(parentShopInfo);
  }, []);
  /**
   * Updates shop info on the DB
   */

  function handleShopProfileUpdate(e) {
    e.preventDefault();
    db.collection("businessUser").doc(userDbInfo.id).set(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, parentShopInfo, {
      shop: parentShopInfo.shop
    }));
  }
  /**
   * Handles removing a shop
   * @param {*} shop
   */


  function handleRemoveShop(shop, e) {
    e.preventDefault();
    const filterRemoveShop = parentShopInfo.shop.filter(shopInfoShop => {
      return shopInfoShop.shop_address != shop.shop_address;
    });
    db.collection("businessUser").doc(userDbInfo.id).set(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, parentShopInfo, {
      shop: filterRemoveShop
    }));
    setParentShopInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, parentShopInfo, {
      shop: filterRemoveShop
    }));
  }

  const validateCountryRegion = index => {
    if (newParentShopInfo.shop[index].shop_country == "") {
      console.log("country is empty");
      setCountryErrorState(true);
    } else {
      setCountryErrorState(false);
    }

    if (newParentShopInfo.shop[index].shop_region == "") {
      setRegionErrorState(true);
    } else {
      setRegionErrorState(false);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.manageShop_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, "Manage Shop"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, newParentShopInfo && newParentShopInfo.shop ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormComponent, {
    parentShopInfo: newParentShopInfo,
    handleShopProfileChange: handleShopProfileChange,
    handleShopProfileUpdate: handleShopProfileUpdate,
    handleRemoveShop: handleRemoveShop,
    setParentShopInfo: setNewParentShopInfo,
    countryErrorState: countryErrorState,
    regionErrorState: regionErrorState,
    classes: classes,
    validateCountryRegion: validateCountryRegion,
    locationInfo: locationInfo,
    setLocationInfo: setLocationInfo,
    selectDisable: selectDisable,
    setSelectDisable: setSelectDisable,
    locationValid: locationValid,
    setLocationValid: setLocationValid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }) : null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.addShop_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  }, showMessage ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.openCloseForm,
    onClick: () => setShowMessage(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, "Close") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.openCloseForm,
    onClick: () => setShowMessage(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  }, "Add Shop"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_14__["CSSTransition"], {
    in: showMessage,
    timeout: 200,
    classNames: "alert",
    unmountOnExit: true,
    onEnter: () => setShowButton(false),
    onExited: () => setShowButton(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_businessAddShopPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    userDbInfo: userDbInfo,
    parentShopInfo: parentShopInfo,
    setParentShopInfo: setParentShopInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581
    },
    __self: this
  }))))));
});

/***/ }),

/***/ "./src/components/Business/businessNavigation.js":
/*!*******************************************************!*\
  !*** ./src/components/Business/businessNavigation.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-div-100vh */ "./node_modules/react-div-100vh/lib/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _businessCreateGiftPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./businessCreateGiftPage */ "./src/components/Business/businessCreateGiftPage.js");
/* harmony import */ var _businessGiftHistoryPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./businessGiftHistoryPage */ "./src/components/Business/businessGiftHistoryPage.js");
/* harmony import */ var _businessProfilePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./businessProfilePage */ "./src/components/Business/businessProfilePage.js");
/* harmony import */ var _businessManageShopPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./businessManageShopPage */ "./src/components/Business/businessManageShopPage.js");

var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessNavigation.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  div100Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  root: {
    width: 500
  },
  renderBodyContainer: {
    height: "100%",
    overflow: "auto"
  },
  profileIcon: {
    width: "100%"
  },
  navigationIconContainer: {
    height: "80px",
    backgroundColor: "white",
    padding: "0 40px 4px 40px",
    boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.03)",
    zIndex: "100",
    [theme.breakpoints.down(600)]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    }
  },
  icon_container: {
    fontFamily: "Lato, sans-serif",
    width: "10%",
    height: "54px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image_container: {
    display: "flex",
    justifyContent: "center",
    width: "32px",
    height: "32px"
  },
  create_icon_image: {
    width: "95%",
    margin: "5px 0 0 0"
  },
  giftList_image: {
    width: "25px",
    height: "25px",
    margin: "5px 0 0 0"
  },
  iconTitle: {
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    margin: "3px 0 0 0"
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo,
  location
}) {
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("create"),
        _React$useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        value = _React$useState2[0],
        setValue = _React$useState2[1];

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        parentShopInfo = _useState2[0],
        setParentShopInfo = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setParentShopInfo(userDbInfo.data());
    console.log("this is navigation page", userDbInfo.data());

    if (location && location.state) {
      if (value == "") {
        setValue("create");
      } else {
        setValue(location.state.pushState);
      }
    }
  }, []);

  const RenderBody = () => {
    if (value == "") {
      return null;
    }

    if (value == "create") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_businessCreateGiftPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        userDbInfo: userDbInfo,
        parentShopInfo: parentShopInfo,
        setValue: setValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }) // null
      ;
    }

    if (value == "history") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_businessGiftHistoryPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        userDbInfo: userDbInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }); // return null
    }

    if (value == "shop") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_businessManageShopPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        userDbInfo: userDbInfo,
        parentShopInfo: parentShopInfo,
        setParentShopInfo: setParentShopInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }) // null
      ;
    }

    if (value == "profile") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_businessProfilePage__WEBPACK_IMPORTED_MODULE_6__["default"], {
        userDbInfo: userDbInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_div_100vh__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.div100Container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.renderBodyContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RenderBody, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.navigationIconContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.icon_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.image_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: classes.giftList_image,
    style: {
      filter: value === "create" ? "invert(58%) sepia(11%) saturate(3250%) hue-rotate(-98deg) brightness(80%) contrast(82%)" : null
    },
    src: "img/rolll.png",
    onClick: () => setValue("create"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.iconTitle,
    style: {
      color: value === "create" ? "black" : "#a9a8a9"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Create")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.icon_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.image_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: classes.giftList_image,
    style: {
      filter: value === "history" ? "invert(33%) sepia(93%) saturate(2157%) hue-rotate(110deg) brightness(70%) contrast(101%)" : null
    },
    src: "img/history.png",
    onClick: () => setValue("history"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.iconTitle,
    style: {
      color: value === "history" ? "black" : "#a9a8a9"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Record")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.icon_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.image_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: classes.giftList_image,
    style: {
      filter: value === "shop" ? "invert(86%) sepia(71%) saturate(625%) hue-rotate(3deg) brightness(94%) contrast(95%)" : null
    },
    src: "img/shop.png",
    onClick: () => setValue("shop"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.iconTitle,
    style: {
      color: value === "shop" ? "black" : "#a9a8a9"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Shop")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.icon_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.image_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: classes.giftList_image,
    style: {
      filter: value === "profile" ? "invert(10%) sepia(100%) saturate(7026%) hue-rotate(252deg) brightness(70%) contrast(124%)" : null
    },
    src: "img/profile_v2.png",
    onClick: () => setValue("profile"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.iconTitle,
    style: {
      color: value === "profile" ? "black" : "#a9a8a9"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Profile"))));
});

/***/ }),

/***/ "./src/components/Business/businessPendingPage.js":
/*!********************************************************!*\
  !*** ./src/components/Business/businessPendingPage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessPendingPage.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "This is the business pending page.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: async e => {
      e.preventDefault();
      _firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signOut();
      history.push("/home");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Log out"));
});

/***/ }),

/***/ "./src/components/Business/businessProfilePage.js":
/*!********************************************************!*\
  !*** ./src/components/Business/businessProfilePage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-material-ui-form-validator */ "./node_modules/react-material-ui-form-validator/lib/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessProfilePage.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  businessProfilePageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  maangerInfoText: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "45px 0 20px 0",
    display: "flex",
    width: "70%",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif"
  },
  formContainer: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  inputStyle: {
    width: "80%",
    padding: "12px 20px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box"
  },
  logoutButtonContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  logoutButton: {
    width: "40%",
    fontSize: "12px",
    padding: "0",
    height: "40px",
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  updateButton: {
    textTransform: "none",
    backgroundColor: "#4caf50",
    color: "rgba(255, 255, 255)",
    letterSpacing: "1px",
    fontSize: "16px",
    width: "50%",
    margin: " 0 0 12px 0",
    height: "50px"
  }
});
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(255, 255, 255, 0.7)"
      },
      input: {
        "&:disabled": {
          backgroundColor: "rgba(234, 234, 234)"
        }
      }
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0"
      }
    },
    MuiButton: {
      root: {
        backgroundColor: "#4caf50",
        height: "60px",
        margin: "0 0 28px 0",
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50"
          }
        }
      }
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "0 0 28px 0"
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px"
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo
}) {
  const classes = useStyles();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        userInfo = _useState2[0],
        setUserInfo = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setUserInfo(userDbInfo.data());
  }, []);
  /**
   * Handles profile changes
   */

  function handleProfileChange(e) {
    const _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
    console.log(value);
    setUserInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userInfo, {
      [name]: value
    }));
  }
  /**
   * Handles profile submit
   */


  function handleProfileSubmit(e) {
    e.preventDefault();
    console.log("profile submiting...");
    const db = _firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
    db.collection("businessUser").doc(userDbInfo.id).update({
      email: userInfo.email,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      phone_number: userInfo.phone_number
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.businessProfilePageContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.maangerInfoText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "User Info"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__["ValidatorForm"], {
    className: classes.formContainer,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleProfileSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__["TextValidator"], {
    className: classes.emailInput // disabled="true"
    ,
    id: "filled-basic",
    label: "Email",
    InputLabelProps: {
      shrink: true
    },
    variant: "filled",
    value: userInfo && userInfo.email,
    validators: ["required", "isEmail"],
    errorMessages: ["Email address is requred", "Email address is not valid"],
    name: "email",
    onChange: handleProfileChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__["TextValidator"], {
    id: "filled-basic",
    label: "First Name",
    InputLabelProps: {
      shrink: true
    },
    variant: "filled",
    value: userInfo && userInfo.first_name,
    validators: ["required"],
    errorMessages: ["First name is requred"],
    name: "first_name",
    onChange: handleProfileChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__["TextValidator"], {
    id: "filled-basic",
    label: "Last Name",
    InputLabelProps: {
      shrink: true
    },
    variant: "filled",
    value: userInfo && userInfo.last_name,
    validators: ["required"],
    errorMessages: ["Last name is requred"],
    name: "last_name",
    onChange: handleProfileChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_7__["TextValidator"], {
    id: "filled-basic",
    label: "Phone Number",
    InputLabelProps: {
      shrink: true
    },
    variant: "filled",
    value: userInfo && userInfo.phone_number,
    validators: ["required"],
    errorMessages: ["Phone number is requred"],
    name: "phone_number",
    onChange: handleProfileChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.updateButton,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Update"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.logoutButtonContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.logoutButton,
    onClick: async e => {
      e.preventDefault();
      await _firebase__WEBPACK_IMPORTED_MODULE_4__["default"].auth().signOut();
      history.push("./home");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Log out")))));
});

/***/ }),

/***/ "./src/components/Business/businessRegisterPage.js":
/*!*********************************************************!*\
  !*** ./src/components/Business/businessRegisterPage.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _businessSignupForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./businessSignupForm */ "./src/components/Business/businessSignupForm.js");
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessRegisterPage.js";



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_businessSignupForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/Business/businessSelectShopNavigation.js":
/*!*****************************************************************!*\
  !*** ./src/components/Business/businessSelectShopNavigation.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ "./node_modules/@material-ui/core/esm/BottomNavigation/index.js");
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ "./node_modules/@material-ui/core/esm/BottomNavigationAction/index.js");
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Folder */ "./node_modules/@material-ui/icons/Folder.js");
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Restore */ "./node_modules/@material-ui/icons/Restore.js");
/* harmony import */ var _material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Create */ "./node_modules/@material-ui/icons/Create.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Face */ "./node_modules/@material-ui/icons/Face.js");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_DynamicFeed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/DynamicFeed */ "./node_modules/@material-ui/icons/DynamicFeed.js");
/* harmony import */ var _material_ui_icons_DynamicFeed__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DynamicFeed__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-div-100vh */ "./node_modules/react-div-100vh/lib/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _businessActiveGiftPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./businessActiveGiftPage */ "./src/components/Business/businessActiveGiftPage.js");
/* harmony import */ var _businessCreateGiftPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./businessCreateGiftPage */ "./src/components/Business/businessCreateGiftPage.js");
/* harmony import */ var _businessGiftHistoryPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./businessGiftHistoryPage */ "./src/components/Business/businessGiftHistoryPage.js");
/* harmony import */ var _businessProfilePage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./businessProfilePage */ "./src/components/Business/businessProfilePage.js");
/* harmony import */ var _businessManageShopPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./businessManageShopPage */ "./src/components/Business/businessManageShopPage.js");

var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessSelectShopNavigation.js";











 // Navigation Icons


 // Navigation Pages






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  div100Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  root: {
    width: 500
  },
  renderBodyContainer: {
    height: "600px",
    overflow: "auto"
  },
  profileIcon: {
    width: "100%"
  },
  navigationIconContainer: {
    // borderTop: "1px solid rgba(0, 0, 0, 0.15)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "14%",
    padding: "0 15px",
    backgroundColor: "lightgray"
  },
  icon_container: {
    width: "10%",
    height: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image_container: {
    display: "flex",
    justifyContent: "center",
    width: "42px",
    height: "42px"
  },
  create_icon_image: {
    width: "95%",
    margin: "5px 0 0 0"
  },
  history_icon_image: {
    width: "80%",
    margin: "3px 0 0 0"
  },
  shop_icon_image: {
    width: "90%",
    margin: "6px 0 0 0",
    height: "35px"
  },
  profile_icon_image: {
    width: "100%",
    margin: "3px 0 0 0",
    height: "37px"
  },
  iconTitle: {
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    margin: "3px 0 0 0"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo
}) {
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
        _React$useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        value = _React$useState2[0],
        setValue = _React$useState2[1];

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        parentShopInfo = _useState2[0],
        setParentShopInfo = _useState2[1];

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useHistory"])();

  const handleCreate = () => {
    const pushState = "create";
    history.push({
      pathname: "/businessHome",
      state: {
        pushState
      }
    });
  };

  const handleHistory = () => {
    const pushState = "history";
    history.push({
      pathname: "/businessHome",
      state: {
        pushState
      }
    });
  };

  const handleShop = () => {
    const pushState = "shop";
    history.push({
      pathname: "/businessHome",
      state: {
        pushState
      }
    });
  };

  const handleProfile = () => {
    const pushState = "profile";
    history.push({
      pathname: "/businessHome",
      state: {
        pushState
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.navigationIconContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.icon_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.image_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: classes.create_icon_image,
    style: {
      filter: value === "create" ? null : null
    },
    src: "https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2FplainBlue_giftBox.png?alt=media&token=73690a9c-81c8-4d84-88dc-e10a8784fab3",
    onClick: () => handleCreate(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.iconTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Create")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.icon_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.image_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: classes.history_icon_image,
    style: {
      filter: value === "history" ? null : "grayscale(1)"
    },
    src: "https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fhistory_icon.png?alt=media&token=2cf92ec6-bddb-4f92-a2b2-84df39e8e818",
    onClick: () => handleHistory(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.iconTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Record")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.icon_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.image_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: classes.shop_icon_image,
    style: {
      filter: value === "shop" ? null : "grayscale(1)"
    },
    src: "https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fshop.png?alt=media&token=541c16fe-7ab4-441d-ae67-430c9b4f7a31",
    onClick: () => handleShop(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.iconTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Shop")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.icon_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: classes.profile_icon_image,
    style: {
      filter: value === "profile" ? null : "grayscale(1)"
    },
    src: "https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fprofile_icon.png?alt=media&token=2611a18c-502f-47e3-8dac-252adec806cd",
    onClick: () => handleProfile(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.iconTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Profi")));
});

/***/ }),

/***/ "./src/components/Business/businessSignupForm.js":
/*!*******************************************************!*\
  !*** ./src/components/Business/businessSignupForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-material-ui-form-validator */ "./node_modules/react-material-ui-form-validator/lib/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _landingPageNavigation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../landingPageNavigation */ "./src/components/landingPageNavigation.js");


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/Business/businessSignupForm.js";














 // Required for side-effects

__webpack_require__(/*! firebase/functions */ "./node_modules/firebase/functions/dist/index.esm.js");
/**
 * CSS of the page
 */


const CssTextField = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"]);
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
  signupFormContainer: {
    display: "flex",
    flexDirection: "column"
  },
  rollWithUsTextUsText: {
    fontSize: "14px",
    fontSize: "16px",
    margin: "80px 0 15px 0",
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif"
  },
  root: {
    margin: "0 0 32px 0",
    width: "100vw",
    display: "flex",
    justifyContent: "center"
  },
  formContainer: {
    width: "70%",
    display: "flex",
    flexDirection: "column"
  },
  countryOuterContainer: {
    margin: "0 0 28px 0"
  },
  countryContainer: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
  },
  countryErrorMessage: {
    fontSize: "12.5px",
    color: "#f44336",
    padding: "5px 0 0 14px",
    fontFamily: "CoreSans, sans-serif"
  },
  regionErrorMessage: {
    fontSize: "12.5px",
    color: "#f44336",
    padding: "5px 0 0 14px",
    fontFamily: "CoreSans, sans-serif"
  },
  regionOuterContainer: {
    margin: "0 0 28px 0"
  },
  regionContainer: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
  },
  passwordContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  outerFormContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  borderBottom: {
    padding: "4px 0 0 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
    width: "18%"
  },
  shopInfoTitle: {
    fontSize: "16px",
    margin: "40px 0 50px 0",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  managerInfoBorderBottom: {
    padding: "4px 0 0 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
    width: "13%"
  },
  managerInfoTitleContainer: {
    fontSize: "16px",
    margin: "40px 0 50px 0",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  signupPolicyContainer: {
    width: "70%",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    fontSize: "14px",
    textAlign: "center",
    margin: "0 0 80px 0",
    letterSpacing: "0.5px"
  },
  location_errorText: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "13px",
    color: "rgba(204, 0, 0, 1)",
    margin: "3px 0 0px 0px"
  },
  tos_text: {
    textDecoration: "none"
  },
  pp_text: {
    textDecoration: "none"
  }
}));
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(205, 239, 245, 0.4)",
        "&$focused": {
          backgroundColor: "rgba(205, 239, 245, 0.8) !important"
        }
      },
      underline: {
        "&$focused": {// borderBottom: "1px solid black",
        },
        "&:after": {
          borderBottom: "2px solid black"
        }
      }
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "black"
        }
      }
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0"
      }
    },
    MuiButton: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        height: "60px"
      }
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "0 0 28px 0"
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px"
      }
    },
    MuiNativeSelect: {
      root: {
        margin: "15px 0 10px 0",
        padding: "0 0 0 11px"
      },
      select: {
        "&$select": {
          backgroundColor: "transparent"
        }
      }
    }
  }
});
/**
 * This is the signup component
 * History from withRouter to navigate after signing up
 * @param {history} param0
 */

const SignUp = ({
  history
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        giftRecord = _useState2[0],
        setGiftRecord = _useState2[1];

  const classes = useStyles();

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    password: "",
    confirmPassword: "",
    shop_name: "",
    shop_address: "",
    shop_city: "",
    shop_region: "",
    //province or state or territory
    shop_country: "",
    shop_cityArea: "",
    shop_number: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: ""
  }),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        registrationValue = _useState4[0],
        setRegistrationValue = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState6 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        showPassword = _useState6[0],
        setShowPassword = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState8 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
        locationInfo = _useState8[0],
        setLocationInfo = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    regionDisable: true,
    cityDisable: true,
    cityAreaDisable: true
  }),
        _useState10 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
        selectDisable = _useState10[0],
        setSelectDisable = _useState10[1];

  const _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cityArea: true,
    city: true,
    region: true,
    country: false
  }),
        _useState12 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
        locationValid = _useState12[0],
        setLocationValid = _useState12[1];

  const db = _firebase__WEBPACK_IMPORTED_MODULE_7__["default"].firestore();
  let countryArray = [];
  let regionArray = [];
  let cityArray = [];
  let cityAreaArray = [];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    checkValidationRule();

    const fetchCountryInfo = async () => {
      const countryCollection = await db.collection("country").get();
      countryCollection.docs.map(country => countryArray.push(country.id));
      setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
        countryArray: countryArray,
        regionArray: regionArray,
        cityArray: cityArray,
        cityAreaArray: cityAreaArray
      }));
    };

    fetchCountryInfo();
  }, [registrationValue.confirmPassword]);

  const checkValidationRule = () => {
    console.log("checking password");
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["ValidatorForm"].addValidationRule("isPasswordMatch", value => {
      if (value !== registrationValue.password) {
        console.log(value + "     " + registrationValue.password);
        return false;
      }

      return true;
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  /**
   * This creates authentication user and also database user with the same unique ID
   * generated by Firebase
   */


  async function accountSignup(e) {
    const db = _firebase__WEBPACK_IMPORTED_MODULE_7__["default"].firestore();
    console.log(registrationValue);

    try {
      const credential = await _firebase__WEBPACK_IMPORTED_MODULE_7__["default"].auth().createUserWithEmailAndPassword(registrationValue.email, registrationValue.password);
      await db.collection("businessUser").doc(credential.user.uid).set({
        shop: [{
          shop_name: registrationValue.shop_name,
          shop_address: registrationValue.shop_address,
          shop_city: registrationValue.shop_city,
          shop_region: registrationValue.shop_region,
          shop_country: registrationValue.shop_country,
          shop_area: registrationValue.shop_cityArea
        }],
        first_name: registrationValue.first_name,
        last_name: registrationValue.last_name,
        phone_number: registrationValue.phone_number,
        email: registrationValue.email,
        is_approve: "false",
        gift: [{
          gift_name: "Essential Template",
          gift_intro: "This template is suitable for long term usage.  Ideal for attracting and retaining customers!",
          image_url: "https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fred_gift_box.png?alt=media&token=ace05975-618b-4e8d-b9fd-a7d83736e5eb",
          gift_description: {
            chance: [0.02, 0.08, 0.5, 0.4],
            reward: ["Free Drink", "15% Off", "10% Off", "Try Again"],
            expire_time: [5, 1440, 1440, 1440]
          }
        }, {
          gift_name: "Winner Template",
          gift_intro: "This template is perfect for celebratory events.  Let the community know you are there, make an impact!",
          image_url: "https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fblue_gift_box2.png?alt=media&token=a1e7a0ab-bf4e-4c07-8ca2-d4a841aa06b9",
          gift_description: {
            chance: [0.1, 0.3, 0.6],
            reward: ["Free Drink", "50% discount", "25% discount"],
            expire_time: [5, 5, 5]
          }
        }]
      });
    } catch (error) {
      console.log(error);
    } // Adds "shop role" to account after account creation


    const addBusinessUserRole = await _firebase__WEBPACK_IMPORTED_MODULE_7__["default"].functions().httpsCallable("addBusinessUserRole");
    addBusinessUserRole({
      email: registrationValue.email
    }).then(result => {
      console.log(result);
    }); // history.push("/businessHome");
  }

  const handleCountryChange = async e => {
    setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      shop_country: e.target.value
    }));
    const regionCollection = await db.collection("country").doc(e.target.value).collection("region").get();
    regionCollection.docs.map(region => regionArray.push(region.id));
    setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
      regionArray: regionArray
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      regionDisable: false,
      cityDisable: true,
      cityAreaDisable: true
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      country: true,
      region: false,
      city: true,
      cityArea: true
    }));
  };

  const handleRegionChange = async e => {
    setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      shop_region: e.target.value
    }));
    const cityCollection = await db.collection("country").doc(registrationValue.shop_country).collection("region").doc(e.target.value).collection("city").get();
    cityCollection.docs.map(city => cityArray.push(city.id));
    setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
      cityArray: cityArray
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      cityDisable: false,
      cityAreaDisable: true
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      region: true,
      city: false
    }));
  };

  const handleCityChange = async e => {
    setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      shop_city: e.target.value
    }));
    const cityAreaCollection = await db.collection("country").doc(registrationValue.shop_country).collection("region").doc(registrationValue.shop_region).collection("city").doc(e.target.value).collection("area").get();
    cityAreaCollection.docs.map(cityArea => cityAreaArray.push(cityArea.id));
    setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
      cityAreaArray: cityAreaArray
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      cityAreaDisable: false
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      city: true,
      cityArea: false
    }));
  };

  const handleCityAreaChange = async e => {
    setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      shop_cityArea: e.target.value
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      cityArea: true
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.outerFormContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.rollWithUsTextUsText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: undefined
  }, "We just need a few information to get you rolling."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.shopInfoTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.borderBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
    },
    __self: undefined
  }, "Shop Information"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.borderBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["ValidatorForm"], {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: accountSignup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.formContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    id: "filled-basic",
    label: "Shop Name",
    variant: "filled",
    value: registrationValue.shop_name,
    validators: ["required"],
    errorMessages: ["Shop name is requred"],
    onChange: e => setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      shop_name: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    id: "filled-basic",
    label: "Shop Address",
    variant: "filled",
    value: registrationValue.shop_address,
    validators: ["required"],
    errorMessages: ["Shop address is requred"],
    onChange: e => setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      shop_address: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: undefined
  }, "Shop Country"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: registrationValue.shop_country,
    onChange: e => handleCountryChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: undefined
  }), locationInfo ? locationInfo.countryArray.map(country => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: country,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515
      },
      __self: undefined
    }, country);
  }) : null), locationValid.country ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: undefined
  }, "Select a Country")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: undefined
  }, "Shop Region"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: registrationValue.shop_region,
    onChange: e => handleRegionChange(e),
    disabled: selectDisable.regionDisable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: undefined
  }), locationInfo ? locationInfo.regionArray.map(region => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: region,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537
      },
      __self: undefined
    }, region);
  }) : null), locationValid.region ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: undefined
  }, "Select a Region")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: undefined
  }, "Shop City"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: registrationValue.shop_city,
    onChange: e => handleCityChange(e),
    disabled: selectDisable.cityDisable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: undefined
  }), locationInfo ? locationInfo.cityArray.map(city => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: city,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559
      },
      __self: undefined
    }, city);
  }) : null), locationValid.city ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: undefined
  }, "Select a City")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: undefined
  }, "Shop Area"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: registrationValue.shop_cityArea,
    onChange: e => handleCityAreaChange(e),
    disabled: selectDisable.cityAreaDisable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: undefined
  }), locationInfo ? locationInfo.cityAreaArray.map(area => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: area,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579
      },
      __self: undefined
    }, area);
  }) : null), locationValid.cityArea ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: undefined
  }, "Select an Area")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.managerInfoTitleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.managerInfoBorderBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: undefined
  }, "Manager Information"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.managerInfoBorderBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    id: "filled-basic",
    label: "First Name",
    variant: "filled",
    value: registrationValue.first_name,
    validators: ["required"],
    errorMessages: ["First name is requred"],
    onChange: e => setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      first_name: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    id: "filled-basic",
    label: "Last Name",
    variant: "filled",
    value: registrationValue.last_name,
    validators: ["required"],
    errorMessages: ["Last name is requred"],
    onChange: e => setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      last_name: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    id: "filled-basic",
    label: "Phone number",
    variant: "filled",
    value: registrationValue.phone_number,
    validators: ["required"],
    errorMessages: ["Phone number is requred"],
    onChange: e => setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      phone_number: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.managerInfoTitleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.managerInfoBorderBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637
    },
    __self: undefined
  }, "Account Information"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.managerInfoBorderBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    id: "filled-basic",
    label: "Email Address",
    variant: "filled",
    value: registrationValue.email,
    validators: ["required"],
    errorMessages: ["Email address is requred"],
    onChange: e => setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      email: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.passwordContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    id: "filled-basic",
    label: "Password",
    variant: "filled",
    type: showPassword ? "text" : "password",
    value: registrationValue.password,
    validators: ["required"],
    errorMessages: ["Password is required"],
    onChange: e => setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      password: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.passwordIcon,
    "aria-label": "toggle password visibility",
    onClick: handleClickShowPassword,
    onMouseDown: handleMouseDownPassword,
    edge: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670
    },
    __self: undefined
  }, showPassword ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.passwordContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    id: "filled-basic",
    label: "Repeat Password",
    variant: "filled",
    type: showPassword ? "text" : "password",
    value: registrationValue.confirmPassword,
    validators: ["isPasswordMatch", "required"],
    errorMessages: ["Password doesn't match", "Confirm password is required"],
    onChange: e => setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      confirmPassword: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.passwordIcon,
    "aria-label": "toggle password visibility",
    onClick: handleClickShowPassword,
    onMouseDown: handleMouseDownPassword,
    edge: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699
    },
    __self: undefined
  }, showPassword ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.userSignup_saveButton,
    type: "submit",
    disabled: !(locationValid.cityArea && locationValid.city && locationValid.region && locationValid.country),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709
    },
    __self: undefined
  }, "SIGN UP"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.signupPolicyContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725
    },
    __self: undefined
  }, "By signing up, you agree with the", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Link"], {
    to: "/tos",
    className: classes.tos_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727
    },
    __self: undefined
  }, " ", "Terms of Service"), " ", "&", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Link"], {
    to: "/privacyPolicy",
    className: classes.pp_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732
    },
    __self: undefined
  }, "Privacy Policy"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(SignUp));

/***/ }),

/***/ "./src/components/Business/styles.css":
/*!********************************************!*\
  !*** ./src/components/Business/styles.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Business/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Business/styles.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Business/styles.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/User/giftAnimation.css":
/*!***********************************************!*\
  !*** ./src/components/User/giftAnimation.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./giftAnimation.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/User/giftAnimation.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./giftAnimation.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/User/giftAnimation.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./giftAnimation.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/User/giftAnimation.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/User/userGift.js":
/*!*****************************************!*\
  !*** ./src/components/User/userGift.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/index.js");


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/User/userGift.js";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  outerContaniner: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  giftContainer: {
    width: "80%",
    height: "100%",
    margin: "0 0 30px"
  },
  gift_text: {
    width: "80%",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "24px 0 24px 0",
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "CoreSans, sans-serif"
  },
  shopInfo_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#4a4a4a",
    padding: "10px 0 5px 0",
    borderRadius: "10px 10px 0 0" // borderLeft: "9px solid rgba(9, 68, 16)"

  },
  shopName_text: {
    fontSize: "16px",
    // fontWeight: "bold",
    margin: "0 0 0px 0",
    color: "#fbfcfc",
    fontFamily: "CoreSans, sans-serif",
    letterSpacing: "0.5px"
  },
  shopAddress_text: {
    fontSize: "14px",
    margin: "0 0 5px 0",
    color: "#fbfcfc",
    fontFamily: "CoreSans, sans-serif"
  },
  userHomeContainer: {
    display: "flex",
    flexDirection: "column"
  },
  imageDescription_container: {
    padding: "0px 40px 5px 25px",
    // borderRadius: "3px",
    height: "120px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // background:
    //   "linear-gradient(to right, rgba(254, 239, 186, 0.4), rgba(0, 0, 0, 0.05))",
    backgroundColor: "white",
    borderRadius: "0 0 0 70px",
    borderLeft: "8px solid rgb(149, 149, 148, 0.5)"
  },
  giftImageContainer: {
    width: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px 0 15px 0" // "&:active:hover": {
    //   width: "110px",
    // },

  },
  shakeCSS: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px 0",
    width: "70px",
    animation: "$shake 500ms",
    animationIterationCount: "infinite"
  },
  "@keyframes shake": {
    "0%": {
      transform: "translate(1px, 1px) rotate(0deg)"
    },
    "10%": {
      transform: "translate(-1px, -2px) rotate(-5deg)"
    },
    "20%": {
      transform: "translate(-3px, 0px) rotate(5deg)"
    },
    "30%": {
      transform: "translate(3px, 2px) rotate(0deg)"
    },
    "40%": {
      transform: "translate(1px, -1px) rotate(5deg)"
    },
    "50%": {
      transform: "translate(-1px, 2px) rotate(-5deg)"
    },
    "60%": {
      transform: "translate(-3px, 1px) rotate(0deg)"
    },
    "70%": {
      transform: "translate(3px, 1px) rotate(-5deg)"
    },
    "80%": {
      transform: "translate(-1px, -1px) rotate(5deg)"
    },
    "90%": {
      transform: "translate(1px, 2px) rotate(0deg)"
    },
    "100%": {
      transform: "translate(1px, -2px) rotate(-5deg)"
    }
  },
  giftImage: {
    pointerEvents: "none",
    width: "100%",
    overflow: "hidden"
  },
  giftDescription_container: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  chanceText_container: {
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "right",
    fontSize: "15px"
  },
  rewardText_container: {
    fontSize: "15px",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.8)",
    margin: "0 0 0 10px"
  },
  chanceText: {
    margin: "3px 0 0 0"
  },
  rewardText: {
    margin: "3px 0 0 0"
  },
  expiring_container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: "0 5px 0 0",
    margin: "2px 0 0 0"
  },
  expire_text: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "12px",
    margin: "0 8px 0 0",
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: "bold"
  },
  expireTime_text: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "14px",
    margin: "0 5px 0 0",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.5)"
  },
  linearProgress: {
    width: "130%" // "& > * + *": {
    //   marginTop: theme.spacing(2),
    // },

  },
  loading_container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  logo_image: {
    width: "100px",
    margin: "0 0 10px 0",
    opacity: "50%"
  },
  allGiftsClaimed_text: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "15px",
    color: "rgba(0, 0, 0, 0.6)"
  },
  cityAreaSelect_container: {
    margin: "25px 0 20px 0",
    width: "80%",
    height: "56px"
  }
}));
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
  overrides: {
    MuiFormControl: {
      root: {
        width: "70%"
      }
    },
    MuiNativeSelect: {
      root: {
        padding: "0 0 0 11px",
        height: "40px"
      },
      select: {
        "&$select": {
          backgroundColor: "transparent"
        }
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo,
  userAuthInfo,
  userLocationInfo
}) {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        userInfo = _useState2[0],
        setUserInfo = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        cityGiftRecord = _useState4[0],
        setCityGiftRecord = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState6 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        userGiftIdMap = _useState6[0],
        setUserGiftIdMap = _useState6[1]; // const [progressArray, setProgressArray] = useState([]);


  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState8 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
        activeGiftIndex = _useState8[0],
        setActiveGiftIndex = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState10 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
        giftReadyOpenIndex = _useState10[0],
        setGiftReadyOpenIndex = _useState10[1];

  const _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState12 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
        giftRewardArray = _useState12[0],
        setGiftRewardArray = _useState12[1];

  const _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cityArea: true,
    city: true,
    region: true,
    country: true
  }),
        _useState14 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
        locationValid = _useState14[0],
        setLocationValid = _useState14[1];

  const _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cityDisable: false,
    cityAreaDisable: false
  }),
        _useState16 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
        selectDisable = _useState16[0],
        setSelectDisable = _useState16[1];

  const _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState18 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
        locationInfo = _useState18[0],
        setLocationInfo = _useState18[1];

  const _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cityArea: false
  }),
        _useState20 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
        locationLoaded = _useState20[0],
        setLocationLoaded = _useState20[1];

  const _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        _useState22 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState21, 2),
        cityAreaSelect = _useState22[0],
        setCityAreaSelect = _useState22[1];

  const db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
  let cityAreaArray = [];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }
    /**
     * Fetches the gift record from a city and saves it as state
     */


    const fetchCityRecord = async () => {
      if (userDbInfo && userDbInfo.data()) {
        const cityRef = await db.collection("gift").doc(userDbInfo.data().user_country).collection(userDbInfo.data().user_region).doc(userDbInfo.data().user_city).collection("area").doc(userDbInfo.data().user_cityArea).get(); // Sets the gifts from the city

        setCityGiftRecord(cityRef.data());
      }
    };

    fetchCityRecord();

    const userGiftRef = () => {
      let userGiftIdMap = new Map();

      if (userDbInfo && userDbInfo.data()) {
        userDbInfo.data().claimedGift.map(userGift => {
          userGiftIdMap.set(userGift.gift_id, "gift_id");
        });
      }

      setUserGiftIdMap(userGiftIdMap);
    };

    userGiftRef();

    const fetchCountryInfo = async () => {
      if (userLocationInfo) {
        setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
          cityAreaArray: [userLocationInfo.cityArea]
        }));
        setCityAreaSelect(userLocationInfo.cityArea);
      }
    };

    fetchCountryInfo();
  }, []);
  /**
   * User claims the gift by adding an entry to the database
   */

  const claimGift = async gift => {
    console.log("claiming gift"); // Creates the array for gift rewards

    let giftRewardArrayCopy = [];

    for (let j = 0; j < gift.gift_description.chance.length; j++) {
      for (let k = 0; k < gift.gift_description.chance[j] * 100; k++) {
        giftRewardArrayCopy.push({
          reward: gift.gift_description.reward[j],
          expireTime: gift.gift_description.expire_time[j]
        });
      }
    }

    setGiftRewardArray(giftRewardArrayCopy);
    let newUserGiftArray = userDbInfo.data().claimedGift;
    let rollNumber = Math.floor(Math.random() * 100 + 1);

    let giftCopy = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, gift, {
      roll: rollNumber,
      reward: giftRewardArrayCopy[rollNumber].reward,
      gift_open_timeStamp: firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].Timestamp.now(new Date()).toDate(),
      gift_expiry_date: moment__WEBPACK_IMPORTED_MODULE_7___default()().add(giftRewardArrayCopy[rollNumber].expireTime, "minutes").toString()
    });

    newUserGiftArray.push(giftCopy);
    await db.collection("user").doc(userDbInfo.id).set(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userDbInfo.data(), {
      claimedGift: newUserGiftArray
    }));
    setGiftRewardArray([]);
    history.push({
      pathname: "/giftResult",
      state: {
        giftCopy
      }
    });
  };
  /**
   * Fires onTouchStart, when gift is pressed
   */


  const handleGiftMouseDown = (e, index, gift) => {
    // e.preventDefault();
    console.log("mouse down");
    setActiveGiftIndex(index);
    setGiftReadyOpenIndex(index);
  };
  /**
   * Render gifts based on location, if claimed and expiry
   */


  const RenderGift = () => {
    const currentTime = moment__WEBPACK_IMPORTED_MODULE_7___default()(firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].Timestamp.now(new Date()).toDate());
    let nonExpiredGiftCounter = 0;
    let nonExpiredGiftClaimedCounter = 0;

    const counterNull = () => {
      return null;
    };

    if (cityGiftRecord) {
      // if (false) {
      if (cityGiftRecord.gift) {
        cityGiftRecord.gift.map((cityGift, index) => {
          if (currentTime.isBefore(cityGift.gift_expiry_date)) {
            nonExpiredGiftCounter++;

            if (userGiftIdMap.has(cityGift.gift_id)) {
              nonExpiredGiftClaimedCounter++;
            }
          }
        }); // cityGiftRecord is from gift collection

        if (nonExpiredGiftCounter != nonExpiredGiftClaimedCounter) {
          return cityGiftRecord.gift.map((cityGift, index) => {
            if (currentTime.isBefore(cityGift.gift_expiry_date)) {
              nonExpiredGiftCounter++;
              return userGiftIdMap.has(cityGift.gift_id) ? counterNull() : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: classes.giftContainer,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 378
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: classes.shopInfo_container,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 379
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: classes.shopName_text,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 380
                },
                __self: this
              }, cityGift.shop_name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: classes.shopAddress_text,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 383
                },
                __self: this
              }, cityGift.shop_address)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: classes.imageDescription_container,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 387
                },
                __self: this
              }, index == giftReadyOpenIndex ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: index == giftReadyOpenIndex ? classes.shakeCSS : classes.giftImageContainer,
                onTouchStart: () => {
                  claimGift(cityGift);
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 390
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
                className: classes.giftImage,
                src: cityGift.image_url,
                alt: "lol",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 400
                },
                __self: this
              })) : // Push gift to charge progress bar
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: index == activeGiftIndex ? classes.shakeCSS : classes.giftImageContainer,
                onTouchStart: e => handleGiftMouseDown(e, index, cityGift),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 408
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
                className: classes.giftImage,
                src: cityGift.image_url,
                alt: "lol",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 418
                },
                __self: this
              })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: classes.giftDescription_container,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 425
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: classes.chanceText_container,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 426
                },
                __self: this
              }, cityGift.gift_description.chance.map(chance => {
                {
                  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                    className: classes.chanceText,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 430
                    },
                    __self: this
                  }, chance * 100, "%");
                }
              })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: classes.rewardText_container,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 437
                },
                __self: this
              }, cityGift.gift_description.reward.map(reward => {
                {
                  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                    className: classes.rewardText,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 441
                    },
                    __self: this
                  }, reward);
                }
              })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: classes.expiring_container,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 448
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: classes.expire_text,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 449
                },
                __self: this
              }, "Expires"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: classes.expireTime_text,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 450
                },
                __self: this
              }, moment__WEBPACK_IMPORTED_MODULE_7___default()(cityGift.gift_expiry_date).add("days", 1).format("LL"))));
            }
          });
        }

        if (nonExpiredGiftCounter == nonExpiredGiftClaimedCounter) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: classes.loading_container,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 463
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: classes.logo_container,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 464
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
            className: classes.logo_image,
            src: "img/rolll_logo_2.png",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 465
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: classes.allGiftsClaimed_text,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 470
            },
            __self: this
          }, "No gifts available, come back later!"));
        }
      }
    } else return null;

    if (cityGiftRecord.gift.length == 0) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: classes.giftContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, "No gift Available.");
    }
  };
  /**
   *
   */


  const handleCityAreaChange = async e => {
    const evtTargetValue = e.target.value;
    setCityAreaSelect(evtTargetValue);
    setCityGiftRecord({
      gift: []
    });
    const cityRef = await db.collection("gift").doc(userLocationInfo.country).collection(userLocationInfo.region).doc(userLocationInfo.city).collection("area").doc(evtTargetValue).get();
    setCityGiftRecord(cityRef.data());
    setLocationLoaded(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationLoaded, {
      cityArea: true
    }));
  };

  const handleCityAreaClick = async e => {
    if (!locationLoaded.cityArea) {
      console.log("running click");
      let cityAreaCollection = await db.collection("country").doc(userLocationInfo.country).collection("region").doc(userLocationInfo.region).collection("city").doc(userLocationInfo.city).collection("area").get();
      cityAreaArray = [];
      cityAreaCollection.docs.map(cityArea => cityAreaArray.push(cityArea.id));
      setLocationLoaded(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationLoaded, {
        cityArea: true
      }));
      setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
        cityAreaArray: cityAreaArray
      }));
    }
  };

  return locationInfo ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.outerContaniner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.cityAreaSelect_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  }, "Area"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: selectDisable.cityAreaDisable,
    className: classes.citySelect_input,
    defaultValue: userLocationInfo.cityArea,
    value: cityAreaSelect,
    onChange: e => handleCityAreaChange(e),
    onClick: e => handleCityAreaClick(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }), locationInfo.cityAreaArray.map(cityArea => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: cityArea,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542
      },
      __self: this
    }, cityArea);
  })), locationValid.cityArea ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, "Select an area"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RenderGift, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.loading_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.logo_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: classes.logo_image,
    src: "img/rolll_logo_2.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.allGiftsClaimed_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, "Loading..."));
});

/***/ }),

/***/ "./src/components/User/userGiftRecord.js":
/*!***********************************************!*\
  !*** ./src/components/User/userGiftRecord.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/User/userGiftRecord.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  record_text: {
    color: "rgba(0, 0, 0, 0.7)",
    width: "70%",
    margin: "50px 0 10px 0",
    fontSize: "16px",
    fontFamily: "CoreSans, sans-serif",
    fontWeight: "bold",
    borderBottom: "1px solid black"
  },
  renderGift_container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  giftInfo_container_active: {
    width: "70%",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    padding: "10px 0 10px 15px",
    borderLeft: "5px solid #91b96c",
    margin: "15px 0px",
    backgroundColor: "white",
    borderRadius: "5px 10px 10px 5px"
  },
  giftInfo_outerContainer: {
    width: "70%",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    backgroundColor: "white",
    borderRadius: "5px 10px 10px 5px",
    margin: "15px 0px",
    borderRadius: "0 0 10px 40px"
  },
  giftInfo_container: {
    width: "100%" // padding: "10px 0 10px 15px",
    // borderRadius: "5px 10px 10px 5px",

  },
  shopInfo_container: {
    backgroundColor: "#4a4a4a",
    color: "#fbfcfc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0"
  },
  shopName_text: {
    fontWeight: "bold"
  },
  statusPrize_container: {
    display: "flex"
  },
  expirePrize_container: {},
  start_container: {
    display: "flex"
  },
  end_container: {
    display: "flex",
    margin: "0 0 5px 0"
  },
  start_text: {
    fontWeight: "bold",
    margin: "0 5px 0 0"
  },
  end_text: {
    fontWeight: "bold",
    margin: "0 5px 0 0"
  },
  expireReward_text: {
    fontWeight: "bold"
  },
  expire_text: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "94px",
    height: "35px",
    padding: "6px 8px",
    margin: "0 0 5px 0",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "0",
    letterSpacing: "1px",
    textTransform: "none",
    backgroundColor: "rgba(204, 0, 0, 0.7)"
  },
  activePrize_outerContainer: {},
  active_text: {
    fontWeight: "bold"
  },
  reward_text: {
    // margin: "0 0 0 5px",
    fontWeight: "bold",
    fontSize: "14px"
  },
  view_button: {
    color: "white",
    height: "35px",
    margin: "0 0 5px 0",
    padding: "6px 8px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "0",
    letterSpacing: "1px",
    textTransform: "none",
    backgroundColor: "#4caf50",
    borderRadius: "5px"
  },
  active_rewardInfo_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0 10px 0px",
    borderLeft: "5px solid green",
    borderRadius: "0 0 10px 40px"
  },
  expire_rewardInfo_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0 10px 0px",
    borderLeft: "5px solid red",
    borderRadius: "0 0 10px 40px"
  }
}));
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo
}) {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        claimedGift = _useState2[0],
        setClaimedGift = _useState2[1];

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  const classes = useStyles();

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        userInfo = _useState4[0],
        setUserInfo = _useState4[1];

  let currentTime = moment__WEBPACK_IMPORTED_MODULE_6___default()();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }

    if (userDbInfo && userDbInfo.data()) {
      fetchGiftRecord();
    }
  }, []);

  const fetchGiftRecord = () => {
    // Push all gift record to an array
    let giftRecordArray = [];

    for (let giftRecord in userDbInfo.data().claimedGift) {
      // console.log(userDbInfo.data().claimedGift[giftRecord]);
      giftRecordArray.push(userDbInfo.data().claimedGift[giftRecord]);
    } // Sort the array by gift expiring earliest at top


    giftRecordArray.sort(function compareDate(a, b) {
      const dateA = moment__WEBPACK_IMPORTED_MODULE_6___default()(a.gift_expiry_date);
      const dateB = moment__WEBPACK_IMPORTED_MODULE_6___default()(b.gift_expiry_date);
      return dateB - dateA;
    });
    setClaimedGift(giftRecordArray);
  };

  const toGiftResult = gift => {
    history.push({
      pathname: "/giftResult",
      state: {
        giftCopy: gift
      }
    });
  };

  const RenderGiftRecord = () => {
    if (claimedGift) {
      if (claimedGift.length == 0) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, "no gift claimed yet");
      }

      if (claimedGift[0]) {
        return claimedGift.map(gift => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.giftInfo_outerContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, currentTime > moment__WEBPACK_IMPORTED_MODULE_6___default()(gift.gift_expiry_date) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.giftInfo_container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.expirePrize_container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.shopInfo_container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.shopName_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, gift.shop_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, gift.shop_address), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, gift.shop_city)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.expire_rewardInfo_container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.expireReward_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, gift.reward), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.start_container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.start_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, "Start:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.startTime_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_6___default.a.unix(gift.gift_open_timeStamp.seconds).format("lll"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.end_container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.end_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, "End: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.endTime_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_6___default()(gift.gift_expiry_date).format("lll"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.expire_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, "Expired")))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.giftInfo_container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.shopInfo_container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.shopName_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, gift.shop_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, gift.shop_address), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, gift.shop_city)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.active_rewardInfo_container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.reward_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, gift.reward), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.start_container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.start_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, "Start:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.startTime_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_6___default.a.unix(gift.gift_open_timeStamp.seconds).format("lll"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.end_container,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.end_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, "End: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.endTime_text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_6___default()(gift.gift_expiry_date).format("lll"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: classes.view_button,
          onTouchStart: () => toGiftResult(gift),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, "View"))))));
      }
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "loading...");
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.renderGift_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.record_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, "Record"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RenderGiftRecord, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./src/components/User/userGiftResult.js":
/*!***********************************************!*\
  !*** ./src/components/User/userGiftResult.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-div-100vh */ "./node_modules/react-div-100vh/lib/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _giftAnimation_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./giftAnimation.css */ "./src/components/User/giftAnimation.css");
/* harmony import */ var _giftAnimation_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_giftAnimation_css__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/User/userGiftResult.js";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fbackground_35.png?alt=media&token=a5be174a-cd06-4d97-b282-be6b33e71946")',
    backgroundColor: "rgba(237, 232, 218, 0.7)",
    display: "flex",
    flexDirection: "column",
    fontFamily: "CoreSans, sans-serif",
    alignItems: "center",
    justifyContent: "center"
  },
  shopInfo_container: {
    backgroundColor: "#4a4a4a",
    width: "70%",
    // margin: "20% 0 0 0",
    padding: "10px 0 10px 0",
    borderRadius: "10px 10px 0 0"
  },
  shopName_text: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fbfcfc"
  },
  shopAddress_text: {
    color: "#fbfcfc",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "1% 0 0 0",
    fontSize: "16px" // borderBottom: "1px solid rgba(0, 0, 0, 0.4)",

  },
  reward_text: {
    display: "flex",
    justifyContent: "center",
    fontSize: "45px",
    fontWeight: "bold",
    height: "155px",
    alignItems: "center",
    textAlign: "center",
    margin: "0 0 0 0",
    backgroundColor: "white",
    borderRadius: "0 0 10px 10px"
  },
  expire_text: {
    backgroundColor: "#89abe3",
    color: "#fbfcfc",
    fontSize: "16px",
    width: "100%",
    padding: "10px 0 5px 0",
    letterSpacing: "1px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  countdown_outerContainer: {
    display: "flex",
    width: "70%",
    justifyContent: "center"
  },
  countdown_container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    fontSize: "24px",
    alignItems: "flex-end",
    flexDirection: "column",
    margin: "10px 0 0 0"
  },
  minute_container: {
    display: "flex",
    alignItems: "flex-end"
  },
  second_container: {
    display: "flex",
    alignItems: "flex-end"
  },
  countdown_text: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    padding: "0 45px 0 45px",
    height: "55px",
    alignItems: "center"
  },
  minute_text: {
    fontSize: "40px"
  },
  second_text: {
    fontSize: "40px"
  },
  m_text: {
    margin: "0 0 3px 0"
  },
  s_text: {
    margin: "0 0 3px 0"
  },
  expired_text: {},
  storeRights_text: {
    width: "70%",
    textAlign: "center",
    fontSize: "14px",
    margin: "3% 0 0 0"
  },
  xIcon: {
    fontSize: "40px",
    margin: "10% 0 0 0"
  },
  dashboard_button: {
    textTransform: "none",
    backgroundColor: "#4caf50",
    color: "rgba(255, 255, 255)",
    letterSpacing: "1px",
    fontSize: "16px",
    width: "45%",
    margin: "20px 0 0 0",
    height: "45px"
  }
}));
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  overrides: {
    MuiButton: {
      root: {
        height: "60px",
        width: "100%"
      }
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0"
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo,
  location
}) {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_6__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        userInfo = _useState2[0],
        setUserInfo = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        giftResult = _useState4[0],
        setGiftResult = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        _useState6 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        expireFlag = _useState6[0],
        setExpireFlag = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }

    console.log("this is the gift result page");
    console.log(location.state.giftCopy);
    console.log(location.state.giftCopy);
    setGiftResult(location.state.giftCopy);
  }, []);

  const countDown = props => {
    if (props.completed && expireFlag) {
      setExpireFlag(false);
      setGiftResult(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, giftResult, {
        reward: "Expired"
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.countdown_container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.expire_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "Countdown"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.countdown_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.minute_container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.minute_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, " ", props.minutes), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.m_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "m")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.second_container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.second_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, props.seconds), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.s_text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, "s"))));
  };

  const toRecord = () => {
    history.push({
      pathname: "/userHome",
      state: {
        navigationValue: "giftRecord"
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_div_100vh__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, giftResult && giftResult.reward ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.shopInfo_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.shopName_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, giftResult.shop_name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.shopAddress_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, giftResult.shop_address)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "h1_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    // className="block-reveal"
    className: `${classes.reward_text} ${"block-reveal"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, giftResult.reward)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.countdown_outerContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_countdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
    date: // new Date(
    //   moment(giftResult.gift_open_timeStamp).add(
    //     10,
    //     "seconds"
    //   )
    // )
    // Uncomment to set gift expiry time accordingly
    moment__WEBPACK_IMPORTED_MODULE_4___default()(giftResult.gift_expiry_date),
    precision: 3,
    renderer: props => {
      return countDown(props);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.storeRights_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, giftResult.shop_name, " reserves the right to refuse redmeption of this reward."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onTouchStart: () => toRecord(),
    className: classes.dashboard_button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "Back")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, "no result")))));
});

/***/ }),

/***/ "./src/components/User/userHome.js":
/*!*****************************************!*\
  !*** ./src/components/User/userHome.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _userNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userNavigation */ "./src/components/User/userNavigation.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/User/userHome.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  userHome_container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    // backgroundImage: 'url("img/background_35.png")',
    backgroundColor: "rgba(241, 241, 241, 0.7)",
    [theme.breakpoints.down(600)]: {}
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (function (location) {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        userAuthInfo = _useState2[0],
        setUserAuthnfo = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        userDbInfo = _useState4[0],
        setUserDbInfo = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState6 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        countryInfo = _useState6[0],
        setCountryInfo = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState8 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
        userLocationInfo = _useState8[0],
        setUserLocationInfo = _useState8[1];

  _firebase__WEBPACK_IMPORTED_MODULE_7__["default"].auth().onAuthStateChanged(user => {
    if (user != null) {
      setUserAuthnfo(user);
    }
  });
  /**
   * Sets initial state of userDbInfo and shopInfo
   */

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    async function fetchInfo() {
      if (userAuthInfo && userAuthInfo.uid) {
        const db = _firebase__WEBPACK_IMPORTED_MODULE_7__["default"].firestore();
        const user = await db.collection("user").doc(userAuthInfo.uid).get();
        const countryData = await db.collection("country").get(); // const ok = await countryData.doc("Canada").collection("British Columbia").doc("City").get();
        // console.log(ok.data());

        setUserDbInfo(user);
        setCountryInfo(countryData);
        setUserLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userLocationInfo, {
          country: user.data().user_country,
          region: user.data().user_region,
          city: user.data().user_city,
          cityArea: user.data().user_cityArea
        }));
        console.log(user);
      }
    }

    fetchInfo();
  }, [userAuthInfo]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.userHome_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_userNavigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    userDbInfo: userDbInfo,
    setUserDbInfo: setUserDbInfo,
    location: location,
    countryInfo: countryInfo,
    userAuthInfo: userAuthInfo,
    userLocationInfo: userLocationInfo,
    setUserLocationInfo: setUserLocationInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/User/userLoginForm.js":
/*!**********************************************!*\
  !*** ./src/components/User/userLoginForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-material-ui-form-validator */ "./node_modules/react-material-ui-form-validator/lib/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/User/userLoginForm.js";











/**
 * CSS of the page
 */

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  signupFormContainer: {
    display: "flex",
    flexDirection: "column"
  },
  passwordContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 0 5px 0"
  },
  forgotPasswordText: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    padding: "28px 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)"
  },
  dontHaveAccountText: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    padding: "28px 0 0 0",
    margin: "0 0 20px 0"
  },
  signUpText: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif"
  },
  userSignup_saveButton: {// backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  signupLinkContainer: {
    textDecoration: "none"
  },
  signup_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  signup_button: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    color: "black"
  }
}));
/**
 * Overriding MUI theme css
 */

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(205, 239, 245, 0.4)",
        "&$focused": {
          backgroundColor: "rgba(205, 239, 245, 0.8) !important"
        }
      },
      underline: {
        "&$focused": {// borderBottom: "1px solid black",
        },
        "&:after": {
          borderBottom: "2px solid black"
        }
      }
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0"
      }
    },
    MuiButton: {
      root: {
        backgroundColor: "#4caf50",
        color: "white",
        height: "60px",
        width: "100%",
        "&$disabled": {
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50"
          }
        }
      }
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "black"
        }
      }
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "0 0 28px 0"
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px"
      }
    }
  }
});
/**
 * This is the signup component
 * History from withRouter to navigate after signing up
 * @param {history} param0
 */

const SignUp = ({
  history
}) => {
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    password: "",
    email: ""
  }),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        loginValue = _useState2[0],
        setLoginValue = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        showPassword = _useState4[0],
        setShowPassword = _useState4[1];
  /**
   * Shows password after clicking eye icon
   */


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  /**
   * Logs user in and take them to home page
   */


  async function userLogin(e) {
    e.preventDefault();

    try {
      const credential = await _firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth().signInWithEmailAndPassword(loginValue.email, loginValue.password);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * If user is logged in, route to user home page
   */


  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthContext"]),
        currentUser = _useContext.currentUser;

  if (currentUser) {} // return <Redirect to="/userHome" />;

  /**
   * Returns the form for logging in
   */


  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__["ValidatorForm"], {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: e => userLogin(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__["TextValidator"], {
    id: "filled-basic",
    label: "Email",
    variant: "filled",
    value: loginValue.email,
    validators: ["required", "isEmail"],
    errorMessages: ["Email address is requred", "Email address is not valid"],
    onChange: e => setLoginValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, loginValue, {
      email: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.passwordContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__["TextValidator"], {
    id: "filled-basic",
    label: "Password",
    variant: "filled",
    type: showPassword ? "text" : "password",
    value: loginValue.password,
    validators: ["required"],
    errorMessages: ["Password is required"],
    onChange: e => setLoginValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, loginValue, {
      password: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.passwordIcon,
    "aria-label": "toggle password visibility",
    onClick: handleClickShowPassword,
    onMouseDown: handleMouseDownPassword,
    edge: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }, showPassword ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.userSignup_saveButton,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, "LOG IN")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.forgotPasswordText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }, " Forgot Your Password?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.signup_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.dontHaveAccountText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  }, "Don't have an account?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.signup_button,
    onClick: () => history.push("/signup"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }, "Sign up")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(SignUp));

/***/ }),

/***/ "./src/components/User/userLoginPage.js":
/*!**********************************************!*\
  !*** ./src/components/User/userLoginPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _userLoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userLoginForm */ "./src/components/User/userLoginForm.js");
/* harmony import */ var _landingPageNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../landingPageNavigation */ "./src/components/landingPageNavigation.js");
/* harmony import */ var _userOAuthLoginComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userOAuthLoginComponent */ "./src/components/User/userOAuthLoginComponent.js");
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/User/userLoginPage.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  signupPageContainer: {
    width: "100%"
  },
  fbButton: {
    width: "300px"
  },
  googleButton: {
    width: "300px"
  },
  accountMsg: {
    width: "70%",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: "16px",
    fontWeight: "400",
    margin: "10px 0 28px 0"
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "80px 0 0 0"
  },
  formContainer: {
    width: "70%"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.signupPageContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.accountMsg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Welcome back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.formContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userLoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./src/components/User/userNavigation.js":
/*!***********************************************!*\
  !*** ./src/components/User/userNavigation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _userProfilePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userProfilePage */ "./src/components/User/userProfilePage.js");
/* harmony import */ var _userGiftRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userGiftRecord */ "./src/components/User/userGiftRecord.js");
/* harmony import */ var _userGift__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userGift */ "./src/components/User/userGift.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-div-100vh */ "./node_modules/react-div-100vh/lib/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/User/userNavigation.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  userNavigation_container: {
    [theme.breakpoints.down(600)]: {
      width: "100%"
    }
  },
  userNavigation_div100Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  userNavigation_renderBodyContainer: {
    height: "100%",
    overflow: "auto"
  },
  userNavigation_navContainer: {
    height: "80px",
    backgroundColor: "white",
    padding: "0 50px 4px 50px",
    boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.03)",
    zIndex: "100",
    [theme.breakpoints.down(600)]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    }
  },
  profileIcon: {
    fontSize: "25px"
  },
  icon_container: {
    fontFamily: "Lato, sans-serif",
    width: "10%",
    height: "54px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image_container: {
    display: "flex",
    justifyContent: "center",
    width: "32px",
    height: "32px"
  },
  giftList_image: {
    width: "25px",
    height: "25px",
    margin: "5px 0 0 0"
  },
  profile_icon_image: {
    width: "100%",
    margin: "5px 0 0 0",
    height: "38px"
  },
  iconTitle: {
    // fontFamily: "CoreSans, sans-serif",
    color: "#a9a8a9",
    fontSize: "14px",
    margin: "0px 0 0 0"
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo,
  location,
  countryInfo,
  userAuthInfo,
  userLocationInfo,
  setUserLocationInfo
}) {
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
        _React$useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        value = _React$useState2[0],
        setValue = _React$useState2[1];

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("giftList"),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        navigationValue = _useState2[0],
        setNavigationValue = _useState2[1];

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (location && location.location.state) {
      setNavigationValue(location.location.state.navigationValue);
    }
  }, []);
  /**
   * Renders body content based on value of icon clicked
   */

  const RenderBody = () => {
    if (navigationValue == "giftList") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_userGift__WEBPACK_IMPORTED_MODULE_6__["default"], {
        userDbInfo: userDbInfo,
        userAuthInfo: userAuthInfo,
        userLocationInfo: userLocationInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      });
    }

    if (navigationValue == "giftRecord") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_userGiftRecord__WEBPACK_IMPORTED_MODULE_5__["default"], {
        userDbInfo: userDbInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      });
    }

    if (navigationValue == "profile") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_userProfilePage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        userDbInfo: userDbInfo,
        countryInfo: countryInfo,
        userLocationInfo: userLocationInfo,
        setUserLocationInfo: setUserLocationInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.userNavigation_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_div_100vh__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.userNavigation_div100Container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.userNavigation_renderBodyContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RenderBody, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.userNavigation_navContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.icon_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.image_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: classes.giftList_image,
    style: {
      filter: navigationValue === "giftRecord" ? "invert(33%) sepia(93%) saturate(2157%) hue-rotate(110deg) brightness(70%) contrast(101%)" : null
    },
    src: "img/history.png",
    onClick: () => setNavigationValue("giftRecord"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.iconTitle,
    style: {
      color: navigationValue === "giftRecord" ? "black" : "#a9a8a9"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "History")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.icon_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.image_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: classes.giftList_image,
    style: {
      filter: navigationValue === "giftList" ? "invert(86%) sepia(71%) saturate(625%) hue-rotate(3deg) brightness(94%) contrast(95%)" : null
    },
    src: "img/rolll.png",
    onClick: () => setNavigationValue("giftList"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.iconTitle,
    style: {
      color: navigationValue === "giftList" ? "black" : "#a9a8a9"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Rolll")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.icon_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.image_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: classes.giftList_image,
    style: {
      filter: navigationValue === "profile" ? "invert(10%) sepia(100%) saturate(7026%) hue-rotate(252deg) brightness(70%) contrast(124%)" : null
    },
    src: "img/profile_v2.png",
    onClick: () => setNavigationValue("profile"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.iconTitle,
    style: {
      color: navigationValue === "profile" ? "black" : "#a9a8a9"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Profile")))));
});

/***/ }),

/***/ "./src/components/User/userOAuthLoginComponent.js":
/*!********************************************************!*\
  !*** ./src/components/User/userOAuthLoginComponent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ "./node_modules/react-firebaseui/StyledFirebaseAuth.js");
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/User/userOAuthLoginComponent.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_1__["AuthContext"]),
        currentUser = _useContext.currentUser; // Configure FirebaseUI.


  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "./",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider.PROVIDER_ID, firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: userInfo => {
        const db = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        db.collection("user").doc(userInfo.user.uid).set({
          email: userInfo.user.email,
          user_city: "",
          user_country: "",
          user_region: ""
        });
        const addUserRole = firebase__WEBPACK_IMPORTED_MODULE_2__["functions"]().httpsCallable("addUserRole");
        addUserRole({
          email: userInfo.user.email
        }).then(result => {
          console.log(result);
        });
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3___default.a, {
    uiConfig: uiConfig,
    firebaseAuth: firebase__WEBPACK_IMPORTED_MODULE_2__["auth"](),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/User/userProfilePage.js":
/*!************************************************!*\
  !*** ./src/components/User/userProfilePage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-material-ui-form-validator */ "./node_modules/react-material-ui-form-validator/lib/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_17__);


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/User/userProfilePage.js";
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  container: {
    [theme.breakpoints.down(600)]: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  },
  yourProfileText: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "45px 0 20px 0",
    display: "flex",
    width: "70%",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "CoreSans, sans-serif"
  },
  userProfileFormContainer: {
    [theme.breakpoints.down(600)]: {
      width: "70%"
    }
  },
  userProfile_input: {
    [theme.breakpoints.down(600)]: {
      width: "250px",
      margin: "6px 0",
      border: "none",
      fontSize: "16px",
      backgroundColor: "transparent"
    }
  },
  userProfile_cityInputContainer: {
    width: "70%",
    display: "flex",
    borderBottom: "1px solid black"
  },
  userProfile_emailInputContainer: {
    width: "70%",
    display: "flex",
    borderBottom: "1px solid black"
  },
  userProfile_emailTitle: {
    width: "70%",
    display: "flex",
    fontSize: "14px",
    margin: "45px 0 0 0"
  },
  userProfile_cityTitle: {
    width: "70%",
    display: "flex",
    fontSize: "14px",
    margin: "45px 0 0 0"
  },
  userProfile_emailInput: {
    [theme.breakpoints.down(600)]: {
      width: "193px",
      margin: "5px 0",
      border: "none",
      fontSize: "20px",
      backgroundColor: "transparent",
      padding: "0 0 1px 4px",
      outline: "none",
      fontSize: "16px"
    }
  },
  userProfile_cityInput: {
    [theme.breakpoints.down(600)]: {
      width: "193px",
      margin: "5px 0",
      border: "none",
      fontSize: "20px",
      backgroundColor: "transparent",
      padding: "0 0 1px 4px",
      outline: "none",
      fontSize: "16px"
    }
  },
  userProfile_countryRegionContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "70%"
  },
  userProfile_countryRegionTitleContainer: {
    display: "flex",
    width: "70%",
    margin: "15px 0 0 0",
    justifyContent: "space-between"
  },
  userProfile_countryDropdownContainer: {
    borderBottom: "1px solid black",
    height: "100%",
    width: "120px"
  },
  userProfile_saveLogoutContainer: {
    display: "flex",
    width: "65%",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: "10px 0 0 0"
  },
  userProfile_saveButton: {
    padding: " 8px 15px 8px",
    backgroundColor: "darkgoldenrod",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px"
  },
  userProfile_logoutButton: {
    width: "60px",
    padding: "5px",
    margin: "8px 0 0 0",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "14px"
  },
  updateButton: {
    textTransform: "none",
    backgroundColor: "#4caf50",
    color: "rgba(255, 255, 255)",
    letterSpacing: "1px",
    fontSize: "16px",
    width: "50%",
    margin: " 0 0 12px 0",
    height: "50px"
  },
  logoutButton: {
    width: "40%",
    fontSize: "12px",
    padding: "0",
    height: "40px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    margin: "0 0 25px 0"
  },
  logoutContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  citySelect_input: {// margin: "10px 0 0 0"
  },
  location_errorText: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "13px",
    color: "rgba(204, 0, 0, 1)",
    margin: "3px 0 0px 0px"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none"
  },
  alert_button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  closeIcon: {
    padding: "0px"
  }
}));
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "transparent"
      },
      input: {
        "&:disabled": {
          backgroundColor: "rgba(234, 234, 234)"
        }
      }
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0"
      }
    },
    MuiButton: {
      root: {
        height: "60px",
        width: "100%",
        "&$disabled": {
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50"
          }
        }
      }
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "0 0 28px 0",
        height: "60px",
        transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px"
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px"
      }
    },
    MuiNativeSelect: {
      root: {
        margin: "15px 0 10px 0",
        padding: "0 0 0 11px"
      },
      select: {
        "&$select": {
          backgroundColor: "transparent"
        }
      }
    },
    Mui: {
      disabled: {
        color: "red !important"
      }
    },
    MuiAlert: {
      message: {
        padding: "20px 20px 20px 5px",
        fontSize: "18px"
      },
      root: {
        borderRadius: "10px"
      }
    },
    MuiPaper: {
      root: {
        outline: "none"
      }
    },
    MuiSvgIcon: {
      fontSizeInherit: {
        fontSize: "33px"
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  userDbInfo,
  countryInfo,
  userLocationInfo,
  setUserLocationInfo
}) {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_9__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["useHistory"])();
  const classes = useStyles();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        userInfo = _useState2[0],
        setUserInfo = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        locationInfo = _useState4[0],
        setLocationInfo = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cityDisable: false,
    cityAreaDisable: false
  }),
        _useState6 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        selectDisable = _useState6[0],
        setSelectDisable = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cityArea: true,
    city: true,
    region: true,
    country: true
  }),
        _useState8 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
        locationValid = _useState8[0],
        setLocationValid = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    countryArray: [],
    regionArray: [],
    cityArray: [],
    cityAreaArray: []
  }),
        _useState10 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
        locationArray = _useState10[0],
        setLocationArray = _useState10[1];

  const _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    currentCountry: "",
    currentRegion: "",
    currentCity: "",
    currentCityArea: ""
  }),
        _useState12 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
        currentLocation = _useState12[0],
        setCurrentLocation = _useState12[1];

  const _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    country: false,
    region: false,
    city: false,
    cityArea: false
  }),
        _useState14 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
        locationLoaded = _useState14[0],
        setLocationLoaded = _useState14[1];

  const _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("before update"),
        _useState16 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
        profileUpdateMsg = _useState16[0],
        setProfileUpdateMsg = _useState16[1];

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
        _React$useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

  const db = _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
  let countryArrayCopy = [];
  let regionArrayCopy = [];
  let cityArrayCopy = [];
  let cityAreaArrayCopy = [];
  let countryCollection, regionCollection, cityCollection, cityAreaCollection;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (userDbInfo && userDbInfo.data()) {
      setUserInfo(userDbInfo.data());
    }

    const fetchCountryInfo = async () => {
      if (countryInfo && userLocationInfo) {
        // Loads country dropdown and user location info
        countryInfo.docs.map(country => countryArrayCopy.push(country.id));
        setLocationLoaded(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationLoaded, {
          country: true
        }));
        cityAreaArrayCopy.push(userLocationInfo.cityArea);
        cityArrayCopy.push(userLocationInfo.city);
        regionArrayCopy.push(userLocationInfo.region);
        setLocationArray(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationArray, {
          countryArray: countryArrayCopy,
          regionArray: regionArrayCopy,
          cityArray: cityArrayCopy,
          cityAreaArray: cityAreaArrayCopy
        }));
        setCurrentLocation(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentLocation, {
          country: userDbInfo.data().user_country,
          region: userDbInfo.data().user_region,
          city: userDbInfo.data().user_city,
          cityArea: userDbInfo.data().user_cityArea
        }));
      }

      setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
        countryArray: countryArrayCopy,
        regionArray: regionArrayCopy,
        cityArray: cityArrayCopy,
        cityAreaArray: cityAreaArrayCopy
      }));
    };

    fetchCountryInfo();
  }, []);
  /**
   * Write to db new profile updates
   */

  const handleProfileUpdate = async e => {
    e.preventDefault();
    await db.collection("user").doc(userDbInfo.id).set(userInfo).then(async () => {
      await new Promise(resolve => setOpen(true, () => resolve()));
    });
    setUserLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userLocationInfo, {
      cityArea: currentLocation.cityArea,
      city: currentLocation.city,
      region: currentLocation.region,
      country: currentLocation.country
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /**
   * Series of event handlers for cityArea, city, region and country
   * Dynamically generates lower tier inputs, ex. country -> region -> city -> cityArea
   */


  const handlecityAreaChange = e => {
    e.persist();
    setUserInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userInfo, {
      user_cityArea: e.target.value
    }));
    setCurrentLocation(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentLocation, {
      cityArea: e.target.value
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      cityArea: true
    }));
  };

  const handleCityChange = async e => {
    e.persist();
    setUserInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userInfo, {
      user_cityArea: "",
      user_city: e.target.value
    }));
    let cityAreaCollection = await db.collection("country").doc(userInfo.user_country).collection("region").doc(userInfo.user_region).collection("city").doc(e.target.value).collection("area").get();
    let newCityAreaArray = [];
    cityAreaCollection.docs.map(cityArea => newCityAreaArray.push(cityArea.id));
    setLocationArray(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationArray, {
      cityAreaArray: newCityAreaArray
    }));
    setLocationLoaded(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationLoaded, {
      cityArea: true
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      cityAreaDisable: false
    }));
    setCurrentLocation(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentLocation, {
      city: e.target.value,
      cityArea: ""
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      cityArea: false,
      city: true
    }));
  };

  const handleRegionChange = async e => {
    e.persist();
    setUserInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userInfo, {
      user_cityArea: "",
      user_city: "",
      user_region: e.target.value
    }));
    let cityCollection = await db.collection("country").doc(userInfo.user_country).collection("region").doc(e.target.value).collection("city").get();
    let newCityArray = [];
    cityCollection.docs.map(city => newCityArray.push(city.id));
    setLocationArray(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationArray, {
      cityArray: newCityArray,
      cityAreaArray: []
    }));
    setLocationLoaded(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationLoaded, {
      city: true
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      cityDisable: false,
      cityAreaDisable: true
    }));
    setCurrentLocation(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentLocation, {
      region: e.target.value,
      city: "",
      cityArea: ""
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      cityArea: false,
      city: false,
      region: true
    }));
  };

  const handleCountryChange = async e => {
    console.log(e.target.value);
    e.persist();
    setUserInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userInfo, {
      user_cityArea: "",
      user_city: "",
      user_region: "",
      user_country: e.target.value
    }));
    console.log(e.target.value);
    let regionCollection = await db.collection("country").doc(e.target.value).collection("region").get();
    console.log(regionCollection);
    let newRegionArray = [];
    regionCollection.docs.map(region => newRegionArray.push(region.id));
    setLocationArray(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationArray, {
      regionArray: newRegionArray,
      cityArray: [],
      cityAreaArray: []
    }));
    setLocationLoaded(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationLoaded, {
      region: true
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      cityDisable: true,
      cityAreaDisable: true
    }));
    setCurrentLocation(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentLocation, {
      country: e.target.value,
      region: "",
      city: "",
      cityArea: ""
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      cityArea: false,
      city: false,
      region: false
    }));
  };

  const handleCityAreaClick = async () => {
    if (!selectDisable.cityAreaDisable) {
      if (!locationLoaded.cityArea) {
        cityAreaCollection = await db.collection("country").doc(currentLocation.country).collection("region").doc(currentLocation.region).collection("city").doc(currentLocation.city).collection("area").get();
        cityAreaCollection.docs.map(cityArea => cityAreaArrayCopy.push(cityArea.id));
        setLocationArray(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationArray, {
          cityAreaArray: cityAreaArrayCopy
        }));
        setLocationLoaded(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationLoaded, {
          cityArea: true
        }));
      }
    }
  };

  const handleCityClick = async e => {
    if (!selectDisable.cityDisable) {
      if (!locationLoaded.city) {
        cityCollection = await db.collection("country").doc(currentLocation.country).collection("region").doc(currentLocation.region).collection("city").get();
        cityArrayCopy = [];
        cityCollection.docs.map(city => cityArrayCopy.push(city.id));
        setLocationArray(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationArray, {
          cityArray: cityArrayCopy
        }));
        setLocationLoaded(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationLoaded, {
          city: true
        }));
      }
    }
  };

  const handleRegionClick = async () => {
    if (!locationLoaded.region) {
      regionCollection = await db.collection("country").doc(currentLocation.country).collection("region").get();
      regionArrayCopy = [];
      regionCollection.docs.map(region => regionArrayCopy.push(region.id));
      setLocationArray(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationArray, {
        regionArray: regionArrayCopy
      }));
      setLocationLoaded(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationLoaded, {
        region: true
      }));
    }
  };

  const handleCountryClick = async e => {
    if (!locationLoaded.country) {
      countryCollection = await db.collection("country").get();
      countryArrayCopy = [];
      countryCollection.docs.map(country => countryArrayCopy.push(country.id));
      setLocationArray(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationArray, {
        countryArray: countryArrayCopy
      }));
      setLocationLoaded(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationLoaded, {
        country: true
      }));
    }
  };

  return locationInfo && profileUpdateMsg ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["ValidatorForm"], {
    className: classes.userProfileFormContainer,
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleProfileUpdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.yourProfileText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: this
  }, "Your Profile"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    disabled: true,
    id: "filled-basic",
    label: "Email",
    variant: "filled",
    InputLabelProps: {
      shrink: true
    },
    value: userInfo.user_email,
    validators: ["required", "isEmail"],
    errorMessages: ["Email address is requred", "Email address is not valid"],
    onChange: e => setUserInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userInfo, {
      user_email: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644
    },
    __self: this
  }, "Area"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    disabled: selectDisable.cityAreaDisable,
    className: classes.citySelect_input,
    defaultValue: userInfo.user_cityArea,
    value: userInfo.user_cityArea,
    onChange: e => handlecityAreaChange(e),
    onClick: () => handleCityAreaClick(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }), locationArray.cityAreaArray.map(cityArea => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: cityArea,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 655
      },
      __self: this
    }, cityArea);
  })), locationValid.cityArea ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: this
  }, "Select an area")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663
    },
    __self: this
  }, "City"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    disabled: selectDisable.cityDisable,
    className: classes.citySelect_input,
    defaultValue: userInfo.user_city,
    value: userInfo.user_city,
    onChange: e => handleCityChange(e),
    onClick: e => handleCityClick(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }), locationArray.cityArray.map(city => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: city,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674
      },
      __self: this
    }, city);
  })), locationValid.city ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: this
  }, "Select a City")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: this
  }, "Region"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.citySelect_input,
    defaultValue: userInfo.user_region,
    value: userInfo.user_region,
    onChange: e => handleRegionChange(e),
    onClick: e => handleRegionClick(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: this
  }), locationArray.regionArray.map(region => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: region,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 692
      },
      __self: this
    }, region);
  })), locationValid.region ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696
    },
    __self: this
  }, "Select a Region")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700
    },
    __self: this
  }, "Country"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.citySelect_input,
    defaultValue: userInfo.user_country,
    value: userInfo.user_country,
    onChange: e => handleCountryChange(e),
    onClick: e => handleCountryClick(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701
    },
    __self: this
  }, locationArray.countryArray.map(country => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: country,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 709
      },
      __self: this
    }, country);
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.regionOuterContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.logoutContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit",
    className: classes.updateButton,
    disabled: !(locationValid.cityArea && locationValid.city && locationValid.region && locationValid.country),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715
    },
    __self: this
  }, "Update"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.logoutButton,
    onClick: async e => {
      e.preventDefault();
      await _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signOut();
      history.push("/home");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729
    },
    __self: this
  }, "Logout"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_13__["default"],
    BackdropProps: {
      timeout: 500
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_14__["default"], {
    in: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.alert_button,
    action: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
      "aria-label": "close",
      color: "inherit",
      onClick: () => {
        setOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 755
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_17___default.a, {
      className: classes.closeIcon,
      fontSize: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 762
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752
    },
    __self: this
  }, "Profile updated!")))))))) : null;
});

/***/ }),

/***/ "./src/components/User/userSignupForm.js":
/*!***********************************************!*\
  !*** ./src/components/User/userSignupForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Auth */ "./src/Auth.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-material-ui-form-validator */ "./node_modules/react-material-ui-form-validator/lib/index.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__);


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/User/userSignupForm.js";














__webpack_require__(/*! firebase/functions */ "./node_modules/firebase/functions/dist/index.esm.js");
/**
 * CSS of the page
 */


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
  root: {
    margin: "0 0 32px 0",
    width: "100vw",
    display: "flex",
    justifyContent: "center"
  },
  formContainer: {
    width: "70%",
    display: "flex",
    flexDirection: "column"
  },
  countryOuterContainer: {
    margin: "0 0 28px 0"
  },
  countryContainer: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
  },
  regionOuterContainer: {
    margin: "0 0 28px 0"
  },
  regionContainer: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
  },
  passwordContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  location_errorText: {
    fontFamily: "CoreSans, sans-serif",
    fontSize: "13px",
    color: "rgba(204, 0, 0, 1)",
    margin: "3px 0 0px 0px"
  }
}));
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  overrides: {
    MuiFilledInput: {
      root: {
        height: "60px",
        backgroundColor: "rgba(205, 239, 245, 0.4)",
        "&$focused": {
          backgroundColor: "rgba(205, 239, 245, 0.8) !important"
        }
      },
      underline: {
        "&$focused": {// borderBottom: "1px solid black",
        },
        "&:after": {
          borderBottom: "2px solid black"
        }
      }
    },
    MuiInputLabel: {
      filled: {
        margin: "4px 0 0 0"
      }
    },
    MuiButton: {
      root: {
        backgroundColor: "#4caf50",
        color: "white",
        height: "60px",
        "&$disabled": {
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        "&:hover": {
          backgroundColor: "#4caf50",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "#4caf50"
          }
        }
      }
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "black"
        }
      }
    },
    MuiIconButton: {
      edgeEnd: {
        height: "60px",
        borderRadius: "0"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%",
        margin: "0 0 28px 0"
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: "12px"
      }
    },
    MuiNativeSelect: {
      root: {
        margin: "15px 0 10px 0",
        padding: "0 0 0 11px"
      },
      select: {
        "&$select": {
          backgroundColor: "transparent"
        }
      }
    }
  }
});
/**
 * This is the signup component
 * History from withRouter to navigate after signing up
 * @param {history} param0
 */

const SignUp = ({
  history
}) => {
  const classes = useStyles();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    password: "",
    confirmPassword: "",
    user_email: "",
    user_cityArea: "",
    user_city: "",
    user_region: "",
    user_country: ""
  }),
        _useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        registrationValue = _useState2[0],
        setRegistrationValue = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState4 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        showPassword = _useState4[0],
        setShowPassword = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
        _useState6 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        locationInfo = _useState6[0],
        setLocationInfo = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    regionDisable: true,
    cityDisable: true,
    cityAreaDisable: true
  }),
        _useState8 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
        selectDisable = _useState8[0],
        setSelectDisable = _useState8[1];

  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cityArea: true,
    city: true,
    region: true,
    country: false
  }),
        _useState10 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
        locationValid = _useState10[0],
        setLocationValid = _useState10[1];

  const db = _firebase__WEBPACK_IMPORTED_MODULE_6__["default"].firestore();
  let countryArray = [];
  let regionArray = [];
  let cityArray = [];
  let cityAreaArray = [];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    checkValidationRule();

    const fetchCountryInfo = async () => {
      // console.log("this is the profile page");
      const countryCollection = await db.collection("country").get();
      countryCollection.docs.map(country => countryArray.push(country.id));
      setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
        countryArray: countryArray,
        regionArray: regionArray,
        cityArray: cityArray,
        cityAreaArray: cityAreaArray
      }));
    };

    fetchCountryInfo();
  }, [registrationValue.confirmPassword]);

  const checkValidationRule = () => {
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["ValidatorForm"].addValidationRule("isPasswordMatch", value => {
      if (value !== registrationValue.password) {
        console.log(value + "     " + registrationValue.password);
        return false;
      }

      return true;
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  /**
   * This creates authentication user and also database user with the same unique ID
   * generated by Firebase
   */


  async function accountSignup(e) {
    const db = _firebase__WEBPACK_IMPORTED_MODULE_6__["default"].firestore();

    try {
      const credential = await _firebase__WEBPACK_IMPORTED_MODULE_6__["default"].auth().createUserWithEmailAndPassword(registrationValue.user_email, registrationValue.password);
      credential.user.sendEmailVerification();
      await db.collection("user").doc(credential.user.uid).set({
        user_email: registrationValue.user_email,
        user_city: registrationValue.user_city,
        user_region: registrationValue.user_region,
        user_country: registrationValue.user_country,
        user_cityArea: registrationValue.user_cityArea,
        claimedGift: []
      });
      const addUserRole = _firebase__WEBPACK_IMPORTED_MODULE_6__["default"].functions().httpsCallable("addUserRole");
      addUserRole({
        email: registrationValue.user_email
      }).then(result => {
        console.log(result);
      }); // Redirect user to user home page after signing up
      // history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  const handleCountryChange = async e => {
    setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      user_country: e.target.value
    }));
    const regionCollection = await db.collection("country").doc(e.target.value).collection("region").get();
    regionCollection.docs.map(region => regionArray.push(region.id));
    setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
      regionArray: regionArray
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      regionDisable: false,
      cityDisable: true,
      cityAreaDisable: true
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      country: true,
      region: false,
      city: true,
      cityArea: true
    }));
  };

  const handleRegionChange = async e => {
    setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      user_region: e.target.value
    }));
    const cityCollection = await db.collection("country").doc(registrationValue.user_country).collection("region").doc(e.target.value).collection("city").get();
    cityCollection.docs.map(city => cityArray.push(city.id));
    setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
      cityArray: cityArray
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      cityDisable: false,
      cityAreaDisable: true
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      region: true,
      city: false
    }));
  };

  const handleCityChange = async e => {
    setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      user_city: e.target.value
    }));
    const cityAreaCollection = await db.collection("country").doc(registrationValue.user_country).collection("region").doc(registrationValue.user_region).collection("city").doc(e.target.value).collection("area").get();
    cityAreaCollection.docs.map(cityArea => cityAreaArray.push(cityArea.id));
    setLocationInfo(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationInfo, {
      cityAreaArray: cityAreaArray
    }));
    setSelectDisable(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectDisable, {
      cityAreaDisable: false
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      city: true,
      cityArea: false
    }));
  };

  const handleCityAreaChange = async e => {
    setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      user_cityArea: e.target.value
    }));
    setLocationValid(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locationValid, {
      cityArea: true
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["ValidatorForm"], {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    onSubmit: accountSignup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.formContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    id: "filled-basic",
    label: "Email",
    variant: "filled",
    value: registrationValue.user_email,
    validators: ["required", "isEmail"],
    errorMessages: ["Email address is requred", "Email address is not valid"],
    onChange: e => setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      user_email: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.passwordContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    id: "filled-basic",
    label: "Password",
    variant: "filled",
    type: showPassword ? "text" : "password",
    value: registrationValue.password,
    validators: ["required"],
    errorMessages: ["Password is required"],
    onChange: e => setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      password: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.passwordIcon,
    "aria-label": "toggle password visibility",
    onClick: handleClickShowPassword,
    onMouseDown: handleMouseDownPassword,
    edge: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: undefined
  }, showPassword ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.passwordContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    id: "filled-basic",
    label: "Repeat Password",
    variant: "filled",
    type: showPassword ? "text" : "password",
    value: registrationValue.confirmPassword,
    validators: ["isPasswordMatch", "required"],
    errorMessages: ["Password doesn't match", "Confirm password is required"],
    onChange: e => setRegistrationValue(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registrationValue, {
      confirmPassword: e.target.value
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.passwordIcon,
    "aria-label": "toggle password visibility",
    onClick: handleClickShowPassword,
    onMouseDown: handleMouseDownPassword,
    edge: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: undefined
  }, showPassword ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: undefined
  }, "Country"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: registrationValue.user_country,
    onChange: e => handleCountryChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: undefined
  }), locationInfo ? locationInfo.countryArray.map(country => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: country,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416
      },
      __self: undefined
    }, country);
  }) : null), locationValid.country ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: undefined
  }, "Select a Country")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: undefined
  }, "Region"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: registrationValue.user_region,
    onChange: e => handleRegionChange(e),
    disabled: selectDisable.regionDisable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: undefined
  }), locationInfo ? locationInfo.regionArray.map(region => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: region,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: undefined
    }, region);
  }) : null), locationValid.region ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: undefined
  }, "Select a Region")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: undefined
  }, "City"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: registrationValue.user_city,
    onChange: e => handleCityChange(e),
    disabled: selectDisable.cityDisable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: undefined
  }), locationInfo ? locationInfo.cityArray.map(city => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: city,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460
      },
      __self: undefined
    }, city);
  }) : null), locationValid.city ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: undefined
  }, "Select a City")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "filled",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: undefined
  }, "Area"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.citySelect_input,
    defaultValue: "",
    value: registrationValue.user_cityArea,
    onChange: e => handleCityAreaChange(e),
    disabled: selectDisable.cityAreaDisable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: undefined
  }), locationInfo ? locationInfo.cityAreaArray.map(area => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: area,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480
      },
      __self: undefined
    }, area);
  }) : null), locationValid.cityArea ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.location_errorText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: undefined
  }, "Select an Area"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.userSignup_saveButton,
    type: "submit",
    disabled: !(locationValid.cityArea && locationValid.city && locationValid.region && locationValid.country),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: undefined
  }, "SIGN UP"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(SignUp));

/***/ }),

/***/ "./src/components/User/userSignupPage.js":
/*!***********************************************!*\
  !*** ./src/components/User/userSignupPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _userSignupForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userSignupForm */ "./src/components/User/userSignupForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/User/userSignupPage.js";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  signupPageContainer: {
    width: "100%"
  },
  fbButton: {
    width: "300px"
  },
  googleButton: {
    width: "300px"
  },
  rollWithUsText: {
    fontSize: "14px",
    fontSize: "16px",
    margin: "80px 0 35px 0",
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif"
  },
  accountMsg: {
    width: "300px"
  },
  signinTitleContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  signinTitle: {
    fontSize: "14px",
    fontSize: "16px",
    margin: "80px 0 15px 0",
    display: "flex",
    width: "70%",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif"
  },
  orTextContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  orText: {
    fontSize: "16px",
    margin: "40px 0 50px 0",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  orBorderBottom: {
    padding: "4px 0 0 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
    width: "35%"
  },
  signupFormContainer: {
    margin: "0 0 15px 0"
  },
  signupPolicyContainer: {
    width: "70%",
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "CoreSans, sans-serif",
    fontSize: "14px",
    textAlign: "center",
    margin: "0 0 80px 0",
    lineHeight: "18px",
    letterSpacing: "0.5px"
  },
  page_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  tos_text: {
    textDecoration: "none"
  },
  pp_text: {
    textDecoration: "none"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.page_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.rollWithUsText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "We just need some information to get you rolling."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.signupFormContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userSignupForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.signupPolicyContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "By signing up, you agree with the", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/tos",
    className: classes.tos_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Terms of Service"), " & ", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/privacyPolicy",
    className: classes.pp_text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Privacy Policy")));
});

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Auth */ "./src/Auth.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _landingPageNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landingPageNavigation */ "./src/components/landingPageNavigation.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-div-100vh */ "./node_modules/react-div-100vh/lib/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/home.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  banner_container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "black"
  },
  banner_image: {
    objectFit: "cover",
    height: "100%",
    margin: "0 0 0 14px"
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const classes = useStyles();
  /**
   * If user is logged in, route to user home page
   */

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_1__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(); // Redirect user to their home page according to their role

  if (currentUser != null) {
    currentUser.getIdTokenResult().then(idTokenResult => {
      if (idTokenResult.claims.adminRole) {
        history.push("/adminHome");
      }

      if (idTokenResult.claims.userRole) {
        history.push("/userHome");
      }

      if (idTokenResult.claims.shopRole) {
        history.push("/businessHome");
      }
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_div_100vh__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_landingPageNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.banner_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.banner_image,
    src: "img/landing_withLogo.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./src/components/landingPageNavigation.js":
/*!*************************************************!*\
  !*** ./src/components/landingPageNavigation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwipeableTemporaryDrawer; });
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/SwipeableDrawer */ "./node_modules/@material-ui/core/esm/SwipeableDrawer/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_icons_StorefrontOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/StorefrontOutlined */ "./node_modules/@material-ui/icons/StorefrontOutlined.js");
/* harmony import */ var _material_ui_icons_StorefrontOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StorefrontOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ExitToAppRounded__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExitToAppRounded */ "./node_modules/@material-ui/icons/ExitToAppRounded.js");
/* harmony import */ var _material_ui_icons_ExitToAppRounded__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToAppRounded__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_CallToActionOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/CallToActionOutlined */ "./node_modules/@material-ui/icons/CallToActionOutlined.js");
/* harmony import */ var _material_ui_icons_CallToActionOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CallToActionOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");


var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/landingPageNavigation.js";










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  list: {
    width: "250px",
    height: "100%"
  },
  fullList: {
    width: "auto"
  },
  menuButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    letterSpacing: "1.5px",
    textTransform: "none"
  },
  welcomeMsgContainer: {
    padding: "20px",
    fontSize: "16px",
    height: "45px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    fontFamily: "CoreSans, sans-serif",
    color: "rgba(0, 0, 0, 0.7)"
  },
  loginContainer: {
    display: "flex",
    padding: "15px",
    display: "flex",
    alignItems: "center"
  },
  loginIcon: {
    backgroundColor: "grey",
    width: "15px",
    height: "15px",
    margin: "0 10px 0 0"
  },
  signupContainer: {
    display: "flex",
    padding: "15px",
    display: "flex",
    alignItems: "center"
  },
  signupIcon: {
    backgroundColor: "grey",
    width: "15px",
    height: "15px",
    margin: "0 10px 0 0"
  },
  forBusinessContainer: {
    display: "flex",
    padding: "15px",
    display: "flex",
    alignItems: "center"
  },
  forBusinessIcon: {
    backgroundColor: "grey",
    width: "15px",
    height: "15px",
    margin: "0 10px 0 0"
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    position: "absolute",
    backgroundColor: "black"
  },
  loginButton: {
    fontSize: "14px",
    fontFamily: "CoreSans, sans-serif",
    letterSpacing: "0.2px",
    fontWeight: "400",
    margin: "0 0 0 10px",
    color: "rgba(0, 0, 0, 0.7)",
    backgroundColor: "transparent",
    border: "none"
  },
  signupButton: {
    fontSize: "14px",
    fontFamily: "CoreSans, sans-serif",
    letterSpacing: "0.2px",
    fontWeight: "400",
    margin: "0 0 0 10px",
    color: "rgba(0, 0, 0, 0.7)",
    backgroundColor: "transparent",
    border: "none"
  },
  forBusinessButton: {
    fontSize: "14px",
    fontFamily: "CoreSans, sans-serif",
    letterSpacing: "0.2px",
    fontWeight: "400",
    margin: "0 0 0 10px",
    color: "rgba(0, 0, 0, 0.7)",
    backgroundColor: "transparent",
    border: "none"
  },
  loginLinkContainer: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    textDecoration: "none"
  },
  signupLinkContainer: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    textDecoration: "none"
  },
  forBusinessLinkContainer: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    textDecoration: "none"
  },
  policies_container: {
    height: "66%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "0 0 12px 15px",
    fontFamily: "CoreSans, sans-serif",
    fontSize: "12px",
    letterSpacing: "0.25px",
    alignItems: "flex-start"
  },
  tos_text: {
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
    padding: "5px 5px 5px 0",
    fontSize: "12px",
    textTransform: "none"
  },
  privacy_text: {
    padding: "5px 5px 5px 0",
    fontSize: "12px",
    fontFamily: "CoreSans, sans-serif",
    display: "flex",
    textTransform: "none"
  }
});
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  overrides: {
    MuiSvgIcon: {
      root: {
        color: "rgba(0, 0, 0, 0.7)"
      }
    }
  }
});
function SwipeableTemporaryDrawer() {
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    right: false
  }),
        _React$useState2 = Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
        state = _React$useState2[0],
        setState = _React$useState2[1];

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_11__["useHistory"])();

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState(Object(_Users_oscar_Desktop_owo_owo_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      [side]: open
    }));
  };

  const sideList = side => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.list,
    role: "presentation",
    onClick: toggleDrawer(side, false),
    onKeyDown: toggleDrawer(side, false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.welcomeMsgContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Hello"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.loginSingupContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/login",
    className: classes.loginLinkContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.loginContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ExitToAppRounded__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: classes.loginButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Log in"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/signup",
    className: classes.signupLinkContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.signupContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_CallToActionOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: classes.signupButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Sign up")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/businessInfo",
    className: classes.forBusinessLinkContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.forBusinessContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_StorefrontOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: classes.forBusinessButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Are you a shop?"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.policies_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.tos_text,
    onClick: () => history.push("/tos"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Terms of Service"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.privacy_text,
    onClick: () => history.push("/privacyPolicy"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Privacy Policy")));
  /**
   * Media Queries
   */


  const max600 = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["default"])("(max-width:600px)");
  const min600 = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["default"])("(min-width:600px)");
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.navigationContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, max600 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.menuButton,
    onClick: toggleDrawer("right", true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "Menu"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    anchor: "right",
    open: state.right,
    onClose: toggleDrawer("right", false),
    onOpen: toggleDrawer("right", true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, sideList("right"))), min600 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleDrawer("right", true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, "LOL"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    anchor: "right",
    open: state.right,
    onClose: toggleDrawer("right", false),
    onOpen: toggleDrawer("right", true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, sideList("right")))));
}

/***/ }),

/***/ "./src/components/privacyPolicy.js":
/*!*****************************************!*\
  !*** ./src/components/privacyPolicy.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Auth */ "./src/Auth.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _landingPageNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landingPageNavigation */ "./src/components/landingPageNavigation.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-div-100vh */ "./node_modules/react-div-100vh/lib/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/privacyPolicy.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({}));
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const classes = useStyles();
  /**
   * If user is logged in, route to user home page
   */

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_1__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "this is the pp page");
});

/***/ }),

/***/ "./src/components/setupUI.js":
/*!***********************************!*\
  !*** ./src/components/setupUI.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/tos.js":
/*!*******************************!*\
  !*** ./src/components/tos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Auth */ "./src/Auth.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _landingPageNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landingPageNavigation */ "./src/components/landingPageNavigation.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-div-100vh */ "./node_modules/react-div-100vh/lib/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/components/tos.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({}));
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const classes = useStyles();
  /**
   * If user is logged in, route to user home page
   */

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Auth__WEBPACK_IMPORTED_MODULE_1__["AuthContext"]),
        currentUser = _useContext.currentUser;

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "this is the tos page");
});

/***/ }),

/***/ "./src/firebase.js":
/*!*************************!*\
  !*** ./src/firebase.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");



const app = firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]({
  apiKey: "AIzaSyCfXhGdAXPVi47L0DbcSElrOo_EJSbmeXw".replace(/\\n/g, "\n"),
  authDomain: "owospace-d6985.firebaseapp.com",
  databaseURL: "https://owospace-d6985.firebaseio.com",
  projectId: "owospace-d6985",
  storageBucket: "owospace-d6985.appspot.com",
  messagingSenderId: "403770150468",
  appId: "1:403770150468:web:e56f3487c835eb4df1b611"
});
app.firestore().enablePersistence().catch(function (err) {
  if (err.code == "failed-precondition") {
    console.log("persistence error", err);
  } else if (err.code == "unimplemented") {
    console.log("persistence unimplemented", err);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/oscar/Desktop/owo/owo/src/index.js";


 // import * as serviceWorker from './serviceWorker';

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/oscar/Desktop/owo/owo/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/oscar/Desktop/owo/owo/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/oscar/Desktop/owo/owo/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map