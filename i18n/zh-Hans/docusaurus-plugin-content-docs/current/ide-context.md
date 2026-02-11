---
slug: /tutorial/ide-context
title: IDE 上下文感知
sidebar_label: IDE 上下文
sidebar_position: 10
---

# IDE 上下文感知

Omx 可以与你的 IDE 集成，提供上下文感知的辅助。当连接时，Omx 会显示编辑器中当前活动的文件和选择内容。

## 要求

IDE 上下文功能需要安装 **OmniContext for VS Code** 扩展。可以通过以下命令安装：

```bash
omx --install-vscode-extension
```

## 工作原理

当你在 VS Code 中使用 OmniContext 扩展时，它会自动：

- 在后台启动本地 Omx 服务器
- 监控你在编辑器中的活动文件和文本选择
- 通过 MCP 暴露 IDE 工具，用于文件操作、诊断等
- 将文件上下文附加到你的消息中，以提供更相关的响应

## 连接状态

当 Omx 连接到你的 IDE 时，你会看到：

- 状态栏显示 IDE 名称
- 输入框旁边显示当前文件名和行号（例如：`@ file.ts:10-20`）
- 选择的内容自动包含在消息上下文中

## 可用的 IDE 工具

OmniContext 扩展提供以下 MCP 工具：

| 工具 | 说明 |
|------|------|
| `mcp_ide_visual_studio_code_openFile` | 在编辑器中打开文件 |
| `mcp_ide_visual_studio_code_openDiff` | 查看新旧内容的差异 |
| `mcp_ide_visual_studio_code_getDiagnostics` | 获取 VS Code 的错误和警告 |
| `mcp_ide_visual_studio_code_getOpenEditors` | 列出当前打开的编辑器标签页 |
| `mcp_ide_visual_studio_code_closeAllDiffTabs` | 关闭所有 diff 编辑器标签页 |
| `mcp_ide_visual_studio_code_getWorkspaceFolders` | 获取工作区文件夹路径 |

## 配置

IDE 上下文默认启用。你可以通过菜单（按 Escape 访问菜单）来开启或关闭此功能。

## 使用技巧

- 在提问之前在编辑器中选择代码，以获得特定上下文的答案
- 文件和行号显示帮助你跟踪正在引用的内容
- 使用 diff 工具在应用更改之前预览变更
- 诊断功能帮助自动识别代码中的错误
