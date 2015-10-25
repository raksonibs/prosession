var React = require('react');

module.exports = React.createClass({
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