1. css hack

    1) IE6能识别下划线" _ "和星号" * "，IE7能识别星号" * "，但不能识别下划线"_"，而firefox两个都不能认识
    属性 hack

    2) IE6能识别*html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}。
    选择符级Hack

    3) IE条件注释是微软从IE5开始就提供的一种非标准逻辑语句。比如针对所有IE：<!–[if IE]><!–您的代码–><![endif]–>，针对IE6及以下版本：<!–[if lt IE 7]><!–您的代码–><![endif]–>，这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都 会生效。
    IE条件注释Hack

2.
