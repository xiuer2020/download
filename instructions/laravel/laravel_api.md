# 继承Illuminate\Database\Eloquent\Model的类
`::访问`
select('fieldName1', 'fieldName2',...) => queryBuilderInstance
筛选返回查询构建器实例
`->访问`
with('tableName') => queryBuilderInstance
关联的表
`类内部访问`
$this->belongsTo('tableName') => queryBuilderInstance
返回关联的表查询构建器实例

# 

# Illuminate\Database\Eloquent\Factories\Factory
`::访问`
times(Number)
resolveFactoryName
factoryForModel
guessFactoryNameUsing
hasMacro
macro
mixin
new
userNamespace

# Illuminate\Support\Facades\Hash
`::访问`
resolved
clearResolvuedInstance
clearResolvedInstances
check
info
make
needsRehash
getFacadeApplication
getFacadeRoot
partialMock
setFacadeApplication
shouldReceilve
spy
swap

# Illuminate\Support\Str
`::访问`
after
afterLast
ascii
before
beforeLast
between
camel
contains
containsAll
createUuidsNormally
createUuidsUsing
endsWith
finish
hasMacro
is
isAscii
isUuid
kebab
length
limit
lower
macro
markdown
mixin
of
orderedUuid
padBoth
padLeft
padRight
parseCallBack
plural
pluralStudly
random
remove
repeat
replaceArray
replaceFirst
replaceLast
singular
slug
snake
start
startsWith
studly
substr
substrCount
title
ucfirst
upper
uuid
wordCount
words

# Illuminate\Support\Facades\DB
`::访问`
clearResolvedInstance
clearResolvedInstances
affectingStatement
affectingStatements
beginTransaction
commit
connection
delete
disableQueryLog
enableQueryLog
flushQueryLog
getDefaultConnection
getPdo
getQueryLog
insert
listen
logging
prepareBindings
pretend
raw
resolved
rollBack
select
selectOne
setDefaultConnection
statement
table('tableName')
给定表返回一个流式查询构建器实例
transaction
transactionLevel
unprepared
update(['fieldName称' => 'fieldValue'])
更新数据
getFacaRoot
partialMock
setFacadeApplication
sholdReceive
spy
swap

# Query builder instance查询构建器实例中
`::访问`


`->访问`
where('fieldName', 'fieldValue') => queryBuilderInstance
筛选约束
where([['fieldName1', fieldValue1, ['fieldName2', fieldValue2]]]) => queryBuilderInstance
筛选约束
orderBy('fieldName') => queryBuilderInstance
value('fieldName') => value
方法从结果中获取单个fieldValue
find('idfieldValue') => record
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


# Illuminate\Routing\Router
`::访问`
redirect
resource(string $name, string $controller, array $options = [])
添加路由
resources
resourceVerbs
respondWithRoute
resourceParameters


# Illuminate\Http\Request
`::访问`
capture
create
createFrom
createFromBase
createFromGlobals
enableHttpMethodParameterOverride
getHttpMethodParameteOverride
getMimeTypes
getTrustedHeaderSet
getTrustedHosts
getTrustedProxies
hasMacro
HEADER_FORWARDED
HEADER_X_FORWARDED_AWS_ELB
HEADER_X_FORWARDED_FOR
HEADER_X_FORWARDED_HOST
HEADER_X_FORWARDED_PORT
HEADER_X_FORWARDED_PREFIX
HEADER_X_FORWARDED_PROTO
HEADER_X_FORWARDED_TRAEFIK
macro
matchesType
METHOD_CONNECT
METHOD_DELETE
METHOD_GET
METHOD_HEAD
METHOD_OPTIONS
METHOD_PATCH
METHOD_POST
METHOD_PURGE
METHOD_PUT
METHOD_TRACE
mixin
normalizeQuerySting
setFactory
setTrustedHosts
`->访问`
allFiles
anyFilled
attributes
bearerToken
boolean
cookie
cookies
dump
duplicate
except
file
files
filled
fingerprint
flash
flashExcept
flashOnly
flush
format
fullUrl
fullUrlIs
fullUrlWithQuery
getAcceptableContentTypes
getBasePath
getBaseUrl
getCharsets
getClientIp
getClientIps
getContent
getContentType
getDefaultLocale
getEncodings
getETages
getFormat
getHost
getHttpHost
getLanguages
getLocale
getMethod
getMimeType
getPassword
getPathInfo
getPort
getPreferredFormat
getRequestFormat
getRequestUri
getRouteResolver
getScheme
getSchemeAndHttpHost
getScriptName
getSession
getUri
getUriForPath
getUser
getUserInfo
getUserResolver
hasAny
hasCookie
hasFile
hasHeader
hasPreviousSession
hasSession
header
headers
initialize
instance
ip
ips
is
isFromTrustedProxy
isJson
isMethod
input(param)
获取某个参数




# \App\Models\模型名
`::访问`
query
$encrypter
$manyMethod
$snakeAttributes
addGlobalScope
all()
获取所有参数数据
cacheMutateAttributes
clearBootedModels
created
CREATED_AT
creating
deleted
deleting
destroy
encryptUsing
flushEventListeners
getActualClassNameForMorph
getConnectionResolver
getEventDispatcher
getGlobalScope
hasGlobalScope
isIgnoringTouch
isUnguarded
observe
on onWriteConnection
reguard
replicating
resolveConnection
resolveRelationUsing
retrieved
saved
saving
setConnectionResolver
setEventDispatcher
unguard
unguarded
unsetConnectionResolver
updated
UPDATED_AT
updating
with
withoutEvents
withoutTouching
withoutTouchingOn

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
spy
$app
swap
isMock
resolved
createMock
partialMock
_callStatic
getFacadeRoot
shouldReceive
getMockableClass
$resolvedInstance
getFacadeAccessor
getFacadeApplication
setFacadeApplication
clearResolvedInstance
resolveFacadeInstance
clearResolvedInstances
createFreshMockInstance
`->调用`
middleware

# Illuminate\Support\Facades\Route之路由对象, 访问get,post,put,patch,delete,options静态方法后返回的对象
`::调用`

`->调用`
middleware('中间件名')
绑定中间件



# 数据库测试
模型::factory()->times(Number)->create();

# 在继承Model类的类
