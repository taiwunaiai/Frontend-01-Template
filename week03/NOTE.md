
## 宿主对象
>  何为“宿主对象”？主要在这个“宿主”的概念上，ECMAScript中的“宿主”当然就是我们网页的运行环境，即“操作系统”和“浏览器”。

> 有非本地对象都是宿主对象（host object），即由 ECMAScript 实现的宿主环境提供的对象，包含两大类，一个是宿主提供，一个是自定义类对象，ECMAScript官方未定义的对象都属于宿主对象,所有非本地对象都是宿主对象。宿主提供对象原理--->由宿主框架通过某种机制注册到ECscript引擎中的对象，如宿主浏览器（以远景为参考）会向ECscript注入window对象，构建其实现javascript。所有的BOM和DOM都是宿主对象。说白了就是，ECMAScript官方未定义的对象都属于宿主对象，因为其未定义的对象大多数是自己通过ECMAScript程序创建的对象。


## 内置对象
> JavaScript 全局作用域里的对象 或 称标准内置对象,全局作用域中的其他对象则可由用户的脚本创建，或由宿主程序提供。浏览器作为最常见的宿主程序，其所提供的宿主对象的说明可以在这里找到：[API 参考](https://developer.mozilla.org/zh-CN/docs/Web/API)

## 原生对象
   独立于宿主环境的ECMAScript实现提供的对象。与宿主无关，在javascript（远景浏览器）、nodejs（node平台）、jscript（ie浏览器）、typescript（微软平台）等等中均有这些对象。简单来说，本地对象就是 ECMA-262 定义的类（引用类型）。在运行过程中动态创建的对象，需要new
```
// 从上面的“JavaScript 标准内置对象”链接中获取到87个原生对象
let nativeObject = [
    Boolean,
    String,
    Number,
    Symbol,
    Object,
    Array,
    Date,
    RegExp,
    Promise,
    Proxy,
    Map,
    WeakMap,
    Set,
    WeakSet,
    Function,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    ArrayBuffer,
    SharedArrayBuffer,
    DataView,
    Float32Array,
    Float64Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Uint8ClampedArray
]
```

## 固有对象
固有对象，我的理解是原生对象的子集，[具体可看ecma262文档](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-well-known-intrinsic-objects) 

在《重学前端》中也贴了这样一段代码利用广度搜索的方式来查看所有的属性和getter/setter，获取到所有的固有对象，会认为固有对象是原生对象的子集，也是因为此处是在原生对象nativeObject进行搜寻。
```

var set = new Set();
var objects = [
    eval,
    isFinite,
    isNaN,
    parseFloat,
    parseInt,
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    Array,
    Date,
    RegExp,
    Promise,
    Proxy,
    Map,
    WeakMap,
    Set,
    WeakSet,
    Function,
    Boolean,
    String,
    Number,
    Symbol,
    Object,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    ArrayBuffer,
    SharedArrayBuffer,
    DataView,
    Float32Array,
    Float64Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Uint8ClampedArray,
    Atomics,
    JSON,
    Math,
    Reflect];
objects.forEach(o => set.add(o));

for(var i = 0; i < objects.length; i++) {
    var o = objects[i]
    for(var p of Object.getOwnPropertyNames(o)) {
        var d = Object.getOwnPropertyDescriptor(o, p)
        if( (d.value !== null && typeof d.value === "object") || (typeof d.value === "function"))
            if(!set.has(d.value))
                set.add(d.value), objects.push(d.value);
        if( d.get )
            if(!set.has(d.get))
                set.add(d.get), objects.push(d.get);
        if( d.set )
            if(!set.has(d.set))
                set.add(d.set), objects.push(d.set);
    }
}
```

## 特殊行为的对象
> https://tc39.es/ecma262/#sec-immutable-prototype-exotic-objects [以下内容参考9.4章节]

```
带有 call 属性的对象
+ [[Call]] ( thisArgument, argumentsList )
    1. Let target be F.[[BoundTargetFunction]].
    2. Let boundThis be F.[[BoundThis]].
    3. Let boundArgs be F.[[BoundArguments]].
    4. Let args be a new list containing the same values as the list boundArgs in the same order followed by the same values as the list argumentsList in the same order.
    5. Return ? Call(target, boundThis, args).
```

- 对象Array/String/Arguments, 拥有下标 length 属性
- 外来对象不可改变Object.prototype
```
Object.prototype = { a: 1 } // 代码不生效
// 上面的代码对Object.prototype 进行重新赋值，是不生效的
Object.prototype.a = 1 // 代码生效
``` 
-  Bound Function Exotic Objects
bind 后的 function，他的 caller 会一直指向 bind 的对象，需注意bind的首参会被转化为Object(argument)
```
function test() { console.log(this) }
test() // { ...window }
var bindObj = test.bind({a: 1})
bindObj() // {a:1}
var bindNull = test.bind(null)
bindNull() // {}
var bindNum = test.bind(1)
bindNum() // Number{1}
```
- Module Namespace Exotic Objects
模块的 namespace 对象：我理解这是用来模块化操作的，常用的import, require。winter推荐只使用 import。
- Integer-Indexed Exotic Objects 【这一块没搞清楚场景】
类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊
