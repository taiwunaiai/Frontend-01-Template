# 每周总结可以写在这里

1. CSS排版布局之Flex布局，可以参考这个链接学习。

https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

# CSS中@规则和普通规则啥意思。

## CSS选择器

在 CSS 中，选择器是一种模式，用于选择需要添加样式的元素。


选择器 | 例子 | 例子描述 | CSS
---|---|---|---
.class|.intro|选择class="intro"的所有元素|1
#id|#firstname|选择id="firstname"的所有元素|1
*|*|选择所有元素|2
element|p|选择所有p元素|1
element,element|div,p|选择所有div元素和所有p元素|1
element p|div p|选择所有div元素内部的所有p元素|1
element>p|div>p|选择父元素为div元素的所有p元素|2
element+element|div+p|选择紧跟在div元素之后的所有p元素|2
[attribute]|[target]|选择带有target属性所有元素|2
[attribute=value]|[target=_black]|选择target=“_black”的所有元素|2
[attribute~=value]|[title~=flower]|选择title属性包含单词flower的所有元素|2
[attribute丨=value]|[lang丨=en]|选择lang属性值以en开头的所有元素|2
:link|a:link|选择所有未被访问的链接|1
:visited|a:visited|选择所有已被访问的链接|1
:active|a:active|选择活动链接|1
:hover|a:hover|选择鼠标指针位于其上的链接|1
:focus|input:focus|选择获得焦点的input元素|2
:first-letter|p:first-letter|选择每个p元素的首字母|1
:first-line|p:first-line|选择每个p元素的首行|1
:first-child|p:first-child|选择书序父元素的第一个子元素的每个p元素|2
:before|p:before|在每个p元素的内容之前插入内容|2
:after|p:after|在每个p元素的内容之后插入内容|2
:lang(language)|p:lang(it)|选择带有以it开头的lang属性值的每个p元素|2
element1~element2|p~ul|选择前面有p元素的每个ul元素|3
[attribute^=value]|a[src^="https"]|选择其src属性值以https开头的每个a元素|3
[attribute$=value]|a[src$=".pdf"]|选择其src属性以.pdf结尾的所有a元素|3
[attribute*=value]|a[src*="abc"]|选择其src属性中包含abc子串的每个a元素|3
:first-of-type|p:first-of-type|选择属于其父元素的首个p元素的每个p元素|3
:last-of-type|p:last-of-type|选择属于其父元素的最后p元素的每个p元素|3
:only-of-type|p:only-of-type|选择属于其父元素的唯一子元素的每个p元素|3
:nth-child(n)|p:nth-child(2)|选择属于其父元素的第二个子元素的每个p元素|3
:nth-last-child(n)|p:nth-last-child(2)|同上，从最后一个子元素开始计数|3
:nth-of-type(n)|p:nth-of-type(2)|选择属于其父元素第二个 p元素的每个p元素|3
:nth-last-of-type(n)|p:nth-last-of-type(2)|同上，但是从最后一个子元素开始计数|3
:last-child|p:last-child|选择属于其父元素最后一个子元素每个p元素|3
:root|:root|选择文档的根元素|3
:empty|p:empty|选择没有子元素的每个p元素（包括文本节点）|3
:target|#news:target|选择当前活动的#news元素|3
:enabled|input:enabled|选择每个启用的input元素|3
:disabled|input:disabled|选择每个禁用的input元素|3
:checked|input:checked|选择每个被选中的input元素|3
:not(selector)|:not(p)|选择非p元素的每个元素|3
::selection|::selection|选择被用户选取的元素部分|3


## CSS声明列表

声明部分是一个由“属性: 值”组成的序列。

CSS 范围的关键字：initial，unset，inherit，任何属性都可以的关键字。


- 字符串：比如 content 属性。


- URL：使用 url() 函数的 URL 值。

- 整数 / 实数：比如 flex 属性。

- 维度：单位的整数 / 实数，比如 width 属性。

- 百分比：大部分维度都支持。

- 颜色：比如 background-color 属性。

- 图片：比如 background-image 属性。

- 2D 位置：比如 background-position 属性。

- 函数：来自函数的值，比如 transform 属性。


CSS 支持一批特定的计算型函数：

calc()

max()

min()

clamp()

toggle()

attr()

# CSS @规则

## 什么是@规则？

一个 at-rule 是一个CSS 语句，以at符号开头, '@' (U+0040 COMMERCIAL AT), 后跟一个标识符，并包括直到下一个分号的所有内容, ';' (U+003B SEMICOLON), 或下一个CSS块，以先到者为准。

下面是一些@规则：

@charset, 定义样式表使用的字符集.

