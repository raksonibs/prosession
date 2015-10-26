var React = require('react/addons');
var action = require('./../actions/TaskActionCreator.jsx')

module.exports = React.createClass({
  getInitialState: function() {
    return {input: ""}
  },
  handleInputName: function(e) {
    this.setState({input: e.target.value })
  },
  addTask: function(e) {
    e.preventDefault();
    action.add({
      name: this.state.input
    })

    this.setState({
      input: ""
    })
  },

  render: function() {
    return (
      <div className="task-Add">
        <form onSubmit={this.addTask}>
          <input value={this.state.input} onChange={this.handleInputName}
          <button> Add Task </button>
        </form>
      </div>
    )
  }
})