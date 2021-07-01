# 数据库

# 表
CREATE TABLE IF NOT EXISTS table_name (column_name column_type);
创建表
TRUNCATE TABLE 表名;
清空表
DROP TABLE 表名;
删除数据表
ALTER TABLE testalter_tbl  DROP i;
删除，添加或修改表字段
ALTER TABLE testalter_tbl MODIFY c CHAR(10);
修改字段类型及名称


# 数据
INSERT INTO table_name ( field1, field2,...fieldN ) VALUES ( value1, value2,...valueN );
新增数据

UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]
修改数据

DELETE FROM table_name [WHERE Clause]
删除数据

# 查询
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[LIMIT N][ OFFSET M]
查询并设置记录数和偏移量限制

SELECT name FROM person_tbl WHERE name REGEXP '^st';
使用正则

# 排序
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[LIMIT N][ OFFSET M]
ORDER BY field1 [ASC [DESC]

ORDER BY CONVERT(field_name USING gbk);
按中文排序

# like
'%a'     //以a结尾的数据
'a%'     //以a开头的数据
'%a%'    //含有a的数据
'_a_'    //三位且中间字母是a的
'_a'     //两位且结尾字母是a的
'a_'     //两位且开头字母是a的

# 分组
SELECT column_name, function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name;

# UNION 操作符
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions]
UNION [ALL | DISTINCT]
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions];
用于连接两个以上的 SELECT 语句的结果组合到一个结果集合中

# 连接的使用
SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a INNER JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;
等值连接

SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a LEFT JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;
左连接

SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a RIGHT JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;
右连接



