/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/jsfiles/DOMIndex.js":
/*!*********************************!*\
  !*** ./src/jsfiles/DOMIndex.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOMStepCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMStepCard */ \"./src/jsfiles/DOMStepCard.js\");\n/* harmony import */ var _DOMToDoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMToDoCard */ \"./src/jsfiles/DOMToDoCard.js\");\n\n\n(0,_DOMToDoCard__WEBPACK_IMPORTED_MODULE_1__.loadToDoCards)();\nif (document.querySelector('.to-do-card')) {\n  document.querySelector('.to-do-card').classList.add('selected');\n  (0,_DOMStepCard__WEBPACK_IMPORTED_MODULE_0__.loadStepCards)();\n}\n\n//# sourceURL=webpack://to-do-app-revisted/./src/jsfiles/DOMIndex.js?");

/***/ }),

/***/ "./src/jsfiles/DOMInput.js":
/*!*********************************!*\
  !*** ./src/jsfiles/DOMInput.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LS */ \"./src/jsfiles/LS.js\");\n/* harmony import */ var _DOMToDoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMToDoCard */ \"./src/jsfiles/DOMToDoCard.js\");\n\n\nvar DOMbtn_search = document.querySelector('.btn-search');\nvar DOMAddInput = document.querySelector('#addToDo');\nDOMbtn_search.addEventListener('click', function () {\n  if (!DOMAddInput.value) return;\n  (0,_LS__WEBPACK_IMPORTED_MODULE_0__.addToDo)((0,_LS__WEBPACK_IMPORTED_MODULE_0__.createToDo)(DOMAddInput.value));\n  var currToDoList = (0,_LS__WEBPACK_IMPORTED_MODULE_0__.getLS)();\n  DOMAddInput.value = '';\n  var DOMto_do_card = (0,_DOMToDoCard__WEBPACK_IMPORTED_MODULE_1__.createToDoCard)(currToDoList[currToDoList.length - 1]);\n  (0,_DOMToDoCard__WEBPACK_IMPORTED_MODULE_1__.AddToDoCard)(DOMto_do_card);\n});\n\n//# sourceURL=webpack://to-do-app-revisted/./src/jsfiles/DOMInput.js?");

/***/ }),