@import, 告诉 CSS 引擎引入一个外部样式表.

@namespace, 告诉 CSS 引擎必须考虑XML命名空间。

嵌套@规则, 是嵌套语句的子集,不仅可以作为样式表里的一个语句，也可以用在条件规则组里：

@media, 如果满足媒介查询的条件则条件规则组里的规则生效。
    
@page, 描述打印文档时布局的变化.

@font-face, 描述将下载的外部的字体.

@keyframes, 描述 CSS 动画的中间步骤 . 

@supports, 如果满足给定条件则条件规则组里的规则生效.

@document, 如果文档样式表满足给定条件则条件规则组里的规则生效。 (推延至 CSS Level 4 规范).

## 条件规则组

就像属性值那样,每条@规则都有不同的语法. 不过一些@规则可以归为一类： 条件规则组. 这些语句使用相同的语法. 它们都嵌套语句，或者是规则或者是@规则。它们都表达： 它们所指的条件 (类型不同) 总等效于 true 或者 false，如果为 true 那么它们里面的语句生效。

## @charset

 @charset CSS @规则  指定样式表中使用的字符编码。它必须是样式表中的第一个元素，而前面不得有任何字符。因为它不是一个嵌套语句，所以不能在@规则条件组中使用。如果有多个 @charset @规则被声明，只有第一个会被使用，而且不能在HTML元素或HTML页面的字符集相关 <style> 元素内的样式属性内使用。
 
 ```
@charset "UTF-8";
@charset "iso-8859-15";
 ```
 
 ## @import
 
 @import CSS@规则，用于从其他样式表导入样式规则。这些规则必须先于所有其他类型的规则，@charset 规则除外; 因为它不是一个嵌套语句，@import不能在条件组的规则中使用。
 
 ```
 @import 'global.css';
 ```
 
 ## @namespace
 
 @namespace 是用来定义使用在CSS样式表中的XML命名空间的@规则。定义的命名空间可以把通配、元素和属性选择器限制在指定命名空间里的元素。@namespace规则通常在处理包含多个namespaces的文档时才有用，比如HTML5里内联的SVG、MathML或者混合多个词汇表的XML。
 
 任何 @namespace 规则都必须在所有的 @charset 和 @import 规则之后, 并且在样式表中，位于其他任何 style declarations 之前。
 
 @namespace 可以用来定义默认命名空间。当定义过默认命名空间后, 所有的通配选择器和类型选择器（但不包括属性选择器，详情看下面的note）都只应用在这个命名空间的元素中。
 
 @namespace 规则也可以用于定义命名空间前缀。当一个通配、类型、属性选择器前面有命名空间前缀修饰时，这个选择器将只匹配那些命名空间与 元素名或属性匹配 的元素。
 
 ```
 @namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* 匹配所有的XHTML <a> 元素, 因为 XHTML 是默认无前缀命名空间 */
a {}

/* 匹配所有的 SVG <a> 元素 */
svg|a {}

/* 匹配 XHTML 和 SVG <a> 元素 */
*|a {}
 ```
 
 ## @media
 
 根据用户媒体类型从而进行响应式布局 方法 @media@规则由一个或多个媒体查询组成，每个媒体查询包含一个可选的媒体类型和若干媒体特性。多个查询可通过使用逻辑运算符以多种方式组合起来，且对大小写敏感。
 
 仅当媒体查询计算为真时，即，当指定的媒体类型与正在显示文档的设备的类型匹配并且所有媒体特征表达式计算为真时，才应用相应的样式。涉及未知媒体类型的查询总是错误的。
 
 ```
 /*以下示例为当前屏幕为彩色屏幕，且最大宽度为800px时命中该样式，
即用此方法检测当前屏幕是否为手机屏幕*/
@media screen and (max-width: 800px) {
    bottom: -25px;
}
 ```
 
 

媒体类别| all | print | screen | speech
---|---|---|---|---
说明|所有设备|分页资料或者打印模式查看的文档|彩色的电脑屏幕|语音合成器

 ## @page
 
 @page 规则用于在打印文档时修改某些CSS属性。你不能用@page规则来修改所有的CSS属性，而是只能修改margin,orphans,widow 和 page breaks of the document。对其他属性的修改是无效的。
 
 ### @page描述符
 
 - size
 
 指定页面盒模型所在的容器的大小和方向。一般情况下，因为一个页面盒模型被渲染到一面纸张上，所以这个属性也指示了目标纸张的大小。
 
 - marks
 
 向文档添加剪切标记和/或注册标记。
 
 - bleed
 
 为页面框盒指定一个限制区域，超过这个区域的页面内容将被裁剪。
 
 ### @page各种伪类
 
