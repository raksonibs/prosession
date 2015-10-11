var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="task-item">
              <h2> {this.props.title}</h2>
            </div>
        )
    }
});