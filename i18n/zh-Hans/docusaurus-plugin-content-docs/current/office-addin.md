---
slug: /tutorial/office-addin
title: Office 加载项
sidebar_label: Office 加载项
sidebar_position: 18
---

# Office 加载项

OmniContext Office 加载项可以把 OmniContext CLI 带进 Word、Excel 和 PowerPoint。

## 安装

桌面应用会帮你处理安装流程：

1. 打开桌面应用
2. 在“集成”区域里，点击 Office Add-in 旁边的“Install”按钮
3. 从桌面应用启动服务器
4. 打开 Word、Excel 或 PowerPoint，找到 OmniContext 面板

桌面应用会自动生成 Office 所需的证书，并用正确的 HTTPS 配置启动本地服务器。

## 使用方式

安装完成后，OmniContext 面板会出现在 Office 内部。你可以用它来：

- 在 Word 里起草和改写文档
- 在 Excel 里生成公式、预算和分析内容
- 在 PowerPoint 里整理和优化幻灯片

加载项连接的是你本地的 OmniContext CLI 实例，所以它和终端工作流共享同一套模型、会话和记忆。

## 卸载

如果要移除加载项，可以回到桌面应用里的“集成”区域，点击“Uninstall”按钮。

## 提示

- 大多数 Office 场景下，**General** 工作流通常最合适
- 桌面应用顶部的状态指示器会告诉你 Office 是否已安装并且可用
- 因为它复用的是同一个 OmniContext CLI 实例，项目记忆在合适的时候也会继续生效
