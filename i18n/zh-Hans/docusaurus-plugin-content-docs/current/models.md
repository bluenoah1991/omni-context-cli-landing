---
slug: /tutorial/models
title: 模型管理
sidebar_label: 模型管理
sidebar_position: 12
---

# 模型管理

Omx 支持多个 LLM 提供商，允许你轻松配置、切换和管理模型。

## 支持的提供商

Omx 支持 OpenAI、Anthropic、Gemini 和 OpenAI Responses API 格式。你可以连接任何兼容这些格式的 API。

同时也提供少量内置提供商快捷方式，下面的“快速添加模型提供商”里有列表。

## 快速添加模型提供商

Omx 内置支持多个热门模型提供商。你可以通过一条命令快速添加提供商的所有模型：

```bash
omx --list-providers
```

这会显示所有可用的提供商：

| 提供商 | 模型 |
|----------|--------|
| **deepseek** | DeepSeek Chat, DeepSeek Reasoner |
| **minimax** | MiniMax M2.5 |
| **openrouter** | OpenRouter 模型列表（OpenAI/Anthropic 格式） |
| **zhipu** | GLM-5, GLM-4.6V, GLM-4.7-Flash, GLM-4.7-FlashX |
| **zenmux** | Zenmux 模型列表（Anthropic/Responses/Gemini/OpenAI 格式） |

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
| **Provider** | `openai`、`anthropic`、`gemini` 或 `responses` |
| **API Key** | 你的 API 密钥 |
| **API URL** | API 的基础 URL（Omx 会补全路径，Gemini 例外） |
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

#### OpenAI Responses API

```
Name: gpt-4o
Nickname: GPT-4o
Provider: responses
API Key: sk-...
API URL: https://api.openai.com/v1
Context Size: 128
```

#### Zenmux 自动路由

```
Name: zenmux/auto
Nickname: Zenmux Auto
Provider: openai
API Key: your-zenmux-key
API URL: https://zenmux.ai/api/v1
Context Size: 200
```

创建 `~/.omx/zenmux.json` 配置路由规则。Omx 会把 `model_routing_config` 合并到 `zenmux/auto` 请求中。

## 模型设置

Omx 允许你在菜单里设置默认模型和智能体模型。

### 默认模型

启动新会话时使用的模型，通过菜单设置。

### 智能体模型

用于后台任务的辅助模型，包括子智能体、网络搜索和 git 提交消息生成。未设置时使用默认模型。

## 切换模型

### 会话期间

使用 `/model` 命令在对话中切换模型：

```
/model
```

这会显示已配置模型的列表。选择一个进行切换。不同 API 类型之间切换会重置会话。


## 管理模型

### 编辑模型

可以在菜单中添加、删除或更换模型。目前不支持编辑已有模型。

### 删除模型

通过配置菜单删除模型。如果你删除了默认模型，会提示你选择新的默认模型。


## 故障排除

### 连接错误

确认 API URL 是否正确。Omx 会自动补全提供商路径：
- OpenAI 基础地址: `https://api.openai.com/v1`
- Anthropic 基础地址: `https://api.anthropic.com`
- Google Gemini 基础地址: `https://generativelanguage.googleapis.com/v1beta`
- OpenAI Responses 基础地址: `https://api.openai.com/v1`
- 本地基础地址: `http://localhost:PORT/v1`

### 认证错误

检查你的 API 密钥是否有效并具有必要的权限。

