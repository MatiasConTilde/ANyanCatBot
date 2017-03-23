const Twit = require("twit");

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
const stream = T.stream("user");

stream.on("follow", function(eventMsg) {
  console.log("Follow event!");
  const name = eventMsg.source.name;
  const screenName = eventMsg.source.screen_name;
  T.post("statuses/update", {
    status: "@" + screenName + " hello!"
  }, function(err, data, response) {
    if (err) console.log("Something went wrong!");
    else console.log("It worked!");
  });
});
