var React = require('react');
var ReactDom = require('react-dom');
var ColorPanel = require('./ColorPanel.js');
var ToDoApp = require('./ToDo.js');

ReactDom.render(
	<h1>Hello, World</h1>,
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

