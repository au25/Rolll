webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.7a6b3a9aa5986545e570.hot-update.js.map