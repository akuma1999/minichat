"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["bundle"],{

/***/ "./src/Page/Home/style.css":
/*!*********************************!*\
  !*** ./src/Page/Home/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Page/Login/style.css":
/*!**********************************!*\
  !*** ./src/Page/Login/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Page/Detail/index.tsx":
/*!***********************************!*\
  !*** ./src/Page/Detail/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function index() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
}


/***/ }),

/***/ "./src/Page/Home/index.tsx":
/*!*********************************!*\
  !*** ./src/Page/Home/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/Page/Home/style.css");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");

// const socket = io.connect('http://localhost:3000', {
//   transports: ['websocket']
// });
// import style

//
// import icons




//
function Home() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(false), open = _a[0], setOpen = _a[1];
    // React.useEffect(() => {
    //   socket.connect();
    //   socket.on('chao', (arg) => {
    //     console.log(arg);
    //   });
    //   return () => {
    //     socket.disconnect();
    //   };
    // }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-box-root' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'nav' }, open ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'icon', onClick: function () { return setOpen(false); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineCloseCircle, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Trang ch\u1EE7"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineHome, null)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "kh\u00F3a h\u1ECDc"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__.GrTasks, null)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u0110\u0103ng xu\u1EA5t"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_im__WEBPACK_IMPORTED_MODULE_4__.ImExit, null))))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'icon', onClick: function () { return setOpen(true); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiHamburgerMenu, null)))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: 'home-title' }, "Th\u00F4ng b\u00E1o"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-body' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : c\u00F3 ng\u01B0\u1EDDi l\u1EA1 v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : nh\u00E2n vi\u00EAn v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : c\u00F3 ng\u01B0\u1EDDi l\u1EA1 v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : nh\u00E2n vi\u00EAn v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : c\u00F3 ng\u01B0\u1EDDi l\u1EA1 v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : nh\u00E2n vi\u00EAn v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : c\u00F3 ng\u01B0\u1EDDi l\u1EA1 v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : nh\u00E2n vi\u00EAn v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : c\u00F3 ng\u01B0\u1EDDi l\u1EA1 v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : nh\u00E2n vi\u00EAn v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : c\u00F3 ng\u01B0\u1EDDi l\u1EA1 v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : nh\u00E2n vi\u00EAn v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : c\u00F3 ng\u01B0\u1EDDi l\u1EA1 v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : nh\u00E2n vi\u00EAn v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : c\u00F3 ng\u01B0\u1EDDi l\u1EA1 v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : nh\u00E2n vi\u00EAn v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : c\u00F3 ng\u01B0\u1EDDi l\u1EA1 v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : nh\u00E2n vi\u00EAn v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : c\u00F3 ng\u01B0\u1EDDi l\u1EA1 v\u1EEBa v\u00E0o l\u00FAc")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Th\u00F4ng b\u00E1o : nh\u00E2n vi\u00EAn v\u1EEBa v\u00E0o l\u00FAc")))));
}


/***/ }),

/***/ "./src/Page/Infor/index.tsx":
/*!**********************************!*\
  !*** ./src/Page/Infor/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function index() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
}


/***/ }),

/***/ "./src/Page/Login/index.tsx":
/*!**********************************!*\
  !*** ./src/Page/Login/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/Page/Login/style.css");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");

// import css

//
// import mui


//
function LoginPage() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'login-box' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'login-box-item' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: 'login-title' }, "X\u00E1c th\u1EF1c t\u00E0i kho\u1EA3n"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: 'outlined-basic', label: 'T\u00E0i kho\u1EA3n', variant: 'outlined', fullWidth: true })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: 'outlined-basic', label: 'M\u1EADt kh\u1EA9u', variant: 'outlined', fullWidth: true })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: 'contained', color: 'primary', fullWidth: true }, "\u0111\u0103ng nh\u1EADp")))));
}


/***/ }),

/***/ "./src/Page/Root.tsx":
/*!***************************!*\
  !*** ./src/Page/Root.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/Page/Home/index.tsx");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./src/Page/Login/index.tsx");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Detail */ "./src/Page/Detail/index.tsx");
/* harmony import */ var _Infor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Infor */ "./src/Page/Infor/index.tsx");


// import component




//
function Root() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: '/', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null) }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: '/login', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Login__WEBPACK_IMPORTED_MODULE_2__["default"], null) }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: '/detail-:id', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Detail__WEBPACK_IMPORTED_MODULE_3__["default"], null) }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: '/info-:id', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Infor__WEBPACK_IMPORTED_MODULE_4__["default"], null) })));
}


/***/ }),

/***/ "./src/Redux/ConfigureStore.ts":
/*!*************************************!*\
  !*** ./src/Redux/ConfigureStore.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/index */ "./src/Redux/reducers/index.ts");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");




var ConfigureStore = function () {
    var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]];
    var enhancers = [redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware.apply(void 0, middlewares)];
    var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_reducers_index__WEBPACK_IMPORTED_MODULE_0__["default"], redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools.apply(void 0, enhancers));
    return store;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigureStore);


