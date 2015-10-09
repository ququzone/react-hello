"use strict";

var React = require('react');

var ColorBlock = React.createClass({
	render: function () {
		return (
			<div className="color-block"><span className={this.props.color.value}>{this.props.color.title}</span></div>
		);
	}
});

var ColorBar = React.createClass({
	handleHover: function (i) {
		this.props.onColorHover(i);
	},

	render: function () {
		return (
			<ul className="color-bar">
				{
					this.props.colors.map(color => (
						<li key={color.id} data-id={color.id} className={color.value}
								onClick={this.handleHover.bind(this, color.id)}></li>
					))
				}
			</ul>
		);
	}
});

var ColorPanel = React.createClass({
	getDefaultProps: function () {
		return {
			colors: [
				{id: 0, value: 'red', title: 'red'},
				{id: 1, value: 'blue', title: 'blue'},
				{id: 2, value: 'black', title: 'black'},
				{id: 3, value: 'green', title: 'green'}
			]
		};
	},

	getInitialState: function () {
		return {
			selectedColor: this.props.colors[0]
		}
	},

	getSelectedColor: function (colorId) {
		for (var i = 0; i < this.props.colors.length; i++) {
			if (this.props.colors[i].id === colorId) {
				return this.props.colors[i];
			}
		}
		return null;
	},

	onColorHover: function (colorId) {
		this.setState({selectedColor: this.getSelectedColor(colorId)});
	},

	render: function () {
		return (
			<div className="color-panel">
				<ColorBlock color={this.state.selectedColor}/>
				<ColorBar colors={this.props.colors} onColorHover={this.onColorHover}/>
			</div>
		);
	}
});

module.exports=ColorPanel;