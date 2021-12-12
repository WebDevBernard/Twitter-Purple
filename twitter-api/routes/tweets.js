const router = require("express").Router();
const Twitter = require("twitter");
module.exports = (app, io) => {
  const client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_KEY_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  let socketConnection;
  let twitterStream;

  const stream = () => {
    console.log("Resuming for " + app.locals.searchTerm);
    twitter.stream(
      "statuses/filter",
      { track: app.locals.searchTerm },
      (stream) => {
        stream.on("data", (tweet) => {
          sendMessage(tweet);
        });

        stream.on("error", (error) => {
          console.log(error);
        });

        twitterStream = stream;
      }
    );
  };
  //Establishes socket connection.
  io.on("connection", (socket) => {
    socketConnection = socket;
    stream();
    socket.on("connection", () => console.log("Client connected"));
    socket.on("disconnect", () => console.log("Client disconnected"));
  });

  /**
   * Emits data from stream.
   * @param {String} msg
   */
  const sendMessage = (msg) => {
    if (msg.text.includes("RT")) {
      return;
    }
    socketConnection.emit("tweets", msg);
  };
};
