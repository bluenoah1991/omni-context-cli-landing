---
slug: /tutorial/zed-editor
title: Zed 编辑器
sidebar_label: Zed 编辑器
sidebar_position: 20
---

# Zed 编辑器

Omx 通过 [Agent Client Protocol (ACP)](https://agentclientprotocol.com) 以外部代理的方式在 [Zed](https://zed.dev) 中工作。配置完成后，你可以直接在 Zed 的代理面板中与 Omx 对话——它能完整访问你的文件、运行命令，使用体验和在终端中一样。

## 前置条件

全局安装 Omx：

```bash
npm install -g omni-context-cli
```

确保你已经配置了至少一个模型。如果还没有，先在终端运行 `omx`，按照[快速开始](/)指南完成设置。

## 配置

打开 Zed 的设置文件。通过命令面板（Mac 上 `Cmd+Shift+P`，Linux 上 `Ctrl+Shift+P`）搜索 `zed: open settings` 即可打开。

在 `agent_servers` 下添加 Omx：

```json
{
  "agent_servers": {
    "Omx": {
      "type": "custom",
      "command": "omx",
      "args": ["--acp"]
    }
  }
}
```

如果你是在项目中本地安装而非全局安装，使用完整路径：

```json
{
  "agent_servers": {
    "Omx": {
      "type": "custom",
      "command": "npx",
      "args": ["omni-context-cli", "--acp"]
    }
  }
}
```

## 使用方法

1. 在 Zed 中打开代理面板（点击侧边栏的代理图标或使用命令面板）
2. 在面板顶部的代理下拉菜单中选择 **Omx**
3. 开始输入——Omx 会以完整的工具访问权限响应，和在终端中一样

Omx 会自动加载你的项目指令（`OMX.md`）和 MCP 配置，所以一切都和直接运行 `omx` 时一样。

## 工作流模式

Zed 会在代理面板中显示可用的工作流模式。你可以随时切换：

| 模式 | 说明 |
|------|------|
| Specialist | 使用专业子代理的代理模式 |
| Normal | 所有工具可用的直接模式 |
| Artist | 以图像生成为主的响应 |
| Explorer | 以网络搜索为主 |
| Assistant | 通用助手 |

## 切换模型

你配置的模型也会显示在 Zed 的代理面板中，无需离开编辑器即可切换。

## Slash 命令

所有 Omx 的 slash 命令都可以在 Zed 中使用。输入 `/compact` 压缩上下文，`/git-commit` 提交暂存的更改，等等。完整列表会显示在 Zed 的命令选择器中。

## 调试

如果遇到问题，通过命令面板打开 ACP 日志：

1. 按 `Cmd+Shift+P`（Mac）或 `Ctrl+Shift+P`（Linux）
2. 搜索 `dev: open acp logs`
3. 查看 Zed 和 Omx 之间的消息，排查错误

## 工作原理

当你在 Zed 中开始对话时，它会以子进程的方式启动 `omx --acp`。Omx 通过 stdio 使用 ACP 协议与 Zed 通信——以换行符分隔的 JSON 消息在两者之间来回传递。Zed 发送你的提示，Omx 运行工具并将响应流式返回，Zed 在代理面板中渲染所有内容。

这与 VS Code 扩展不同，VS Code 扩展是将 Omx 作为 HTTP 服务器运行并通过 MCP 连接。ACP 方式更简单——不需要服务器，不需要端口，只需要 stdin/stdout。
