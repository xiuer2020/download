# Nzh 适用于需要转换阿拉伯数字与中文数字的场景。

# 特点如下:
以字符串的方式转换，没有超大数及浮点数等问题(请自行对原数据进行四舍五入等操作)
支持科学记数法字符串的转换
支持口语化
支持自定义转换(不论是兆,京还是厘都可以用)
对超大数支持用争议教少的万万亿代替亿亿
当然,你还可以把中文数字再转回阿拉伯数字


# 安装
$ npm install nzh --save
$ bower install nzh --save

# 引用
var Nzh = require("nzh");
var nzhcn = require("nzh/cn"); //直接使用简体中文
var nzhhk = require("nzh/hk"); //繁体中文
注: 浏览器直接引用请使用 dist/文件夹中的文件 (适配CMD,AMD);


# API
Nzh.cn 
# 简体中文
Nzh.hk 
# 繁体中文
encodeS(num,options) 
#　转中文小写
encodeB(num,options) 
#　转中文大写
toMoney(num,options) 
#　转中文金额
decodeS(zh_num) 
# 中文小写转数字
decodeB(zh_num) 
# 中文大写转数字
nzh.encode(num,options)
# 数字转中文
nzh.decode(zh_num,options)
# 中文转数字
nzh.toMoney(num,options)
# 数字转金额

# options 说明
tenMin: 十的口语化开关, 默认值为 false
complete: 输出完整金额开关, toMoney 函数专用配置, 默认 false
outSymbol: 输出金额前缀字符, toMoney 函数专用配置, 默认 true
ww: "万万"化开关, 默认值为 true

# new Nzh(langs) 自定义
var nzh = new Nzh({
    ch: "〇壹贰叁肆伍陆柒捌玖",      // 数字字符
    ch_u: "个十百千万亿兆京",       // 数位单位字符，万以下十进制，万以上万进制，个位不能省略
    ch_f: "负",                   // 负字符
    ch_d: "点",                   // 小数点字符
    m_u: "元角分厘",              // 金额单位
    m_t: "人民币",                // 金额前缀
    m_z: "正"                    // 金额无小数后缀
});

