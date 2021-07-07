# 安装
官网下载

# 使用
路径：C:\Users\Administrator\.ssh下 配置主机名和地址
1)git config --global user.name "Your Name"
2)git config --global user.email "email@example.com"

默认模式 本地Git仓库和GitHub仓库之间的传输是通过SSH加密
3.0)在C:\Users\admin目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。
# 如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：
3.1)$ ssh-keygen -t rsa -C "youremail@example.com"

# id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人

# 第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面：=

4)点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容：

# 命令
# 方式1
git init
<!-- 1)初始化 -->
git remote add origin git@github.com:userName/gitAddress.git/.*/
<!-- 2)添加远程仓库 origin这个远程仓库的名字 FindIndex用户名  learn-git仓库名 -->

# 方式2
git remote add origin git@github.com:userName/gitAddress.git/.*/
<!-- 1) 克隆远程仓库 -->

#　其他命令
git remote remove <name>
<!-- 删除远程仓库配置 -->
git remote -v
<!-- 查看远程仓库配置 -->
git add/rm <file>
<!-- 添加(删除)文件到缓冲区 -->
git commit <file> -m '备注信息'
<!-- 提交更改到本地版本库 -->
git push origin master [-u]
<!-- 推送到远程仓库master分支(-u参数,会把本地的master分支和远程的master分支关联起来) -->
git pull origin master
<!-- 拉取远程仓库master分支 -->
git rm -r --cached file_name
<!-- 删除远程的文件 -->
git --version                       
<!-- 命令提示 -->

# 分支管理
git branch <name> [-d] 
<!-- 创建/查看/删除分支(-d参数表示删除分支 ) -->
git checkout <name> [-b]             
<!-- 然后切换到分支(-b参数表示创建并切换) -->
git switch <name> [-c]            
<!-- 然后切换到分支(-c参数表示创建并切换)  -->
git merge <name>                   
<!-- 合并某分支到当前分支  -->
git status                          
<!-- 查看仓库状态 -->
git diff                            
<!-- 文件版本对比 -->
git checkout -- <file>.             
<!-- 放弃更改回退到工作区或暂存区, 取决于文件是否暂存("--"是必须的) -->

# 时光穿梭
git reset --hard HEAD^              
<!-- 历史版本回退（前进）(无参数参是将咱暂存区和HEAD的提交保持一致, 数是将工作区、暂存取和HEAD保持一致) -->
git reflog                          
<!-- 查看所有操作记录 -->
git log --pretty=oneline            
<!-- 命令查看版本记录(参数表示行内显示) -->
git restore <file>... 
<!-- 撤销工作区修改 用暂存区替换工作区 -->
git restore --staged <file>...
<!-- 撤销暂存区修改 工作区不变 -->


# 标签
git tag <name>                      
<!-- 可以打一个新标签 -->
git tag                             
<!-- 查看所有标签 -->
git tag v0.9 f52c633                
<!-- 补打标签(f52c633为commit版本号) -->
git show <tagname>                  
<!-- 查看标签信息 -->
git tag -a <tagname> -m "blablabla..."  
<!-- 可以指定标签信息 -->
git push origin <tagname>           
<!-- 可以推送一个本地标签 -->
git push origin --tags              
<!-- 可以推送全部未推送过的本地标签 -->
git tag -d <tagname>                
<!-- 可以删除一个本地标签 -->
git push origin :refs/tags/<tagname>
<!-- 可以删除一个远程标签 -->





