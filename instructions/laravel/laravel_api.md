# global
route($name, $parameters = [], $absolute = true)
生成 URL
redirect($to = null, $status = 302, $headers = [], $secure = null) => ResponseTrait_trait
重定向
response($content = '', $status = 200, array $headers = []) => ResponseTrait_trait
从应用程序返回新响应。
url($path = null, $parameters = [], $secure = null)
为应用程序生成url。
session($key = null, $default = null)
获取和存储 Session 数据

# Illuminate\Support\Facades 之 Response class
`待了解响应宏`

# Illuminate\Contracts\Routing 之 UrlGenerator interface
current();
获取不带请求字符串的当前 URL...

previous($fallback = false)
获取上一个请求的完整 URL...

# Illuminate\Support 之 Collection class
all()
*获取集合中的所有项目。
lazy()
*获取此集合中项目的延迟集合。
avg($callback = null)
*获取给定键的平均值。
median($key = null)
*获取给定键的中位数。
mode($key = null)
*获取给定键的模式。
collapse()
*将项集合折叠到单个数组中。
contains($key, $operator, $value = null)
*确定集合中是否存在项。
crossJoin(...$lists)
*交叉连接给定的列表，返回所有可能的排列。
diff($items)
*获取集合中给定项中不存在的项。
diffUsing($items, callback $callback)
*使用回调获取集合中不在给定项中的项。



# Illuminate\Database\Eloquent\Model
https://laravelacademy.org/post/22017
`类内部访问`
public $incrementing = boolean;
使用非自增或非数字类型主键，必须在对应模型中设置 $incrementing 属性为 false
protected $primaryKey = 'field_name';
自定义主键字段
protected $keyType = 'string';
自定义主键类型
public $timestamps = false;
不想要这些 Laravel 自动管理的数据列created_at和updated_at
protected $dateFormat = 'U';
自定义时间格式 可以接受的值和 php 中 date () 函数第一个参数可以接受的值一样。http://php.net/manual/zh/function.date.php
protected $attributes = ['field_name' => false];
自定义字段的默认值
protected $guarded = ['field_name'];
受保护的字段
protected $table = 'table_name';
自定义绑定的表名
protected $guarded = ['field_name']
保护的字段
protected $connection = 'datebase_name';
自定义数据库连接
`::访问`
select('fieldName1', 'fieldName2',...) => queryBuilderInstance
筛选返回查询构建器实例
all()
获取所有记录
`->访问`
with('tableName') => queryBuilderInstance
关联的表
orderByDesc('fieldName') => queryBuilderInstance
倒序
orderByAsc('fieldName') => queryBuilderInstance
正序
`类内部访问`
belongsTo('model_class') => queryBuilderInstance
返回关联的表查询构建器实例
withDefualt(null | associativeArray)
通过属性填充默认的模型
orderByDesc

# Illuminate\Database\Eloquent\Model 之 additional_constraints 额外约束
`::访问`
where('fieldName称', 'fieldValue')
fieldName对应关系
where([['fieldName1名称', 'fieldName1值'],['fieldName1名称', 'fieldName1值']])
多fieldName对应关系
`->访问`
orderBy('fieldName称', 'desc')
通过某fieldName排序
take(Number)
获取数量
get()
最终获取数据
hasOne('related_table_name', $foreignKey = null, $localKey = null) => record
定义一对一关联关系
belongsTo('related_table_name', $foreignKey = null, $ownerKey = null, $relation = null)
定义相对一对一， 一对多（逆向）关联关系
hasMany($related, $foreignKey = null, $localKey = null)
定义一对多关联关系
belongsToMany($related, $table = null, $foreignPivotKey = null, $relatedPivotKey = null, $parentKey = null, $relatedKey = null, $relation = null)
定义多对多, 相对多对多关联关系


# Illuminate\Database\Eloquent\Factories\Factory
`::访问`
times(Number)


# Illuminate\Support\Facades\Hash
`::访问`


# Illuminate\Support\Str
`::访问`

table('tableName')
给定表返回一个流式查询构建器实例
transaction
transactionLevel
unprepared
update(['fieldName称' => 'fieldValue'])
更新数据
getFacaRoot


# Query builder instance 查询构建器实例中
`::访问`


