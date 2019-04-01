CommonJS 模块的重要特性是加载时执行，即脚本代码在 require 的时候，就会全部执行。CommonJS 的做法是，一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

- node CommandJS/main.js

输出结果如下:
在 b.js 之中，a.done = false
b.js 执行完毕
在 a.js 之中，b.done = true
a.js 执行完毕
在 main.js 之中, a.done=true, b.done=true
lmxmn148:circular_reference devin.lin\$
