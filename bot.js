console.log("The bot is starting");

const Twit = require("twit");

const T = new Twit(require("./config"));
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
