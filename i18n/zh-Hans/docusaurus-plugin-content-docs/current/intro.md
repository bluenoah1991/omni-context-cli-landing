---
slug: /
title: 快速开始
sidebar_label: 快速开始
sidebar_position: 1
---

# 快速开始

Omx 是一个小巧、实用、零遥测的编程助手，在终端中运行。

## 安装

```bash
npm install -g omni-context-cli
```

## 快速入门

进入你的项目目录并运行：

```bash
omx
```

Omx 支持任何兼容 OpenAI 或 Anthropic 的 API。

### 添加第一个模型

首次运行时，你需要先添加一个模型才能开始对话：

1. 按 `Escape` 打开菜单
2. 选择 **Manage your model list**
3. 选择 **Add a new model**
4. 填写表单：
   - **API Type**: 选择 `Anthropic` 或 `OpenAI`
   - **Model Name**: 模型标识符（如 `claude-sonnet-4-20250514`、`gpt-4o`）
   - **API Key**: 你的 API 密钥
   - **API URL**: API 端点（如 `https://api.anthropic.com`、`https://api.openai.com/v1`）
   - **Context Size (K)**: 最大上下文窗口，以千为单位（如 `200` 表示 200K）
   - **Nickname**: 在界面中显示的友好名称

每个字段填写后按 `Enter` 确认，按 `Escape` 返回上一级。

## 命令行参数

| 参数 | 说明 |
|------|------|
| `-c, --continue` | 继续上一次会话 |
| `-d, --diagnostic` | 启用诊断模式，保存请求/响应的 JSON 数据 |
| `-a, --cost-analysis` | 记录 token 用量到 CSV 文件，用于成本分析 |
| `--list-providers` | 列出可用的模型提供商 |
| `--add-provider <id>` | 添加提供商的所有模型（需要 `--api-key`） |
| `--remove-provider <id>` | 移除提供商的所有模型 |
| `--api-key <key>` | 用于 `--add-provider` 的 API 密钥 |

示例：

```bash
# 开始新会话
omx

# 继续上次的对话
omx -c

# 调试 API 调用
omx --diagnostic

# 追踪 token 成本
omx --cost-analysis
```

## 文档

- [基本操作](./basic-usage) - 快捷键、命令和菜单选项
- [专家模式](./specialist-mode) - 高级智能体工具
- [MCP 配置](./mcp) - 通过 Model Context Protocol 连接外部工具
- [自定义 SubAgents](./subagents) - 创建自己的智能体
- [自定义 Slash 命令](./slash) - 添加自定义命令
- [自定义 Skills](./skills) - 可重用的指令集
- [Playbook (ACE)](./playbook) - 跨会话的持久记忆
- [模型管理](./models) - 配置多个 LLM 提供商
- [会话管理](./sessions) - 保存和恢复对话
