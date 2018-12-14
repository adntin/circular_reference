var a = require("./a.js");
var b = require("./b.js");
console.log("在 main.js 之中, a.done=%j, b.done=%j", a.done, b.done);

// $ node main.js

// 在 b.js 之中，a.done = false
// b.js 执行完毕
// 在 a.js 之中，b.done = true
// a.js 执行完毕
// 在 main.js 之中, a.done=true, b.done=true

// 证明两件事
// 一是，在b.js之中，a.js没有执行完毕，只执行了第一行。
// 二是，main.js执行到第二行时，不会再次执行b.js，而是输出缓存的b.js的执行结果，即它的第四行。
