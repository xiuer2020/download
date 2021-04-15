calc
<!-- 通用的数学运算规则 -->
# 变量
[1]通过[@]字符定义;

# 混合（Mixin）
[1]是一种将一组属性从[一个规则集]包含（或混入）到[另一个规则集]的方法。

# 嵌套（Nesting）
Less 提供了使用嵌套（nesting）[代替层叠或与层叠]结合使用的能力。 用 Less 书写的代码[更加简洁]，并且模仿了 HTML 的组织结构。

# @规则嵌套和冒泡
@ 规则（例如 [@media] 或 [@supports]）可以与选择器以相同的方式进行[嵌套]。@ 规则会被放在前面，同一规则集中的其它元素的相对顺序保持不变。这叫做[冒泡]（bubbling）。

# 运算（Operations）
算术运算符 [+、-、*、/] 可以对任何数字、颜色或变量进行运算。如果可能的话，算术运算符在加、减或比较之前会进行[单位换算]。计算的结果以[最左侧]操作数的单位类型为准。如果单位换算[无效或失去意义]，则[忽略]单位。[无效的单位换算]例如：px 到 cm 或 rad 到 % 的转换。 [乘法和除法不作转换]。因为这两种运算在大多数情况下都没有意义，一个长度乘以一个长度就得到一个区域，而 CSS 是不支持指定区域的。Less 将按数字的原样进行操作，并将为计算结果指定明确的单位类型。


# calc() 特例
calc() 并不对[数学表达式]进行计算，但是在嵌套函数中会计算变量和数学公式的值。

@var: 50vh/2;
width: calc(50% + (@var - 20px));  // 结果是 calc(50% + (25vh - 20px))


# 转义（Escaping）
转义（Escaping）允许你使用[任意字符串]作为[属性或变量值]。任何 ~"anything" 或 ~'anything' 形式的内容都将按原样输出，除非 interpolation。

@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
编译为：

@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
注意，从 Less 3.5 开始，可以简写为：

@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
在 Less 3.5+ 版本中，许多以前需要“引号转义”的情况就不再需要了。

函数（Functions）
Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。这些函数在Less 函数手册中有详细介绍。

函数的用法非常简单。下面这个例子将介绍如何利用 percentage 函数将 0.5 转换为 50%，将颜色饱和度增加 5%，以及颜色亮度降低 25% 并且色相值增加 8 等用法：

@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
参见：函数手册

命名空间和访问符
(不要和 CSS @namespace 或 namespace selectors 混淆了)。

有时，出于组织结构或仅仅是为了提供一些封装的目的，你希望对混合（mixins）进行分组。你可以用 Less 更直观地实现这一需求。假设你希望将一些混合（mixins）和变量置于 #bundle 之下，为了以后方便重用或分发：

#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... }
  .citation { ... }
}
现在，如果我们希望把 .button 类混合到 #header a 中，我们可以这样做：

#header a {
  color: orange;
  #bundle.button();  // 还可以书写为 #bundle > .button 形式
}
注意：如果不希望它们出现在输出的 CSS 中，例如 #bundle .tab，请将 () 附加到命名空间（例如 #bundle()）后面。

映射（Maps）
从 Less 3.5 版本开始，你还可以将混合（mixins）和规则集（rulesets）作为一组值的映射（map）使用。

#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
输出符合预期：

.button {
  color: blue;
  border: 1px solid green;
}
参见： 映射（Maps）

作用域（Scope）
Less 中的作用域与 CSS 中的作用域非常类似。首先在本地查找变量和混合（mixins），如果找不到，则从“父”级作用域继承。

@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
与 CSS 自定义属性一样，混合（mixin）和变量的定义不必在引用之前事先定义。因此，下面的 Less 代码示例和上面的代码示例是相同的：

@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
参见：懒加载

注释（Comments）
块注释和行注释都可以使用：

/* 一个块注释
 * style comment! */
@var: red;

// 这一行被注释掉了！
@var: white;
导入（Importing）
“导入”的工作方式和你预期的一样。你可以导入一个 .less 文件，此文件中的所有变量就可以全部使用了。如果导入的文件是 .less 扩展名，则可以将扩展名省略掉：

@import "library"; // library.less
@import "typo.css";