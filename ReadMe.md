# Node.js file

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

### ex:

##### var message=''

##### console.log(global.message)

In this example, a variable is declared using the var keyword, but it does not add global objects. Its scope is limited to the page only.

---

### Modules

Every file in Node application consider as module.
Modules help organize code into smaller, more manageable units and promote reusability.

##### ex:

app.js
var sayHello = fucntion();
{
}
window.sayHello();
In this example app.js is main module.

---

#### Creat module and loading module

###### ex:-

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
