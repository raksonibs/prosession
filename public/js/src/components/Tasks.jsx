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

  render: function() {
    return (
      <div className="task-list">
        {this.state.tasks.map(function(task, index) {
          return (
              <Task                
                _id={task._id}
                title={task.title}  
                key={"task"+index}              
              />
            )
        })}
      </div>

      <TaskAddItem />
      )
  }
})