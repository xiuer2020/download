# 使用
[1]http://127.0.0.1:8888/vqsvdudf
打开宝塔的登录页

[1]伪静态
location / {
	if (!-e $request_filename){
		rewrite  ^(.*)$  /index.php?s=$1  last;   break;
	}
}
[2]