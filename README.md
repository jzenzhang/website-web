
[访问地址](http://www.jzen.top) 

### 个人网站（前端）
![123](https://img.shields.io/badge/react-16.8.6-blue.svg) ![](https://img.shields.io/badge/mobx-5.9.4-blue.svg) ![](https://img.shields.io/badge/z--formatter-1.3.3-blue.svg)


文件目录：（可能会有变动，以实际为准）
```js
├── LICENSE
├── README.md
├── build
├── config
├── package-lock.json
├── package.json
├── public
├── scripts
└── src
    ├── app.js // 入口文件
    ├── components // 组件
    ├── index.scss // 全局样式
    ├── layout // 页面布局
    ├── router.js // 路由入口
    ├── setupProxy.js // 反代配置
    ├── store // 全局状态store
    ├── styles //样式文件
    ├── utils // 工具,如fetch等
    └── view // 页面
```

- 采用[create-react-app](https://github.com/facebook/create-react-app)脚手架生成，后集成[mobx](https://github.com/mobxjs/mobx)作为公共状态管理，使用个人函数库[z-formatter](https://github.com/jzenzhang/z-formatter)作为方法库。
- 已实现jenkins持续集成（8081端口）。
- 个人的练手项目，填补自己的知识盲点。

已经实现的功能:
- [x] 登录
- [x] 注册
- [x] 全局Toast
- [x] 多人聊天室
