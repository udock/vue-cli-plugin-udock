# vue-cli-plugin-udock

## 概述

vue-cli 3 插件，用于快速配置由 vue-cli 3 脚手架生成的项目

## 使用及安装

首先安装并使用 vue-cli 3 创建工程

```bash
# 全局安装 vue-cli v3 版本
npm i -g @vue/cli

# 使用 vue-cli v3 创建工程
vue create vue-project
```

安装插件并进行配置

```bash
# 进入项目目录
cd vue-project

# 安装本插件
npm i @udock/vue-cli-plugin-udock

# 初始化基础配置
vue invoke @udock/udock

# 可根据需要，安装配置插件
# * mock 模拟数据支持
# * auto router 路由自动生成支持
# * element ui 组件库支持
# * data share 兄弟组件间数据共享支持
# * data vuex vuex数据支持
```

> 注意:
> 启用 auto router 后，会生成示例文件，使用时请用 ``router/index.js`` 代替原有路由
> 如标准 vue cli 生成的项目中，需把 ``main.js`` 中的 ``import router from './router'`` 替换为 ``import router from './router/index'``，或删除原有的 ``router.js`` 后重启项目。
