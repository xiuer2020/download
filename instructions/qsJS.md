# 安装
yarn add qs
import qs from 'qs'


import assert from 'assert' //用来测试


# 使用
1.Parse Object
基本使用
1
let obj = qs.parse('a=c'); // {a:'c'}
是否有原型
1
2
let nullObject = qs.parse("a[hasOwnProperty]=b", { plainObjects: true }); //无原型链
var protoObject = qs.parse("a[hasOwnProperty]=b", {allowPrototypes: true});//有原型链
嵌套生成
1
let obj = qs.parse("foo[bar]=baz"); //{foo:{bar:baz}}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
//嵌套的深度设置
var deep = qs.parse('a[b][c][d][e][f][g][h][i]=j', { depth: 1 });
assert.deepEqual(deep, { a: { b: { '[c][d][e][f][g][h][i]': 'j' } } });
//最多只能到五层
var expected = {
    a: {
        b: {
            c: {
                d: {
                    e: {
                        f: {
                            '[g][h][i]': 'j'
                        }
                    }
                }
            }
        }
    }
};
var string = 'a[b][c][d][e][f][g][h][i]=j';
assert.deepEqual(qs.parse(string), expected);
限制数量
1
2
var limited = qs.parse('a=b&c=d', { parameterLimit: 1 }); //限制为1
assert.deepEqual(limited, { a: 'b' });
去除QueryFix
1
2
var prefixed = qs.parse('?a=b&c=d', { ignoreQueryPrefix: true });
assert.deepEqual(prefixed, { a: 'b', c: 'd' });
设置判断分隔的符号
1
2
var delimited = qs.parse('a=b;c=d', { delimiter: ';' });// delimiter可以随意设置，比如 , { |
assert.deepEqual(delimited, { a: 'b', c: 'd' });
使用正则判断分隔
1
2
var regexed = qs.parse('a=b;c=d,e=f', { delimiter: /[;,]/ });
assert.deepEqual(regexed, { a: 'b', c: 'd', e: 'f' });
允许 dots
1
2
var withDots = qs.parse('a.b=c', { allowDots: true });
assert.deepEqual(withDots, { a: { b: 'c' } });
2. Parse Array
使用 [] 生成
1
2
var withArray = qs.parse('a[]=b&a[]=c');
assert.deepEqual(withArray, { a: ['b', 'c'] });
可以指定 index（max=20）
1
2
var withIndexes = qs.parse('a[1]=c&a[0]=b');
assert.deepEqual(withIndexes, { a: ['b', 'c'] });
​ 当指定的 index 很大(小于20)的时候，qs 会自动压缩

1
2
var withIndexes = qs.parse('a[1]=c&a[15]=b');
assert.deepEqual(withIndexes, { a: ['b', 'c'] });
允许空值
1
2
3
4
5
var withEmptyString = qs.parse('a[]=&a[]=b');
assert.deepEqual(withEmptyString, { a: ['', 'b'] });
 
var withIndexedEmptyString = qs.parse('a[0]=b&a[1]=&a[2]=c');
assert.deepEqual(withIndexedEmptyString, { a: ['b', '', 'c'] });
当 index 大于20的时候 会变成对象
1
2
var withMaxIndex = qs.parse('a[100]=b');
assert.deepEqual(withMaxIndex, { a: { '100': 'b' } });
​ 当然这个 max 值你可以自己设定(0~20 ，超过20设不设置都一样了)

1
2
var withArrayLimit = qs.parse('a[1]=b', { arrayLimit: 0 });
assert.deepEqual(withArrayLimit, { a: { '1': 'b' } });
​ 你甚至可以直接不让它生成数组

