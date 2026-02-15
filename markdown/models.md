---
slug: /tutorial/models
title: Model Management
sidebar_label: Model Management
sidebar_position: 12
---

# Model Management

Omx supports multiple LLM providers and allows you to configure, switch, and manage models easily.

## Supported Providers

Omx supports OpenAI, Anthropic, Gemini, and OpenAI Responses API formats. You can point it at any API that matches those formats.

Omx also includes provider shortcuts that pull model lists from a few services, shown below in "Quick Add with Model Providers".

## Quick Add with Model Providers

Omx includes built-in support for popular model providers. You can quickly add all models from a provider with a single command:

```bash
omx --list-providers
```

This shows all available providers:

| Provider | Models |
|----------|--------|
| **deepseek** | DeepSeek Chat, DeepSeek Reasoner |
| **minimax** | MiniMax M2.5 |
| **openrouter** | OpenRouter model list (OpenAI and Anthropic formats) |
| **zhipu** | GLM-5, GLM-4.6V, GLM-4.7-Flash, GLM-4.7-FlashX |
| **zenmux** | Zenmux model list (Anthropic, Responses, Gemini, OpenAI formats) |

To add all models from a provider:

```bash
omx --add-provider deepseek --api-key sk-...
```

To remove all models from a provider:

```bash
omx --remove-provider deepseek
```

## Adding a Model Manually

On first run, Omx prompts you to add a model. You can also add models later through the configuration menu.

### Required Fields

| Field | Description |
|-------|-------------|
| **Name** | Model identifier sent to the API (e.g., `gpt-4o`, `claude-sonnet-4-20250514`, `gemini-2.0-flash-exp`) |
| **Nickname** | Display name in Omx UI |
| **Provider** | `openai`, `anthropic`, `gemini`, or `responses` |
| **API Key** | Your API key |
| **API URL** | Base URL for the API (Omx fills in the full endpoint, except Gemini) |
| **Context Size** | Maximum context window in thousands of tokens |

### Example Configurations

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

#### Ollama (Local)

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

#### Zenmux Auto-Routing

```
Name: zenmux/auto
Nickname: Zenmux Auto
Provider: openai
API Key: your-zenmux-key
API URL: https://zenmux.ai/api/v1
Context Size: 200
```

Create `~/.omx/zenmux.json` to configure routing rules. Omx merges `model_routing_config` into requests for `zenmux/auto`.

## Model Settings

Omx lets you set a default model and an agent model from the menu.

### Default Model

The model used when starting a new session. Set via configuration menu or by selecting when multiple models exist.

### Agent Model

A secondary model used for background tasks: sub-agents, web search, and git commit generation. Useful for:

- Using a faster/cheaper model for background work
- Keeping main conversation on one model while background tasks use another

If not set, the default model is used.

## Switching Models

### During a Session

Use the `/model` command to switch models mid-conversation:

```
/model
```

This shows a list of configured models. Select one to switch. Switching between different API types resets the session.


## Managing Models

### Edit a Model

You can add, remove, or change models from the menu. Editing an existing model is not currently supported.

### Delete a Model

Remove models through the configuration menu. If you delete the default model, you'll be prompted to select a new default.


## Troubleshooting

### Connection Errors

Verify the API URL is correct. Omx will append the provider-specific path automatically:
- OpenAI base URL: `https://api.openai.com/v1`
- Anthropic base URL: `https://api.anthropic.com`
- Google Gemini base URL: `https://generativelanguage.googleapis.com/v1beta`
- OpenAI Responses base URL: `https://api.openai.com/v1`
- Local base URL: `http://localhost:PORT/v1`

### Authentication Errors

Check that your API key is valid and has the necessary permissions.

