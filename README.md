# vue-cli3-typescript-pro
## 团队协作规约
### 变量命名规则：
小驼峰式命名法（Camel-Case）
* 在后缀为.ts文件或者.js文件中，变量命名以小驼峰式命名法（Camel-Case）如：homePageNews  //代表首页新闻
* 为了便于团队协作，变量名要求以有意义的单词，不可以中文拼音缩写如：hpg  //代表首页新闻
### 类名命名规则：
短横线命名（-）
* 当class或者ID包含多个单词时，应使用连字符（-）
* 采用英文字母、数字以及"-"和命名
* 以小写字母开头，不能以数字和“-”、“_”开头
* 同样，CSS中也不建议使用下划线连接的命名方式。


   前端技术栈
   
    {
    "vue-cli3":@3.8.2,
    "vue": "^2.6.10",
    "vue-router": "^3.0.3",
    "vuex": "^3.0.1",
    "axios": "^0.19.0",
    "typescript": "^3.4.3",
     
    }

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```
### 生成components 文件夹下的组件模板； ‘comName’ 是组件名称
    npm run comp comName
### 生成views 文件夹下的模块模板  'tempName'是生成模板的文件名称
    npm run temp  tempName
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

[github: Vue-TypeScript项目示例](https://github.com/GeekQiaQia/vueWithTSPro.git)
