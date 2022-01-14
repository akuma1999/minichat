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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sR0FBRyxVQUFDLEtBQXdCLEVBQUUsTUFBVzs7SUFBckMsZ0RBQXdCO0lBQzdDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLDJEQUFpQjtZQUNwQiw2QkFBWSxLQUFLLGdCQUFHLE1BQU0sSUFBRyxNQUFNLENBQUMsSUFBSSxPQUFHO1FBQzdDLEtBQUssMkRBQWlCO1lBQ3BCLDZCQUFZLEtBQUssZ0JBQUcsTUFBTSxJQUFHLE1BQU0sQ0FBQyxJQUFJLE9BQUc7UUFDN0M7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmc0M7QUFDTjtBQUVsQyxJQUFNLFdBQVcsR0FBRyxzREFBZSxDQUFDLEVBQUUsTUFBTSxFQUFFLDJDQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRXhELGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEk7QUFDTztBQUNxQjtBQUNwQjtBQUNhO0FBQ3JCO0FBRS9CLElBQU0sS0FBSyxHQUFHLGlFQUFjLEVBQUUsQ0FBQztBQUUvQiw2Q0FBZSxDQUNiLGlEQUFDLGlEQUFRLElBQUMsS0FBSyxFQUFFLEtBQUs7SUFDcEIsaURBQUMsMkRBQU07UUFDTCxpREFBQyxrREFBSSxPQUFHLENBQ0QsQ0FDQSxFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQ2hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob2FuZ2xhbS8uL3NyYy9QYWdlL0hvbWUvc3R5bGUuY3NzPzJjZGIiLCJ3ZWJwYWNrOi8vaG9hbmdsYW0vLi9zcmMvUGFnZS9Kb2luL3N0eWxlLmNzcz8zNmE4Iiwid2VicGFjazovL2hvYW5nbGFtLy4vc3JjL1BhZ2UvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vaG9hbmdsYW0vLi9zcmMvUGFnZS9Kb2luL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9ob2FuZ2xhbS8uL3NyYy9QYWdlL1Jvb3QudHN4Iiwid2VicGFjazovL2hvYW5nbGFtLy4vc3JjL1JlZHV4L0NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovL2hvYW5nbGFtLy4vc3JjL1JlZHV4L2FjdGlvbnMvY29tbW9uLnRzIiwid2VicGFjazovL2hvYW5nbGFtLy4vc3JjL1JlZHV4L2FjdGlvbnR5cGUvY29tbW9uLnRzIiwid2VicGFjazovL2hvYW5nbGFtLy4vc3JjL1JlZHV4L3JlZHVjZXJzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9ob2FuZ2xhbS8uL3NyYy9SZWR1eC9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly9ob2FuZ2xhbS8uL3NyYy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi8uLi9SZWR1eC9yZWR1Y2Vycy9pbmRleCc7XHJcbmNvbnN0IHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHBzOi8vY2hhdC1hcHAtbWluaS5oZXJva3VhcHAuY29tLycsIHtcclxuICB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCddXHJcbn0pO1xyXG5cclxuLy8gaW1wb3J0IG11aVxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuLy9cclxuXHJcbi8vIGltcG9ydCBpY29uXHJcbmltcG9ydCB7IEFpT3V0bGluZVNlbmQgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbi8vXHJcblxyXG4vLyBpbXBvcnQgc3R5bGVcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IG5hbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuY29tbW9uLm5hbWUpO1xyXG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc29ja2V0LmNvbm5lY3QoKTtcclxuXHJcbiAgICBzb2NrZXQuZW1pdCgnam9pbicsIHsgbmFtZTogbmFtZSB9KTtcclxuXHJcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keS1ib3gnKTtcclxuICAgIHNvY2tldC5vbigncGVyc2lvbl9qb2luJywgKHRleHQpID0+IHtcclxuICAgICAgYm94LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz0naG9tZS10b2FzdCc+JHt0ZXh0fTwvZGl2PmA7XHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5vbignY2xpZW50LW91dCcsICh0ZXh0KSA9PiB7XHJcbiAgICAgIGJveC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9J2hvbWUtdG9hc3QnPiR7dGV4dH08L2Rpdj5gO1xyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQub24oJ3NldmVyLXRvLWNsaWVudCcsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgaWYgKGRhdGEubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgIGJveC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9J2hvbWUtdGV4dC1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nY29tbWVudC10aXRsZSc+dMO0aTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjb21tZW50LWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2RhdGEuY29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJveC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9J2hvbWUtdGV4dC1sZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdjb21tZW50LXRpdGxlJz4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nY29tbWVudC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkYXRhLmNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZW5kX3RleHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY29tbWVudCAhPT0gJycpIHtcclxuICAgICAgc29ja2V0LmVtaXQoJ2NsaWVudC10by1zZXZlcicsIHsgbmFtZTogbmFtZSwgY29tbWVudDogY29tbWVudCB9KTtcclxuICAgICAgc2V0Q29tbWVudCgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQ29tbWVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbW1lbnQtdGV4dCc+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAgICAgICBsYWJlbD0nbuG7mWkgZHVuZyBiw6xuaCBsdeG6rW4nXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4gY2hhbmdlQ29tbWVudChlKX1cclxuICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50LXNlbmQnIGlkPSdidG4tc2VuZCcgb25DbGljaz17KCkgPT4gc2VuZF90ZXh0KCl9PlxyXG4gICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxBaU91dGxpbmVTZW5kIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDb21tZW50ID0gKGU6IGFueSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLWJveC1yb290Jz5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdob21lLXRpdGxlJz5UcsOyIGNodXnhu4duIG1pbmk8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLWJvZHknIGlkPSdib2R5LWJveCc+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50LWJveCc+e3JlbmRlckNvbW1lbnQoKX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uL1JlZHV4L3JlZHVjZXJzL2luZGV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9SZWR1eC9hY3Rpb25zL2NvbW1vbic7XHJcblxyXG4vLyBpbXBvcnQgY3NzXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG4vL1xyXG5cclxuLy8gaW1wb3J0IG11aVxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbi8vXHJcblxyXG4vLyBpbXBvcnQgY29tcG9uZW50XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWxlY3QnO1xyXG4vL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAobmFtZSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ2NoxrBhIMSRaeG7gW4gdMOqbiBtw6AgPycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5jaGFuZ2VfY3VycmVudF9uYW1lKG5hbWUpKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4tYm94Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luLWJveC1pdGVtJz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J2xvZ2luLXRpdGxlJz5DaOG7jW4gMSBjw6FpIHTDqm4gbsOgbzwvcD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD0nbmFtZSdcclxuICAgICAgICAgICAgbGFiZWw9J1TDqm4gSGnhu4NuIHRo4buLJ1xyXG4gICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IGhhbmRsZVRleHRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdWJtaXQoKX1cclxuICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfT5cclxuICAgICAgICAgICAgQ2hhdCB0aMO0aSAhIVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9SZWR1eC9yZWR1Y2Vycy9pbmRleCc7XHJcbi8vXHJcblxyXG4vLyBpbXBvcnQgY29tcG9uZW50XHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XHJcbmltcG9ydCBKb2luIGZyb20gJy4vSm9pbic7XHJcbi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290KCkge1xyXG4gIGNvbnN0IG5hbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuY29tbW9uLm5hbWUpO1xyXG5cclxuICBjb25zdCBjaGVjayA9ICgpID0+IHtcclxuICAgIGlmIChuYW1lID09PSAnJykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD0nL21pbmljaGF0JyBlbGVtZW50PXs8Sm9pbiAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScqJyBlbGVtZW50PXs8ZGl2Pm5vdGZvdW5kPC9kaXY+fSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9taW5pY2hhdCcgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD0nKicgZWxlbWVudD17PGRpdj5ub3Rmb3VuZDwvZGl2Pn0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiA8Um91dGVzPntjaGVjaygpfTwvUm91dGVzPjtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxlV2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG5jb25zdCBDb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFt0aHVua107XHJcbiAgY29uc3QgZW5oYW5jZXJzID0gW2FwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyldO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGNvbXBvc2VXaXRoRGV2VG9vbHMoLi4uZW5oYW5jZXJzKSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJlU3RvcmU7XHJcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnR5cGUvY29tbW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VfY3VycmVudF9uYW1lID0gKG5hbWU6IHN0cmluZykgPT4gKHtcclxuICB0eXBlOiB0eXBlcy5DSEFOR0VfTkFNRSxcclxuICBuYW1lXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZV9jdXJyZW50X3Jvb20gPSAocm9vbTogc3RyaW5nKSA9PiAoe1xyXG4gIHR5cGU6IHR5cGVzLkNIQU5HRV9ST09NLFxyXG4gIHJvb21cclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBDSEFOR0VfTkFNRSA9ICdDSEFOR0VfTkFNRSc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfUk9PTSA9ICdDSEFOR0VfUk9PTSc7XHJcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnR5cGUvY29tbW9uJztcclxuXHJcbmNvbnN0IG5hbWVJbml0aWFsU3RhdGUgPSB7XHJcbiAgbmFtZTogJycsXHJcbiAgcm9vbTogJydcclxufTtcclxuZXhwb3J0IGNvbnN0IGNvbW1vbiA9IChzdGF0ZSA9IG5hbWVJbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSB0eXBlcy5DSEFOR0VfTkFNRTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIFsnbmFtZSddOiBhY3Rpb24ubmFtZSB9O1xyXG4gICAgY2FzZSB0eXBlcy5DSEFOR0VfUk9PTTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIFsncm9vbSddOiBhY3Rpb24ucm9vbSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21tb24gfSBmcm9tICcuL2NvbW1vbic7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7IGNvbW1vbjogY29tbW9uIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IENvbmZpZ3VyZVN0b3JlIGZyb20gJy4vUmVkdXgvQ29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgUm9vdCBmcm9tICcuL1BhZ2UvUm9vdCc7XHJcblxyXG5jb25zdCBzdG9yZSA9IENvbmZpZ3VyZVN0b3JlKCk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8Um91dGVyPlxyXG4gICAgICA8Um9vdCAvPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbiAgPC9Qcm92aWRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=