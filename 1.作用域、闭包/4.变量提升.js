从编译的角度来看变量提升

第一个定义阶段是在编译器的编译阶段进行的，第二个阶段是在js引擎执行代码进行的赋值操作
型同：
var a;
a = 2
这就是变量提升的原理吧

函数优先：函数会首先被提升，之后才是普通变量

特殊情况，在块内部的函数声明通常会被提升到作用域的顶部，不靠谱，尽量少在块中声明函数
foo(); // "b"
var a = true;
if (a) {
    function foo() { console.log("a"); }
}
else {
    function foo() { console.log("b"); }
}


