# Node.js file

  Node.js is server side js runtime environment.it allow to run js code on the server, enabling to  build scalable ,event driven applications. Node.js is non-blocking and asychronous nature by deafult.

## Note:

1. we don't have window objects in Node.js.
2. we have global objects

## global objects in js

1.  console.log();
2.  setTimeout();
3.  clearTimeout();
4.  setInterval();

---

## variable

### in below values and functions are define but globally it's not define

### example:

 var message=''

 console.log(global.message)

In this example, a variable is declared using the var keyword, but it does not add global objects. Its scope is limited to the page only.

---

### Modules

Every file in Node application consider as module.
Modules help organize code into smaller, more manageable units and promote reusability.

##### example:

app.js
var sayHello = fucntion();
{
}
window.sayHello();
In this example app.js is main module.

---

#### Creat module and loading module

###### example:-

1. // logger.js
   var url = "http://mylogger.io/log";
   function log(message) {
   // send an HTTP request
   console.log(message);
   }
   module.exports.log = log;
   // module.exports.endPoint = url;

2. // app.js
   const logger = require("./logger.js");
   console.log(logger);

console.log("message");

In this case logger module create and loading and using that module in another file (app.js)
In this case require function use to load the module.

---

#### module wrapper function

when ever we write like this

##### example:-

function log(message) {
// send an HTTP request
console.log(message);
}
module.exports.log = log;
// module.exports.endPoint = url;

It Wrapp with like this
function (exports,require,module,**fileName,**dirname){
var url = "h

function log(message) {
// send an HTTP request
console.log(message);
}
module.exports.log = log;

}

#### Note:

Node does not execute directly over code it always wrap with somthing like above.

---

#### path.parse(path)

This code uses Node.js path module to parse the **filename (which represents the current filename being executed) and then logs the parsed object to the console.
const path=require('path');
var pathObj=path.parse(**filename)
cosole.log(pathObj);

When you run this code with node app.js, it should indeed output

{
root: 'D:\\',
dir: 'D:\\Sandbox Projects\\node-js',
base: 'app.js',
ext: '.js',
name: 'app'
}

### OS module

The OS Module (os) provides operating system-related utility methods and information, allowing Node.js applications to interact with the underlying operating system.

- functionality:
  1. Offers functions to retrieve various system-related information such as CPU architecture, memory usage, network interfaces.
  2. Facilitates cross-platform compatibility by abstracting away platform-specific differences, ensuring consistent behavior across different operating systems.
  3. Allows Node.js applications to interact with the file system, manage processes, and work with network interfaces, among other system-level operations.

whenever run os module
like this way

#### example:

const os = require("os");
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

##### output like this:-

total memory16873676800
free memory8809263104

---

#### File System Module

The File System Module (fs) provides APIs for working with the file system, allowing Node.js applications to read, write, and manipulate files and directories.
This module we have a comprehensive set of methods for working with files and directories.

- functionality:
  1. Offers functions for performing file I/O operations such as reading from and writing to files, creating and deleting directories, and manipulating file metadata.
  2. Supports both synchronous and asynchronous file operations, providing flexibility for different use cases and application requirements.

#### example:

const fs = require("fs");
const files = fs.readdirSync("./");
console.log(files);

##### ouput:

[ '.git', 'app.js', 'logger.js', 'ReadMe.md' ] this are method of this folder in my machine.

#### example2:

asyn
const fs = require("fs");

fs.readdir("./", function (err, files) {
if (err) console.log("error", err);
else console.log("result", files);
});

### out put:

result [ '.git', 'app.js', 'logger.js', 'ReadMe.md' ]

#### example3 :

fs.readdir("$", function (err, files) {
if (err) console.log("error", err);
else console.log("result", files);
});

#### out put:

error [Error: ENOENT: no such file or directory, scandir 'D:\Sandbox Projects\node-js\$'] {
errno: -4058,
code: 'ENOENT',
syscall: 'scandir',
path: 'D:\\Sandbox Projects\\node-js\\$'
}

---

#### Events module

The Event Module (events) is fundamental to Node.js's event-driven architecture. It allows developers to handle events, emit events, and create custom event emitters.

- functionality:
  1. Provides the EventEmitter class, which facilitates event handling and emitting.
  2. Enables the creation of custom events and event emitters, empowering developers to structure their applications around event-driven paradigms.
  3. Plays a crucial role in facilitating asynchronous, non-blocking behavior in Node.js applications
  4. Supports the decoupling of components in an application by allowing them to communicate through events rather than direct method calls, enhancing modularity and scalability.

##### Event emitter Class Ex:

const EventEmitter = require("events");
const emitter = new EventEmitter();

//Resister a listener
emitter.on("messageLogged", function () {
console.log("Listener called");
});

//single in event or Raise an event
emitter.emit("messageLogged");

output like:
D:\Sandbox Projects\node-js>node app.js
Listener called

---

#### event arguments and extends emitters

#### example:

// Logger.js
const EventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
log(message) {
console.log(message);
//Raise an event
this.emit("messageLogged", { id: 1, url: "http://" });
}
}
module.exports = Logger;" and "const EventEmitter = require("events");

// app.js
const Logger = require("./logger");
const logger = new Logger();

//Resister a listener
logger.on("messageLogged", (arg) => {
console.log("Listener called", arg);
});

logger.log("message")

#### Out put:

When the log method of this Logger class is called, it emits a "messageLogged" event with an object containing id and url properties as arguments. This is achieved using this.emit("messageLogged", { id: 1, url: "http://" });.

In the second snippet, an instance of the Logger class is created, and a listener is registered for the "messageLogged" event using the on method of EventEmitter. The listener function receives the event arguments passed when emitting the event in the Logger class ({ id: 1, url: "http://" }). Inside the listener function, it logs "Listener called" along with the event arguments.
