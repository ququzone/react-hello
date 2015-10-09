var React = require('react');
var ReactDom = require('react-dom');
var ColorPanel = require('./ColorPanel.js');

ReactDom.render(
	<h1>Hello, World</h1>,
	document.getElementById('example')
);

ReactDom.render(
	<ColorPanel />,
	document.getElementById('color-panel')
);