`->访问`
where('fieldName', 'fieldValue') => queryBuilderInstance
筛选约束
where([['fieldName1', fieldValue1, ['fieldName2', fieldValue2]]]) => queryBuilderInstance
筛选约束
orderBy('fieldName') => queryBuilderInstance
value('fieldName') => value
方法从结果中获取单个fieldValue
find('idFieldValue') => record
通过 id fieldName来获取单条记录
pluck('fieldName') => fieldValueArray
获取包含单个fieldValue的数组
get() => recordArray
获取表中所有记录
count() => number
获取表中所有记录数
max('fieldName') => value
获取最大的字段值
min('fieldName') => value
获取最小的字段值
avg('fieldName') => value
获取字段的平均值
sum('field') => value
获取字段的总和值
select('fieleName1', 'fieldName2 as alias') => queryBuilderInstance
筛选字段及设置字段别名
distinct() => queryBuilderInstance
方法允许你强制查询返回不重复的结果集
DB::raw()
创建一个原生表达式
with(callBack)
一对一关联

# Illuminate\Routing 之 UrlGenerator class
full();
获取包含请求字符串的当前 URL...

# Illuminate\Routing 之 Router
`::访问`
redirect
resource(string $name, string $controller, array $options = [])
添加路由
resources

# Illuminate\Http 之 Request class
https://laravelacademy.org/post/21974
`::访问`


`->访问`
path()
获取请求的当前路径信息
url()
获取请求的URL（没有查询字符串）
method()
获取请求方法
validate(Request $request, array $rules, array $messages = [], array $customAttributes = [])
使用给定的规则验证给定的请求 规则可选值:https://www.cnblogs.com/yiweiyihang/p/7782349.html
validateWithBag(string $errorBag, array $rules, ...$params)
在一个命名错误包中验证请求并存储错误消息
all($keys = null)
获取请求的所有输入和文件
input($key = null, $default = null)
从请求中检索输入项
query($key = null, $default = null)
从请求中检索查询字符串项。
boolean($key = null, $default = false)
当值为“1”、“true”、“on”和“yes”时返回true。否则，返回false
only($keys)
从输入数据中获取包含所提供键和值的子集。
except($keys)
获取除指定项数组之外的所有输入
has($key)
确定请求是否包含给定的输入项键。
hasAny($keys)
确定请求是否包含给定的输入项键。
filled($key)
确定请求是否包含输入项的非空值。
missing($key)
确定请求是否缺少给定的输入项键
flash()
将当前请求的输入闪存到会话。
flashOnly($keys)
只刷新会话的部分输入
flashExcept($keys)
只刷新会话的部分输入。
old($key = null, $default = null)
检索旧的输入项。
cookie($key = null, $default = null)
从请求中检索cookie。
hasValidSignature(bool $absolute = true)
验证输入请求包含有效的签名
session()
获取与请求关联的会话。

file($key = null, $default = null) => temp_obj
从请求中检索文件。 https://laravelacademy.org/post/21974
tem_obj->isValid()
返回文件是否已成功上载。

hasFile($key)
确定上载的数据是否包含文件。

# Illuminate\Session 之 Store class
get($key, $default = null)
从会话中获取项目。
all()
从 Session 中获取所有数据
has($key)
判断 Session 中是否存在指定项
exists($key)
判断某个值在 Session 中是否存在
put($key, $value = null)
在 Session 中存储数据
push($key, $value)
推送数据到值为数组的 Session
pull($key, $default = null)
获取&删除数据
flash(string $key, $value = true)
只在下个请求中有效的数据
forget($keys)
 Session 中移除指定数据
 regenerate($destroy = false)
 重新生成 Session ID

# Illuminate\Http 之 ResponseTrait trait
header($key, $values, $replace = true) => ResponseTrait trait
添加一系列响应头
withHeaders($headers)
指定头信息数组添加到响应
header($key, $value[, $replace]) => response_instance
添加响应头
json([$data, $status, $haders]) => response_instance
会自动将 Content-Type 头设置为 application/json，并使用 PHP 函数 json_encode 方法将给定数组转化为 JSON 格式数据
cookie($cookie)
添加 Cookie 到响应

# Illuminate\Routing 之 Route class
named(...$patterns)
判断当前请求是否被路由到给定命名路由

