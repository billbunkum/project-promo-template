"use strict";

console.log('app.js is running');

// JSX - Javascript XML provided by ReactJS
var template = /*#__PURE__*/React.createElement("p", null, "Does this Change????!");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);