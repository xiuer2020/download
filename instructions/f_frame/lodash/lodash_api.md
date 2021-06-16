# 数组
chunk(array, [size=1])
将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组
compact(array)
创建一个新数组，包含原数组中所有的非假值元素
concat(array, [values])
创建一个新数组，将array与任何数组 或 值连接在一起
difference(array, [values])
创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中
differenceBy(array, [values], [iteratee=_.identity])
创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中(首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值)
differenceWith(array, [values], [comparator])
创建一个具有唯一array值的数组. 通过comparator回调过滤
drop(array, [n=1])
创建一个切片数组，去除array前面的n个元素。
dropRight(array, [n=1])
创建一个切片数组，去除array尾部的n个元素。
dropRightWhile(array, [predicate=_.identity])
创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分;(回调从array尾部开始) predicate 会传入3个参数： (value, index, array)
dropWhile(array, [predicate=_.identity])
创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分; predicate 会传入3个参数： (value, index, array)
fill(array, value, [start=0], [end=array.length])
使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
findIndex(array, [predicate=_.identity], [fromIndex=0])
返回第一个通过 predicate 判断为真值的元素的索引值（index）
findLastInde(array, [predicate=_.identity], [fromIndex=0])
返回第一个通过 predicate 判断为真值的元素的索引值（index）(它是从右到左的迭代集合array中的元素)
head(array)
获取数组 array 的第一个元素
flatten(array)
减少一级array嵌套深度
flattenDeep(array)
将array递归为一维数组
flattenDepth(array, [depth=1])
根据 depth 递归减少 array 的嵌套层级
fromPairs(pairs)
返回一个由键值对pairs构成的对象
indexOf(array, value, [fromIndex=0])
使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配
lastIndexOf(array, value, [fromIndex=array.length-1])
使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配(从右到左遍历array的元素)
initial(array)
获取数组array中除了最后一个元素之外的所有元素
intersection([arrays])
创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较
intersection([arrays])
创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较(它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较)
intersectionWith([arrays], [comparator])
创建唯一值的数组，这个数组包含所有给定数组都包含的元素. 使用comparator进行比较 comparator 会传入两个参数：(arrVal, othVal)
join(array, [separator=','])
将 array 中的所有元素转换为由 separator 分隔的字符串
last(array)
获取array中的最后一个元素
nth(array, [n=0])
获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素
pull(array, [values])
移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较
pullAll(array, values)
移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较(接收一个要移除值的数组)
pullAllBy(array, values, [iteratee=_.identity])
移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较(接收一个要移除值的数组)接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较。iteratee 会传入一个参数： (value)。
pullAllWith(array, values, [comparator])
移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较(接收一个要移除值的数组)接受 comparator 调用array中的元素和values比较。comparator 会传入两个参数：(arrVal, othVal)。
pullAt(array, [indexes])
根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组
remove(array, [predicate=_.identity])
移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。
reverse(array)
反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推
slice(array, [start=0], [end=array.length]) 
裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。
sortedIndex(array, value)
使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序
sortedIndexBy(array, value, [iteratee=_.identity])
保证array的排序(接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value))
sortedIndexOf(array, value)
使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值. 它是在已经排序的数组array上执行二进制检索
sortedLastIndex(array, value)
使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值. 它是在已经排序的数组array上执行二进制检索(从尾部开始检索)
sortedLastIndexBy(array, value, [iteratee=_.identity])
使用iteratee回调进行比较，返回首次 value 在数组array中被找到的 索引值. 它是在已经排序的数组array上执行二进制检索
sortedLastIndexOf(array, value)
使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值. 它是在已经排序的数组array上执行二进制检索(从尾部开始检索)
sortedUniq(array)
创建一个去重后的array数组副本。使用了SameValueZero 做等值比较。只有第一次出现的元素才会被保留(会优化排序数组)
sortedUniqBy(array, [iteratee])
创建一个去重后的array数组副本。使用了iteratee回调进行比较。只有第一次出现的元素才会被保留(会优化排序数组)
tail(array)
获取除了array数组第一个元素以外的全部元素
take(array, [n=1])
创建一个数组切片，从array数组的起始元素开始提取n个元素
takeRight(array, [n=1])
创建一个数组切片，从array数组的最后一个元素开始提取n个元素
takeRightWhile(array, [predicate=_.identity])
从array数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)(从尾部开始检索)
takeWhile(array, [predicate=_.identity])
从array数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)(从尾部开始检索)
union([arrays])
创建一个按顺序排列的唯一值的数组。
unionBy([arrays], [iteratee=_.identity])
创建一个按顺序排列的唯一值的数组。调用每一个数组（array）的每个元素以产生唯一性计算的标准。
unionWith([arrays], [comparator]) 通过comparator回调进行比较
uniq(array)
创建一个去重后的array数组副本
uniqBy(array, [iteratee=_.identity])
创建一个去重后的array数组副本. iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准
uniqWith(array, [comparator])
创建一个去重后的array数组副本. 通过comparator回调进行比较
unzip(array)
并且创建一个数组，分组元素到打包前的结构
unzipWith(array, [iteratee=_.identity])
并且创建一个数组，分组元素到打包前的结构 接受一个iteratee指定重组值应该如何被组合。
without(array, [values])
创建一个剔除所有给定值的新数组
xor([arrays])
创建一个给定数组唯一值的数组
xorBy([arrays], [iteratee=_.identity])
创建一个给定数组唯一值的数组 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值
zip([arrays])
创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
zipObject([props=[]], [values=[]])
创建键值对对象
zipObjectDeep([props=[]], [values=[]])
创建键值对对象,支持属性路径
zipWith([arrays], [iteratee=_.identity])
创建键值对对, 它接受一个 iteratee（迭代函数），来 指定分组的值应该如何被组合

