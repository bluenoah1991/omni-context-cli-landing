---
slug: /tutorial/models
title: 模型管理
sidebar_label: 模型管理
sidebar_position: 8
---

# 模型管理

OmniContext CLI 支持多个模型供应商，并且会以原生方式对接每一种协议。

## 支持的协议

| 协议 | 描述 |
|------|------|
| **Anthropic** | Messages API，支持提示词缓存、扩展思考和流式输出 |
| **OpenAI** | 面向 OpenAI 兼容端点的 Chat Completions API |
| **Gemini** | 原生 Gemini `generateContent` API，支持流式和函数调用 |
| **Responses API** | 内置工具编排能力的 OpenAI Responses API |

## 通过供应商快速导入

你可以一口气导入某个供应商下的全部模型：

```bash
omx --list-providers
omx --add-provider zenmux --api-key zmx-...
omx --remove-provider zenmux
```

内置供应商预设如下：

| 供应商 ID | 会添加什么 |
|-------------|-----------|
| **zenmux** | 通过 Zenmux 提供的 Anthropic、Responses、Gemini 和 OpenAI 格式模型 |
| **deepseek** | DeepSeek Chat 和 DeepSeek Reasoner |
| **moonshot** | 以 Anthropic 和 OpenAI 兼容格式提供的 Kimi for Coding |
| **openrouter** | OpenRouter 上的 Anthropic 和 OpenAI 兼容模型 |
| **zhipu** | GLM-5.1、GLM-5 和 GLM-5-Turbo |
| **minimax** | MiniMax-M2.7 和 MiniMax-M2.7-Highspeed |

根据不同供应商，OmniContext CLI 可能会为同一个模型导入多个变体，比如不同协议版本或更长上下文版本。

## 手动添加模型

你也可以通过菜单来添加模型：

1. 按 `Escape`
2. 选择 **Manage your model list**
3. 选择 **Add a new model**

### 必填字段

| 字段 | 描述 |
|------|------|
| **Name** | 发送给 API 的模型标识符 |
| **Nickname** | UI 中显示的友好名称 |
| **Provider** | `openai`、`anthropic`、`gemini` 或 `responses` |
| **API Key** | 对应端点使用的 key |
| **API URL** | API 基础地址或协议端点 |
| **Context Size** | 最大上下文窗口，单位是千 token |

OmniContext CLI 会自动规范常见供应商的 URL，所以大多数情况下填写基础 API 地址就够了。

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

#### OpenAI Compatible

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

#### Responses API

```
Name: gpt-4.1
Nickname: GPT-4.1 Responses
Provider: responses
API Key: sk-...
API URL: https://api.openai.com/v1
Context Size: 128
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

**默认模型** 是新会话启动时 OmniContext CLI 使用的模型。

**Agent 模型** 是给内置智能体工具、网页搜索和 `/git-commit` 生成使用的辅助模型。如果你没有单独设置，OmniContext CLI 会回退到默认模型。

常见搭配是：

- 默认模型用更强的推理模型
- agent model 用更快、更便宜的模型

## 切换模型

在会话里使用 `/model` 可以切换模型。如果切换到了不同的协议族，OmniContext CLI 会为了安全起见重新开始一个新会话。
