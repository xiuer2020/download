目录索引
https://laravelacademy.org/post/21955

序言
新版特性
升级指南
贡献指南

# 快速入门
安装
[1]php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
[2]php composer-setup.php
[3]php -r "unlink('composer-setup.php');"
[4]当前目录会生成composer.phar文件
[5]php composer.phar create-project laravel/laravel example-app
[6]进入项目目录并复制composer.phar到项目根目录
[7]php composer.phar install
[8]php artisan serve

# 全局函数
[1]配置composer.json的autoload
[2]添加属性files, 值为 ["app/helpers.php"]
[3]composer dump-autoload 将全局函数添加至自动加载器

# 配置
环境配置
将`/.env.example`文件重命名为`.env`
不要试图将 .env 文件提交到版本控制系统, 取而代之是提交.env.example

访问配置值
缓存配置文件
维护模式

# 目录结构
根目录: 应用目录， 启动目录，配置目录， 数据库目录， 对外公开目录， 资源目录， 路由目录， 文件存储目录， 测试目录， vendor目录
应用目录： Broadcasting 目录， Console 目录， Events 目录， Exceptions 目录， Http 目录， Jobs目录， Listeners 目录， Mail 目录， Models 目录， Policies 目录， Providers 服务提供者目录，Rules 目录

入门套件 laravel breeze
[1]命令`php composer.phar require laravel/breeze --dev`进行安装
[2]命令`php artisan breeze:install`进行安装视图、路由和控制器等资源到项目目录
[3]命令npm install
[4]命令npm run dev


# 部署应用到生产环境
服务器配置
优化

# 核心架构
一次请求的生命周期
服务容器

服务提供者
编写服务提供者
注册服务提供者
延迟加载服务提供者

门面
简介`门面为应用服务容器中的绑定类提供了一个「静态」接口`
何时使用门面
门面工作原理
门面类列表

基础组件
路由
在`routes/web.php` 中定义
默认路由文件通过框架`自动加载`
routes/web.php 文件定义了 Web 界面的路由，这些路由被分配到了 web 中间件组，
定义在 routes/api.php 所有路由会被自动添加 /api 前缀， 通过编辑 RouteServiceProvider 类来修改路由前缀
测试 POST 请求可以通过客户端工具，比如 Postman
Postman:https://www.postman.com/downloads/
在测试 POST 请求之前，需要将对应路由取消 CSRF 保护检查,取消的方法是在 app/Http/Middleware/VerifyCsrfToken 中设置排除检查路由

有效的路由方法
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
Route::match(Array, $callback);
Route::any($uri, $callback);

CSRF 保护

重定向
Route::redirect('/here', '/there');
配合命名路由实现重定向：`回调方法内部访问`redirect()->route('name')

视图路由

路由参数
定义：Route::methodFn('path/{param[?]}', function ($param) { return 'User ' . $param; })
访问：http://127.0.0.1:8000/user/1

