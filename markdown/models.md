---
slug: /tutorial/models
title: Model Management
sidebar_label: Model Management
sidebar_position: 8
---

# Model Management

omx supports multiple LLM providers with native protocol support for each.

## Supported Protocols

| Protocol | Description |
|----------|-------------|
| **Anthropic** | Messages API with prompt caching, extended thinking, and streaming |
| **OpenAI** | Chat Completions API, compatible with any OpenAI-format endpoint |
| **Gemini** | Native generateContent API with streaming and function calling |
| **Responses API** | OpenAI's Responses API with built-in tool orchestration |

## Quick Add with Providers

Add all models from a provider in one command:

```bash
omx --list-providers
omx --add-provider deepseek --api-key sk-...
omx --remove-provider deepseek
```

Built-in providers:

| Provider | Models |
|----------|--------|
| **zenmux** | Zenmux model list (Anthropic, Responses, Gemini, OpenAI formats) |
| **deepseek** | DeepSeek Chat, DeepSeek Reasoner |
| **moonshot** | Kimi for Coding: Kimi-2.5 (Anthropic and OpenAI formats) |
| **openrouter** | OpenRouter model list (OpenAI and Anthropic formats) |
| **zhipu** | GLM-5.1, GLM-5, GLM-5-Turbo |
| **minimax** | MiniMax-M2.7, MiniMax-M2.7-Highspeed |

## Adding a Model Manually

You can also add models through the menu:

1. Press `Escape` to open the menu
2. Select **Manage your model list**
3. Select **Add a new model**

### Required Fields

| Field | Description |
|-------|-------------|
| **Name** | Model identifier sent to the API (e.g. `gpt-4o`, `claude-sonnet-4-20250514`) |
| **Nickname** | Display name in omx UI |
| **Provider** | `openai`, `anthropic`, `gemini`, or `responses` |
| **API Key** | Your API key |
| **API URL** | Base URL for the API |
| **Context Size** | Maximum context window in thousands of tokens |

### Example Configurations

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

#### Ollama (Local)

```
Name: qwen2.5-coder:32b
Nickname: Qwen Coder
Provider: openai
API Key: ollama
API URL: http://localhost:11434/v1
Context Size: 32
```

## Default Model and Agent Model

**Default Model** - The model used when starting a new session. Set via the configuration menu.

**Agent Model** - A secondary model used for agent tools (Agent_Explore, Agent_Glance, Agent_Search), web search, and git commit generation. Using a faster, cheaper model here keeps costs down while your main model focuses on reasoning.

If no agent model is set, the default model handles everything.

## Switching Models

Use `/model` during a session to switch models. Switching between different API types resets the session.
