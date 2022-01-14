"use strict";
(self["webpackChunkhoanglam"] = self["webpackChunkhoanglam"] || []).push([["bundle"],{

/***/ "./src/Page/Home/style.css":
/*!*********************************!*\
  !*** ./src/Page/Home/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Page/Join/style.css":
/*!*********************************!*\
  !*** ./src/Page/Join/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/Page/Home/style.css");



var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__.connect('https://chat-app-mini.herokuapp.com/', {
    transports: ['websocket']
});
// import mui


//
// import icon

//
// import style

//
function Home() {
    var name = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return state.common.name; });
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(''), comment = _a[0], setComment = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        socket.connect();
        socket.emit('join', { name: name });
        var box = document.getElementById('body-box');
        socket.on('persion_join', function (text) {
            box.innerHTML += "<div class='home-toast'>".concat(text, "</div>");
        });
        socket.on('client-out', function (text) {
            box.innerHTML += "<div class='home-toast'>".concat(text, "</div>");
        });
        socket.on('sever-to-client', function (data) {
            if (data.name === name) {
                box.innerHTML += "<div class='home-text-right'>\n                            <span class='comment-title'>t\u00F4i</span>\n                            <span class='comment-body'>\n                              ".concat(data.comment, "\n                            </span>\n                          </div>");
            }
            else {
                box.innerHTML += "<div class='home-text-left'>\n                            <span class='comment-title'>".concat(data.name, "</span>\n                            <span class='comment-body'>\n                              ").concat(data.comment, "\n                            </span>\n                          </div>");
            }
        });
        return function () {
            socket.disconnect();
        };
    }, []);
    var send_text = function () {
        if (comment !== '') {
            socket.emit('client-to-sever', { name: name, comment: comment });
        }
    };
    var renderComment = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'comment-text' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], { id: 'name', label: 'n\u1ED9i dung b\u00ECnh lu\u1EADn', variant: 'outlined', onChange: function (e) { return changeComment(e); }, size: 'small', value: comment, fullWidth: true })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'comment-send', id: 'btn-send', onClick: function () { return send_text(); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineSend, null)))));
    };
    var changeComment = function (e) {
        setComment(e.target.value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-box-root' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: 'home-title' }, "Tr\u00F2 chuy\u1EC7n mini"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-body', id: 'body-box' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'comment-box' }, renderComment())));
}


/***/ }),

/***/ "./src/Page/Join/index.tsx":
/*!*********************************!*\
  !*** ./src/Page/Join/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_actions_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Redux/actions/common */ "./src/Redux/actions/common.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/Page/Join/style.css");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");



// import css

//
// import mui


//
function LoginPage() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(''), name = _a[0], setName = _a[1];
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var handleTextChange = function (e) {
        setName(e.target.value);
    };
    var submit = function () {
        if (name === '') {
            alert('chưa điền tên mà ?');
        }
        else {
            dispatch(_Redux_actions_common__WEBPACK_IMPORTED_MODULE_2__.change_current_name(name));
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'login-box' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'login-box-item' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: 'login-title' }, "Ch\u1ECDn 1 c\u00E1i t\u00EAn n\u00E0o"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], { id: 'name', label: 'T\u00EAn Hi\u1EC3n th\u1ECB', variant: 'outlined', onChange: function (e) { return handleTextChange(e); }, value: name, fullWidth: true })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: function () { return submit(); }, variant: 'contained', color: 'primary', fullWidth: true }, "Chat th\u00F4i !!")))));
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./src/Page/Home/index.tsx");
/* harmony import */ var _Join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Join */ "./src/Page/Join/index.tsx");



//
// import component


//
function Root() {
    var name = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return state.common.name; });
    var check = function () {
        if (name === '') {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, { path: '/minichat', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Join__WEBPACK_IMPORTED_MODULE_3__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, { path: '*', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "notfound") })));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, { path: '/minichat', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, { path: '*', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "notfound") })));
        }
    };
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, null, check());
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

/***/ "./src/Redux/actions/common.ts":
/*!*************************************!*\
  !*** ./src/Redux/actions/common.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "change_current_name": () => (/* binding */ change_current_name),
