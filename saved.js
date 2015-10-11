var Speaker = ('./server/models/speaker');

var router = express.Router();

router.use(function(req,res,next) {
  console.log('print')
  next();
})

router.get('/', function(req, res) {
  res.json(({message: 'Hello SPA'}))
})

router.route("/speakers").post(function(req,res) {
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
             res.json({ message: 'speaker successfully
             updated!'});
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