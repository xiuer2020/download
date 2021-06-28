# https://rexdainiel.gitbooks.io/typescript/content/docs/classes.html

# 关键词
declare
标注js全局变量的类型.
readonly
对象中的一些字段只能在创建的时候被赋值

# 类型声明类型
basicType: number, string, boolean
基础类型
Class
类
IteratorResult
迭代器返回值



# 类型声明形式
fn<Option>()
参数形式
class Point {
    x: number;
    y: number;
}
this属性
fn(arg: Type)
函数参数
(): string => {}
函数返回值
?
可能没有 一般加在参数, 属性之后


# 访问修饰符
public: 类, 子类, 实例
protected: 类, 子类
private: 类

# abstract 抽象
它可以在 class 上也可以在类的成员上
abstract 的类不能直接被实例化。用户必须创造一些 class 来继承abstract class。
abstract 的成员不能直接被访问，而且子类必须提供这个功能。

# class 初始化简写
class Foo {
    constructor(public x:number) {
    }
}

# __extends 方法
var __extends = this.__extends || function (d, b) {
```    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
   复制参数2的属性给参数1  
```    function __() { this.constructor = d; }
	构造器的构造方法为 参数1
    __.prototype = b.prototype;
    构造器的实例为参数2 的实例
```    d.prototype = new __();
	把子类函数的原型设置到父类的 proto 的可选查找成员
}


# 属性初始化器
class Foo {
    members = [];  // Initialize directly
    add(x) {
        this.members.push(x);
    }
}





写在前面
深入理解 TypeScript
Why
翻译内容
How to contribute
最后
TypeScript 项目
编译上下文
声明空间
模块
命名空间
动态导入表达式
TypeScript 类型系统
概览
从 JavaScript 迁移
@types
环境声明
接口
枚举
lib.d.ts
函数
可调用的
类型断言
Freshness
类型保护
字面量类型
readonly
泛型
类型推断
类型兼容性
Never
辨析联合类型
索引签名
流动的类型
异常处理
混合
ThisType
JSX
支持 JSX
React JSX
非 React JSX
TypeScript 错误提示
解读 Errors
常见的 Error
TIPs
基于字符串的枚举
名义化类型
状态函数
Bind 是有害的
柯里化
泛型的实例化类型
对象字面量的惰性初始化
类是有用的
export default 被认为是有害的
减少 setter 属性的使用
创建数组
谨慎使用 --outFile
TypeScript 中的静态构造函数
单例模式
函数参数
Truthy
构建切换
类型安全的 Event Emitter
Reflect Metadata
协变与逆变
infer
TypeScript 编译原理
概览
程序
抽象语法树
扫描器
解析器
绑定器
检查器
发射器
TypeScript FAQs
一些常见的「bug」并不是 bug
一些常见的 Feature 需求
类型系统的行为
函数
类
泛型
模块
枚举
类型守卫
JSX 和 React
一些不能按预期工作的代码
命令行的行为
tsconfig.json 的行为
TypeScript 更新
TypeScript 3.9
TypeScript 3.8
TypeScript 3.7