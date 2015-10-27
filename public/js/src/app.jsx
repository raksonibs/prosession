var React = require('react');
var Tasks = require('./components/Tasks.jsx');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');

var taskStore = require('./stores/TaskStore.jsx');

var initial = taskStore.getTasks();

function render() {
  React.render(
    <Tasks tasks={initial}/>,
    document.getElementById('tasks')
  );
}

taskStore.onChange(function(tasks) {
  initial= tasks;
  render()
})

render()