---
slug: /tutorial/browser-extension
title: Chrome 扩展
sidebar_label: Chrome 扩展
sidebar_position: 17
---

# Chrome 扩展

OmniContext Chrome 扩展会在任意网页上加一个 AI 侧边栏，并把它连接到你正在运行的 OmniContext CLI 实例。

## 安装

1. 启动桌面应用，或者运行 `omx --serve`
2. 确认浏览器扩展目录已经在本地可用
3. 在 Chrome 中打开 `chrome://extensions`
4. 开启开发者模式
5. 点击“加载已解压的扩展程序”，然后选择浏览器扩展目录

桌面应用还会额外安装一个 **Browser** 工作流，它通常是侧边栏场景下最合适的默认工作流。

## 功能

- 读取当前页面的文本、HTML 或元数据
- 查看和切换浏览器标签页
- 读取书签和最近历史记录
- 截取当前活动标签页的截图
- 当高层工具不够用时，执行页面侧脚本
- 用自然语言自动化浏览器任务

## 安全限制

页面侧脚本能力是有意收紧的。

`ExecuteScript` 不能访问下面这些敏感浏览器数据 API：

- `document.cookie`
- `cookieStore`
- `localStorage`
- `sessionStorage`
- `indexedDB`
- `caches`

这样 Browser 工作流既能继续做页面理解和自动化，又不会变成读取 cookie 或浏览器存储的通道。

## 使用方式

通过扩展图标打开侧边栏，然后一边浏览网页一边和 OmniContext CLI 对话。这个侧边栏本来就是围绕 **Browser** 工作流设计的，所以页面和标签页相关工具打开后就能直接用。

## 连接方式

这个扩展会连接到本地的 OmniContext CLI 服务器，默认地址是 `http://localhost:5281`。在打开侧边栏之前，请先确认 OmniContext CLI 已经以 serve 模式运行。