# 集合
_.countBy
_.each -> forEach
_.eachRight -> forEachRight
_.every
_.filter
_.find
_.findLast
_.flatMap
_.flatMapDeep
_.flatMapDepth
_.forEach
_.forEachRight
_.groupBy
_.includes
_.invokeMap
_.keyBy
_.map
_.orderBy
_.partition
_.reduce
_.reduceRight
_.reject
_.sample
_.sampleSize
_.shuffle
_.size
_.some
_.sortBy
函数
_.after
_.ary
_.before
_.bind
_.bindKey
_.curry
_.curryRight
_.debounce
_.defer
_.delay
_.flip
_.memoize
_.negate
_.once
_.overArgs
_.partial
_.partialRight
_.rearg
_.rest
_.spread
_.throttle
_.unary
_.wrap
语言
_.castArray
_.clone
_.cloneDeep
_.cloneDeepWith
_.cloneWith
_.conformsTo
_.eq
_.gt
_.gte
_.isArguments
_.isArray
_.isArrayBuffer
_.isArrayLike
_.isArrayLikeObject
_.isBoolean
_.isBuffer
_.isDate
_.isElement
_.isEmpty
_.isEqual
_.isEqualWith
_.isError
_.isFinite
_.isFunction
_.isInteger
_.isLength
_.isMap
_.isMatch
_.isMatchWith
_.isNaN
_.isNative
_.isNil
_.isNull
_.isNumber
_.isObject
_.isObjectLike
_.isPlainObject
_.isRegExp
_.isSafeInteger
_.isSet
_.isString
_.isSymbol
_.isTypedArray
_.isUndefined
_.isWeakMap
_.isWeakSet
_.lt
_.lte
_.toArray
_.toFinite
_.toInteger
_.toLength
_.toNumber
_.toPlainObject
_.toSafeInteger
_.toString
数学
_.add
_.ceil
_.divide
_.floor
_.max
_.maxBy
_.mean
_.meanBy
_.min
_.minBy
_.multiply
_.round
_.subtract
_.sum
_.sumBy
数字
_.clamp
_.inRange
_.random
对象
_.assign
_.assignIn
_.assignInWith
_.assignWith
_.at
_.create
_.defaults
_.defaultsDeep
_.entries -> toPairs
_.entriesIn -> toPairsIn
_.extend -> assignIn
_.extendWith -> assignInWith
_.findKey
_.findLastKey
_.forIn
_.forInRight
_.forOwn
_.forOwnRight
_.functions
_.functionsIn
_.get
_.has
_.hasIn
_.invert
_.invertBy
_.invoke
_.keys
_.keysIn
_.mapKeys
_.mapValues
_.merge
_.mergeWith
_.omit
_.omitBy
_.pick
_.pickBy
_.result
_.set
_.setWith
_.toPairs
_.toPairsIn
_.transform
_.unset
_.update
_.updateWith
_.values
_.valuesIn
Seq
_
_.chain
_.tap
_.thru
_.prototype[Symbol.iterator]
_.prototype.at
_.prototype.chain
_.prototype.commit
_.prototype.next
_.prototype.plant
_.prototype.reverse
_.prototype.toJSON -> value
_.prototype.value
_.prototype.valueOf -> value
字符串
_.camelCase
_.capitalize
_.deburr
_.endsWith
_.escape
_.escapeRegExp
_.kebabCase
_.lowerCase
_.lowerFirst
_.pad
_.padEnd
_.padStart
_.parseInt
_.repeat
_.replace
_.snakeCase
_.split
_.startCase
_.startsWith
_.template
_.toLower
_.toUpper
_.trim
_.trimEnd
_.trimStart
_.truncate
_.unescape
_.upperCase
_.upperFirst
_.words
实用函数
_.attempt
_.bindAll
_.cond
_.conforms
_.constant
_.defaultTo
_.flow
_.flowRight
identity(value)
这个方法返回首个提供的参数
_.iteratee
_.matches
_.matchesProperty
_.method
_.methodOf
_.mixin
_.noConflict
_.noop
_.nthArg
_.over
_.overEvery
_.overSome
_.property
_.propertyOf
_.range
_.rangeRight
_.runInContext
_.stubArray
_.stubFalse
_.stubObject
_.stubString
_.stubTrue
_.times
_.toPath
_.uniqueId
Properties
_.VERSION
_.templateSettings
_.templateSettings.escape
_.templateSettings.evaluate
_.templateSettings.imports
_.templateSettings.interpolate
_.templateSettings.variable
Methods
_.templateSettings.imports._






































# 集合



# 函数



# 语言



# 数学



# 数字



# 对象



# Seq



# 字符串



# 实用函数



# Properties



# Methods


