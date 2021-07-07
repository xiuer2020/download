# Class 类
class Point3D extends Point {
	z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
}
你必须在你的构造函数中调用父级构造函数

class Something {
    static instances = 0;
    constructor() {
        Something.instances++;
    }
}
静态成员定义和访问

# super
class Base {
    log() { console.log('hello world'); }
}

class Child extends Base {
    log() { super.log() };
}
生成：
````
var Base = (function () {
    function Base() {
    }
    Base.prototype.log = function () { console.log('hello world'); };
    return Base;
})();
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        _super.apply(this, arguments);
    }
    Child.prototype.log = function () { _super.prototype.log.call(this); };
    return Child;
})(Base);
```
你不能在成员属性上使用 super 。取而代之的是你应该使用 this