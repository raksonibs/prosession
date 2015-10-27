var React = require('react');
var request = require('request');
var Task = require('./Task.jsx');
var action = require('./../actions/TaskActionCreator.jsx');
var TaskAddItem = require('./TasksAddItem.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          { console.log('printing this.props.tasks')}
          { console.log(this.props.tasks) }
          {
            this.props.tasks.map(function(task, index) {
              // react needs key for something like this
              return (
                <Task task={task} _id={task._id} title={task.title} key={"task"+index} />
              )
            })
          }
        </div>
        <TaskAddItem />

      </div>
    )
  }
})