/* harmony export */   "change_current_room": () => (/* binding */ change_current_room)
/* harmony export */ });
/* harmony import */ var _actiontype_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actiontype/common */ "./src/Redux/actiontype/common.ts");

var change_current_name = function (name) { return ({
    type: _actiontype_common__WEBPACK_IMPORTED_MODULE_0__.CHANGE_NAME,
    name: name
}); };
var change_current_room = function (room) { return ({
    type: _actiontype_common__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ROOM,
    room: room
}); };


/***/ }),

/***/ "./src/Redux/actiontype/common.ts":
/*!****************************************!*\
  !*** ./src/Redux/actiontype/common.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_NAME": () => (/* binding */ CHANGE_NAME),
/* harmony export */   "CHANGE_ROOM": () => (/* binding */ CHANGE_ROOM)
/* harmony export */ });
var CHANGE_NAME = 'CHANGE_NAME';
var CHANGE_ROOM = 'CHANGE_ROOM';


/***/ }),

/***/ "./src/Redux/reducers/common.ts":
/*!**************************************!*\
  !*** ./src/Redux/reducers/common.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "common": () => (/* binding */ common)
/* harmony export */ });
/* harmony import */ var _actiontype_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actiontype/common */ "./src/Redux/actiontype/common.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var nameInitialState = {
    name: '',
    room: ''
};
var common = function (state, action) {
    var _a, _b;
    if (state === void 0) { state = nameInitialState; }
    switch (action.type) {
        case _actiontype_common__WEBPACK_IMPORTED_MODULE_0__.CHANGE_NAME:
            return __assign(__assign({}, state), (_a = {}, _a['name'] = action.name, _a));
        case _actiontype_common__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ROOM:
            return __assign(__assign({}, state), (_b = {}, _b['room'] = action.room, _b));
        default:
            return state;
    }
};


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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/Redux/reducers/common.ts");


