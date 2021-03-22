一个本地储存操作js库，他真的很小，压缩版的甚至<2kb,你可以用类似api的方式来对本地存储进行操作。

<!-- 安装 -->
bower install lockr
cnpm i lockr --save
```<script src="/path/lockr.js" type="text/javascript"></script>```

<!-- API 介绍 -->
Lockr.prefix = value 
# 设置一个字符串用于标记相关的值
Lockr.set(key, value); 
<!-- 给本地储存写入值 -->
Lockr.get(key)
<!-- 读取本地储存的值，如果获取到的数值为null/undefined ?则返回设置的默认值 -->
Lockr.rm(key);
<!-- 从本地储存中移除相关数据 -->
Lockr.sadd(key, value)
<!-- 给hash key添加指定值（持续添加类似push 但具备set 自动过滤重复） -->
Lockr.sismember(key, value)
<!-- 判断某hash key 是否包含某个值 ?返回Boolean true false -->
Lockr.smembers(key)
<!-- 返回hash key下的值 -->
Lockr.srem(key, value)
<!-- 移除hash key下的指定数值 -->
Lockr.getAll()
<!-- 获取所有数据生成多维数组 (-true参数，生成json数据) -->
Lockr.flush()
<!-- 清空本地储存所有数据 -->