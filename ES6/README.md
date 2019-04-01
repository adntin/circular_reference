ES6 模块的运行机制与 CommonJS 不一样，它遇到模块加载命令 import 时，不会去执行模块，而是只生成一个引用。等到真的需要用到时，再到模块里面去取值。

- node --experimental-modules ES6/m2.mjs

输出如下结果:
m2.mjs foo: bar
m2.mjs setTimeout foo: baz
上面代码表明，ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，以及变量总是绑定其所在的模块。
