# 快速入门
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
拉取composer安装文件
php composer-setup.php
局部安装composer
php -r "unlink('composer-setup.php');"
移除安装文件
php composer.phar create-project laravel/laravel example-app
通过composer安装laravel项目
php composer.phar install
安装composer依赖
php artisan migrate
数据迁移
php artisan serve
运行laravel项目服务器

# 入门套件
[1]composer require laravel/breeze --dev
安装breeze
[2]php artisan breeze:install
整合breeze资源
[3]npm install
安装依赖
[4]npm run dev
编译前端资源

# 加密
php artisan key:generate
生成.env文件下的APP_KEY属性

# 模型
php artisan make:model 模型名称
创建模型

# 控制器
php artisan make:controller 控制器名
创建控制器

# 中间件
php artisan make:middleware CheckAge
创建中间件

# 迁移
php artisan migrate
运行迁移文件


# 测试系列
php artisan make:model 模型名称
创建模型
php artisan make:seeder 填充器名称
生成填充器
composer dump-autoload
生成 Composer 的自动加载器
php artisan db:seed
运行填充器填充数据库

php artisan make:factory 模型工厂名称
创建模型工厂

定义在 database/factories/模型工厂名称.php 文件中的用户模型工厂下
definition 方法会返回伪造的模型属性值集合
$this->faker

