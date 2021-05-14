response() => Illuminate\Http\Response值response_instance

# response_instance
`非静态成员`
header($key, $value[, $replace]) => response_instance
添加响应头
json([$data, $status, $haders]) => response_instance
会自动将 Content-Type 头设置为 application/json，并使用 PHP 函数 json_encode 方法将给定数组转化为 JSON 格式数据

# Illuminate\Database\Eloquent\Model
protected $guarded = ['field_name']
保护的字段
`::访问`
select('fieldName1', 'fieldName2',...) => queryBuilderInstance
筛选返回查询构建器实例
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
# 

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
# Illuminate\Http\Request
https://laravelacademy.org/post/21974
`::访问`

`->访问`
input(param)
获取某个参数
only(['key1', 'key2',...] | 'key1', 'key2', ....)
取出输入数据的子集
except(['key1', 'key2',...] | 'key1', 'key2', ....)
取出输入数据的子集
validate(['param'=>'rulues'])
有效性验证 rules有效值: ['required', 'unique:posts', 'max:255']通过 | 分隔



# \App\Models\modelName
`::访问`
query
$encrypter
$manyMethod
$snakeAttributes
addGlobalScope
all()
获取所有参数数据
c

# # \App\Models\模型名的额外约束
`::访问`
where('fieldName称', 'fieldValue')
fieldName对应关系
where([['fieldName1名称', 'fieldName1值'],['fieldName1名称', 'fieldName1值']])
多fieldName对应关系
orderBy('fieldName称', 'desc')
通过某fieldName排序
take(Number)
获取数量
get()
最终获取数据


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
