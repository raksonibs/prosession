var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js')

function TaskStore() {
  var tasks = []

  helper.get('/self_api/tasks/')
  .then(function(data) {
    tasks = data;
    triggerListeners();
  })

  var listeners = []

  function getTasks() {
    return tasks
  }

  function onChange(listener) {
    listeners.push(listener)
  }

  function deleteTask(task) {
    var index;
    tasks.filter(function(_task, _index) {
      if (_task.name == task.name) {
        index = _index
      }
    })

    tasks.splice(index, 1);
    triggerListeners()
  }

  function addTask(task) {
    tasks.push(task)
    triggerListeners()
  }

  function triggerListeners() {
    // for each es6?
    listeners.forEach(function(listener) {
      listener(items)
    })
  }

  dispatcher.register(function(event) {
    var split = event.type.split(":");

    if (split[0] == "task") {
      switch(split[1]) {
        case "add":
          addTask(event.payload)
          break;
        case "delete":
          deleteTask(event.payload)
          break;
      }
    }
  })

  return {
    getTasks: getTasks,
    onChange: onChange
  }



}