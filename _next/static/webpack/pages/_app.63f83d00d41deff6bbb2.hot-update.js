webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/shared/Navbar.js":
/*!*************************************!*\
  !*** ./components/shared/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);





var AppLink = function AppLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      className: className,
      children: children
    })
  });
};

_c = AppLink;

var AppNavbar = function AppNavbar() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "navbar-wrapper",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      expand: "lg",
      className: "navbar-dark fj-mw9",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
        className: "mr-3 font-weight-bold",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AppLink, {
          href: "/",
          className: "",
          children: "Ansar"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
          className: "mr-auto",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AppLink, {
            href: "/portfolios",
            className: "nav-link mr-3",
            children: "Portfolio"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AppLink, {
            href: "/forum/categories",
            className: "nav-link mr-3",
            children: "Forum"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AppLink, {
            href: "/cv",
            className: "nav-link mr-3",
            children: "CV"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AppLink, {
            href: "/ask",
            className: "nav-link mr-3",
            children: "Ask me"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AppLink, {
            href: "/login",
            className: "nav-link mr-3",
            children: "Sign in"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AppLink, {
            href: "/register",
            className: "btn btn-success nav-link mr-3",
            children: "Sign up"
          })]
        })]
      })]
    })
  });
};

_c2 = AppNavbar;
/* harmony default export */ __webpack_exports__["default"] = (AppNavbar);

var _c, _c2;

$RefreshReg$(_c, "AppLink");
$RefreshReg$(_c2, "AppNavbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIkFwcExpbmsiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImhyZWYiLCJBcHBOYXZiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxNQUFZQyxTQUFaLFFBQVlBLFNBQVo7QUFBQSxNQUF1QkMsSUFBdkIsUUFBdUJBLElBQXZCO0FBQUEsc0JBQ2QsOERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQVo7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRUQsU0FBZDtBQUFBLGdCQUEwQkQ7QUFBMUI7QUFERixJQURjO0FBQUEsQ0FBaEI7O0tBQU1ELE87O0FBS04sSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixzQkFDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLDJCQUNFLCtEQUFDLHNEQUFEO0FBQVEsWUFBTSxFQUFDLElBQWY7QUFBb0IsZUFBUyxFQUFDLG9CQUE5QjtBQUFBLDhCQUNFLDhEQUFDLHNEQUFELENBQVEsS0FBUjtBQUFjLGlCQUFTLEVBQUMsdUJBQXhCO0FBQUEsK0JBQ0UsOERBQUMsT0FBRDtBQUFTLGNBQUksRUFBQyxHQUFkO0FBQWtCLG1CQUFTLEVBQUMsRUFBNUI7QUFBQTtBQUFBO0FBREYsUUFERixlQU1FLDhEQUFDLHNEQUFELENBQVEsTUFBUixLQU5GLGVBT0UsK0RBQUMsc0RBQUQsQ0FBUSxRQUFSO0FBQUEsZ0NBQ0UsK0RBQUMsbURBQUQ7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FDRSw4REFBQyxPQUFEO0FBQVMsZ0JBQUksRUFBQyxhQUFkO0FBQTRCLHFCQUFTLEVBQUMsZUFBdEM7QUFBQTtBQUFBLFlBREYsZUFJRSw4REFBQyxPQUFEO0FBQVMsZ0JBQUksRUFBQyxtQkFBZDtBQUFrQyxxQkFBUyxFQUFDLGVBQTVDO0FBQUE7QUFBQSxZQUpGLGVBT0UsOERBQUMsT0FBRDtBQUFTLGdCQUFJLEVBQUMsS0FBZDtBQUFvQixxQkFBUyxFQUFDLGVBQTlCO0FBQUE7QUFBQSxZQVBGLGVBVUUsOERBQUMsT0FBRDtBQUFTLGdCQUFJLEVBQUMsTUFBZDtBQUFxQixxQkFBUyxFQUFDLGVBQS9CO0FBQUE7QUFBQSxZQVZGO0FBQUEsVUFERixlQWVFLCtEQUFDLG1EQUFEO0FBQUEsa0NBQ0EsOERBQUMsT0FBRDtBQUFTLGdCQUFJLEVBQUMsUUFBZDtBQUF1QixxQkFBUyxFQUFDLGVBQWpDO0FBQUE7QUFBQSxZQURBLGVBSUEsOERBQUMsT0FBRDtBQUFTLGdCQUFJLEVBQUMsV0FBZDtBQUEwQixxQkFBUyxFQUFDLCtCQUFwQztBQUFBO0FBQUEsWUFKQTtBQUFBLFVBZkY7QUFBQSxRQVBGO0FBQUE7QUFERixJQURGO0FBb0NELENBckNEOztNQUFNQSxTO0FBdUNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjYzZjgzZDAwZDQxZGVmZjZiYmIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05hdmJhciwgTmF2fSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmNvbnN0IEFwcExpbmsgPSAoe2NoaWxkcmVuLCBjbGFzc05hbWUsIGhyZWZ9KSA9PlxyXG4gIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L2E+XHJcbiAgPC9MaW5rPlxyXG5cclxuY29uc3QgQXBwTmF2YmFyID0gKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXdyYXBwZXJcIj5cclxuICAgICAgPE5hdmJhciBleHBhbmQ9J2xnJyBjbGFzc05hbWU9XCJuYXZiYXItZGFyayBmai1tdzlcIj5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kIGNsYXNzTmFtZT0nbXItMyBmb250LXdlaWdodC1ib2xkJyA+XHJcbiAgICAgICAgICA8QXBwTGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIEFuc2FyXHJcbiAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgPE5hdmJhci5Ub2dnbGUvPlxyXG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nbXItYXV0byc+XHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvcG9ydGZvbGlvc1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG1yLTNcIj5cclxuICAgICAgICAgICAgICBQb3J0Zm9saW9cclxuICAgICAgICAgICAgPC9BcHBMaW5rPlxyXG4gICAgICAgICAgICA8QXBwTGluayBocmVmPScvZm9ydW0vY2F0ZWdvcmllcycgY2xhc3NOYW1lPSduYXYtbGluayBtci0zJz5cclxuICAgICAgICAgICAgICBGb3J1bVxyXG4gICAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9Jy9jdicgY2xhc3NOYW1lPSduYXYtbGluayBtci0zJz5cclxuICAgICAgICAgICAgICBDVlxyXG4gICAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9Jy9hc2snIGNsYXNzTmFtZT0nbmF2LWxpbmsgbXItMyc+XHJcbiAgICAgICAgICAgICAgQXNrIG1lXHJcbiAgICAgICAgICAgIDwvQXBwTGluaz5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPE5hdj5cclxuICAgICAgICAgIDxBcHBMaW5rIGhyZWY9Jy9sb2dpbicgY2xhc3NOYW1lPSduYXYtbGluayBtci0zJz5cclxuICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgPC9BcHBMaW5rPlxyXG4gICAgICAgICAgPEFwcExpbmsgaHJlZj0nL3JlZ2lzdGVyJyBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBuYXYtbGluayBtci0zJz5cclxuICAgICAgICAgICAgU2lnbiB1cFxyXG4gICAgICAgICAgPC9BcHBMaW5rPlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9