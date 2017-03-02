console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);
var stream = T.stream('user');

stream.on('follow', function(eventMsg) {
  console.log("Follow event!");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  T.post('statuses/update', {
      status: '@' + screenName + ' hello!'
    },
    function(err, data, response) {
      if (err) console.log("Something went wrong!");
      else console.log("It worked!");
    });
});
