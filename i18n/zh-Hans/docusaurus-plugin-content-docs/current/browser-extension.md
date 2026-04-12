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
2. 在桌面应用中点击浏览器扩展区域下方的 **Open Folder** 按钮
3. 在 Chrome 中打开 `chrome://extensions`
4. 开启开发者模式
5. 点击“加载已解压的扩展程序”，然后选择浏览器扩展目录

桌面应用还会额外安装一个 **Browser** 工作流，它通常是侧边栏场景下最合适的默认工作流。

## 功能

- 读取当前页面的文本、HTML 或元数据
- 查看和切换浏览器标签页
- 读取书签和最近历史记录
- 截取当前活动标签页的截图
- 用自然语言自动化浏览器任务

## 使用方式

通过扩展图标打开侧边栏，然后一边浏览网页一边和 OmniContext CLI 对话。通常建议直接使用 Browser 工作流，因为它已经为页面和标签页访问做好了配置。

## 连接方式

这个扩展会连接到本地的 OmniContext CLI 服务器，默认地址是 `http://localhost:5281`。在打开侧边栏之前，请先确认 OmniContext CLI 已经以 serve 模式运行。
