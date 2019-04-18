# kayui-vue

> 基于vue2.x layui 风格的组件库

> 你不愿意种花，你说，我不愿看见它一点点凋落。是的，为了避免结束，你避免了一切开始。 --顾城

# GIt规范
| Type  | Why|
| ---------- | -----------|
| feat   | 新功能   |
| fix    | 修补bug   |
| docs   | 文档修改    |
| style   | 不影响代码含义的修改(例如：white-space; 格式化等)   |
| refactor  | 重构   |
| perf   | 提升性能的修改    |
| test   | 增加或修改测试   |
| chore   | 构建流程或辅助工具的变动   |

## 文档管理
Vuepress

# CSS约束
采用BEM  

# 工程目录结构
```
├── examples
│   ├── App.vue
│   ├── assets
│   ├── components
│   ├── docs
│   ├── main.js
│   ├── router.js
│   ├── store.js
│   └── views
├── packages
│   ├── alert
│   ├── blockquote
│   ├── button
│   ├── fieldset
│   ├── form
│   ├── grid
│   ├── input
│   ├── layout
│   ├── row
│   └── tests
├── public
├── src
│   ├── directives
│   ├── mixins
│   ├── styles
│   │   ├── README.MD
│   │   ├── animation
│   │   ├── common
│   │   ├── components
│   │   ├── custom.less
│   │   ├── index.less
│   │   ├── mixins
│   │   └── themes
│   ├── utils
│   └── index.js
├── tests
│   ├── e2e
│   └── unit
├── vue.config.js
├── postcss.config.js
├── package-lock.json
├── package.json
├── babel.config.js
└── README.md
```

## 目标
基础组件
- [ ] 布局
- [ ] 颜色设计
- [ ] 动画
- [x] 图标
- [x] 按钮
- [ ] 表单
- [ ] 导航
- [ ] 选项卡
- [ ] 进度条
- [ ] 徽章
- [ ] 时间轴
- [x] 辅助: 引用
- [ ] 辅助: 字段集
- [x] 辅助: 横线
## 风格