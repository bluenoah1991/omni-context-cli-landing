---
slug: /tutorial/zed-editor
title: Zed 编辑器
sidebar_label: Zed 编辑器
sidebar_position: 17
---

# Zed 编辑器

omx 通过 Agent Client Protocol (ACP) 作为 Zed 的外部代理工作。

## 设置

在 Zed 设置（`~/.config/zed/settings.json`）中添加 omx：

```json
{
  "agent_servers": {
    "omx": {
      "command": "omx",
      "args": ["--acp"]
    }
  }
}
```

## 使用

打开 Zed 的 Agent 面板并选择 omx 作为代理。你可以获得完整的工具访问——omx 可以像在终端中一样读取、编辑和搜索你的项目。

## 工作原理

使用 `--acp` 启动时，omx 以 ACP 代理模式通过 stdio 运行，而不是启动 TUI。Zed 使用 Agent Client Protocol 与其通信，发送消息并接收工具调用和响应。
