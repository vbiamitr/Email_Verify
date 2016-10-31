var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/:usr/:pwd/:email', function(req, res, next) {
  var usr = req.params['usr'];
  var pwd = req.params['pwd'];
  var email = req.params['email'];
  var url = 'http://api.verify-email.org/api.php?usr=' + usr + '&pwd=' + pwd + '&check=' +  email;
  request(url, function(err, serverResponse, body){
    if(!err && serverResponse.statusCode == 200){          
          res.send(body);
      }
  }); 
});

module.exports = router;
