var React = require('react');
var Task = require('./Task.jsx');

modle.exports = React.createClass({
  getInitialState: function() {
    return {
      data: [
        {
          title: 'First Task',
          completed: false
        },
        {
          title: 'Second Task',
          completed: false
        }
      ]
    }
  },
  render: function() {
    return (
      <div className="task-list">
        {this.state.data.map(function(task) {
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