# 浏览器工作原理

> 解析HTML代码构建DOM的过程
![image](https://static001.geekbang.org/resource/image/34/5a/34231687752c11173b7776ba5f4a0e5a.png)

## 状态机

>百科定义: 状态机由状态寄存器和组合逻辑电路构成，能够根据控制信号按照预先设定的状态进行状态转移，是协调相关信号动作、完成特定操作的控制中心。有限状态机简写为FSM（Finite State Machine），主要分为2大类：
第一类，若输出只和状态有关而与输入无关，则称为Moore状态机
第二类，输出不仅和状态有关而且和输入有关系，则称为Mealy状态机

- 每一个状态都是一个机器
    - 在每一个机器里，我们可以做计算、存储、输出......
    - 所有的这些机器接受的输入是一致的
    - 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应
该是纯函数（无副作用）
- 每一个机器知道下一个状态
    - 每个机器都有确定的下一个状态（Moore）
    - 每个机器根据输入决定下一个状态（Mealy）

## 词法解析

> [HTML 官方文档规定了 80 个状态](https://html.spec.whatwg.org/multipage/parsing.html#tokenization)


```
graph TD
    A[token.type] --> B[startTag]
    A --> C[endTag]
    A --> D[text]
    B --> |标签开始| b1[<]
    C --> |标签结束&自闭合标签| c1[</...> .../>]
```


## css计算

> [使用css包生成ast](https://www.npmjs.com/package/css)

- 由内向外逐级匹配
- 每生成一个 startTag 并匹配一次css的ast


> [css 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E9%80%89%E6%8B%A9%E5%99%A8)

- 基本选择器
    - 元素选择品 elementname
    - 类选择器
    - id选择器
    - 通配符选择器
    - 属性选择器
- 组合选择器
    - 相邻兄弟选择器 A+B
    - 普通兄弟选择器 A~B
    - 子选择器 A > B
    - 后代选择器 A B
- 伪类
    - ...详见css选择器
- 伪元素
    - ...详见css选择器


## 排版

## 合成