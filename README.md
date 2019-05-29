
[访问地址](http://106.14.225.234) 
*（域名备案还没有批下来，所以只能使用IP访问）*

### 个人网站（前端）
![123](https://img.shields.io/badge/react-16.8.6-blue.svg) ![](https://img.shields.io/badge/mobx-5.9.4-blue.svg) ![](https://img.shields.io/badge/z--formatter-1.3.3-blue.svg)


文件目录：（可能会有变动，以实际为准）
```js
├── LICENSE
├── README.md
├── config
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.png
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
└── src
    ├── assets
    ├── components
    │   ├── HomePage                        //bg组件
    │   │   ├── bg.js
    │   │   └── bg.scss
    │   └── login                           //登录组件
    │       ├── index.js
    │       ├── login.js
    │       └── login.scss
    ├── index.js
    ├── index.scss
    ├── router.js
    ├── setupProxy.js
    ├── store                               //公共状态管理
    │   ├── index.js
    │   └── moudles                         //公共状态管理模块
    │       └── login.js
    ├── styles
    │   ├── animate.scss
    │   ├── iconfont.scss
    │   └── ui                              // UI模块
    │       ├── base.scss
    │       ├── button
    │       │   └── button.scss
    │       ├── index.scss
    │       ├── input
    │       │   └── input.scss
    │       └── reset.scss
    ├── utils                                //方法库
    │   └── fetch.js
    └── view
        ├── about
        │   └── about.js
        ├── index.js
        └── index.scss
```

- 采用[create-react-app](https://github.com/facebook/create-react-app)脚手架生成，后集成[mobx](https://github.com/mobxjs/mobx)作为公共状态管理，使用自己的开源函数库[z-formatter](https://github.com/jzenzhang/z-formatter)作为方法库。
- 已实现jenkins持续集成。
- UI模块打算单独抽出来维护。（其实也没有意义）
- 后期实现SSR等功能。
- 因为是个人的练手项目，填补自己的知识盲点，所以感觉有点小题大做。
- 后端基于node的express框架搭建（[地址](https://github.com/jzenzhang/website-node)）

已经实现的功能:
- [x] 注册
- [x] 登录
- [ ] 个人页面
- [ ] markdown编辑器
- [ ] 权限管理
...更多功能畅想中