/***/ "./src/jsfiles/DOMStepCard.js":
/*!************************************!*\
  !*** ./src/jsfiles/DOMStepCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadStepCards\": () => (/* binding */ loadStepCards)\n/* harmony export */ });\n/* harmony import */ var _LS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LS */ \"./src/jsfiles/LS.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nvar DOMStep_cards = document.querySelectorAll('.step-cards');\nfunction getCurrToDo() {\n  var DOMSelectedToDoCard = document.querySelector('.to-do-card.selected');\n  var selectedToDoCardIndex = _toConsumableArray(DOMSelectedToDoCard.parentNode.children).indexOf(DOMSelectedToDoCard);\n  var currToDoList = (0,_LS__WEBPACK_IMPORTED_MODULE_0__.getLS)();\n  var currToDo = currToDoList[selectedToDoCardIndex];\n  return currToDo;\n}\nfunction updateCurrToDo(changedToDo) {\n  var DOMSelectedToDoCard = document.querySelector('.to-do-card.selected');\n  var selectedToDoCardIndex = _toConsumableArray(DOMSelectedToDoCard.parentNode.children).indexOf(DOMSelectedToDoCard);\n  (0,_LS__WEBPACK_IMPORTED_MODULE_0__.updateToDo)(selectedToDoCardIndex, changedToDo);\n}\nfunction DOMStepEditBtn(DOMStep, step) {\n  DOMStep.querySelector('.edit-icon').addEventListener('click', function () {\n    DOMStep.classList.toggle('changing');\n    var newDOMStepTitle = document.createElement('input');\n    newDOMStepTitle.className = 'changetitle';\n    newDOMStepTitle.value = DOMStep.querySelector('h3').innerText;\n    DOMStep.querySelector('.step-card-title-icons').replaceChild(newDOMStepTitle, DOMStep.querySelector('h3'));\n    DOMStep.querySelector('.step-card-content').innerHTML = \"\\n        <label class=\\\"stepDesc\\\">Desc: <textarea>\".concat(step.stepDesc, \"</textarea>\\n        </label>\\n        <label>\\n            Deadline:\\n            <input type=\\\"date\\\" value=\\\"\").concat(step.stepDate === 'none' ? '' : step.stepDate, \"\\\">\\n        </label>\\n        <p class=\\\"warning\\\">\\n            Please enter the title and description of your todo\\n        </p>\\n        \");\n  });\n}\nfunction DOMStepConfirmBtn(stepPriority, DOMStep) {\n  DOMStep.querySelector('.confirm-btn').addEventListener('click', function () {\n    var stepIndex = _toConsumableArray(DOMStep.parentNode.children).indexOf(DOMStep);\n    var DOMChangingTitle = DOMStep.querySelector('.changetitle');\n    var DOMChangingStepDesc = DOMStep.querySelector('textarea');\n    var DOMChangingStepDate = DOMStep.querySelector('input[type=\"date\"]');\n    if (!(DOMChangingTitle.value && DOMChangingStepDesc.value)) {\n      DOMStep.querySelector('.warning').style.display = 'block';\n      return;\n    }\n    var currToDo = getCurrToDo();\n    currToDo.reWriteStep(stepPriority, stepIndex, DOMChangingTitle.value, DOMChangingStepDesc.value, DOMChangingStepDate.value);\n    var step = currToDo.Steps[stepPriority][stepIndex];\n    updateCurrToDo(currToDo);\n    var DOMChangedTitle = document.createElement('h3');\n    DOMChangedTitle.innerText = DOMChangingTitle.value;\n    DOMStep.querySelector('.step-card-title-icons').replaceChild(DOMChangedTitle, DOMChangingTitle);\n    DOMStep.querySelector('.step-card-content').innerHTML = \"\\n        <div class=\\\"step-card-content\\\">\\n        <div class=\\\"stepDesc\\\">\\n        <p class=\\\"stepDesc\\\">Desc: \".concat(step.stepDesc, \"\\n        </p>\\n        </div>\\n        <p>\\n            Deadline:\\n            \").concat(step.stepDate, \"\\n        </p>\\n        <p>Days left: \").concat(step.daysLeft > -1 || step.daysLeft === 'none' ? step.daysLeft : \"you are late \".concat(-step.daysLeft, \" days :(\"), \"</p>\\n        </div>\\n        \");\n    DOMStep.classList.toggle('changing');\n    loadStepCardPriority(stepPriority);\n  });\n}\nfunction DOMStepCancelBtn(DOMStep, step) {\n  DOMStep.querySelector('.cancel-btn').addEventListener('click', function () {\n    DOMStep.classList.toggle('changing');\n    var DOMChangingTitle = DOMStep.querySelector('.changetitle');\n    var DOMChangedTitle = document.createElement('h3');\n    DOMChangedTitle.innerText = step.stepTitle;\n    DOMStep.querySelector('.step-card-title-icons').replaceChild(DOMChangedTitle, DOMChangingTitle);\n    DOMStep.querySelector('.step-card-content').innerHTML = \"\\n        <div  class=\\\"stepDesc\\\">\\n        <p>Desc: \".concat(step.stepDesc, \"\\n        </p>\\n        </div>\\n        <p>\\n            Deadline:\\n            \").concat(step.stepDate, \"\\n        </p>\\n        <p>Days left: \").concat(step.daysLeft > -1 || step.daysLeft === 'none' ? step.daysLeft : \"you are late \".concat(-step.daysLeft, \" days :(\"), \"</p>\\n        \");\n  });\n}\nfunction DOMDoneBtn(stepPriority, DOMStep) {\n  DOMStep.querySelector('.done-icon').addEventListener('click', function () {\n    var stepIndex = _toConsumableArray(DOMStep.parentNode.children).indexOf(DOMStep);\n    DOMStep.classList.toggle('completed');\n    var currToDo = getCurrToDo();\n    currToDo.completeStep(stepPriority, stepIndex);\n    updateCurrToDo(currToDo);\n    loadStepCardPriority(stepPriority);\n  });\n}\nfunction DOMDeleteBtn(stepPriority, DOMStep) {\n  DOMStep.querySelector('.delete-icon').addEventListener('click', function () {\n    var stepIndex = _toConsumableArray(DOMStep.parentNode.children).indexOf(DOMStep);\n    var currToDo = getCurrToDo();\n    currToDo.deleteStep(stepPriority, stepIndex);\n    updateCurrToDo(currToDo);\n    loadStepCardPriority(stepPriority);\n  });\n}\nfunction createNewDOMStep(stepPriority, step) {\n  var DOMStep = document.createElement('li');\n  DOMStep.className = \"step-card \".concat(step.completed ? 'completed' : '');\n  DOMStep.innerHTML = \"\\n    <div class=\\\"step-card-title-icons\\\">\\n        <h3>\".concat(step.stepTitle, \"</h3>\\n        <div>\\n            <span class=\\\"material-symbols-outlined edit-icon\\\">\\n                edit\\n            </span>\\n            <span class=\\\"material-symbols-outlined done-icon\\\">\\n                done\\n            </span>\\n            <span class=\\\"material-symbols-outlined delete-icon\\\">\\n                delete\\n            </span>\\n        </div>\\n    </div>\\n    \\n    <div class=\\\"step-card-content\\\">\\n    <div  class=\\\"stepDesc\\\">\\n    <p>Desc: \").concat(step.stepDesc, \"\\n    </p>\\n    </div>\\n    <p>\\n        Deadline:\\n        \").concat(step.stepDate, \"\\n    </p>\\n    <p>Days left: \").concat(step.daysLeft > -1 || step.daysLeft === 'none' ? step.daysLeft : \"you are late \".concat(-step.daysLeft, \" days :(\"), \"</p>\\n    </div>\\n\\n\\n    <div class=\\\"step-card-btn\\\">\\n    <button class=\\\"confirm-btn\\\">\\n    Confirm\\n    </button>\\n    <button class=\\\"cancel-btn\\\">\\n    Cancel\\n    </button>\\n    </div>\\n    \");\n  DOMStepEditBtn(DOMStep, step);\n  DOMStepConfirmBtn(stepPriority, DOMStep);\n  DOMStepCancelBtn(DOMStep, step);\n  DOMDoneBtn(stepPriority, DOMStep);\n  DOMDeleteBtn(stepPriority, DOMStep);\n  return DOMStep;\n}\nfunction ConfirmAddStepCard(stepPriority, DOMAddStepCard) {\n  DOMAddStepCard.querySelector('.confirm-btn').addEventListener('click', function () {\n    var DOMChangingTitle = DOMAddStepCard.querySelector('.changetitle');\n    var DOMChangingStepDesc = DOMAddStepCard.querySelector('textarea');\n    var DOMChangingStepDate = DOMAddStepCard.querySelector('input[type=\"date\"]');\n    if (!(DOMChangingTitle.value && DOMChangingStepDesc.value)) {\n      DOMAddStepCard.querySelector('.warning').style.display = 'block';\n      return;\n    }\n    var currToDo = getCurrToDo();\n    currToDo.addStep(DOMChangingTitle.value, DOMChangingStepDesc.value, DOMChangingStepDate.value, stepPriority);\n    updateCurrToDo(currToDo);\n    loadStepCardPriority(stepPriority);\n  });\n}\nfunction CancelAddStepCard(stepPriority, DOMAddStepCard) {\n  DOMAddStepCard.querySelector('.cancel-btn').addEventListener('click', function () {\n    DOMAddStepCard.innerHTML = \"\\n        <span class=\\\"material-symbols-outlined add-icon\\\">\\n        add\\n        </span>\\n        <p>Add new step</p>\\n        \";\n    AddStepCard(stepPriority, DOMAddStepCard);\n  });\n}\nfunction AddStepCard(stepPriority, DOMAddStepCard) {\n  DOMAddStepCard.querySelector('.add-icon').addEventListener('click', function () {\n    DOMAddStepCard.classList.toggle('changing');\n    DOMAddStepCard.innerHTML = \"\\n        <div class=\\\"step-card-title-icons\\\">\\n        <input class=\\\"changetitle\\\">\\n        </div>\\n        <div class=\\\"step-card-content\\\">\\n        <label class=\\\"stepDesc\\\">Desc: <textarea></textarea>\\n        </label>\\n        <label>\\n            Deadline:\\n            <input type=\\\"date\\\" value=\\\"\\\">\\n        </label>\\n        <p class=\\\"warning\\\">\\n            Please enter the title and description of your todo\\n        </p>\\n        </div>\\n\\n\\n        <div class=\\\"step-card-btn\\\">\\n        <button class=\\\"confirm-btn\\\">\\n        Confirm\\n        </button>\\n        <button class=\\\"cancel-btn\\\">\\n        Cancel\\n        </button>\\n        </div>\\n        \";\n    ConfirmAddStepCard(stepPriority, DOMAddStepCard);\n    CancelAddStepCard(stepPriority, DOMAddStepCard);\n  });\n}\nfunction loadDOMAddStepCard(stepPriority) {\n  var DOMAddStepCard = document.createElement('li');\n  DOMAddStepCard.className = 'step-card new-card';\n  DOMAddStepCard.innerHTML = \"\\n    <span class=\\\"material-symbols-outlined add-icon\\\">\\n    add\\n    </span>\\n    <p>Add new step</p>\\n    \";\n  AddStepCard(stepPriority, DOMAddStepCard);\n  return DOMAddStepCard;\n}\nfunction loadStepCardPriority(stepPriority) {\n  var currToDo = getCurrToDo();\n  DOMStep_cards[stepPriority].innerHTML = '';\n  currToDo.Steps[stepPriority].forEach(function (step, stepIndex) {\n    var DOMStep = createNewDOMStep(stepPriority, step);\n    DOMStep_cards[stepPriority].appendChild(DOMStep);\n  });\n  var DOMAddStepCard = loadDOMAddStepCard(stepPriority);\n  DOMStep_cards[stepPriority].appendChild(DOMAddStepCard);\n}\nfunction loadStepCards() {\n  for (var i = 0; i < 3; i++) {\n    loadStepCardPriority(i);\n  }\n}\n\n//# sourceURL=webpack://to-do-app-revisted/./src/jsfiles/DOMStepCard.js?");

