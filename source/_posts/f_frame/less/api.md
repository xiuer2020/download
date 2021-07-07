[if(condition, value1, value2)]
参数：
condition：布尔表达式
value1：如果condition为true，则返回一个值。
value2：如果condition不正确，则返回一个值。

[and, or, not] => Boolean
即逻辑 [与或非]

[escape(String)] => 字符串转义
这些字符[不编码]：,，/，?，@，&，+，'，~，!和$。
最常见的[编码]的字符：\<space\>，#，^，(，)，{，}，|，:，>，<，;，]，[和=。

[e(String)] => 字符串转义。 
它期望将字符串作为参数并按原样返回其内容，但不带引号。它可用于输出无效的CSS语法的CSS值，或使用Less不能识别的专有语法。

[%(string, arguments ...)] => 格式化字符串
第一个参数是带有占位符的字符串。所有占位符开始百分号%后跟字母[s，S，d，D，a，或A]。其余参数包含替换占位符的表达式。如果您需要打印百分比符号，请用另一个百分比将其转义%%。

占位符：

d，D，a，A-可以通过任何种类的参数（颜色，号码，转义值，表达，...）的替换。如果将它们与字符串结合使用，则将使用整个字符串-包括其引号。但是，引号按原样放置在字符串中，不能用“ /”或类似符号进行转义。
s，S-可以用任何表达式替换。如果将它与字符串一起使用，则仅使用字符串值-省略引号。
参数：

string：带占位符的格式字符串，
anything*：用于替换占位符的值。
返回：formatted string。

[replace(String, pattern, flags)] => 返回：具有替换值的字符串。
string：要搜索和替换的字符串。
pattern：要搜索的字符串或正则表达式模式。
replacement：用于替换匹配模式的字符串。
flags：（可选）正则表达式标志。


[length(list)] => 长度
list -用逗号或空格分隔的值列表。

[extract(lisst, index)] => 返回列表中指定位置[规则集]的值。
list -用逗号或空格分隔的值列表。
index -一个整数，它指定要返回的列表元素的位置。

[range(start, end, step)] => 生[规则集]成一个跨越一系列值的列表
start-（可选）起始值，例如1或1px
end-最终值，例如5px
step -（可选）要增加的金额

[each(@vari, {这组规则中则含有@key, @index, @value参数}] => 将[规则集]的评估绑定到列表的每个成员。

[each(@vari, {这组规则中有序参数为@value, @key, @index}] => 将[匿名混入]的评估绑定到列表的每个成员。
例如：
.set-2() {
  one: blue;
  two: green;
  three: red;
}
.set-2 {
  // Call mixin and iterate each rule
  each(.set-2(), .(@v, @k, @i) {
    @{k}-@{i}: @v;
  });
}

[ceil(Number)] => 向上舍入到下一个最大整数。
参数：number-浮点数。

[floor(Number)] =>  向下舍入到下一个最小整数。

[percentage(Number)] => 将浮点数转换为百分比字符串。

[round(Number, decimalPlaces)] => 应用四舍五入。
number：浮点数。
decimalPlaces：可选：要舍入的小数位数。预设为0。

[sqrt(Number)] => 计算数字的平方根。保持单位不变。
number-浮点数。

[abs(Number)] => 计算数字的绝对值。保持单位不变。
number-浮点数。

[sin(Number)] => 计算正弦函数。
number-浮点数。

[asin(Number)] => 计算反正弦（反正弦）函数。 返回以弧度表示的数字，例如-π/2和之间的数字π/2。
number-浮点数。


[cos(Number)] => 计算余弦函数
number-浮点数。

[acos(Number)] => 计算反余弦（余弦的倒数）函数。返回以弧度为单位的数字，例如0到π之间的数字。
number-浮点数。

[tan(Number)] => 计算切线函数。
number-浮点数。

[atan(Number)] => 计算反正切（正切的倒数）函数。 返回以弧度表示的数字，例如-π/2和之间的数字π/2。
number-浮点数。

[pi] => 返回π（pi）;
参数： none

[pow(Number, Number)] => 返回提高到第二个参数的幂的第一个参数的值。 返回值的尺寸与第一个参数的尺寸相同，而第二个参数的尺寸将被忽略。
number：基数-浮点数。
number：指数-浮点数。

[mod(Number, Number)] => 返回第一个参数模数第二个参数的值。
number：基数-浮点数。
number：指数-浮点数。

[min(value1, ..., valueN)] => 返回一个或多个值中的最小值。
参数：value1, ..., valueN-一个或多个要比较的值。

[max(value1, ..., valueN)] => 返回一个或多个值中的最大值。
参数：value1, ..., valueN-一个或多个要比较的值。

[isnumber(value)] => true如果值是数字，false则返回，否则返回。
参数：value-要评估的值或变量。

[isstring(value)] => 返回true值是否为字符串，false否则返回。
参数：value-要评估的值或变量。

[iscolor(value)] => true如果值是颜色，false则返回，否则返回。
参数：value-要评估的值或变量。

[iskeyword(value)] => 返回true值是否是关键字，false否则返回。
参数：value-要评估的值或变量。

[isurl(value)] => 返回true值是否为URL，false否则返回。
参数：value-要评估的值或变量。

[ispixel(value)] => true如果值是一个以像素为单位的数字，false则返回，否则返回。
参数：value-要评估的值或变量。

[isem(value)] => true如果值是em值，false则返回，否则返回。
参数：value-要评估的值或变量。

[ispercentage(value)] => true如果值是百分比值，false则返回，否则返回。
参数：value-要评估的值或变量。

[isunit(value, unit)] => true如果值是指定单位的数字，则返回；false否则返回。
value -被评估的值或变量。
unit -要测试的单位标识符（可选，带引号）。

[isruleset(value)] => true如果值是规则集，false则返回，否则返回。
value -正在评估的变量。

[color(String)] => 解析颜色，因此代表颜色的字符串成为一种颜色。
参数：：string指定颜色的字符串。

image-size(String) => 文件获取图像尺寸。
参数：：string要获取尺寸的文件。

image-width(String) => 从文件获取图像宽度。
参数：：string要获取尺寸的文件。

image-height(String) => 从文件获取图像高度。
参数：：string要获取尺寸的文件。

convert(Number, identifier) => 将数字从一个单位转换为另一个单位。
number：带单位的浮点数。
identifier，string或escaped value：单位

data-uri(url, mimetype)日期
mimetype：（可选）MIME类型字符串。
url：要内联的文件的URL。

default => 默认
仅在警戒条件内可用，并且true仅在没有其他混合匹配时返回，false否则返回。

unit(dimesion, unit) => 删除或更改尺寸单位
dimension：数字，带或不带维。
unit：（可选）要更改为的单位，如果省略，将删除该单位。

get-unit(Number) => 返回数字的单位。
number：带或不带单位的数字。

svg-gradient()生成多级svg渐变。