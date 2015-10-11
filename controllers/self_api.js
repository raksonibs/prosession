var express = require('express');
var router = express.Router();

var tasks = {
    tasks: [
        {
            task_id: 1,
            title: 'First Task',
        },
        {
            task_id: 2,
            title: 'Second Task',
        }
    ]
}

router.get('/tasks', function(req, res) {
    res.json({data: tasks});
});

router.get('/tasks/:task_id', function(req, res) {
  var task_id = req.params.task_id;
  // Switch to search via mongo
  for (i = 0, len = data.tasks.length; i < len; i++) {
        if (data.tasks[i].task_id === parseInt(task_id)) {
            res.json({data: task});
        }
    }
    res.json({data: "No task found."});
})

module.exports = router;