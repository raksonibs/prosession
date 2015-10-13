var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="task-item">
              <h2> {this.props.title}</h2>
              <form action="/self_api/tasks/" method="PUT" className="task-form">
                <div className="col-sm-8 col-sm-offset-2">
                  <div className="form-group">
                    <input type="hidden" name="task_id" value={this.props._id}></input>                       
                    <input type="text" name="title" id="title" placeholder="Set up a Task" autofocus="" value={this.props.title} className="form-control"></input>
                    <button type="submit" className="task-submit">
                      <i className="fa fa-cube"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
        )
    }
});