/***/ }),

/***/ "./src/jsfiles/DOMToDoCard.js":
/*!************************************!*\
  !*** ./src/jsfiles/DOMToDoCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddToDoCard\": () => (/* binding */ AddToDoCard),\n/* harmony export */   \"createToDoCard\": () => (/* binding */ createToDoCard),\n/* harmony export */   \"loadToDoCards\": () => (/* binding */ loadToDoCards)\n/* harmony export */ });\n/* harmony import */ var _LS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LS.js */ \"./src/jsfiles/LS.js\");\n/* harmony import */ var _DOMStepCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMStepCard.js */ \"./src/jsfiles/DOMStepCard.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\nvar DOMto_do_list = document.querySelector('.to-do-list');\nfunction editToDoCard(DOMto_do_card, ToDo) {\n  DOMto_do_card.querySelector('.edit-icon').addEventListener('click', function (e) {\n    e.stopPropagation();\n    var ToDoIndex = _toConsumableArray(DOMto_do_card.parentNode.children).indexOf(DOMto_do_card);\n    DOMto_do_card.classList.toggle('changingtitle');\n    var DOMnewtitle = document.createElement('input');\n    DOMnewtitle.className = 'changetitle';\n    DOMnewtitle.value = DOMto_do_card.querySelector('p').innerText;\n    DOMnewtitle.addEventListener('click', function (e) {\n      e.stopPropagation();\n    });\n    var DOMconfirm_btn = document.createElement('button');\n    DOMconfirm_btn.className = 'confirm-btn';\n    DOMconfirm_btn.innerText = 'Confirm';\n    DOMconfirm_btn.addEventListener('click', function (e) {\n      e.stopPropagation();\n    });\n    DOMconfirm_btn.addEventListener('click', function () {\n      var DOMreplacetitle = document.createElement('p');\n      DOMreplacetitle.innerText = DOMnewtitle.value;\n      ToDo.renameToDo(DOMreplacetitle.innerText);\n      (0,_LS_js__WEBPACK_IMPORTED_MODULE_0__.updateToDo)(ToDoIndex, ToDo);\n      DOMconfirm_btn.remove();\n      DOMnewtitle.remove();\n      DOMto_do_card.appendChild(DOMreplacetitle);\n      DOMto_do_card.classList.toggle('changingtitle');\n    });\n    DOMto_do_card.appendChild(DOMnewtitle);\n    DOMto_do_card.appendChild(DOMconfirm_btn);\n    DOMto_do_card.querySelector('p').remove();\n  });\n}\nfunction deleteToDoCard(DOMto_do_card) {\n  DOMto_do_card.querySelector('.delete-icon').addEventListener('click', function (e) {\n    e.stopPropagation();\n    var ToDoIndex = _toConsumableArray(DOMto_do_card.parentNode.children).indexOf(DOMto_do_card);\n    DOMto_do_card.remove();\n    (0,_LS_js__WEBPACK_IMPORTED_MODULE_0__.deleteToDo)(ToDoIndex);\n    if (DOMto_do_card.className.includes('selected')) {\n      for (var i = 0; i < 3; i++) document.querySelectorAll('.step-cards')[i].innerHTML = '';\n      return;\n    }\n  });\n}\nfunction createToDoCard(ToDo) {\n  var DOMto_do_card = document.createElement('li');\n  DOMto_do_card.className = 'to-do-card';\n  DOMto_do_card.innerHTML = \"\\n    <div>\\n    <span class=\\\"material-symbols-outlined edit-icon\\\">\\n        edit\\n    </span>\\n    <span class=\\\"material-symbols-outlined delete-icon\\\">\\n        delete\\n    </span>\\n    </div>\\n    <p>\".concat(ToDo.ToDoTitle, \"</p>\\n    \");\n  DOMto_do_card.addEventListener('click', function () {\n    if (document.querySelector('.to-do-card.selected') !== null) document.querySelector('.to-do-card.selected').classList.toggle('selected');\n    DOMto_do_card.classList.toggle('selected');\n    (0,_DOMStepCard_js__WEBPACK_IMPORTED_MODULE_1__.loadStepCards)();\n  });\n  editToDoCard(DOMto_do_card, ToDo);\n  deleteToDoCard(DOMto_do_card);\n  return DOMto_do_card;\n}\nfunction AddToDoCard(DOMto_do_card) {\n  DOMto_do_list.appendChild(DOMto_do_card);\n}\nfunction loadToDoCards() {\n  DOMto_do_list.innerHTML = '';\n  var currToDoList = (0,_LS_js__WEBPACK_IMPORTED_MODULE_0__.getLS)();\n  currToDoList.forEach(function (ToDo, ToDoIndex) {\n    var DOMto_do_card = createToDoCard(ToDo, ToDoIndex);\n    AddToDoCard(DOMto_do_card);\n  });\n}\n\n//# sourceURL=webpack://to-do-app-revisted/./src/jsfiles/DOMToDoCard.js?");

