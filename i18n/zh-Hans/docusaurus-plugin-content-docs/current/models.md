---
slug: /tutorial/models
title: 模型管理
sidebar_label: 模型管理
sidebar_position: 8
---

# 模型管理

omx 支持多个 LLM 供应商，每种协议都有原生支持。

## 支持的协议

| 协议 | 描述 |
|------|------|
| **Anthropic** | Messages API，支持提示缓存、扩展思考和流式输出 |
| **OpenAI** | Chat Completions API，兼容任何 OpenAI 格式端点 |
| **Gemini** | 原生 generateContent API，支持流式和函数调用 |
| **Responses API** | OpenAI 的 Responses API，内置工具编排 |

## 快速添加供应商

一条命令添加供应商的所有模型：

```bash
omx --list-providers
omx --add-provider deepseek --api-key sk-...
omx --remove-provider deepseek
```

内置供应商：

| 供应商 | 模型 |
|--------|------|
| **zenmux** | Zenmux 模型列表（Anthropic、Responses、Gemini、OpenAI 格式） |
| **deepseek** | DeepSeek Chat、DeepSeek Reasoner |
| **moonshot** | Kimi for Coding: Kimi-2.5（Anthropic 和 OpenAI 格式） |
| **openrouter** | OpenRouter 模型列表（OpenAI 和 Anthropic 格式） |
| **zhipu** | GLM-5.1、GLM-5、GLM-5-Turbo |
| **minimax** | MiniMax-M2.7、MiniMax-M2.7-Highspeed |

## 手动添加模型

通过菜单添加模型：

1. 按 `Escape` 打开菜单
2. 选择 **Manage your model list**
3. 选择 **Add a new model**

### 必填字段

| 字段 | 描述 |
|------|------|
| **Name** | 发送给 API 的模型标识符（如 `gpt-4o`、`claude-sonnet-4-20250514`） |
| **Nickname** | omx UI 中的显示名称 |
| **Provider** | `openai`、`anthropic`、`gemini` 或 `responses` |
| **API Key** | 你的 API Key |
| **API URL** | API 基础 URL |
| **Context Size** | 最大上下文窗口，单位为千 Token |

### 配置示例

#### Anthropic

```
Name: claude-sonnet-4-20250514
Nickname: Claude Sonnet 4
Provider: anthropic
API Key: sk-ant-...
API URL: https://api.anthropic.com
Context Size: 200
```

#### OpenAI

```
Name: gpt-4o
Nickname: GPT-4o
Provider: openai
API Key: sk-...
API URL: https://api.openai.com/v1
Context Size: 128
```

#### Google Gemini

```
Name: gemini-2.5-flash
Nickname: Gemini 2.5 Flash
Provider: gemini
API Key: AIza...
API URL: https://generativelanguage.googleapis.com/v1beta
Context Size: 128
```

#### Kimi for Coding

```
Name: kimi-for-coding
Nickname: Kimi for Coding: Kimi-2.5
Provider: anthropic
API Key: your-kimi-key
API URL: https://api.kimi.com/coding/v1/messages
Context Size: 200
```

#### Ollama（本地）

```
Name: qwen2.5-coder:32b
Nickname: Qwen Coder
Provider: openai
API Key: ollama
API URL: http://localhost:11434/v1
Context Size: 32
```

## 默认模型和 Agent 模型

**默认模型** - 新建会话时使用的模型。通过配置菜单设置。

**Agent 模型** - 用于智能体工具（Agent_Explore、Agent_Glance、Agent_Search）、网络搜索和 Git 提交消息生成的辅助模型。使用更快、更便宜的模型可以降低成本，同时主模型专注于推理。

如果未设置 Agent 模型，默认模型处理一切。

## 切换模型

在会话中使用 `/model` 切换模型。在不同 API 类型之间切换会重置会话。
