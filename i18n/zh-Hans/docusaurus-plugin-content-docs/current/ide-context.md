---
slug: /tutorial/ide-context
title: IDE 上下文感知
sidebar_label: IDE 上下文
sidebar_position: 8
---

# IDE 上下文感知

Omx 可以与你的 IDE 集成，提供上下文感知的辅助。当连接时，Omx 会显示编辑器中当前活动的文件和选择内容。

## 要求

IDE 上下文功能需要安装并运行 Visual Studio Code 中的 **Claude Code for VS Code** 扩展。

## 工作原理

当你在 VS Code 中打开并运行 Claude Code 的工作区中启动 Omx 时，Omx 会自动：

- 连接到 IDE 并检测当前工作区
- 监控你在编辑器中的活动文件和文本选择
- 将文件上下文附加到你的消息中，以提供更相关的响应

## 连接状态

当 Omx 连接到你的 IDE 时，你会看到：

- 状态栏显示 IDE 名称
- 输入框旁边显示当前文件名和行号（例如：`⌘ file.ts:10-20`）
- 选择的内容自动包含在消息上下文中

## 配置

IDE 上下文默认启用。你可以通过菜单（按 Escape 访问菜单）来开启或关闭此功能。

## 使用技巧

- 在提问之前在编辑器中选择代码，以获得特定上下文的答案
- 文件和行号显示帮助你跟踪正在引用的内容
- 来自 Claude Code 的 IDE 工具会自动作为 MCP 工具可用

