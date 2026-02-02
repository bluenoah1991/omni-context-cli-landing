---
slug: /tutorial/models
title: 模型管理
sidebar_label: 模型管理
sidebar_position: 12
---

# 模型管理

Omx 支持多个 LLM 提供商，允许你轻松配置、切换和管理模型。

## 支持的提供商

### OpenAI 兼容 API

任何遵循 OpenAI chat completions 格式的 API：

- OpenAI (GPT-4, GPT-4o 等)
- xAI (Grok)
- Azure OpenAI
- Ollama
- LM Studio
- vLLM
- Together AI
- Groq
- 以及更多...

### Anthropic 兼容 API

遵循 Anthropic messages 格式的 API：

- Anthropic (Claude 3, Claude 3.5, Claude 4 等)
- AWS Bedrock（通过 Anthropic 格式）

### Google Gemini

Google 的 Gemini API，原生流式支持：

- Gemini 2.0 Flash
- Gemini 1.5 Pro
- Gemini 1.5 Flash

### Responses API

Anthropic 较新的 Responses API 格式，支持增强的 reasoning：

- 支持高级 reasoning 和 thought blocks
- 与标准 messages API 不同的流式格式

### Zenmux 自动路由

基于配置自动选择最佳模型的动态路由：

- 使用 `zenmux/auto` 作为模型名称
- 在 `~/.omx/zenmux.json` 中配置路由规则
- `model_routing_config` 会自动合并到请求中
- 可在保证质量的同时实现成本优化路由

示例 `zenmux.json`：

```json
{
  "model_routing_config": {
    "available_models": [
      "deepseek/deepseek-reasoner",
      "anthropic/claude-sonnet-4.5",
      "minimax/minimax-m2"
    ],
    "preference": "balanced"
  }
}
```

## 快速添加模型提供商

Omx 内置支持多个热门模型提供商。你可以通过一条命令快速添加提供商的所有模型：

```bash
omx --list-providers
```

这会显示所有可用的提供商：

| 提供商 | 模型 |
|----------|--------|
| **deepseek** | DeepSeek Chat, DeepSeek Reasoner |
| **minimax** | MiniMax M2.1 |
| **openrouter** | 来自多个提供商的模型 |
| **zhipu** | GLM-4.7, GLM-4.6V, GLM-4.7-Flash, GLM-4.7-FlashX |
| **zenmux** | 来自 Zenmux.ai 的动态模型列表 |

添加某个提供商的所有模型：

```bash
omx --add-provider deepseek --api-key sk-...
```

移除某个提供商的所有模型：

```bash
omx --remove-provider deepseek
```

## 手动添加模型

首次运行时，Omx 会提示你添加模型。你也可以稍后通过配置菜单添加模型。

### 必填字段

| 字段 | 描述 |
|-------|-------------|
| **Name** | 发送给 API 的模型标识符（如 `gpt-4o`、`claude-sonnet-4-20250514`、`gemini-2.0-flash-exp`） |
| **Nickname** | 在 Omx UI 中显示的名称 |
| **Provider** | `openai`、`anthropic`、`gemini`、`responses` 或 `zenmux` |
| **API Key** | 你的 API 密钥 |
| **API URL** | API 的基础 URL |
| **Context Size** | 最大上下文窗口（以千 token 为单位） |

### 示例配置

#### OpenAI

```
Name: gpt-4o
Nickname: GPT-4o
Provider: openai
API Key: sk-...
API URL: https://api.openai.com/v1
Context Size: 128
```

#### Anthropic

```
Name: claude-sonnet-4-20250514
Nickname: Claude Sonnet 4
Provider: anthropic
API Key: sk-ant-...
API URL: https://api.anthropic.com
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

#### Azure OpenAI

```
Name: my-gpt4-deployment
Nickname: Azure GPT-4
Provider: openai
API Key: your-azure-key
API URL: https://your-resource.openai.azure.com/openai/deployments/your-deployment
Context Size: 128
```

#### Google Gemini

```
Name: gemini-2.0-flash-exp
Nickname: Gemini 2.0 Flash
Provider: gemini
API Key: AIza...
API URL: https://generativelanguage.googleapis.com/v1beta
Context Size: 128
```

#### Responses API

```
Name: claude-sonnet-4-20250514
Nickname: Claude Sonnet 4
Provider: responses
API Key: sk-ant-...
API URL: https://api.anthropic.com
Context Size: 200
```

#### Zenmux 自动路由

```
Name: zenmux/auto
Nickname: Zenmux Auto
Provider: zenmux
API Key: your-zenmux-key
API URL: https://zenmux.ai/api/v1
Context Size: 200
```

详情请参阅 [Zenmux 自动路由](#zenmux-自动路由)。

## 模型设置

### 默认模型

启动新会话时使用的模型。通过配置菜单或在存在多个模型时选择来设置。

### 智能体模型

专门用于 SubAgent 操作的独立模型。适用于：

- 为智能体使用更快/更便宜的模型
- 为复杂智能体任务使用更强大的模型
- 主对话使用一个模型，智能体使用另一个

如果未设置，智能体使用默认模型。

## 切换模型

### 会话期间

使用 `/model` 命令在对话中切换模型：

```
/model
```

这会显示已配置模型的列表。选择一个进行切换。

### 上下文处理

切换模型时：
- 在相同 API 类型的模型之间切换会保留对话历史
- 切换到不同 API 类型的模型会重置会话
- Token 计数为新模型的上下文窗口重置



## 管理模型

### 编辑模型

访问配置菜单并选择要编辑的模型。你可以更新任何字段。

### 删除模型

通过配置菜单删除模型。如果你删除了默认模型，会提示你选择新的默认模型。


## 故障排除

### 连接错误

验证 API URL 是否正确：
- OpenAI: `https://api.openai.com/v1`
- Anthropic: `https://api.anthropic.com`
- Google Gemini: `https://generativelanguage.googleapis.com/v1beta`
- Responses API: `https://api.anthropic.com`
- 本地: `http://localhost:PORT/v1`

### 认证错误

检查你的 API 密钥是否有效并具有必要的权限。

