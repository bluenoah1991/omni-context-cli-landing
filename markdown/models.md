---
slug: /tutorial/models
title: Model Management
sidebar_label: Model Management
sidebar_position: 8
---

# Model Management

OmniContext CLI supports multiple model providers and talks to each protocol natively.

## Supported Protocols

| Protocol | Description |
|----------|-------------|
| **Anthropic** | Messages API with prompt caching, extended thinking, and streaming |
| **OpenAI** | Chat Completions API for OpenAI-compatible endpoints |
| **Gemini** | Native Gemini `generateContent` API with streaming and function calling |
| **Responses API** | OpenAI Responses API with built-in tool orchestration |

## Quick Add with Providers

You can import an entire provider in one shot:

```bash
omx --list-providers
omx --add-provider zenmux --api-key zmx-...
omx --remove-provider zenmux
```

Built-in provider presets:

| Provider ID | What It Adds |
|-------------|--------------|
| **zenmux** | Anthropic, Responses, Gemini, and OpenAI-format models available through Zenmux |
| **deepseek** | DeepSeek Chat and DeepSeek Reasoner |
| **moonshot** | Kimi for Coding in Anthropic and OpenAI-compatible formats |
| **openrouter** | OpenRouter models in Anthropic and OpenAI-compatible formats |
| **zhipu** | GLM-5.1, GLM-5, and GLM-5-Turbo |
| **minimax** | MiniMax-M2.7 and MiniMax-M2.7-Highspeed |

Depending on the provider, OmniContext CLI may add multiple variants for the same model, such as protocol-specific or longer-context options.

## Adding a Model Manually

You can also add models through the menu:

1. Press `Escape`
2. Choose **Manage your model list**
3. Choose **Add a new model**

### Required Fields

| Field | Description |
|-------|-------------|
| **Name** | Model identifier sent to the API |
| **Nickname** | Friendly name shown in the UI |
| **Provider** | `openai`, `anthropic`, `gemini`, or `responses` |
| **API Key** | The key for that endpoint |
| **API URL** | Base API URL or protocol endpoint |
| **Context Size** | Maximum context window in thousands of tokens |

OmniContext CLI normalizes common provider URLs for you, so entering the base API URL is usually enough.

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

#### OpenAI-Compatible

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

**Default model** is what OmniContext CLI uses when a new session starts.

**Agent model** is the secondary model used for built-in agent tools, web search, and `/git-commit` generation. If you don't set one, OmniContext CLI falls back to the default model.

A common pattern is to pair:

- a stronger reasoning model as the default model
- a faster, cheaper model as the agent model

## Switching Models

Use `/model` during a session to switch models. If you switch between different protocol families, OmniContext CLI starts a fresh session for safety.
