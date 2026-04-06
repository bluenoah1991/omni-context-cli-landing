---
slug: /tutorial/browser-extension
title: Chrome 扩展
sidebar_label: Chrome 扩展
sidebar_position: 15
---

# Chrome 扩展

OmniContext Chrome 扩展在任何网页上添加 AI 侧边栏，连接到你正在运行的 omx 实例。

## 安装

1. 启动桌面应用或运行 `omx --serve`
2. 在桌面应用中，点击浏览器扩展下方的**打开文件夹**按钮定位扩展文件
3. 在 Chrome 中，访问 `chrome://extensions`，启用开发者模式，点击**加载已解压的扩展程序**
4. 选择浏览器扩展文件夹

扩展会自动连接到本地 omx 服务器。

## 功能

- **页面上下文** - 扩展可以读取当前页面内容
- **摘要** - 总结文章、文档或任何网页
- **数据提取** - 从网页中提取结构化数据
- **浏览器自动化** - 通过自然语言自动化浏览器任务

## 使用

点击扩展图标打开侧边栏面板。你可以在浏览网页的同时与 omx 对话——它可以访问当前页面内容并与浏览器交互。

## 连接

扩展连接到你的 omx 服务器（默认：`http://localhost:5281`）。使用扩展前请确保 omx 正在 serve 模式下运行。