路由约束(采用路由链式语法)
routeChain->where(['param', reg);
routeChain->where(['param1' => reg1, 'param2' => reg2);


全局路由参数约束
在`app/Http/providers/RouteServiceProvider`的`boot`方法下
Route::pattern('param', reg);

路由对斜杠进行编码(采用路由链式语法)
routeChain->where('param', '*')

命名路由
定义：routeChain-->name('name');
访问：路由`回调方法内部访问`route('name')

为命名路由生成 URL
检查当前路由

路由模型绑定
隐式绑定

路由分组
路由分组的目的是让我们在多个路由中共享相同的路由属性，比如中间件和命名空间

自定义键&作用域
自定义默认键名

模型显式绑定
在`app/Providers/RouteServiceProvider`的 boot 方法中

自定义解析逻辑

兜底路由
Route::fallback(callback)

访问频率限制
定义频率限制器
应用频率限制器到路由

访问当前路由
// 获取当前路由实例
$route = Route::current(); 
// 获取当前路由名称
$name = Route::currentRouteName();
// 获取当前路由action属性
$action = Route::currentRouteAction();

跨域资源共享（CORS）
在`config/cors.php`进行配置

表单方法伪造

# 中间件
在 app/Http/Middleware 目录生成文件
请求之前/之后的中间件：区别是`中间件逻辑位于 $next($request) 语句之前还是之后`

注册中间件


全局中间件
在 app/Http/kernel.php 的数组属性 $middleware 中即可：


分配中间件到指定路由
[1]在 app/Http/Kernel.php 文件中分配给该中间件一个 key
[2]


阻止中间件被应用到群组中的单个路由: https://laravelacademy.org/post/21971

中间件组
中间件排序
中间件参数
终端中间件

# CSRF 防护
跨站请求伪造（CSRF）是一种通过伪装授权用户的请求来攻击授信网站的恶意漏洞
排除指定 URL 不做 CSRF 安全校验

# X-CSRF-Token
除了将 CSRF 令牌作为 POST 参数进行验证外，还可以通过设置 X-CSRF-Token 请求头来实现验证

X-XSRF-Token
Laravel 还会将 CSRF 令牌保存到名为 XSRF-TOKEN 的 Cookie 中，你可以使用该 Cookie 值来设置 X-XSRF-TOKEN 请求头。

# 控制器
控制器类存放在 app/Http/Controllers 目录下

定义控制器
命令 `php artisan make:controller` 控制器名称 --resource 
--resource参数为定义特殊资源控制器

在控制器下定义回调方法

[1]use App\Http\Controllers\UserController;
[2]在 routes/web.php 中通过Route::methodType('path', [控制器名称::class, 'callback']);定义指向该控制器动作的路由

单一动作控制器：在这个控制器中定义 __invoke 方法，为这个单动作控制器注册路由的时候，不需要指定方法

控制器中间件
在`控制器构造函数内部`$this->middleware('中间件名')[->only(callbak) | except(callback)]

控制器中还可以使用闭包注册中间件
$this->middleware(function ($request, $next) { // ... return $next($request); });

资源控制器
命令 `php artisan make:controller` 控制器名称 --resource 
--resource参数为定义特殊资源控制器

定义资源路由：Route::resource('posts', \App\Http\Controllers\控制器名称::class);

资源控制器处理的动作
指定资源模型
嵌套资源
命名资源路由
命名资源路由参数
资源路由作用域
本地化资源 URI
补充资源控制器
依赖注入
路由缓存

# 请求
访问请求实例
依赖注入 & 路由参数
通过路由闭包访问请求

请求路径 & 方法
获取请求路径
获取请求 URL
获取请求方法

PSR-7 请求

请求字符串处理

获取请求输入
获取所有输入值
获取单个输入值
从查询字符串中获取输入
通过动态属性获取输入
获取 JSON 输入值
获取布尔输入值
获取输入的部分数据
判断请求参数是否存在

上一次请求输入
将输入存储到 Session
将输入存储到 Session 然后重定向
取出上次请求数据

Cookie
从请求中取出Cookie
添加 Cookie 到响应
生成 Cookie 实例
提前让 Cookie 过期

文件上传
获取上传的文件
验证文件是否上传成功
文件路径 & 扩展名
其他文件方法

保存上传的文件

配置信任代理
信任所有代理



# 响应
创建响应
字符串 & 数组

Response 对象
添加响应头
添加 Cookie 到响应

缓存控制器中间件
Cookie & 加密

重定向
重定向到命名路由
重定向到控制器动作
重定向到外部域名
带一次性 Session 数据的重定向

其它响应类型
视图响应

JSON 响应
response()->json(data)

文件下载
文件响应

响应宏
自定义的可以在多个路由和控制器中复用的响应




# 视图
视图文件存放在 resources/views 目录

创建视图
判断视图是否存在
创建第一个有效视图

传递数据到视图
在视图间共享数据

视图 Composer
添加 Composer 到多个视图
视图创建器

视图性能优化

# Blade 模板引擎
# URL 生成
# Session
# 验证
# 错误处理
# 日志

安全系列
用户认证
用户授权
邮箱验证
加密
哈希
重置密码

进阶系列
Artisan 控制台
广播
缓存
集合
通过 Mix 编译前端资源
契约
事件
文件存储
辅助函数
HTTP 客户端
本地化
邮件
通知
扩展包开发
队列
任务调度

# 数据库操作
# 数据库入门
配置
SQLite 配置
使用 URL 进行配置

读写分离

sticky 项
使用不同数据库连接


运行原生 SQL 查询
使用命名绑定
运行插入语句
运行更新语句
运行删除语句
运行一个通用语句

监听查询事件

数据库事务

处理死锁
手动使用事务


# 查询构建器
引入标方式
[1]use Illuminate\Support\Facades\DB;
[2]DB::table('表名')->;

[1]\App\Models\模型名称::

获取结果集
从一张表中取出所有行

从一张表中获取一行/一列

表where('字段名', '字段值')->first()=> null | Object

获取字段值列表
组块结果集
聚合函数

查询（Select）

表create(Array)=> null | Object
创建数据

表where('id', 1)->update(['votes' => 1]) => Number
更新表

指定查询子句

原生表达式

原生方法
whereRaw / orWhereRaw
havingRaw / orHavingRaw
orderByRaw
groupByRaw

连接（Join）
内连接（等值连接）
左连接/右连接
交叉连接
高级连接语句
子查询连接  

联合（Union）

Where 子句
or 语句


更多 Where 子句
whereBetween/orWhereBetween
whereNotBetween/orWhereNotBetween   
whereIn/whereNotIn/orWhereIn/orWhereNotIn
whereNull/whereNotNull/orWhereNull/orWhereNotNull
whereDate/whereMonth/whereDay/whereYear/whereTime
whereColumn/orWhereColumn

参数分组
where exists 子句
子查询 Where 子句
JSON Where 子句

排序、分组、限定
orderBy
latest / oldest
inRandomOrder
reorder
groupBy/having
skip/take

条件子句
插入（Insert）
更新（Update）
更新或插入
更新 JSON 字段
增加/减少
删除（Delete）
悲观锁 & 乐观锁
悲观锁使用
乐观锁使用


# 分页
基本使用
基于查询构建器进行分页
简单分页

基于 Eloquent 结果集进行分页
手动创建分页器

显示分页结果
自定义分页器 URI
添加参数到分页链接
调整分页链接窗口

分页效果演示

将结果转化为 JSON

自定义分页视图
分页器实例方法  

# 迁移
命令 php artisan make:migration 生成迁移


迁移文件压缩
迁移文件结构
运行迁移文件

回滚迁移
在单个命令中回滚 & 迁移

数据表
创建表
检查表/列是否存在
数据库连接 & 表选项

重命名/删除表
通过外键重命名表

数据列
创建数据列
可用的数据列类型

列修改器
默认表达式

修改数据列
先决条件
更新列属性
重命名列

删除数据列
有效的命令别名

索引
创建索引
可用索引类型
索引长度 & MySQL / MariaDB

重命名索引
删除索引
外键约束


# 数据填充
存储与`database/seeds 目录`
命令`php artisan make:seeder` 填充器名称

在`database/DatabaseSeeder.php`文件的run 方法中调用填充器
命令`php artisan db:seed`运行业务逻辑

编写填充器
使用模型工厂
调用其他填充器
运行填充器

# Redis
配置
配置连接 scheme
配置集群

Predis

PhpRedis
Redis 门面

与 Redis 交互   
使用多个 Redis 连接

管道命令

发布/订阅
通配符订阅

Eloquent ORM
# Eloquent 模型入门
php artisan make:model Flight
定义模型

protected $primaryKey = 'flight_id';
public $incrementing = false;
protected $keyType = 'string';
public $timestamps = false;
protected $dateFormat = 'U';
protected $attributes = ['delayed' => false];

获取模型
添加额外约束
刷新模型

集合

组块结果集
使用游标

高级子查询
子查询 Select
子查询排序

获取单个模型/聚合结果
Not Found 异常

获取聚合结果    

插入/更新模型
插入
更新
批量更新
检查属性修改
批量赋值
允许批量赋值

其它创建方法
firstOrCreate/firstOrNew
updateOrCreate

删除模型
通过主键删除模型
通过查询删除模型

软删除

查询被软删除的模型
包含软删除模型
只获取软删除模型
恢复软删除模型
永久删除模型
复制模型

查询作用域
全局作用域
编写全局作用域
应用全局作用域
匿名的全局作用域
移除全局作用域
本地作用域
使用本地作用域  
动态作用域

比较模型
事件
使用闭包    

观察者
定义观察者
要注册观察者

消除事件
不触发事件保存单个模型



php artisan make:model Flight --migration 定义模型

# 关联关系
定义关联关系

一对一
在模型类方法内部 this->belongsTo(关联的模型)

this->belongsTo(关联的模型).withDefault();
要通过属性填充默认的模型，可以传递数据或闭包到 withDefault 方法

一对多
一对多（逆向）

多对多
表结构
模型结构

定义相对的关联关系
获取中间表字段
自定义 pivot 属性名
通过中间表字段过滤关联关系

自定义中间表模型
自定义中间模型和自增ID

远层一对一
远层一对多

多态关联
一对一（多态）
表结构
模型结构    
获取关联关系

一对多（多态）
表结构
模型结构
获取关联关系

多对多（多态）
表结构
模型结构
定义相对的关联关系
获取关联关系

自定义多态类型

动态关联关系
关联查询
在关联查询后链接 orWhere

关联方法 Vs. 动态属性
查询存在的关联关系

无关联结果查询
多态关联查询
统计关联模型
在多态关联上统计关联模型

渴求式加载
渴求式加载多个关联关系
嵌套的渴求式加载
嵌套渴求式加载 morphTo 关联关系
渴求式加载指定字段
默认的渴求式加载

带条件约束的渴求式加载
懒惰渴求式加载
嵌套的懒惰渴求式加载 & morphTo


插入 & 更新关联模型
save 方法
递归保存模型&关联关系
create 方法

从属关联关系
默认模型

多对多关联
附加/分离
同步关联
切换关联
更新中间表记录

触发父模型时间戳更新

# Eloquent 集合
可用方法
contains($key, $operator = null, $value = null)
diff($items)
except($keys)
find($key)
fresh($with = [])
intersect($items)
load($relations)
loadMissing($relations)
modelKeys()
makeVisible($attributes)
makeHidden($attributes)
toQuery()
unique($key = null, $strict = false)

自定义集合

# 访问器和修改器
访问器 & 修改器
定义访问器
定义修改器  

日期修改器
日期格式化

属性转换
自定义转化
值对象转化  
写入转化
转化参数
可转化类
数组 & JSON 转换
日期转换
查询期间时间转化


# API 资源类
生成资源类

核心概念
资源集合
保留集合键
自定义底层资源类

编写资源类
关联关系
资源集合

数据包装

包装嵌套资源

数据包装和分页
分页

带条件的属性
合并带条件的属性

带条件的关联关系
带条件的中间表信息

添加元数据
顶层元数据
构造资源类时添加元数据

资源响应


# 序列化
序列化模型 & 集合
在 JSON 中隐藏属性
追加值到 JSON
日期序列化

测试系列
测试入门
HTTP 测试
控制台测试
基于 Laravel Dusk 进行浏览器测试

数据库测试
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
Str::random(length);
Hash::make(value);

每次测试后重置数据库
创建模型工厂
编写模型工厂
工厂状态
工厂回调

使用模模型工厂
创建模型
应用状态
覆盖属性

持久化模型
交替设置属性值

关联关系
工厂定义中应用关联关系
一对多关联
使用魔术方法
归属关联（逆向一对多）
使用魔术方法

使用魔术方法
多对多关联
中间表属性
多态关联
多态归属关联
多态的多对多关联

使用填充器
有效的断言方法

模拟

官方扩展包
基于 Laravel Cashier 提供订阅支付解决方案
基于 Laravel Envoy 提供远程部署解决方案
基于 Laravel Fortify 提供纯后端用户认证解决方案
基于 Laravel Horizon 提供队列系统解决方案
基于 Laravel Homestead 搭建虚拟化本地集成开发环境
基于 Laravel Passport 提供 OAuth2 认证解决方案
基于 Laravel Sail 搭建 Docker 本地集成开发环境
基于 Laravel Sanctum 提供 SPA 认证解决方案
基于 Laravel Scout 提供全文搜索解决方案
基于 Laravel Socialite 提供第三方登录解决方案
基于 Laravel Telescope 提供本地调试解决方案
基于 Laravel Valet 在 Mac 系统搭建轻量级本地集成开发环境

# api
php artisan serve
运行项目