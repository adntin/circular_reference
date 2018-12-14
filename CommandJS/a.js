exports.done = false; // a.js has executed
var b = require("./b.js");
// stop here, waiting b.js loaded
console.log("在 a.js 之中，b.done = %j", b.done);
exports.done = true;
console.log("a.js 执行完毕");
