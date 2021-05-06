# 入门

# App\Models


# \Illuminate\Database\Eloquent\Factories\Factory
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

# Illuminate\Http\Request | Request
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

# \App\Models\模型名
query
$encrypter
$manyMethod
$snakeAttributes
addGlobalScope
all()
获取所有数据
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
bind
fromCallable




# 数据库测试
模型::factory()->times(Number)->create();