var React = require('react');
var request = require('request');
var Task = require('./Task.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      tasks: []
    }
  },

  componentDidMount: function() {
        request('http://localhost:3000/self_api/tasks/', function(error, response, body) {
            var result = JSON.parse(body);
            console.log(result)
            if (this.isMounted()) {
                this.setState(result);
            }
        }.bind(this));
    },

  render: function() {
    return (
      <div className="task-list">
        {this.state.tasks.map(function(task) {
          return (
              <Task
                title={task.title}
                completed={task.completed}
              />
            )
        })}
      </div>
      )
  }
})