var React = require('react');

var ToDoList = React.createClass({
  render: function() {
    return (
      <ul>
      {
        this.props.items.map((item, index) => (
          <li key={index}><input type="checkbox" /> {item}</li>
        ))
      }
      </ul>
    );
  }
});

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      items:['dd', 'd2'],
      text:'' 
    };
  },

  handleAdd: function(e) {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat([this.state.text]),
      text: ''
    });
  },

  handleChange: function(e) {
    this.setState({text: e.target.value});
  },

  render: function() {
    return (
      <div>
        <ToDoList items={this.state.items} />
        <form onSubmit={this.handleAdd}>
          <input type="text" value={this.state.text} onChange={this.handleChange}></input><button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

});

module.exports = ToDoApp;