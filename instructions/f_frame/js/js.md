# 特殊类型比较
0==[], null == undefined, 
[1]调用valueOf()查看对象的原始值
[2]调用Number()转换成数字进行比较

# 原型链
new Fater() => instance
instance.__proto__指向natiFunc.prototype
instance.__proto__.constructor指向natiFunc
每一个JavaScript对象(除了 null )都具有的一个属性，叫proto，这个属性会指向该对象的原型
每个原型都有一个 constructor 属性指向关联的构造函数 实例原型指向构造函数
```如果一个属性在查找时在一个对象上找不到（例如 obj.property）那么它会去查找 obj.__proto__.property。如果还是找不到那么去找 obj.__proto__.__proto__.property 直到两者之一被满足：找到了或者是最后的.__proto__自身为 null。
```

# 继承
```    
var __extends = this.__extends || function (d, b) {
for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    给参数1复制属性
    function __() { this.constructor = d; }
	更改临时函数属性 __.protoype.constructor = Child;
    __.prototype = b.prototype;
    给临时函数复制属性
	d.prototype = new __();
	把子类函数的原型设置到父类的 proto 的可选查找成员 Child.prototype = {__proto__ : Fater.prototype}
}
```

# new
```instance = {__proto__ : Father.prototype}
```

# 原始类型转换
https://www.cnblogs.com/f6056/p/10893586.html

# JavaScript 变量的生存期
  JavaScript 变量的生命期从它们被声明的时间开始。
  局部变量会在函数运行以后被删除。
  全局变量会在页面关闭后被删除。
  
  
  
  










































