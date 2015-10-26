var dispatcher = require('./../dispatcher.js');

module.exports = {
  add: function(task) {
    dispatcher.dispatch({
      payload: task,
      type:"task:add"
    })
  },
  delete: function(task) {
    dispatcher.dispatch({
      payload: task,
      type:"item:delete"
    })
  },
  complete: function(task) {
    dispatcher.dispatch({
      payload: task,
      type: "item:complete"
    })
  }
}