var React = require('react');
var ReactDom = require('react-dom');
var ColorPanel = require('./ColorPanel.js');
var ToDoApp = require('./ToDo.js');
var Timer = require('./Timer.js');

ReactDom.render(
	<h1>Hello, React!!!</h1>,
	document.getElementById('example')
);

ReactDom.render(
	<ColorPanel />,
	document.getElementById('color-panel')
);

ReactDom.render(
  <ToDoApp />,
  document.getElementById('todo-panel')
);

ReactDom.render(
  <Timer />,
  document.getElementById('timer-panel')
);

