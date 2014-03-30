var express = require('express');
var swig    = require('swig');
var mongojs = require('mongojs');

var db = mongojs('mongodb://localhost/usersapp');
var users = db.collection('users');
var app = express();

app.configure('development', function() {
  swig.setDefaults({ cache: false });
  app.set('showStackError', true);
  app.use(express.logger({
    format: ':response-time ms - :date - :method :url | :referrer'
  }));
});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);

app.set('port', process.env.PORT || 5200);
app.listen(app.get('port'));

console.log('App running on ' + app.get('port'));

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/users', function(req, res) {
  users.save(req.body, function(err, user) {
    res.send(201, user);
  });
});

app.get('/users', function(req, res) {
  users.find({}, {
      firstName: 1,
      lastName: 1,
      role: 1,
      _id: 1
    },
    function(err, users) {
      res.send(200, users);
    });
});

app.get('/users/:id', function(req, res) {
  users.findOne({
    '_id': mongojs.ObjectId(req.params.id)
  }, function(err, user) {
    delete user._id;
    res.send(200, user);
  });
});

app.put('/users/:id', function(req, res) {
  users.update({
    '_id': mongojs.ObjectId(req.params.id)
  }, req.body, function(err) {
    res.send(204);
  });
});

app.delete('/users/:id', function(req, res) {
  users.remove({
    '_id': mongojs.ObjectId(req.params.id)
  }, function(err) {
    res.send(200);
  });
});
