index.js
    1   设置基本路径, global表示全局对象，全局属性可以省略global
    2   导入配置
    3   连接mysql数据库, 使用全局属性保存连接实例，以便后续创建数据模型(数据库结构)
    3   导入所有模型
    4   导入express
    5   导入body-parser模块
    6   导入白名单
    7   导入路由
    8   创建express实例
    9   设置静态目录
    10  设置解析post请求体
    11  将请求题解析为json格式
    12  设置 允许跨域地址 服务器支持的所有头信息字段 服务器支持的所有跨域请求的方法 是否允许发送Cookie
    13  验证跨域地址是否在白名单
    14  加载路由

db/model/表.js
    1 继承Sequelize模块Model构造函数,即Sequelize.Model;
    2 使用init方法创建数据表 
        参数1:　字段对象　
            字段属性：数据类型 是否为空 主键 自动递增 默认值 描述
        参数2: 配置对象
            属性: modelName, timestamps, paranoid, underscored, freezeTableName, tableName, sequelize  
    3 使用sync方法配置是否删除原来的表
        参数1 对象
            对象属性: force 
    4 导出表

db/model/model.js
    1 导入各表整合为对象导出

router/router.js
    1 请求路径匹配
    2 导出匿名函数 参数1 express实例

router_controller/router_controller 
    1 导入操作数据库方法
    2 请求回应操作


路由
一个路由只能有一个返回值

==================

创建

==================

加密字符串  
    1 md5 加密值 crypto模块

==================

发送邮件
    1 配置 主机 端口 secure 身份验证
    2 发送邮件 sendMail方法 参数: from发邮件地址 to收邮件地址 subject邮件主题I text/html邮件内容

==================

将cookie转换成普通对象
    1 split方法 空对象
    2 遍历 新对象

==================

生成token
    1 jsonwebtoken模块 sign方法 data: 被签名字符串 salt: 加盐 expireIn: 过期时间

==================

解析token
    1 jsonwebtoken模块 verify方法 参数token字符串 加盐 回调函数(err, decoded)

==================

添加数据
    1 模型 create方法 参数: 创建的数据

==================

查询数据
    1 模型 findAll方法 参数: where条件 attributes字段 order排序 offset偏移 limit限制量

==================

更新数据
    1 模型 update方法 参数: 需要设置的数据 条件

==================

删除数据
    1 模型 destroy方法 参数: 条件

==================

查询数据表记录数
    1 模型 count方法 参数: 条件

==================

原始查询
    sequelize数据库实例 query方法 参数: 原始sql语句 sql语句预处理字段 type: sequelize.QueryTypes.SELECT

==================

验证码中间键
    1 白名单
    2 where: 有效性控制字段 req.body
    3 判断通过

==================

token中间键
    1 白名单
    2 获取token的缓存值
    3 解析token, 判断通过
    4 将userId传递给下一个中间件或者路由的req请求对象
==================

发送邮箱验证码
    1 给code表添加字段

==================

注册
    1 验证码中间键是否通过
    2 查询该邮箱是否被注册 Business表 主键
    3 Business表添加数据

==================

添加商品类型
    1 生成id 时间戳 标识
    1 添加数据
    2 返回数据至前端 res.send
==================

编辑商品类型
    1 编辑数据
    2 返回数据至前端 res.send

==================

获取商品类型数据
    1 查找数据
    2 返回数据至前端 res.send

==================

获取数据表的记录数
    1 查找数据记录数
    2 返回数据至前端 res.send

==================


    