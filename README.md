# shinetalk
[shinetalk.wang](http://shinetalk.wang)
## 使用方法
### 安装nodemon
* npm i nodemon -D
### 本地运行（两种方案）
* npm run local
* 点击VSCode左侧的【Run and Debug】->【Start Debugging】（依赖.vscode/launch.json的配置信息）
### 发布
#### 开发环境
* pm2 deploy dev
* [dev.shinetalk.wang](http://dev.shinetalk.wang)
#### 预发布环境
* pm2 deploy pre
* [pre.shinetalk.wang](http://pre.shinetalk.wang)
#### 线上环境
* pm2 deploy www
* [www.shinetalk.wang](http://www.shinetalk.wang)