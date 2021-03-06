https://www.runoob.com/php/php-tutorial.html

# 基本的输出方式
1) echo 内容或 echo(内容)
2) prit 内容或 prit(内容)

# 变量作用域
1)local 局部
2)global 全局
3)static 静态
4)parameter 参数


# PHP EOF(heredoc) 使用说明
<!-- PHP EOF(heredoc)是一种在命令行shell（如sh、csh、ksh、bash、PowerShell和zsh）和程序语言（像Perl、PHP、Python和Ruby）里定义一个字符串的方法。 -->
1. 必须后接分号，否则编译通不过。
2. EOF 可以用任意其它字符代替，只需保证结束标识与开始标识一致。
3. 结束标识必须顶格独自占一行(即必须从行首开始，前后不能衔接任何空白和字符)。
4. 开始标识可以不带引号或带单双引号，不带引号与带双引号效果一致，解释内嵌的变量和转义符号，带单引号则不解释内嵌的变量和转义符号。
5. 当内容需要内嵌引号（单引号或双引号）时，不需要加转义符，本身对单双引号转义，此处相当与q和qq的用法。

# PHP EOF(heredoc) 注意
1.以 [<<<EOF] 开始标记开始，以 [EOF] 结束标记结束，结束标记必须顶头写，不能有缩进和空格，且在结束标记末尾要有分号 。
2.开始标记和结束标记相同，比如常用大写的 EOT、EOD、EOF 来表示，但是不只限于那几个(也可以用：JSON、HTML等)，只要保证开始标记和结束标记不在正文中出现即可。
3.位于开始标记和结束标记之间的变量可以被正常解析，但是函数则不可以。在 heredoc 中，变量不需要用连接符 . 或 , 来拼接

# 数据类型
1)类型: String（字符串）, Integer（整型）, Float（浮点型）, Boolean（布尔型）, Array（数组）, Object（对象）, NULL（空值）
2)整型可以用三种格式来指定：十进制， 十六进制（ 以 0x 为前缀）或八进制（前缀为 0）
3)必须使用class关键字声明类对象。类是可以包含属性和方法的结构。
4)可以通过设置变量值为 NULL 来清空变量数据：
4)PHP 是弱类型语言

# PHP 类型比较
1)参考域名 https://www.runoob.com/php/php-types-comparisons.html

# 常量
1)常量在定义后，默认是全局变量，
2)函数内访问常量不需要 global 标识符

# 运算符
. 
<!-- 字符串并置运算符 -->
x<>y
<!-- 如果 x 不等于 y，则返回 true -->
x and y	与	
<!-- 如果 x 和 y 都为 true，则返回 true	--> 
x or y	
<!-- 或	如果 x 和 y 至少有一个为 true，则返回 true	x=6 -->
x xor y	
<!-- 异或	如果 x 和 y 有且仅有一个为 true，则返回 true -->
! x	非	
<!-- 如果 x 不为 true，则返回 true	x= -->

# 与js用法相同运算符
1)+, -, *, /, %, -(取反),
2)=, +=, -=, *=, /=, %=, =(字符串并置运算符)
3)++x, x++, --x, x--
4)==, ===, !=, >, >=, <, <=
5)? :


# 数组运算符
x + y	集合	
<!-- x 和 y 的集合 -->
x == y	相等	
<!-- 如果 x 和 y 具有相同的键/值对，则返回 true -->
x === y	恒等	
<!-- 如果 x 和 y 具有相同的键/值对，且顺序相同类型相同，则返回 true -->
x != y	不相等	
<!-- 如果 x 不等于 y，则返回 true -->
x <> y	不相等	
<!-- 如果 x 不等于 y，则返回 true -->
x !== y	不恒等	
<!-- 如果 x 不等于 y，则返回 true -->

# 关联数组
"key"=>"value"
<!-- 元素语法 -->

# 运算符优先级
1)域名参考 https://www.runoob.com/php/php-operators.html

