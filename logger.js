// function log(message) {
//   // send an HTTP request
//   console.log(message);
// }
// module.exports.log = log;
// // module.exports.endPoint = url;

//Extending event emitter
const EventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    //Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}
module.exports = Logger;