var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({ common: _common__WEBPACK_IMPORTED_MODULE_0__.common });
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_IconButton_IconB-8eabf7","vendors-node_modules_react-icons_ai_index_esm_js-node_modules_redux-devtools-extension_index_js"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFyQyxnREFBd0I7SUFDN0MsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssMkRBQWlCO1lBQ3BCLDZCQUFZLEtBQUssZ0JBQUcsTUFBTSxJQUFHLE1BQU0sQ0FBQyxJQUFJLE9BQUc7UUFDN0MsS0FBSywyREFBaUI7WUFDcEIsNkJBQVksS0FBSyxnQkFBRyxNQUFNLElBQUcsTUFBTSxDQUFDLElBQUksT0FBRztRQUM3QztZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzQztBQUNOO0FBRWxDLElBQU0sV0FBVyxHQUFHLHNEQUFlLENBQUMsRUFBRSxNQUFNLEVBQUUsMkNBQU0sRUFBRSxDQUFDLENBQUM7QUFFeEQsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMSTtBQUNPO0FBQ3FCO0FBQ3BCO0FBQ2E7QUFDckI7QUFFL0IsSUFBTSxLQUFLLEdBQUcsaUVBQWMsRUFBRSxDQUFDO0FBRS9CLDZDQUFlLENBQ2IsaURBQUMsaURBQVEsSUFBQyxLQUFLLEVBQUUsS0FBSztJQUNwQixpREFBQywyREFBTTtRQUNMLGlEQUFDLGtEQUFJLE9BQUcsQ0FDRCxDQUNBLEVBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FDaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvYW5nbGFtLy4vc3JjL1BhZ2UvSG9tZS9zdHlsZS5jc3M/MmNkYiIsIndlYnBhY2s6Ly9ob2FuZ2xhbS8uL3NyYy9QYWdlL0pvaW4vc3R5bGUuY3NzPzM2YTgiLCJ3ZWJwYWNrOi8vaG9hbmdsYW0vLi9zcmMvUGFnZS9Ib21lL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9ob2FuZ2xhbS8uL3NyYy9QYWdlL0pvaW4vaW5kZXgudHN4Iiwid2VicGFjazovL2hvYW5nbGFtLy4vc3JjL1BhZ2UvUm9vdC50c3giLCJ3ZWJwYWNrOi8vaG9hbmdsYW0vLi9zcmMvUmVkdXgvQ29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vaG9hbmdsYW0vLi9zcmMvUmVkdXgvYWN0aW9ucy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vaG9hbmdsYW0vLi9zcmMvUmVkdXgvYWN0aW9udHlwZS9jb21tb24udHMiLCJ3ZWJwYWNrOi8vaG9hbmdsYW0vLi9zcmMvUmVkdXgvcmVkdWNlcnMvY29tbW9uLnRzIiwid2VicGFjazovL2hvYW5nbGFtLy4vc3JjL1JlZHV4L3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovL2hvYW5nbGFtLy4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL1JlZHV4L3JlZHVjZXJzL2luZGV4JztcclxuY29uc3Qgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cHM6Ly9jaGF0LWFwcC1taW5pLmhlcm9rdWFwcC5jb20vJywge1xyXG4gIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0J11cclxufSk7XHJcblxyXG4vLyBpbXBvcnQgbXVpXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xyXG4vL1xyXG5cclxuLy8gaW1wb3J0IGljb25cclxuaW1wb3J0IHsgQWlPdXRsaW5lU2VuZCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuLy9cclxuXHJcbi8vIGltcG9ydCBzdHlsZVxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgbmFtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5jb21tb24ubmFtZSk7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzb2NrZXQuY29ubmVjdCgpO1xyXG5cclxuICAgIHNvY2tldC5lbWl0KCdqb2luJywgeyBuYW1lOiBuYW1lIH0pO1xyXG5cclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWJveCcpO1xyXG4gICAgc29ja2V0Lm9uKCdwZXJzaW9uX2pvaW4nLCAodGV4dCkgPT4ge1xyXG4gICAgICBib3guaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPSdob21lLXRvYXN0Jz4ke3RleHR9PC9kaXY+YDtcclxuICAgIH0pO1xyXG4gICAgc29ja2V0Lm9uKCdjbGllbnQtb3V0JywgKHRleHQpID0+IHtcclxuICAgICAgYm94LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz0naG9tZS10b2FzdCc+JHt0ZXh0fTwvZGl2PmA7XHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5vbignc2V2ZXItdG8tY2xpZW50JywgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgYm94LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz0naG9tZS10ZXh0LXJpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjb21tZW50LXRpdGxlJz50w7RpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NvbW1lbnQtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGF0YS5jb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYm94LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz0naG9tZS10ZXh0LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NvbW1lbnQtdGl0bGUnPiR7ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjb21tZW50LWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2RhdGEuY29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNlbmRfdGV4dCA9ICgpID0+IHtcclxuICAgIGlmIChjb21tZW50ICE9PSAnJykge1xyXG4gICAgICBzb2NrZXQuZW1pdCgnY2xpZW50LXRvLXNldmVyJywgeyBuYW1lOiBuYW1lLCBjb21tZW50OiBjb21tZW50IH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckNvbW1lbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50LXRleHQnPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD0nbmFtZSdcclxuICAgICAgICAgICAgbGFiZWw9J27hu5lpIGR1bmcgYsOsbmggbHXhuq1uJ1xyXG4gICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IGNoYW5nZUNvbW1lbnQoZSl9XHJcbiAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tbWVudC1zZW5kJyBpZD0nYnRuLXNlbmQnIG9uQ2xpY2s9eygpID0+IHNlbmRfdGV4dCgpfT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8QWlPdXRsaW5lU2VuZCAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ29tbWVudCA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1ib3gtcm9vdCc+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0naG9tZS10aXRsZSc+VHLDsiBjaHV54buHbiBtaW5pPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1ib2R5JyBpZD0nYm9keS1ib3gnPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tbWVudC1ib3gnPntyZW5kZXJDb21tZW50KCl9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi8uLi9SZWR1eC9yZWR1Y2Vycy9pbmRleCc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vUmVkdXgvYWN0aW9ucy9jb21tb24nO1xyXG5cclxuLy8gaW1wb3J0IGNzc1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuLy9cclxuXHJcbi8vIGltcG9ydCBtdWlcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG4vL1xyXG5cclxuLy8gaW1wb3J0IGNvbXBvbmVudFxyXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0JztcclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgaWYgKG5hbWUgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdjaMawYSDEkWnhu4FuIHTDqm4gbcOgID8nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuY2hhbmdlX2N1cnJlbnRfbmFtZShuYW1lKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luLWJveCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbi1ib3gtaXRlbSc+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSdsb2dpbi10aXRsZSc+Q2jhu41uIDEgY8OhaSB0w6puIG7DoG88L3A+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgaWQ9J25hbWUnXHJcbiAgICAgICAgICAgIGxhYmVsPSdUw6puIEhp4buDbiB0aOG7iydcclxuICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiBoYW5kbGVUZXh0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3VibWl0KCl9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX0+XHJcbiAgICAgICAgICAgIENoYXQgdGjDtGkgISFcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuLy9cclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vUmVkdXgvcmVkdWNlcnMvaW5kZXgnO1xyXG4vL1xyXG5cclxuLy8gaW1wb3J0IGNvbXBvbmVudFxyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgSm9pbiBmcm9tICcuL0pvaW4nO1xyXG4vL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdCgpIHtcclxuICBjb25zdCBuYW1lID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmNvbW1vbi5uYW1lKTtcclxuXHJcbiAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAobmFtZSA9PT0gJycpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9taW5pY2hhdCcgZWxlbWVudD17PEpvaW4gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD0nKicgZWxlbWVudD17PGRpdj5ub3Rmb3VuZDwvZGl2Pn0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvbWluaWNoYXQnIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9JyonIGVsZW1lbnQ9ezxkaXY+bm90Zm91bmQ8L2Rpdj59IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gPFJvdXRlcz57Y2hlY2soKX08L1JvdXRlcz47XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZVdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5cclxuY29uc3QgQ29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbdGh1bmtdO1xyXG4gIGNvbnN0IGVuaGFuY2VycyA9IFthcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpXTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlV2l0aERldlRvb2xzKC4uLmVuaGFuY2VycykpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyZVN0b3JlO1xyXG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb250eXBlL2NvbW1vbic7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlX2N1cnJlbnRfbmFtZSA9IChuYW1lOiBzdHJpbmcpID0+ICh7XHJcbiAgdHlwZTogdHlwZXMuQ0hBTkdFX05BTUUsXHJcbiAgbmFtZVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VfY3VycmVudF9yb29tID0gKHJvb206IHN0cmluZykgPT4gKHtcclxuICB0eXBlOiB0eXBlcy5DSEFOR0VfUk9PTSxcclxuICByb29tXHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgQ0hBTkdFX05BTUUgPSAnQ0hBTkdFX05BTUUnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1JPT00gPSAnQ0hBTkdFX1JPT00nO1xyXG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb250eXBlL2NvbW1vbic7XHJcblxyXG5jb25zdCBuYW1lSW5pdGlhbFN0YXRlID0ge1xyXG4gIG5hbWU6ICcnLFxyXG4gIHJvb206ICcnXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb21tb24gPSAoc3RhdGUgPSBuYW1lSW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgdHlwZXMuQ0hBTkdFX05BTUU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBbJ25hbWUnXTogYWN0aW9uLm5hbWUgfTtcclxuICAgIGNhc2UgdHlwZXMuQ0hBTkdFX1JPT006XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBbJ3Jvb20nXTogYWN0aW9uLnJvb20gfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tbW9uIH0gZnJvbSAnLi9jb21tb24nO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoeyBjb21tb246IGNvbW1vbiB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBDb25maWd1cmVTdG9yZSBmcm9tICcuL1JlZHV4L0NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IFJvb3QgZnJvbSAnLi9QYWdlL1Jvb3QnO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBDb25maWd1cmVTdG9yZSgpO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPFJvdXRlcj5cclxuICAgICAgPFJvb3QgLz5cclxuICAgIDwvUm91dGVyPlxyXG4gIDwvUHJvdmlkZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9