<h1 align="center">Yang ChuRan👶</h1>

<p align="center">
	<a href="https://github.com/monkeyDyang/yangchuran"><img src="https://img.shields.io/github/watchers/monkeyDyang/yangchuran?style=social"></a>
  <a href="https://github.com/monkeyDyang/yangchuran"><img src="https://img.shields.io/github/forks/monkeyDyang/yangchuran?style=social"></a>
  <a href="https://github.com/monkeyDyang/yangchuran"><img src="https://img.shields.io/github/stars/monkeyDyang/yangchuran?style=social"></a>
	<a href="https://github.com/monkeyDyang/yangchuran"><img src="https://img.shields.io/github/last-commit/monkeyDyang/yangchuran?logo=github"></a>
</p>


# 🌵 目录结构

```
├── public
│   └── favicon.ico           # LOGO
├── src
│   ├── api                   # Api ajax 等
│   ├── assets                # 本地静态资源
│   ├── components            # 业务通用组件
│   ├── config                # 项目基础配置，包含路由，全局设置
│   ├── locales               # 国际化资源
│   ├── router                # Vue-Router
│   ├── utils                 # 工具库
│   ├── views                 # 业务页面入口和常用模板
│   ├── App.vue               # Vue 模板入口
│   └── main.ts               # Vue 入口 TS
├── index.html                # Vue 入口模板
├── tests                     # 测试工具
├── package.json              # Node.js 项目的配置文件
├── postcss.config.js         # CSS处理器PostCSS的配置文件
├── tailwind.config.js        # Tailwind CSS 的配置文件
├── tsconfig.json             # TypeScript的配置文件
├── vite.config.ts            # Vite的配置文件
└── README.md

```

# 📦 项目下载和运行

### 安装项目的依赖包

```sh
yarn install
```

### 开发环境下启动项目

```sh
yarn run dev
```

### 类型检查并且构建生产环境下的代码

```sh
yarn run build
```

### 预览模式启动应用程序，用于测试性能和可靠性

```sh
yarn run preview
```

### 在 JSDOM 环境中运行测试脚本 [Vitest](https://vitest.dev/)

```sh
yarn run test:unit
```

### 构建生产环境下的代码

```sh
yarn run build-only
```

### 类型检查工具

```sh
yarn run type-check
```

### 代码检查与自动修复 [ESLint](https://eslint.org/)

```sh
yarn run lint
```

# 🧩 VS Code 插件

- Vue Language Features (Volar)：Vue3 支持，高亮，语法检查
- Vue VSCode Snippets：Vue 代码模板
- Vue Peek：快速跳转到组件、模块定义的文件
- Vite：自动化构建、热更新
- ESLint：语法规则和代码风格的检查工具
- Prettier：代码格式化工具
- Code Spell Checker：拼写检查
- Code Translate：翻译
- Codeium：人工智能助手
