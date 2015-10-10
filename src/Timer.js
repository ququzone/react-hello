var React = require('react');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },

  tick: function() {
    this.setState({
      count: this.state.count + 1
    });
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
        <div className="timer">
        you open page time: <span className="timer-count">{this.state.count}</span> seconds.
        </div>
    );
  }

});

module.exports = Timer;