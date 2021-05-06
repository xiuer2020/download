# 局部安装
终端输入
[1]php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
[2]php composer-setup.php
[3]php -r "unlink('composer-setup.php');"
[4]当前目录会生成composer.phar文件

# 使用
在composer.phar文件的路径下使用命令

# 创建laravel项目
命令行输入
php composer.phar create-project laravel/laravel example-app

# 错误
[Symfony\Component\Process\Exception\RuntimeException] The Process 




