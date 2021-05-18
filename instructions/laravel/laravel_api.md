response() => Illuminate\Http\Response值response_instance

# response_instance
`非静态成员`
header($key, $value[, $replace]) => response_instance
添加响应头
json([$data, $status, $haders]) => response_instance
会自动将 Content-Type 头设置为 application/json，并使用 PHP 函数 json_encode 方法将给定数组转化为 JSON 格式数据

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

# Illuminate\Database\Eloquent\Concerns 之 HasRelationships trait


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


# Illuminate\Routing\Router
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
`::调用`
get('url', [controller::class, 'method'])
get请求
post('url', [controller::class, 'method'])
post请求


# Illuminate\Support\Facades\Route之路由对象, 访问get,post,put,patch,delete,options静态方法后返回的对象
`::调用`

`->调用`
middleware('中间件名')
绑定中间件



# 数据库测试
模型::factory()->times(Number)->create();

# 在继承Model类的类
