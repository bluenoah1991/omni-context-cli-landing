---
slug: /tutorial/ide-context
title: VS Code 扩展
sidebar_label: VS Code 扩展
sidebar_position: 10
---

# VS Code 扩展

OmniContext VS Code 扩展将编辑器连接到 omx，提供文件上下文、诊断信息和差异视图。

## 安装

直接从 omx 安装扩展：

```bash
omx --install-vscode-extension
```

## 工作原理

在偏好设置中启用 IDE 上下文后，omx 会接收编辑器状态信息：

- **活动文件** - 编辑器中当前打开的文件
- **选区** - 选中的文本
- **诊断信息** - VS Code 的错误和警告

这些上下文会自动包含在对话中，omx 知道你在看什么，无需复制粘贴。

## MCP 工具

VS Code 扩展提供 omx 可调用的 MCP 工具：

| 工具 | 描述 |
|------|------|
| **openFile** | 在 VS Code 中打开文件并定位到特定行和列 |
| **openDiff** | 显示比较新旧内容的差异视图 |
| **getDiagnostics** | 获取 VS Code 的错误和警告 |
| **getOpenEditors** | 列出当前打开的编辑器标签页 |
| **getWorkspaceFolders** | 获取 VS Code 工作区文件夹 |

## 启用 IDE 上下文

通过偏好设置菜单切换：

1. 按 `Escape` 打开菜单
2. 选择 **Change preferences**
3. 切换 **IDE context**
