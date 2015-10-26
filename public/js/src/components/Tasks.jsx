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
    action.delete(this.props.task);
  },

  render: function() {
    return (
      <div>
        <div>
          {
            this.props.tasks.map(function(task, index) {
              // react needs key for something like this
              return (
                <Task task={task} _id={task._id} title={task.title}  key={"task"+index} />
              )
            })
          }
        </div>
        <TaskAddItem />

      </div>
    )
  }
})