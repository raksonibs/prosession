var express = require('express');
var router = express.Router();
var Task = require('../models/Task');
var secrets = require('../config/secrets');

router.get('/tasks', function(req, res) {
  Task.find({}, function(err, tasks) {
    if (err) return next(err)
        var tasksJSON = {tasks: tasks}
        res.json(tasksJSON);  
    });
});

router.get('/tasks/:task_id', function(req, res) {
  var task_id = req.params.task_id;
  console.log(task_id)
  // Switch to search via mongo
  Task.findById(task_id, function(err, task) {
    if (err) return next(err)
        res.json({data: task})
})
  res.json({data: "No task found."});
})

router.post('/tasks/delete/:task_id', function(req, res) {
  var task_id = req.params.task_id;

   Task.remove({_id: task_id}, function(err) {
    // ntd: not via react right now:()
    if (err) next(err)
    req.flash('errors', { msg: 'Deleted!' });
    return res.redirect('/');
   })

})

router.post('/tasks', function(req, res) {
    var task = new Task({
        title: req.body.title,
        user_id: req.body.user_id
    });

    task.save(function(err) {
        if (err) return next(err)
            Task.find({}, function(err, tasks) {
                if (err) return next(err)
                    res.json(tasks);  
            });
    })

})

router.put('/tasks', function(req, res) {

  Task.findById(req.body.task_id, function(err, task) {
      if (err) return next(err)
      task.update({title: req.body.title}, function(err, task) {
        if (err) return next(err)
        res.json({data: task})
      })
  })
    var task = new Task({
        title: req.body.title,
        user_id: req.body.user_id
    });

    task.save(function(err) {
        if (err) return next(err)
            Task.find({}, function(err, tasks) {
                if (err) return next(err)

                    res.json(tasks);  
            });
    })

})

module.exports = router;