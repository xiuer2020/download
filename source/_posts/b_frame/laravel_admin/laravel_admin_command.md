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


# erro 
Illuminate\Database\QueryException 
  SQLSTATE[HY000] [1045] Access denied for user 'root'@'localhost' (using password: NO)
  检测数据库.env的数据库连接

Illuminate\Database\QueryException 
  SQLSTATE[42S01]: Base table or view already exists: 1050 Table 'users' already exists
  初次安装user表已存在冲突

Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes的解决方式
AppServiceProvider.php文件并在 boot方法内: 
\Illuminate\Support\Facades\Schema::defaultStringLength(191);
