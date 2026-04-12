---
slug: /tutorial/ide-context
title: VS Code 扩展
sidebar_label: VS Code 扩展
sidebar_position: 13
---

# VS Code 扩展

OmniContext VS Code 扩展会把你的编辑器连接到 OmniContext CLI，让助手看到和你当前一样的文件、选区和诊断信息。

## 安装

直接通过 OmniContext CLI 安装内置扩展：

```bash
omx --install-vscode-extension
```

## 工作方式

当你在偏好设置里启用 **IDE context** 之后，OmniContext CLI 就可以接收：

- 当前活动文件
- 当前选区
- VS Code 给出的诊断信息

这些上下文会自动附加到对话里，这意味着你更少需要复制粘贴，也更少需要反复解释“我们现在说的是哪个文件”。

## MCP 工具

这个扩展会暴露一些 OmniContext CLI 可以调用的 MCP 工具：

| 工具 | 描述 |
|------|------|
| **Mcp_ide_visual_studio_code_openFile** | 在 VS Code 中打开指定文件，并跳到某一行某一列 |
| **Mcp_ide_visual_studio_code_openDiff** | 展示新旧内容之间的 diff 视图 |
| **Mcp_ide_visual_studio_code_getDiagnostics** | 返回当前的错误和警告 |
| **Mcp_ide_visual_studio_code_getOpenEditors** | 列出已经打开的编辑器标签页 |
| **Mcp_ide_visual_studio_code_closeAllDiffTabs** | 关闭在 VS Code 中打开的 diff 标签页 |
| **Mcp_ide_visual_studio_code_getWorkspaceFolders** | 返回工作区文件夹 |

## 启用 IDE 上下文

你可以在偏好设置里开启它：

1. 按 `Escape`
2. 选择 **Change preferences**
3. 切换 **IDE context**
