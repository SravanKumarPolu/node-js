// console.log(__filename);
// console.log(__dirname);
// const logger = require("./logger.js");
// console.log(logger);

// console.log("message");

// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

//OS module
// const os = require("os");
// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log("free memory" + freeMemory);
// console.log(`total memory:${totalMemory}`);

//file system module
// const fs = require("fs");
// // const files = fs.readdirSync("./");
// // console.log(files);
// fs.readdir("$", function (err, files) {
//   if (err) console.log("error", err);
//   else console.log("result", files);
// });

//Event Emitter class(properties)
const EventEmitter = require("events");
const emitter = new EventEmitter();

//Resister a listener
emitter.on("messageLogged", function () {
  console.log("Listener called");
});

//single in event or Raise an event
emitter.emit("messageLogged");
