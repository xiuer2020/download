# Object静态方法 Object.method
 is(value1, value2) => bool
 确定两个值是否 相同
 assign(target, ...sources) => targObje
 将所有可枚举的 自身属性从一个或多个 源对象复制到目标对象
 create(proto, [propertiesObject]) => obje
 创建一个新对象，使用现有对象作为新创建对象的原型 

 defineProperty(obj, prop, descriptor) => obj
 直接在对象上定义一个新的属性，或者修改一个对象上已有的属性，并返回该对象
 type desciptor: file:///C:/Users/hcjt/AppData/Local/Zeal/Zeal/docsets/JavaScript.docset/Contents/Resources/Documents/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty.html 
 
 getPrototypeOf(obj) => obj | null
 返回[[Prototype]]指定对象的原型
 setPrototypeOf(obj, prototype) => obj
 设置[[Prototype]]指定对象的原型

 defineProperties(obj, props) => obj
 在对象上定义新属性或修改现有属性 
type props: file:///C:/Users/hcjt/AppData/Local/Zeal/Zeal/docsets/JavaScript.docset/Contents/Resources/Documents/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties.html

freeze(obj) => obje
冻结一个对象。无法再更改冻结的对象
isFrozen(obj) => bool
确定某个对象被 冻结。
seal(obj) => obje
密封一个对象，防止向其添加新属性并将所有现有属性标记为不可配置
isSealed(obj) => bool
判断对象密封
keys(obj) => arra
给定对象自己的可枚举属性名称的数组
values(obj) => arra
返回给定对象自己的可枚举属性值的数组
entries(obj) => arra
返回给定对象自己的可枚举字符串键控属性 对的数组，其顺序与循环提供的顺序相同

# Object实例方法 Object.prototype.Method
valueOf()
返回指定对象的原始值。
toString() => stri
返回一个表示对象的字符串
hasOwnProperty(prop) => bool
指示对象是否将指定的属性作为自己的属性

toLocaleString() => stri
propertyIsEnumerable(prop) => bool

# Fucntion实例方法 Function.prototype.Method  
length
指定函数期望的参数数量
name
函数的名称
bind(thisArg[, arg1[, arg2[, ...argN]]]) => func
创建一个新函数，该函数在调用时将其this关键字设置为提供的值，并在调用新函数时在任何提供的参数之前提供给定的参数序列
call([thisArg[, arg1, arg2, ...argN]]) => func
创建一个新函数，该函数在调用时将其this关键字设置为提供的值，并在调用新函数时在任何提供的参数之前提供给定的参数序列
apply(thisArg, [ argsArray]) => func
创建一个新函数，该函数在调用时将其this关键字设置为提供的值，并在调用新函数时在任何提供的参数之前提供给定的参数序列
toString => stri
返回一个表示对象的字符串

# String.prototype
localeCompare(compareString[, locales[, options]]) => -1 | 0 | 1
字符串进行编码排序
match(regexp) => array
检索字符串与正则表达式的匹配结果 
split(separator[, limit]) => array
将 a 划分 String为一个有序的子字符串列表，将这些子字符串放入一个数组中，并返回该数组
charAt(index)
方法返回一个新字符串
substr(start, length)
返回字符串的一部分，从指定的索引开始，然后扩展给定数量的字符
indexOf(searchValue, fromIndex)
返回String指定值第一次出现的调用对象内的索引
replace()
file:///C:/Users/hcjt/AppData/Local/Zeal/Zeal/docsets/JavaScript.docset/Contents/Resources/Documents/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace.html
search(regexp)
返回匹配开始下标
valueOf
includes
matchAll(regexp)
返回与正则表达式匹配字符串的所有结果的迭代器
toString
substring(indexStart, indexEnd)
返回string开始和结束索引之间的部分 ，或返回到字符串的末尾
charCodeAt(index)
返回一个整数0，65535表示给定索引处的 UTF-16 代码单元
replaceAll()
file:///C:/Users/hcjt/AppData/Local/Zeal/Zeal/docsets/JavaScript.docset/Contents/Resources/Documents/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll.html

codePoinAt
lashIndexOf
toLowerCase
toUpperCase


# Dom
HTMLDivElement.prototype
HTMLElement.prototype
HTMLCanvasElement.prototype
CanvasRenderingContext2D.prototype
HTMLVideoElement.prototype

# Navigator 浏览器的信息
Navigator.prototype

# Screen 对象
Screen.prototype

# History 对象
History.prototype

# Location 对象
Location.prototype
