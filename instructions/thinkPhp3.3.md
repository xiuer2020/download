# 下载3.2框架后，解压缩到web目录下面，可以看到初始的目录结构如下：
  www  [WEB部署目录]（或者子目录）
  ├─index.php       入口文件
  ├─README.md       README文件
  ├─Application     应用目录
  ├─Public          资源文件目录
  └─ThinkPHP        框架目录
  
 # 其中框架目录ThinkPHP的结构如下：
   ├─ThinkPHP [框架系统目录]（可以部署在非web目录下面）
   │  ├─Common       核心公共函数目录
   │  ├─Conf         核心配置目录 
   │  ├─Lang         核心语言包目录
   │  ├─Library      框架类库目录
   │  │  ├─Think     核心Think类库包目录
   │  │  ├─Behavior  行为类库目录
   │  │  ├─Org       Org类库包目录
   │  │  ├─Vendor    第三方类库目录
   │  │  ├─ ...      更多类库目录
   │  ├─Mode         框架应用模式目录
   │  ├─Tpl          系统模板目录
   │  ├─LICENSE.txt  框架授权协议文件
   │  ├─logo.png     框架LOGO文件
   │  ├─README.txt   框架README文件
   │  └─ThinkPHP.php    框架入口文件
  
# 入口文件
[1]ThinkPHP采用单一入口模式进行项目[部署]和[访问]
[2]入口文件主要完成：   
   定义框架路径、项目路径（可选）
   定义调试模式和应用模式（可选）
   定义系统相关常量（可选）
   载入框架入口文件（必须）
[3]  
  
# Application目录下面，已经自动生成了公共模块Common、默认的Home模块和Runtime运行时目录的目录结构：
  Application
  ├─Common         应用公共模块
  │  ├─Common      应用公共函数目录
  │  └─Conf        应用公共配置文件目录
  ├─Home           默认生成的Home模块
  │  ├─Conf        模块配置文件目录
  │  ├─Common      模块函数公共目录
  │  ├─Controller  模块控制器目录
  │  ├─Model       模块模型目录
  │  └─View        模块视图文件目录
  ├─Runtime        运行时目录
  │  ├─Cache       模版缓存目录
  │  ├─Data        数据目录
  │  ├─Logs        日志目录
  │  └─Temp        缓存目录

#　常量	描述
  THINK_PATH	框架目录
  APP_PATH	应用目录
  RUNTIME_PATH	应用运行时目录（可写）
  APP_DEBUG	应用调试模式 （默认为false）
  STORAGE_TYPE	存储类型（默认为File）
  APP_MODE	应用模式（默认为common）
  
#　自动生成    
[1]在自动生成目录结构的同时，在[各个目录]下面我们还看到了[index.html]文件，这是ThinkPHP自动生成的目录安全文件。为了避免某些服务器开启了[目录浏览]权限后可以直接在浏览器输入URL地址查看目录，系统默认开启了目录安全文件机制，会在自动生成目录的时候生成空白的index.html文件
  
#　新版采用模块化的设计架构，下面是一个应用目录下面的模块目录结构，每个模块可以方便的卸载和部署，并且支持公共模块。
  Application      默认应用目录（可以设置）
  ├─Common         公共模块（不能直接访问）
  ├─Home           前台模块
  ├─Admin          后台模块
  ├─...            其他更多模块
  ├─Runtime        默认运行时目录（可以设置）
  
# 每个模块是相对独立的，其目录结构如下：
  ├─Module         模块目录
  │  ├─Conf        配置文件目录
  │  ├─Common      公共函数目录
  │  ├─Controller  控制器目录
  │  ├─Model       模型目录
  │  ├─Logic       逻辑目录（可选）
  │  ├─Service     Service目录（可选）
  │  ... 更多分层目录可选
  │  └─View        视图目录
  
# 控制器
[1]我们可以在自动生成的[Application/Home/Controller]目录下面找到一个 [IndexController.class.php] 文件，这就是默认的Index控制器文件。
[2]控制器类的命名方式是：控制器名（[驼峰法，首字母大写]）+Controller
[3]控制器文件的命名方式是：类名+class.php（[类文件后缀]）
[4]默认的[欢迎页面]其实就是访问的[Home]模块下面的Index控制器类的index操作方法 我们修改默认的index操作方法如下：
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        echo 'hello,world!';
    }
} 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  