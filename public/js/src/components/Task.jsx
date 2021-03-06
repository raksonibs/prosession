var React = require('react');
var action = require('./../actions/TaskActionCreator.jsx');

module.exports = React.createClass({
    delete: function(e) {
      e.preventDefault();
      action.delete(this.props.task);
    },
    render: function() {
        return (
            <div className="task-item">
              <h2> {this.props.title}</h2>              
              <form action={"/self_api/tasks/delete/" + this.props._id} method="POST" className="task-form">
                <button> Delete task </button>
              </form>
              
              <a href={"/self_api/tasks/complete/" + this.props._id}> Complete </a>
              
            </div>
        )
    }
});