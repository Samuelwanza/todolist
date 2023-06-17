"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_setup"] = self["webpackChunkwebpack_setup"] || []).push([["main"],{

/***/ "./src/allCompleted.js":
/*!*****************************!*\
  !*** ./src/allCompleted.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clearCompleted = () => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  let newtask = tasks.filter(task => task.completed === false);\n  let counter = 1;\n  newtask = newtask.map(task => {\n    task.index = counter;\n    counter += 1;\n    return task;\n  });\n  window.location.reload();\n  localStorage.setItem('tasks', JSON.stringify(newtask));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompleted);\n\n//# sourceURL=webpack://webpack-setup/./src/allCompleted.js?");

/***/ }),

/***/ "./src/delete.js":
/*!***********************!*\
  !*** ./src/delete.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst deleteTodo = index => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  let newtask = tasks.filter(task => task.index !== index);\n  let counter = 1;\n  newtask = newtask.map(task => {\n    task.index = counter;\n    counter += 1;\n    return task;\n  });\n  window.location.reload();\n  localStorage.setItem('tasks', JSON.stringify(newtask));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTodo);\n\n//# sourceURL=webpack://webpack-setup/./src/delete.js?");

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst editTodo = (label, task) => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  if (label.value !== '') {\n    tasks[task.index - 1].description = label.value;\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  } else {\n    label.value = task.description;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodo);\n\n//# sourceURL=webpack://webpack-setup/./src/edit.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _minimalist_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minimalist-logo.png */ \"./src/minimalist-logo.png\");\n/* harmony import */ var _arrowpath_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrowpath.svg */ \"./src/arrowpath.svg\");\n/* harmony import */ var _enter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enter.png */ \"./src/enter.png\");\n/* harmony import */ var _EllipsisVertical_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EllipsisVertical.svg */ \"./src/EllipsisVertical.svg\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit */ \"./src/edit.js\");\n/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete.png */ \"./src/delete.png\");\n/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete */ \"./src/delete.js\");\n/* harmony import */ var _interactiveTodo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interactiveTodo */ \"./src/interactiveTodo.js\");\n/* harmony import */ var _allCompleted__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./allCompleted */ \"./src/allCompleted.js\");\n\n\n\n\n\n\n\n\n\n\n\nlet tasks = JSON.parse(localStorage.getItem('tasks'));\nif (tasks === null) {\n  tasks = localStorage.setItem('tasks', JSON.stringify([]));\n}\nconst component = () => {\n  const mainDiv = document.createElement('div');\n  const headerDiv = document.createElement('div');\n  headerDiv.classList.add('header-div');\n  const headerText = document.createElement('h2');\n  headerText.textContent = 'minimalist';\n  const Logo = document.createElement('img');\n  Logo.classList.add('header-logo');\n  Logo.src = _minimalist_logo_png__WEBPACK_IMPORTED_MODULE_1__;\n  headerDiv.appendChild(Logo);\n  mainDiv.appendChild(headerDiv);\n  mainDiv.appendChild(headerText);\n  const listWrapper = document.createElement('div');\n  listWrapper.classList.add('list-wrapper');\n  const headerWrapper = document.createElement('div');\n  const inputWrapper = document.createElement('div');\n  const img = document.createElement('img');\n  img.src = _arrowpath_svg__WEBPACK_IMPORTED_MODULE_2__;\n  const img2 = document.createElement('img');\n  img2.src = _enter_png__WEBPACK_IMPORTED_MODULE_3__;\n  const todoInput = document.createElement('input');\n  todoInput.id = 'input';\n  todoInput.placeholder = 'Add to your list...';\n  const todolist = document.createElement('ul');\n  todolist.id = 'todolist';\n  const title = document.createElement('h3');\n  title.textContent = 'Tasks';\n  headerWrapper.appendChild(title);\n  headerWrapper.appendChild(img);\n  headerWrapper.classList.add('item-decorator');\n  inputWrapper.appendChild(todoInput);\n  inputWrapper.appendChild(img2);\n  inputWrapper.classList.add('item-decorator');\n  img2.id = 'button';\n  listWrapper.appendChild(headerWrapper);\n  listWrapper.appendChild(inputWrapper);\n  mainDiv.appendChild(listWrapper);\n  const thisTasks = JSON.parse(localStorage.getItem('tasks'));\n  if (thisTasks.length !== 0) {\n    thisTasks.forEach(task => {\n      if (task && task.description) {\n        const element = document.createElement('li');\n        const taskInput = document.createElement('input');\n        const label = document.createElement('input');\n        taskInput.classList.add('label');\n        const img3 = document.createElement('img');\n        taskInput.type = 'checkbox';\n        label.value = task.description;\n        img3.src = _EllipsisVertical_svg__WEBPACK_IMPORTED_MODULE_4__;\n        element.appendChild(taskInput);\n        element.appendChild(label);\n        element.appendChild(img3);\n        element.classList.add('item-decorator1');\n        element.addEventListener('keyup', e => {\n          img3.src = ' ';\n          img3.src = _delete_png__WEBPACK_IMPORTED_MODULE_7__;\n          if (e.key === 'Enter') {\n            (0,_edit__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(label, task);\n            img3.src = _EllipsisVertical_svg__WEBPACK_IMPORTED_MODULE_4__;\n          }\n        });\n        taskInput.addEventListener('change', () => {\n          (0,_interactiveTodo__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(task, thisTasks);\n        });\n        label.addEventListener('focus', () => {\n          img3.src = _delete_png__WEBPACK_IMPORTED_MODULE_7__;\n        });\n        img3.addEventListener('click', () => {\n          if (img3.src === _delete_png__WEBPACK_IMPORTED_MODULE_7__) {\n            (0,_delete__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(task.index);\n          }\n          img3.src = _delete_png__WEBPACK_IMPORTED_MODULE_7__;\n        });\n        taskInput.checked = false;\n        if (task.completed === true) {\n          taskInput.checked = true;\n        }\n        todolist.appendChild(element);\n        return element;\n      }\n      return task;\n    });\n  }\n  const minifooter = document.createElement('p');\n  minifooter.textContent = 'Clear all completed';\n  minifooter.classList.add('mini-decorator');\n  listWrapper.appendChild(todolist);\n  listWrapper.appendChild(minifooter);\n  mainDiv.appendChild(listWrapper);\n  return mainDiv;\n};\ndocument.body.appendChild(component());\ndocument.addEventListener('DOMContentLoaded', () => {\n  document.getElementById('button').addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  document.querySelector('.mini-decorator').addEventListener('click', _allCompleted__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n});\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/interactiveTodo.js":
/*!********************************!*\
  !*** ./src/interactiveTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst markCompleted = (task, tasks) => {\n  if (task && tasks.length !== 0) {\n    task.completed = !task.completed;\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (markCompleted);\n\n//# sourceURL=webpack://webpack-setup/./src/interactiveTodo.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Todo = () => {\n  const itemToAdd = document.querySelector('#input').value;\n  let tasks = JSON.parse(localStorage.getItem('tasks'));\n  if (itemToAdd.length !== 0) {\n    const toDo = {\n      index: tasks.length + 1,\n      description: itemToAdd,\n      completed: false\n    };\n    tasks.push(toDo);\n  }\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n  tasks = JSON.parse(localStorage.getItem('tasks'));\n  window.location.reload();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://webpack-setup/./src/todo.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  font-family: 'Nunito', sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  background: linear-gradient(to bottom, white, lightgray);\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding-inline-start: 0;\r\n  margin-block-start: 0;\r\n  margin-block-end: 0;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  font-weight: 300;\r\n  font-size: 32px;\r\n}\r\n\r\nimg {\r\n  width: 70px;\r\n  background-color: white;\r\n  height: 70px;\r\n  border-radius: 7px;\r\n}\r\n\r\n.header-div {\r\n  margin-top: 60px;\r\n  justify-content: center;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.list-wrapper {\r\n  width: 500px;\r\n  background: white;\r\n  box-shadow: 0 2px 3px rgba(255, 255, 255, 1);\r\n  margin-left: 200px;\r\n}\r\n\r\nh3 {\r\n  margin-block-start: 0;\r\n  margin-block-end: 0;\r\n  color: gray;\r\n  font-weight: 400;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.item-decorator {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border-bottom: lightgray 1px solid;\r\n}\r\n\r\n.item-decorator1 {\r\n  display: flex;\r\n  width: 100%;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border-bottom: lightgray 1px solid;\r\n}\r\n\r\n.label {\r\n  width: 20px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.item-decorator > img {\r\n  width: 25px;\r\n  height: 20px;\r\n  opacity: 0.5;\r\n}\r\n\r\n.item-decorator1 > img {\r\n  width: 25px;\r\n  height: 20px;\r\n  opacity: 0.5;\r\n  margin-left: auto;\r\n}\r\n\r\n.item-decorator > img:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.item-decorator1 > img:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.mini-decorator {\r\n  width: 100%;\r\n  background: lightgrey;\r\n  text-align: center;\r\n  padding: 20px;\r\n  color: grey;\r\n}\r\n\r\n.mini-decorator:hover {\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/EllipsisVertical.svg":
/*!**********************************!*\
  !*** ./src/EllipsisVertical.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0888db064cdf90a070a.svg\";\n\n//# sourceURL=webpack://webpack-setup/./src/EllipsisVertical.svg?");

/***/ }),

/***/ "./src/arrowpath.svg":
/*!***************************!*\
  !*** ./src/arrowpath.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cdec0744f22aebcd689b.svg\";\n\n//# sourceURL=webpack://webpack-setup/./src/arrowpath.svg?");

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae92b1ab7de671ea4f6b.png\";\n\n//# sourceURL=webpack://webpack-setup/./src/delete.png?");

/***/ }),

/***/ "./src/enter.png":
/*!***********************!*\
  !*** ./src/enter.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b46edd8ddf44f4deef89.png\";\n\n//# sourceURL=webpack://webpack-setup/./src/enter.png?");

/***/ }),

/***/ "./src/minimalist-logo.png":
/*!*********************************!*\
  !*** ./src/minimalist-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10b7b9d890e354bf96ed.png\";\n\n//# sourceURL=webpack://webpack-setup/./src/minimalist-logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);