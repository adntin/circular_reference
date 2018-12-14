exports.done = false;
var a = require("./a.js");
// Only the parts that have been executed can be obtained
console.log("在 b.js 之中，a.done = %j", a.done);
exports.done = true;
console.log("b.js 执行完毕");
