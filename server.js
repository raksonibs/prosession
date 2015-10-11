var express = require('express')
var bodyParser = require('body-parser')

var port = process.env.PORT || 8080

var mongoose = require('mongoose')

var secrets = require('./config/secrets');

mongoose.connect(secrets.db);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SpeakerSchema = new Schema({
  name:{ type: String, default: '' },
    company:{ type: String, default: '' },
    title:{ type: String, default: '' },
    description:{ type: String, default: '' },
    picture:{ type: String, default: '' },
    schedule:{ type: String, default: '' },
    createdOn:{ type: Date,   default: Date.now}
})

var Speaker = mongoose.model('users', SpeakerSchema);

var app = express();

app.use(bodyParser())
var router = express.Router();

app.use(function (req, res, next) {
  var format = req.param('format');

  if (format) {
    req.headers.accept = 'application/' + format;
  }

  next();
});

router.get('/', function(req, res) {
  res.json(({message: 'Hello SPA'}))
})

router.route("/speakers")
.post(function(req,res) {
  var speaker = new Speaker();
  speaker.name = req.body.name;
     speaker.company = req.body.company;
     speaker.title = req.body.title;
     speaker.description = req.body.description;
     speaker.picture = req.body.picture;
     speaker.schedule = req.body.schedule;

  speaker.save(function(err) {
       if (err)
         res.send(err);
   // give some success message
         res.json({ message: 'speaker successfully created!' });
     });
})
.get(function(req,res) {
  Speaker.find(function(err, speakers) {
  if (err)
    res.send(err)

  res.json(speakers)
  })
})

router.route('/speakers/:speaker_id')
.get(function(req, res) {
  Speaker.findById(req.params.speaker_id, function(err, speaker) {
    if (err)
        res.send(err)
    res.json(speaker)
  })


})
.put(function(req, res) {
   Speaker.findById(req.params.speaker_id, function(err,
     speaker) {
     if (err)
       res.send(err);
 // set the speakers properties (comes from the request)
   speaker.name = req.body.name;
   speaker.company = req.body.company;
   speaker.title = req.body.title;
   speaker.description = req.body.description;
   speaker.picture = req.body.picture;
   speaker.schedule = req.body.schedule;
 // save the data received
   speaker.save(function(err) {
    if (err)
       res.send(err);
       // give some success message
       res.json({message: 'speaker successfully updated!'});
    });
  }); 
})

.delete(function(req, res) {
  Speaker.remove({
    _id : req.params.speaker_id
  }, function(err, speaker) {
    if (err)
      res.send(err)

    res.json({message: 'speaker deleted'})
  })
})

app.use('/api', router)

app.listen(port)