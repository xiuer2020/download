# 与js相同api
1)if, if...else, if...else-if...else, switch
<!-- 流程控制 -->
2)arr[key]
<!-- 数组访问 -->
3)for...as 关联数组
<!-- 遍历关联数组 -->
4)for, while, do...while
5)函数的函数表达式创建
6)reuturn 标识符

# "::"、"->"和"=>"的区别
"::" 运算法
该运算符是调用一个类中的静态成员的方法
"->"运算符
该操作符是操作一个类中的成员变量的方法，可以是非static成员变量
"=>"运算符
该预算付是数组的key和value映射时使用的运算符

# api
bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )
<!-- 设置常量 -->
strlen() 
<!-- 函数返回字符串的长度（字节数 )-->
strpos() 
<!-- 函数用于在字符串内查找一个字符或一段指定的文本。 -->
array() 
<!-- 函数用于创建数组 -->
count() 
<!-- 函数用于返回数组的长度（元素的数量） -->
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
<!-- 于创建关联数组 -->
sort() 
<!-- 对数组进行升序排列 -->
rsort() 
<!-- 对数组进行降序排列 -->
asort() 
<!-- 根据关联数组的值，对数组进行升序排列 -->
ksort() 
<!-- 根据关联数组的键，对数组进行升序排列 -->
arsort() 
<!-- 根据关联数组的值，对数组进行降序排列 -->
krsort() 
<!-- 根据关联数组的键，对数组进行降序排列 -->
foreach...as
<!-- 根据数组中每个元素来循环代码块 -->
declare()
<!-- 定义源文件编码方式 -->
exit()
var_dump(传入一个变量) 
<!-- 输出变类型和值 -->
gettype(传入一个变量) 
能够获得变量的类型
json_encode(vari)
 对变量进行 JSON 编码
rand(min, max) 
函数返回随机整数
time() 
函数获取当前时间戳