# Illuminate\Routing 之 response_instace
with($key, $value = null)
重定向到一个新的 URL 并将数据存储到一次性 Session 
route($route, $parameters = [], $status = 302, $headers = [])
创建对命名路由的新重定向响应。
action($action, $parameters = [], $status = 302, $headers = [])
生成重定向到控制器动作的响应
away($path, $status = 302, $headers = [])
重定向到应用之外的其他域名
download($file, $name = null, array $headers = [], $disposition = 'attachment')
生成强制用户浏览器下载给定路径文件的响应
streamDownload($callback, $name = null, array $headers = [], $disposition = 'attachment')
将给定操作的字符串响应转化为可下载的响应而不用将操作内容写入磁盘
file($file, array $headers = [])
直接在用户浏览器显示文件

# Illuminate\Support\Facades 之 URL class
`::访问`
signedRoute(string $name, array $parameters = [], \DateTimeInterface|\DateInterval|int $expiration = null, bool $absolute = true)
创建这个签名 URL
temporarySignedRoute(string $name, \DateTimeInterface|\DateInterval|int $expiration, array $parameters = [], bool $absolute = true)
生成一个包含过期时间的临时签名 URL

# Illuminate\Support\Facades\Cookie
get()
从请求中检索cookie。

# Closure
`::访问`
bind
fromCallable

# Illuminate\Support\Facades\Crypt
`::调用`
encryptString(string $value)=>string
加密字符串
decryptString(string $value)=>string
加密字符串


# Illuminate\Support\Facades\Route
https://laravelacademy.org/post/21973
`::调用`
get(string $uri, array|string|callable|null $action = null)
get 请求
post(string $uri, array|string|callable|null $action = null)
post 请求
match(array|string $methods, string $uri, array|string|callable|null $action = null)
响应多种请求动作
any(string $uri, array|string|callable|null $action = null)
响应任意请求动作
resourceVerbs(array $verbs = [])
注册一个资源路由
resources(array $resources, array $options = [])
注册多个资源路由
apiResource(string $name, string $controller, array $options = [])
自动排除 reate 和 edit 这两个路由
redirect(string $uri, string $destination, int $status = 302)
重定向到其他 URI 的路由
permanentRedirect(string $uri, string $destination)
返回 301 状态码
where(array  $where)
约束路由参数的格式
pattern(string $key, string $pattern)
路由参数在全局范围内被给定正则表达式约束 需要在 RouteServiceProvider 类的 boot 方法中定义
name(string $value)
定义该路由的名称
group(\Closure|string|array $attributes, \Closure|string $routes)
路由分组
middleware(array|string|null $middleware)
给某个路由分组中定义的所有路由分配中间件
domain(string $value)
处理子域名路由
prefix(string  $prefix)
来为分组中每个路由添加一个给定 URI 前缀
name(string $value)
路由名称设置前缀
bind(string $key, string|callable $binder)
使用自定义的解析逻辑 在 RouteServiceProvider 类的 boot 方法中使用
fallback(array|string|callable|null $action = null)
定义一个当所有其他路由都未能匹配请求 URL 时所执行的路由
current(); 
获取当前路由实例
currentRouteName();
获取当前路由名称
currentRouteAction();
获取当前路由action属性
`->访问`
待了解`CSRF 保护`
待了解`自定义键`
待了解`访问频率限制`
待了解`嵌套资源`
待了解`路由缓存`
group($callback)
创建具有共享属性的路由组。
view(string $uri, string $view, array $data = [], int $status = 200, array $headers = [])
返回一个视图
withoutMiddleware($middleware)
需要阻止中间件被应用到群组中的单个路由


# App\Http\Controllers
`::访问`
emergenc(string $message, array $context = [])
写入紧急日志
alert(string $message, array $context = [])
写入警报日志
critica(string $message, array $context = [])
写入严重日志
error(string $message, array $context = [])
写入错误日志
warning(string $message, array $context = [])
写入警告日志
notic(string $message, array $context = [])
写入通知日志
info(string $message, array $context = [])
写入信息日志
debug(string $message, array $context = [])
写入调试日志



# Illuminate\Support\Facades\Route之路由对象, 访问get,post,put,patch,delete,options静态方法后返回的对象
`::调用`

`->调用`
middleware('中间件名')
绑定中间件



# 数据库测试
模型::factory()->times(Number)->create();

# 在继承Model类的类
