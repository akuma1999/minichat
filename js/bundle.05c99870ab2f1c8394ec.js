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
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
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
    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState([]), members = _b[0], setMembers = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__.useState(false), openInfo = _c[0], setOpenInfor = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        socket.connect();
        var data = { name: name };
        socket.emit('join', data);
        var box = document.getElementById('body-box');
        socket.on('persion_join', function (res) {
            console.log(res);
            box.innerHTML += "<div class='home-toast'>".concat(res.message, "</div>");
            setMembers(res.users);
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
            setComment('');
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
    var renderInfor = function () {
        console.log(members);
        if (openInfo) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'info-room', id: 'info-room', onClick: function () { return setOpenInfor(false); } }, members.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'info-room-item', key: item }, item)); })));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'detail', onClick: function () { return setOpenInfor(true); } },
                members.length,
                " member \u0111ang online ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsFillCaretDownFill, null)));
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'home-box-root' },
        renderInfor(),
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
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);



// import css

//
// import mui


//

//
function LoginPage() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(''), name = _a[0], setName = _a[1];
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var handleTextChange = function (e) {
        setName(e.target.value);
    };
    var submit = function () {
        console.log(name);
        if (name === '') {
            alert('chưa điền tên mà ?');
        }
        else {
            axios__WEBPACK_IMPORTED_MODULE_4___default().post('https://chat-app-mini.herokuapp.com/', { name: name })
                .then(function (res) {
                if (res.data === 'no') {
                    alert('tên bị trùng rồi !!');
                }
                else {
                    dispatch(_Redux_actions_common__WEBPACK_IMPORTED_MODULE_2__.change_current_name(name));
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'login-box' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'login-box-item' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: 'login-title' }, "Ch\u1ECDn 1 c\u00E1i t\u00EAn n\u00E0o"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], { id: 'name', label: 'T\u00EAn Hi\u1EC3n th\u1ECB', variant: 'outlined', onChange: function (e) { return handleTextChange(e); }, value: name, fullWidth: true })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__["default"], { onClick: function () { return submit(); }, variant: 'contained', color: 'primary', fullWidth: true }, "Chat th\u00F4i !!")))));
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
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, { path: '/', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Join__WEBPACK_IMPORTED_MODULE_3__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, { path: '*', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "notfound") })));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, { path: '/', element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null) }),
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_material_Button_Button_js-node_modules_mui_material_IconButton_IconB-e5c180","vendors-node_modules_axios_index_js-node_modules_react-icons_ai_index_esm_js-node_modules_rea-3f3320"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmNzcz8yY2RiIiwid2VicGFjazovL2hvYW5nbGFtLy4vc3JjL1BhZ2UvSm9pbi9zdHlsZS5jc3M/MzZhOCIsIndlYnBhY2s6Ly9ob2FuZ2xhbS8uL3NyYy9QYWdlL0hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovL2hvYW5nbGFtLy4vc3JjL1BhZ2UvSm9pbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vaG9hbmdsYW0vLi9zcmMvUGFnZS9Sb290LnRzeCIsIndlYnBhY2s6Ly9ob2FuZ2xhbS8uL3NyYy9SZWR1eC9Db25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly9ob2FuZ2xhbS8uL3NyYy9SZWR1eC9hY3Rpb25zL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9ob2FuZ2xhbS8uL3NyYy9SZWR1eC9hY3Rpb250eXBlL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9ob2FuZ2xhbS8uL3NyYy9SZWR1eC9yZWR1Y2Vycy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vaG9hbmdsYW0vLi9zcmMvUmVkdXgvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vaG9hbmdsYW0vLi9zcmMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vLi4vUmVkdXgvcmVkdWNlcnMvaW5kZXgnO1xyXG5jb25zdCBzb2NrZXQgPSBpby5jb25uZWN0KCdodHRwczovL2NoYXQtYXBwLW1pbmkuaGVyb2t1YXBwLmNvbS8nLCB7XHJcbiAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXVxyXG59KTtcclxuXHJcbi8vIGltcG9ydCBtdWlcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XHJcbi8vXHJcblxyXG4vLyBpbXBvcnQgaWNvblxyXG5pbXBvcnQgeyBBaU91dGxpbmVTZW5kIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBCc0ZpbGxDYXJldERvd25GaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG4vL1xyXG5cclxuLy8gaW1wb3J0IHN0eWxlXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG4vL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBuYW1lID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmNvbW1vbi5uYW1lKTtcclxuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lbWJlcnMsIHNldE1lbWJlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcGVuSW5mbywgc2V0T3BlbkluZm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc29ja2V0LmNvbm5lY3QoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7IG5hbWU6IG5hbWUgfTtcclxuICAgIHNvY2tldC5lbWl0KCdqb2luJywgZGF0YSk7XHJcblxyXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHktYm94Jyk7XHJcblxyXG4gICAgc29ja2V0Lm9uKCdwZXJzaW9uX2pvaW4nLCAocmVzOiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgYm94LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz0naG9tZS10b2FzdCc+JHtyZXMubWVzc2FnZX08L2Rpdj5gO1xyXG4gICAgICBzZXRNZW1iZXJzKHJlcy51c2Vycyk7XHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5vbignY2xpZW50LW91dCcsICh0ZXh0KSA9PiB7XHJcbiAgICAgIGJveC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9J2hvbWUtdG9hc3QnPiR7dGV4dH08L2Rpdj5gO1xyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQub24oJ3NldmVyLXRvLWNsaWVudCcsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgaWYgKGRhdGEubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgIGJveC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9J2hvbWUtdGV4dC1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nY29tbWVudC10aXRsZSc+dMO0aTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjb21tZW50LWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2RhdGEuY29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJveC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9J2hvbWUtdGV4dC1sZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjb21tZW50LXRpdGxlJz4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nY29tbWVudC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkYXRhLmNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZW5kX3RleHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY29tbWVudCAhPT0gJycpIHtcclxuICAgICAgc29ja2V0LmVtaXQoJ2NsaWVudC10by1zZXZlcicsIHsgbmFtZTogbmFtZSwgY29tbWVudDogY29tbWVudCB9KTtcclxuICAgICAgc2V0Q29tbWVudCgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQ29tbWVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbW1lbnQtdGV4dCc+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAgICAgICBsYWJlbD0nbuG7mWkgZHVuZyBiw6xuaCBsdeG6rW4nXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4gY2hhbmdlQ29tbWVudChlKX1cclxuICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50LXNlbmQnIGlkPSdidG4tc2VuZCcgb25DbGljaz17KCkgPT4gc2VuZF90ZXh0KCl9PlxyXG4gICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxBaU91dGxpbmVTZW5kIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDb21tZW50ID0gKGU6IGFueSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVySW5mb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtZW1iZXJzKTtcclxuICAgIGlmIChvcGVuSW5mbykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT0naW5mby1yb29tJ1xyXG4gICAgICAgICAgaWQ9J2luZm8tcm9vbSdcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5JbmZvcihmYWxzZSl9PlxyXG4gICAgICAgICAge21lbWJlcnMubWFwKChpdGVtOiBzdHJpbmcpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8tcm9vbS1pdGVtJyBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV0YWlsJyBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuSW5mb3IodHJ1ZSl9PlxyXG4gICAgICAgICAge21lbWJlcnMubGVuZ3RofSBtZW1iZXIgxJFhbmcgb25saW5lIDxCc0ZpbGxDYXJldERvd25GaWxsIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtYm94LXJvb3QnPlxyXG4gICAgICB7cmVuZGVySW5mb3IoKX1cclxuICAgICAgPHAgY2xhc3NOYW1lPSdob21lLXRpdGxlJz5UcsOyIGNodXnhu4duIG1pbmk8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLWJvZHknIGlkPSdib2R5LWJveCc+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50LWJveCc+e3JlbmRlckNvbW1lbnQoKX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL1JlZHV4L3JlZHVjZXJzL2luZGV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9SZWR1eC9hY3Rpb25zL2NvbW1vbic7XHJcblxyXG4vLyBpbXBvcnQgY3NzXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG4vL1xyXG5cclxuLy8gaW1wb3J0IG11aVxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbi8vXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLy8gaW1wb3J0IGNvbXBvbmVudFxyXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0JztcclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobmFtZSk7XHJcblxyXG4gICAgaWYgKG5hbWUgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdjaMawYSDEkWnhu4FuIHTDqm4gbcOgID8nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoJ2h0dHBzOi8vY2hhdC1hcHAtbWluaS5oZXJva3VhcHAuY29tLycsIHsgbmFtZTogbmFtZSB9KVxyXG4gICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhID09PSAnbm8nKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCd0w6puIGLhu4sgdHLDuW5nIHLhu5NpICEhJyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLmNoYW5nZV9jdXJyZW50X25hbWUobmFtZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4tYm94Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luLWJveC1pdGVtJz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J2xvZ2luLXRpdGxlJz5DaOG7jW4gMSBjw6FpIHTDqm4gbsOgbzwvcD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD0nbmFtZSdcclxuICAgICAgICAgICAgbGFiZWw9J1TDqm4gSGnhu4NuIHRo4buLJ1xyXG4gICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IGhhbmRsZVRleHRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdWJtaXQoKX1cclxuICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfT5cclxuICAgICAgICAgICAgQ2hhdCB0aMO0aSAhIVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9SZWR1eC9yZWR1Y2Vycy9pbmRleCc7XHJcbi8vXHJcblxyXG4vLyBpbXBvcnQgY29tcG9uZW50XHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XHJcbmltcG9ydCBKb2luIGZyb20gJy4vSm9pbic7XHJcbi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290KCkge1xyXG4gIGNvbnN0IG5hbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuY29tbW9uLm5hbWUpO1xyXG5cclxuICBjb25zdCBjaGVjayA9ICgpID0+IHtcclxuICAgIGlmIChuYW1lID09PSAnJykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD0nLycgZWxlbWVudD17PEpvaW4gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD0nKicgZWxlbWVudD17PGRpdj5ub3Rmb3VuZDwvZGl2Pn0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyBlbGVtZW50PXs8SG9tZSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScqJyBlbGVtZW50PXs8ZGl2Pm5vdGZvdW5kPC9kaXY+fSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIDxSb3V0ZXM+e2NoZWNrKCl9PC9Sb3V0ZXM+O1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGVXYXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuXHJcbmNvbnN0IENvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3RodW5rXTtcclxuICBjb25zdCBlbmhhbmNlcnMgPSBbYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKV07XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgY29tcG9zZVdpdGhEZXZUb29scyguLi5lbmhhbmNlcnMpKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmVTdG9yZTtcclxuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9udHlwZS9jb21tb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZV9jdXJyZW50X25hbWUgPSAobmFtZTogc3RyaW5nKSA9PiAoe1xyXG4gIHR5cGU6IHR5cGVzLkNIQU5HRV9OQU1FLFxyXG4gIG5hbWVcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlX2N1cnJlbnRfcm9vbSA9IChyb29tOiBzdHJpbmcpID0+ICh7XHJcbiAgdHlwZTogdHlwZXMuQ0hBTkdFX1JPT00sXHJcbiAgcm9vbVxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IENIQU5HRV9OQU1FID0gJ0NIQU5HRV9OQU1FJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9ST09NID0gJ0NIQU5HRV9ST09NJztcclxuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9udHlwZS9jb21tb24nO1xyXG5cclxuY29uc3QgbmFtZUluaXRpYWxTdGF0ZSA9IHtcclxuICBuYW1lOiAnJyxcclxuICByb29tOiAnJ1xyXG59O1xyXG5leHBvcnQgY29uc3QgY29tbW9uID0gKHN0YXRlID0gbmFtZUluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIHR5cGVzLkNIQU5HRV9OQU1FOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgWyduYW1lJ106IGFjdGlvbi5uYW1lIH07XHJcbiAgICBjYXNlIHR5cGVzLkNIQU5HRV9ST09NOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgWydyb29tJ106IGFjdGlvbi5yb29tIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbW1vbiB9IGZyb20gJy4vY29tbW9uJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHsgY29tbW9uOiBjb21tb24gfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQ29uZmlndXJlU3RvcmUgZnJvbSAnLi9SZWR1eC9Db25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCBSb290IGZyb20gJy4vUGFnZS9Sb290JztcclxuXHJcbmNvbnN0IHN0b3JlID0gQ29uZmlndXJlU3RvcmUoKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxSb3V0ZXI+XHJcbiAgICAgIDxSb290IC8+XHJcbiAgICA8L1JvdXRlcj5cclxuICA8L1Byb3ZpZGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==