# 超级全局变量列表:
$GLOBALS
<!-- 是PHP的一个超级全局变量组 -->
$_SERVER
<!-- 是一个包含了诸如头信息(header)、路径(path)、以及脚本位置(script locations)等等信息的数组。 -->
$_REQUEST
<!-- 用于收集HTML表单提交的数据。 -->
$_POST
<!-- 被广泛应用于收集表单数据，在HTML form标签的指定该属性："method="post" -->
$_GET
<!-- 同样被广泛应用于收集表单数据，在HTML form标签的指定该属性："method="get"。 -->
$_FILES
$_ENV
$_COOKIE
$_SESSION

# $_SERVER 变量中的重要元素:
域名参考: https://www.runoob.com/php/php-superglobals.html

# PHP 魔术常量
1)有在加载了这些扩展库时才会出现，或者动态加载后，或者在编译时已经包括进去了。
2)[__LINE__]
<!-- 文件中的当前行号 -->
3)[__FILE__]
文件的完整路径和文件名。如果用在被包含文件中，则返回被包含的文件名。
4)[__DIR__]
文件所在的目录。如果用在被包括文件中，则返回被包括的文件所在的目录。
5)[__FUNCTION__]
函数名称（PHP 4.3.0 新加）。自 PHP 5 起本常量返回该函数被定义时的名字（区分大小写）。在 PHP 4 中该值总是小写字母的。
6)[__CLASS__]
类的名称（PHP 4.3.0 新加）。自 PHP 5 起本常量返回该类被定义时的名字（区分大小写）。
7)[__TRAIT__]
Trait 的名字（PHP 5.4.0 新加）。自 PHP 5.4.0 起，PHP 实现了代码复用的一个方法，称为 traits。Trait 名包括其被声明的作用区域（例如 Foo\Bar）。
8)[__METHOD__]
类的方法名（PHP 5.0.0 新加）。返回该方法被定义时的名字（区分大小写）。
9)[__NAMESPACE__]
当前命名空间的名称（区分大小写）。此常量是在编译时定义的（PHP 5.3.0 新增）。

# PHP 命名空间
1)PHP 命名空间可以解决以下两类问题：
    1.1用户编写的代码与PHP内部的类/函数/常量或第三方类/函数/常量之间的名字冲突。
    1.2为很长的标识符名称(通常是为了缓解第一类问题而定义的)创建一个别名（或简短）的名称，提高源代码的可读性。
2)如果一个文件中包含命名空间，它必须在其它所有代码之前声明命名空间
3)namespace MyProject;  
<!-- 语法格式 -->
4)将全局的非命名空间中的代码与命名空间中的代码组合在一起，只能使用大括号形式的语法。全局代码必须用一个不带名称的 namespace 语句加上大括号括起来
5)在声明命名空间之前唯一合法的代码是用于定义源文件编码方式的 declare 语句
6)与目录和文件的关系很像，PHP 命名空间也允许指定层次化的命名空间的名称。因此，命名空间的名字可以使用分层次的方式定义：

# 命名空间使用
1)非限定名称，或不包含前缀的类名称，
例如 $a=new foo(); 或 foo::staticmethod();。如果当前命名空间是 currentnamespace，foo 将被解析为 currentnamespace\foo。如果使用 foo 的代码是全局的，不包含在任何命名空间中的代码，则 foo 会被解析为foo。 警告：如果命名空间中的函数或常量未定义，则该非限定的函数名称或常量名称会被解析为全局函数名称或常量名称。
2)限定名称,或包含前缀的名称，
例如 $a = new subnamespace\foo(); 或 subnamespace\foo::staticmethod();。如果当前的命名空间是 currentnamespace，则 foo 会被解析为 currentnamespace\subnamespace\foo。如果使用 foo 的代码是全局的，不包含在任何命名空间中的代码，foo 会被解析为subnamespace\foo。
3)完全限定名称，或包含了全局前缀操作符的名称，
例如， $a = new \currentnamespace\foo(); 或 \currentnamespace\foo::staticmethod();。在这种情况下，foo 总是被解析为代码中的文字名(literal name)currentnamespace\foo。

# 命名空间和动态语言特征
1)PHP 命名空间的实现受到其语言自身的动态特征的影响

namespace关键字和__NAMESPACE__常量
<!-- 两种抽象的访问当前命名空间内部元素的方法 -->










































































