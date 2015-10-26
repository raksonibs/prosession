var React = require('react');
var request = require('request');
var Task = require('./Task.jsx');
var action = require('./../actions/TaskActionCreator.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      tasks: []
    }
  },

  delete: function(e) {
    e.preventDefault();
    action.delete(this.props.item);
  },

  componentDidMount: function() {
        request('http://localhost:3000/self_api/tasks/', function(error, response, body) {
            var result = JSON.parse(body);            
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
                _id={task._id}
                title={task.title}                
              />
            )
        })}
      </div>
      )
  }
})