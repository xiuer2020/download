# 特殊类型比较
0==[], null == undefined, 
[1]调用valueOf()查看对象的原始值
[2]调用Number()转换成数字进行比较

# 原型链
new natiFunc() => instObje
instObje.__prot__指向natiFunc.prototype
instObje.__prot__.constructor指向natiFunc
每一个JavaScript对象(除了 null )都具有的一个属性，叫proto，这个属性会指向该对象的原型
每个原型都有一个 constructor 属性指向关联的构造函数 实例原型指向构造函数

# api
Function.prototype.length
指定函数期望的参数数量

Function.prototype.name
函数的名称

Fuction.prototype.bind(thisArg[, arg1[, arg2[, ...argN]]]) => func
Fuction.prototype.call([thisArg[, arg1, arg2, ...argN]]) => func
Fuction.prototype.apply(thisArg, [ argsArray]) => func

Fuction.prototype.toString => stri

Object.prototype.valueOf() => any
Object.prototype.toString() => stri
Object.prototype.isPrototypeOf(object) => bool
Object.prototype.hasOwnProperty(prop) => bool
Object.prototype.toLocaleString() => stri
Object.prototype.propertyIsEnumerable(prop) => bool

Object.is(value1, value2) => bool

Object.assign(target, ...sources) => targObje
Object.create(proto, [propertiesObject]) => obje
Object.createisExtensible(obj) => obje
Object.fromEntries(iterable) => obj
Object.defineProperty(obj, prop, descriptor) => obj
Object.getPrototypeOf(obj) => obj | null
Object.setPrototypeOf(obj, prototype) => obj
Object.defineProperties(obj, props) => obj
Object.preventExtensions(obj) => obj

Object.freeze(obj) => obje
Object.isFrozen(obj) => bool

Object.seal(obj) => obje
Object.isSealed(obj) => bool

Object.keys(obj) => arra
Object.values(obj) => arra
Object.entries(obj) => arra











































