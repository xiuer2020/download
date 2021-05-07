# 入门


# App\Models


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
table
transaction
transactionLevel
unprepared
update(['字段名称' => '字段值'])
更新数据
getFacaRoot
partialMock
setFacadeApplication
sholdReceive
spy
swap

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
where('字段名称', '字段值')
字段对应关系
where([['字段1名称', '字段1值'],['字段1名称', '字段1值']])
多字段对应关系
orderBy('字段名称', 'desc')
通过某字段排序
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
`->调用`
middleware

# 数据库测试
模型::factory()->times(Number)->create();

# 在继承Model类的类
