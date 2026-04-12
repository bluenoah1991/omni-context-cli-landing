---
slug: /tutorial/zed-editor
title: Zed 编辑器
sidebar_label: Zed 编辑器
sidebar_position: 19
---

# Zed 编辑器

OmniContext CLI 可以通过 ACP（Agent Client Protocol）在 Zed 中作为外部 agent 运行。

## 设置

把 OmniContext CLI 加进你的 Zed 配置文件：

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

## 使用方式

打开 Zed 的 agent 面板，然后把 `omx` 选成当前 agent。之后 OmniContext CLI 就可以使用和终端中相同的工具、工作流以及模型配置。

## 工作方式

当你用 `--acp` 启动 OmniContext CLI 时，它不会再进入终端 UI，而是通过 stdio 启动一个 ACP agent。Zed 会把消息发给这个 agent，再通过协议收回模型输出和工具调用结果。
