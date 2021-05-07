# 安装
[1]composer require encore/laravel-admin:1.*
配置依赖
[2]php artisan vendor:publish --provider="Encore\Admin\AdminServiceProvider"
发布资源
[3]php artisan admin:install
安装

# 快速开始
php artisan admin:make UserController --model=App\Models\User
创建模型对应的控制器