:break
1. 没有子节点;
2. 仅有空的文本节点;
3. 仅有空白符的文本节点.

:first
 
打印文档的时候，第一页的样式。
    
:left

设置打印时的左侧文档样式

:right

当打印时会选择所有文档右页

==打印文档的"左"或"右"是由书写方向相关的. 举个栗子, "从左到右"的书写方向中第一页应当使用 :right 配置; "从右至左"的书写方向中第一页应当使用 :left 配置.==

==这里的“左” 或 “右” 不是固定的，取决与文档的写作方向。如果第一页主要文字方向是从左到右的，那么它就是:right右页，反之它就是:left左页。==

## @font-face

@font-face CSS at-rule 指定一个用于显示文本的自定义字体；字体能从远程服务器或者用户本地安装的字体加载. 如果提供了local()函数，从用户本地查找指定的字体名称，并且找到了一个匹配项, 本地字体就会被使用. 否则, 字体就会使用url()函数下载的资源。

```
# 语法
@font-face {
  [ font-family: <family-name>; ] ||
  [ src: <src>; ] ||
  [ unicode-range: <unicode-range>; ] ||
  [ font-variant: <font-variant>; ] ||
  [ font-feature-settings: <font-feature-settings>; ] ||
  [ font-variation-settings: <font-variation-settings>; ] ||
  [ font-stretch: <font-stretch>; ] ||
  [ font-weight: <font-weight>; ] ||
  [ font-style: <font-style>; ]
}
where 
<family-name> = <string> | <custom-ident>+
```

==你不能在一个 CSS 选择器中定义 @font-face==
 
 
 ## @keyframes
 
 @keyframes 规则通过在动画序列中定义关键帧（或waypoints）的样式来控制CSS动画序列中的中间步骤。这比转换更能控制动画序列的中间步骤。
 
 ==关键帧中出现的 !important 关键词将会被忽略==
 
 ## @supports
 
 @supports CSS at-rule 关联了一组嵌套的CSS语句,这些语句被放置在一个CSS区块中,该区块以大括号分割, 还有一个由多个CSS声明检测组成的条件,它是一个键值组合, 由逻辑与,逻辑或,逻辑非组合而成. 这样的条件语句称为支持条件.
 
 该语句可以用来做特性查询.
 
 ```
 @supports (animation-name: test) {
    … /* 如果支持不带前缀的animation-name,则下面指定的CSS会生效 */
    @keyframes { /* @supports是一个CSS条件组at-rule,它可以包含其他相关的at-rules */
      …
    }
}

/* 检测是否不支持指定的CSS属性 */
@supports ( not ((text-align-last:justify) or (-moz-text-align-last:justify) ){
    … /* 这里的CSS代码用来模拟text-align-last:justify */
}
 ```
 
 ## @document
 
 @document CSS at-rule 根据文档的 URL 限制其中包含的样式规则的作用范围。它主要是为用户定义的样式表（UserStyle）而设计的，但也可以在作者定义的样式表上使用。
 
 ### @document语法
 
 ```
 @document 规则可以指定一个或多个匹配函数。如果任何功能适用于给定的 URL，则该规则将对该URL生效。可用的函数如下：

url()，匹配整个 URL。
url-prefix()，匹配文档的 URL 是否以参数指定的值开头。
domain()，匹配文档的域名是否为参数中指定的域名或者为它的子域名。
regexp()，匹配文档的 URL 是否和参数中指定的正则表达式匹配。该表达式必须匹配整个 URL。
提供给 url()、url-prefix()，和 domain() 函数的参数可以不使用引号括起来。但提供给 regexp() 函数的参数必须用引号括起来。

提供给 regexp() 函数的正则表达式中的转义字符必须再次进行一次 CSS 转义。例如，一个点号（.），在正则表达式中匹配任意换行符之外的字母.如果想要匹配一个正真的点号，必须首先按照正则表达式的规则转义一次（变为 \.）然后在使用CSS的规则再转义一次（转换为\\.）。
 ```
 
 ```
 @document url(http://www.w3.org/),
          url-prefix(http://www.w3.org/Style/),
          domain(mozilla.org),
          regexp("https:.*")
{
  /* 该条CSS规则会应用在下面的网页:
     + URL为"http://www.w3.org/"的页面.
     + 任何URL以"http://www.w3.org/Style/"开头的网页
     + 任何主机名为"mozilla.org"或者主机名以".mozilla.org"结尾的网页     
     + 任何URL以"https:"开头的网页 */

  /* 让上述网页变得超级丑 */
  body {
    color: purple;
    background: yellow;
  }
}
 ```