---
slug: /tutorial/office-addin
title: Office 加载项
sidebar_label: Office 加载项
sidebar_position: 16
---

# Office 加载项

OmniContext Office 加载项将 AI 助手带入 Word、Excel 和 PowerPoint。

## 安装

桌面应用会自动处理 Office 加载项的安装：

1. 打开桌面应用
2. 在**集成**区域，点击 Office Add-in 旁的**安装**按钮
3. 从桌面应用启动服务器
4. 打开 Excel、Word 或 PowerPoint —— OmniContext 面板会出现在侧边栏

桌面应用会自动生成 Office 所需的 TLS 证书，并以 HTTPS 模式启动服务器。

## 使用

安装完成后，侧边栏会出现 OmniContext 面板，你可以：

- **Excel** - 生成公式、创建预算、分析数据
- **Word** - 起草内容、格式化文档、总结文本
- **PowerPoint** - 设计幻灯片、创建演示文稿、添加内容

加载项与本地 omx 服务器通信，可以读取和修改当前文档内容。

## 卸载

在桌面应用的集成区域点击**卸载**即可移除加载项。

## 提示

- 使用 General 工作流预设可获得最佳 Office 体验
- 加载项与终端共享相同的模型和记忆
- 桌面应用中的状态指示器显示加载项是否已安装以及服务器是否正在运行