/***/ }),

/***/ "./src/Redux/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/Redux/reducers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_ConfigureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Redux/ConfigureStore */ "./src/Redux/ConfigureStore.ts");
/* harmony import */ var _Page_Root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Page/Root */ "./src/Page/Root.tsx");






var store = (0,_Redux_ConfigureStore__WEBPACK_IMPORTED_MODULE_3__["default"])();
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, { store: store },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page_Root__WEBPACK_IMPORTED_MODULE_4__["default"], null))), document.getElementById('root'));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_TextField_TextFi-9bf49b","vendors-node_modules_react-icons_ai_index_esm_js-node_modules_react-icons_gi_index_esm_js-nod-74c555"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07UUFDTCxpREFBQyxrREFBSSxPQUFHLENBQ0QsQ0FDQSxFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQ2hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvUGFnZS9Ib21lL3N0eWxlLmNzcz8yY2RiIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9QYWdlL0xvZ2luL3N0eWxlLmNzcz8yZmYwIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9QYWdlL0RldGFpbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL1BhZ2UvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL1BhZ2UvSW5mb3IvaW5kZXgudHN4Iiwid2VicGFjazovL2NsaWVudC8uL3NyYy9QYWdlL0xvZ2luL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvUGFnZS9Sb290LnRzeCIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvUmVkdXgvQ29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL1JlZHV4L3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcbi8vIGNvbnN0IHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsIHtcclxuLy8gICB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCddXHJcbi8vIH0pO1xyXG5cclxuLy8gaW1wb3J0IHN0eWxlXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG4vL1xyXG5cclxuLy8gaW1wb3J0IGljb25zXHJcbmltcG9ydCB7IEdpSGFtYnVyZ2VyTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2dpJztcclxuaW1wb3J0IHsgQWlPdXRsaW5lQ2xvc2VDaXJjbGUsIEFpT3V0bGluZUhvbWUgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7IEltRXhpdCB9IGZyb20gJ3JlYWN0LWljb25zL2ltJztcclxuaW1wb3J0IHsgR3JUYXNrcyB9IGZyb20gJ3JlYWN0LWljb25zL2dyJztcclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBzb2NrZXQuY29ubmVjdCgpO1xyXG5cclxuICAvLyAgIHNvY2tldC5vbignY2hhbycsIChhcmcpID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coYXJnKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgcmV0dXJuICgpID0+IHtcclxuICAvLyAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAvLyAgIH07XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtYm94LXJvb3QnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2Jz5cclxuICAgICAgICB7b3BlbiA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uJyBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgPEFpT3V0bGluZUNsb3NlQ2lyY2xlIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+VHJhbmcgY2jhu6c8L3NwYW4+IDxBaU91dGxpbmVIb21lIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5raMOzYSBo4buNYzwvc3Bhbj4gPEdyVGFza3MgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPsSQxINuZyB4deG6pXQ8L3NwYW4+IDxJbUV4aXQgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uJyBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfT5cclxuICAgICAgICAgICAgPEdpSGFtYnVyZ2VyTWVudSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9J2hvbWUtdGl0bGUnPlRow7RuZyBiw6FvPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1ib2R5Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS10ZXh0Jz5cclxuICAgICAgICAgIDxzcGFuPlRow7RuZyBiw6FvIDogY8OzIG5nxrDhu51pIGzhuqEgduG7q2EgdsOgbyBsw7pjPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXRleHQnPlxyXG4gICAgICAgICAgPHNwYW4+VGjDtG5nIGLDoW8gOiBuaMOibiB2acOqbiB24burYSB2w6BvIGzDumM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtdGV4dCc+XHJcbiAgICAgICAgICA8c3Bhbj5UaMO0bmcgYsOhbyA6IGPDsyBuZ8aw4budaSBs4bqhIHbhu6thIHbDoG8gbMO6Yzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS10ZXh0Jz5cclxuICAgICAgICAgIDxzcGFuPlRow7RuZyBiw6FvIDogbmjDom4gdmnDqm4gduG7q2EgdsOgbyBsw7pjPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXRleHQnPlxyXG4gICAgICAgICAgPHNwYW4+VGjDtG5nIGLDoW8gOiBjw7MgbmfGsOG7nWkgbOG6oSB24burYSB2w6BvIGzDumM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtdGV4dCc+XHJcbiAgICAgICAgICA8c3Bhbj5UaMO0bmcgYsOhbyA6IG5ow6JuIHZpw6puIHbhu6thIHbDoG8gbMO6Yzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS10ZXh0Jz5cclxuICAgICAgICAgIDxzcGFuPlRow7RuZyBiw6FvIDogY8OzIG5nxrDhu51pIGzhuqEgduG7q2EgdsOgbyBsw7pjPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXRleHQnPlxyXG4gICAgICAgICAgPHNwYW4+VGjDtG5nIGLDoW8gOiBuaMOibiB2acOqbiB24burYSB2w6BvIGzDumM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtdGV4dCc+XHJcbiAgICAgICAgICA8c3Bhbj5UaMO0bmcgYsOhbyA6IGPDsyBuZ8aw4budaSBs4bqhIHbhu6thIHbDoG8gbMO6Yzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS10ZXh0Jz5cclxuICAgICAgICAgIDxzcGFuPlRow7RuZyBiw6FvIDogbmjDom4gdmnDqm4gduG7q2EgdsOgbyBsw7pjPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXRleHQnPlxyXG4gICAgICAgICAgPHNwYW4+VGjDtG5nIGLDoW8gOiBjw7MgbmfGsOG7nWkgbOG6oSB24burYSB2w6BvIGzDumM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtdGV4dCc+XHJcbiAgICAgICAgICA8c3Bhbj5UaMO0bmcgYsOhbyA6IG5ow6JuIHZpw6puIHbhu6thIHbDoG8gbMO6Yzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS10ZXh0Jz5cclxuICAgICAgICAgIDxzcGFuPlRow7RuZyBiw6FvIDogY8OzIG5nxrDhu51pIGzhuqEgduG7q2EgdsOgbyBsw7pjPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXRleHQnPlxyXG4gICAgICAgICAgPHNwYW4+VGjDtG5nIGLDoW8gOiBuaMOibiB2acOqbiB24burYSB2w6BvIGzDumM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtdGV4dCc+XHJcbiAgICAgICAgICA8c3Bhbj5UaMO0bmcgYsOhbyA6IGPDsyBuZ8aw4budaSBs4bqhIHbhu6thIHbDoG8gbMO6Yzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS10ZXh0Jz5cclxuICAgICAgICAgIDxzcGFuPlRow7RuZyBiw6FvIDogbmjDom4gdmnDqm4gduG7q2EgdsOgbyBsw7pjPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXRleHQnPlxyXG4gICAgICAgICAgPHNwYW4+VGjDtG5nIGLDoW8gOiBjw7MgbmfGsOG7nWkgbOG6oSB24burYSB2w6BvIGzDumM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtdGV4dCc+XHJcbiAgICAgICAgICA8c3Bhbj5UaMO0bmcgYsOhbyA6IG5ow6JuIHZpw6puIHbhu6thIHbDoG8gbMO6Yzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS10ZXh0Jz5cclxuICAgICAgICAgIDxzcGFuPlRow7RuZyBiw6FvIDogY8OzIG5nxrDhu51pIGzhuqEgduG7q2EgdsOgbyBsw7pjPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXRleHQnPlxyXG4gICAgICAgICAgPHNwYW4+VGjDtG5nIGLDoW8gOiBuaMOibiB2acOqbiB24burYSB2w6BvIGzDumM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW1wb3J0IGNzc1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuLy9cclxuXHJcbi8vIGltcG9ydCBtdWlcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG4vL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4tYm94Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luLWJveC1pdGVtJz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J2xvZ2luLXRpdGxlJz5Yw6FjIHRo4buxYyB0w6BpIGtob+G6o248L3A+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgaWQ9J291dGxpbmVkLWJhc2ljJ1xyXG4gICAgICAgICAgICBsYWJlbD0nVMOgaSBraG/huqNuJ1xyXG4gICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD0nb3V0bGluZWQtYmFzaWMnXHJcbiAgICAgICAgICAgIGxhYmVsPSdN4bqtdCBraOG6qXUnXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknIGZ1bGxXaWR0aD17dHJ1ZX0+XHJcbiAgICAgICAgICAgIMSRxINuZyBuaOG6rXBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy8gaW1wb3J0IGNvbXBvbmVudFxyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbic7XHJcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9EZXRhaWwnO1xyXG5pbXBvcnQgSW5mb3IgZnJvbSAnLi9JbmZvcic7XHJcbi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Um91dGVzPlxyXG4gICAgICA8Um91dGUgcGF0aD0nLycgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPScvbG9naW4nIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9Jy9kZXRhaWwtOmlkJyBlbGVtZW50PXs8RGV0YWlsIC8+fSAvPlxyXG4gICAgICA8Um91dGUgcGF0aD0nL2luZm8tOmlkJyBlbGVtZW50PXs8SW5mb3IgLz59IC8+XHJcbiAgICA8L1JvdXRlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGVXYXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuXHJcbmNvbnN0IENvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3RodW5rXTtcclxuICBjb25zdCBlbmhhbmNlcnMgPSBbYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKV07XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgY29tcG9zZVdpdGhEZXZUb29scyguLi5lbmhhbmNlcnMpKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmVTdG9yZTtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7fSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IENvbmZpZ3VyZVN0b3JlIGZyb20gJy4vUmVkdXgvQ29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgUm9vdCBmcm9tICcuL1BhZ2UvUm9vdCc7XHJcblxyXG5jb25zdCBzdG9yZSA9IENvbmZpZ3VyZVN0b3JlKCk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8Um91dGVyPlxyXG4gICAgICA8Um9vdCAvPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbiAgPC9Qcm92aWRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=