1
2
var noParsingArrays = qs.parse('a[]=b', { parseArrays: false });
assert.deepEqual(noParsingArrays, { a: { '0': 'b' } });
混合使用，返回的是Object
1
2
var mixedNotation = qs.parse('a[0]=b&a[b]=c');
assert.deepEqual(mixedNotation, { a: { '0': 'b', b: 'c' } });
生成 Object
1
2
var arraysOfObjects = qs.parse('a[][b]=c');
assert.deepEqual(arraysOfObjects, { a: [{ b: 'c' }] });
3. Parse stringify
基本使用,默认encode输出
1
2
3
qs.stringify(object, [options]);
assert.equal(qs.stringify({ a: 'b' }), 'a=b');
assert.equal(qs.stringify({ a: { b: 'c' } }), 'a%5Bb%5D=c');
关闭 encode
1
2
var unencoded = qs.stringify({ a: { b: 'c' } }, { encode: false });
assert.equal(unencoded, 'a[b]=c');
只对 value encode
1
2
3
4
5
var encodedValues = qs.stringify(
    { a: 'b', c: ['d', 'e=f'], f: [['g'], ['h']] },
    { encodeValuesOnly: true }
);
assert.equal(encodedValues,'a=b&c[0]=d&c[1]=e%3Df&f[0][0]=g&f[1][0]=h');
自定义 encode
1
2
3
4
var encoded = qs.stringify({ a: { b: 'c' } }, { encoder: function (str) {
    // Passed in values `a`, `b`, `c`
    return // Return encoded string
}})
自定义 decode
1
2
3
4
var decoded = qs.parse('x=z', { decoder: function (str) {
    // Passed in values `x`, `z`
    return // Return decoded string
}})
对 Array 使用 arrayFormat
1
2
3
4
5
6
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'indices' })
// 'a[0]=b&a[1]=c'
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' })
// 'a[]=b&a[]=c'
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' })
// 'a=b&a=c'
对 Object 操作默认为 bracket notation
1
2
qs.stringify({ a: { b: { c: 'd', e: 'f' } } });
// 'a[b][c]=d&a[b][e]=f'
也可以设置为  dots notation
1
2
qs.stringify({ a: { b: { c: 'd', e: 'f' } } }, { allowDots: true });
// 'a.b.c=d&a.b.e=f'
空的字符串或者 null 的时候会省略值，但是等号（=）会保留
1
2
assert.equal(qs.stringify({ a: '' }), 'a=');
assert.equal(qs.stringify({ a: null }), 'a=');
当一个key对应的值为空时（空数组，空对象）,没有返回值
1
2
3
4
5
assert.equal(qs.stringify({ a: [] }), '');
assert.equal(qs.stringify({ a: {} }), '');
assert.equal(qs.stringify({ a: [{}] }), '');
assert.equal(qs.stringify({ a: { b: []} }), '');
assert.equal(qs.stringify({ a: { b: {}} }), '');
value 为 undefined 的时候也会被忽略
1
assert.equal(qs.stringify({ a: null, b: undefined }), 'a=');
一个 query 字符串可以预添加 (?)
1
assert.equal(qs.stringify({ a: 'b', c: 'd' }, { addQueryPrefix: true }), '?a=b&c=d');
设置分隔字符串
1
assert.equal(qs.stringify({ a: 'b', c: 'd' }, { delimiter: ';' }), 'a=b;c=d');
如果只想重写日期对象的序列化，则可以提供序列化选项
1
2
3
4
5
var date = new Date(7);
assert.equal(
    qs.stringify({ a: date }, { serializeDate: function (d) { return d.getTime(); } }),
    'a=7'
);
可以使用 sort 选项，对 key 进行排序
1
2
3
4
function alphabeticalSort(a, b) {
    return a.localeCompare(b);
}
assert.equal(qs.stringify({ a: 'c', z: 'y', b : 'f' }, { sort: alphabeticalSort }), 'a=c&b=f&z=y');
通过对 key 进行 filter ，并对 value 操作
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
function filterFunc(prefix, value) {
    if (prefix == 'b') {
        // Return an `undefined` value to omit a property.
        return;
    }
    if (prefix == 'e[f]') {
        return value.getTime();
    }
    if (prefix == 'e[g][0]') {
        return value * 2;
    }
    return value;
}
qs.stringify({ a: 'b', c: 'd', e: { f: new Date(123), g: [2] } }, { filter: filterFunc });
// 'a=b&c=d&e[f]=123&e[g][0]=4'
qs.stringify({ a: 'b', c: 'd', e: 'f' }, { filter: ['a', 'e'] });
// 'a=b&e=f'
qs.stringify({ a: ['b', 'c', 'd'], e: 'f' }, { filter: ['a', 0, 2] });
// 'a[0]=b&a[2]=d'
对 null 的处理
在默认下，null 会被当做空字符串处理

1
2
var withNull = qs.stringify({ a: null, b: '' });
assert.equal(withNull, 'a=&b=');
Parse 不区分有没有 = 的参数，他们都会被解析为空字符串

1
2
var equalsInsensitive = qs.parse('a&b=');
assert.deepEqual(equalsInsensitive, { a: '', b: '' });
现在，为了区分 null 和 空字符串的区别，你可以加上 strictNullHandling，他会区分 null 和空字符串

1
2
var strictNull = qs.stringify({ a: null, b: '' }, { strictNullHandling: true });
assert.equal(strictNull, 'a&b=');
1
2
var parsedStrictNull = qs.parse('a&b=', { strictNullHandling: true });
assert.deepEqual(parsedStrictNull, { a: null, b: '' });
如果你想忽略 value === null的键值对，可以使用 skipNulls

1
2
var nullsSkipped = qs.stringify({ a: 'b', c: null}, { skipNulls: true });
assert.equal(nullsSkipped, 'a=b');
