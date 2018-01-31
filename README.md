# vue-node-mysql

> A Vue.js project

##Build Setup
### 本地测试环境：  
#### 第一步：找到config文件里面的mysql.json文件，把里面的数据库配置改成自己的信息.  
#### 第二步：npm install 把项目依赖安装.  
#### 第三步：npm run sqlInit 初始化数据表.  
#### 第四步：npm run dev 打开一个终端，运行项目.  
#### 第五步：npm run api 另外打开一个终端，运行node API.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

##### 技术栈
前端：  
> [vue]

> [vue-router]

> [axios]  

> [webpack]

> [es6-babel]

> [less]
  
> [nodeJs]

> [express]

> [mysql] 

### 目录结构
<pre>
.
├── README.md       
├── api                      // 后台api项目
│	├── images               // 保存上传图片
│   ├── connect.js           // 连接数据库模块
│   ├── dbInit               // 初始化数据库模块
│	└── index.js             // api主要入口模块
├── config                   // 数据库配置文件
├── dist                     // vue项目打包文件
├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── assets               // css js 和图片资源
│   ├── components           // 各种组件
│   ├── views                // 各种页面
│   ├── router.js            // 路由配置
│   └── app.vue              // 根组件
│   └── main.js              // Webpack 预编译入口         
├── index.html               // 项目入口文件
├── .babelrc                 // es6转换
├── webpack.config.js        //webpack配置文件
├── .gitignore               //git忽略文件
</pre>