/***/ }),

/***/ "./src/jsfiles/LS.js":
/*!***************************!*\
  !*** ./src/jsfiles/LS.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToDo\": () => (/* binding */ addToDo),\n/* harmony export */   \"createToDo\": () => (/* binding */ createToDo),\n/* harmony export */   \"deleteToDo\": () => (/* binding */ deleteToDo),\n/* harmony export */   \"getLS\": () => (/* binding */ getLS),\n/* harmony export */   \"updateToDo\": () => (/* binding */ updateToDo)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Step(stepTitle, stepDesc, stepDate) {\n  return {\n    stepTitle: stepTitle,\n    stepDesc: stepDesc,\n    stepDate: stepDate ? stepDate : 'none',\n    daysLeft: !stepDate ? 'none' : dayjs__WEBPACK_IMPORTED_MODULE_0___default()(stepDate).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(), 'days') + 1,\n    completed: false\n  };\n}\nfunction createToDo(title) {\n  //The ToDo object has the title and the steps property\n  //The steps property is an array that has three element from highest step (0 index) to lowest step (2 index)\n  var ToDo = {\n    ToDoTitle: title,\n    Steps: [[], [], []]\n  };\n  return ToDo;\n}\nfunction ToDoMethods(ToDo) {\n  ToDo.sortStep = function (a, b) {\n    if (a.daysLeft === 'none' && b.daysLeft === 'none' || a.completed && b.completed) {\n      return 0;\n    }\n    if (a.daysLeft === 'none' || a.completed) {\n      return 1;\n    }\n    if (b.daysLeft === 'none' || b.completed) {\n      return -1;\n    }\n    return a.daysLeft - b.daysLeft;\n  };\n  ToDo.completeStep = function (stepPriority, stepIndex) {\n    ToDo.Steps[stepPriority][stepIndex].completed = !ToDo.Steps[stepPriority][stepIndex].completed;\n    ToDo.Steps[stepPriority].sort(function (a, b) {\n      return ToDo.sortStep(a, b);\n    });\n  };\n  ToDo.updateStepDate = function () {\n    var _loop = function _loop(i) {\n      ToDo.Steps[i].forEach(function (step, stepIndex) {\n        ToDo.Steps[i][stepIndex].daysLeft = !step.stepDate || step.stepDate === 'none' ? 'none' : dayjs__WEBPACK_IMPORTED_MODULE_0___default()(step.stepDate).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(), 'days') + 1;\n      });\n      ToDo.Steps[i].sort(function (a, b) {\n        return ToDo.sortStep(a, b);\n      });\n    };\n    for (var i = 0; i < 3; i++) {\n      _loop(i);\n    }\n  };\n  ToDo.addStep = function (stepTitle, stepDesc, stepDate, stepPriority) {\n    var newStep = Step(stepTitle, stepDesc, stepDate);\n    ToDo.Steps[stepPriority].push(newStep);\n    ToDo.Steps[stepPriority].sort(function (a, b) {\n      return ToDo.sortStep(a.daysLeft, b.daysLeft);\n    });\n  };\n  ToDo.deleteStep = function (stepPriority, stepIndex) {\n    ToDo.Steps[stepPriority].splice(stepIndex, 1);\n    ToDo.Steps[stepPriority].sort(ToDo.sortStep);\n  };\n  ToDo.renameToDo = function (newtitle) {\n    ToDo.ToDoTitle = newtitle;\n  };\n  ToDo.reWriteStep = function (stepPriority, stepIndex, newStepTitle, newStepDesc, newStepDate) {\n    ToDo.Steps[stepPriority][stepIndex].stepTitle = newStepTitle;\n    ToDo.Steps[stepPriority][stepIndex].stepDesc = newStepDesc;\n    ToDo.Steps[stepPriority][stepIndex].stepDate = newStepDate ? newStepDate : 'none';\n    ToDo.Steps[stepPriority][stepIndex].daysLeft = !newStepDate ? 'none' : dayjs__WEBPACK_IMPORTED_MODULE_0___default()(newStepDate).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(), 'days') + 1;\n    ToDo.Steps[stepPriority].sort(function (a, b) {\n      return ToDo.sortStep(a.daysLeft, b.daysLeft);\n    });\n  };\n  return ToDo;\n}\nfunction updateToDo(ToDoIndex, ToDo) {\n  var currToDoList = getLS();\n  currToDoList[ToDoIndex] = ToDo;\n  setLS(currToDoList);\n}\nfunction addToDo(ToDo) {\n  var currToDoList = getLS();\n  currToDoList.push(ToDo);\n  setLS(currToDoList);\n}\nfunction deleteToDo(index) {\n  var currToDoList = getLS();\n  currToDoList.splice(index, 1);\n  setLS(currToDoList);\n}\nfunction setLS(data) {\n  window.localStorage.setItem('todolist', JSON.stringify(data));\n}\nfunction getLS() {\n  //default behavior for first time user\n  if (!window.localStorage.getItem('todolist')) {\n    var defaultToDo = createToDo('Default');\n    defaultToDo = ToDoMethods(defaultToDo);\n    defaultToDo.addStep('Create newToDo', 'Enter the title of a new ToDo and press the plus button to create new ToDo', '', 0);\n    window.localStorage.setItem('todolist', JSON.stringify([defaultToDo]));\n  }\n  var ToDoList = JSON.parse(window.localStorage.getItem('todolist'));\n  ToDoList.forEach(function (el, i) {\n    ToDoList[i] = ToDoMethods(ToDoList[i]);\n    ToDoList[i].updateStepDate();\n  });\n  return ToDoList;\n}\n\n//# sourceURL=webpack://to-do-app-revisted/./src/jsfiles/LS.js?");

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",f=\"month\",h=\"quarter\",c=\"year\",d=\"date\",l=\"Invalid Date\",$=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),ordinal:function(t){var e=[\"th\",\"st\",\"nd\",\"rd\"],n=t%100;return\"[\"+t+(e[(n-20)%10]||e[n]||e[0])+\"]\"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},g=\"en\",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if(\"string\"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split(\"-\");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v=\"set\"+(this.$u?\"UTC\":\"\");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+\"Hours\",0);case u:return $(v+\"Minutes\",1);case s:return $(v+\"Seconds\",2);case i:return $(v+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h=\"set\"+(this.$u?\"UTC\":\"\"),l=(n={},n[a]=h+\"Date\",n[d]=h+\"Date\",n[f]=h+\"Month\",n[c]=h+\"FullYear\",n[u]=h+\"Hours\",n[s]=h+\"Minutes\",n[i]=h+\"Seconds\",n[r]=h+\"Milliseconds\",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,\"0\")},d=n.meridiem||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,\"0\"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,\"0\"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,\"0\"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,\"0\"),s:String(this.$s),ss:O.s(this.$s,2,\"0\"),SSS:O.s(this.$ms,3,\"0\"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",f],[\"$y\",c],[\"$D\",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));\n\n//# sourceURL=webpack://to-do-app-revisted/./node_modules/dayjs/dayjs.min.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/jsfiles/DOMToDoCard.js");
/******/ 	__webpack_require__("./src/jsfiles/LS.js");
/******/ 	__webpack_require__("./src/jsfiles/DOMInput.js");
/******/ 	__webpack_require__("./src/jsfiles/DOMStepCard.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/jsfiles/DOMIndex.js");
/******/ 	
/******/ })()
;