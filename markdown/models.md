---
slug: /tutorial/models
title: Model Management
sidebar_label: Model Management
sidebar_position: 9
---

# Model Management

Omx supports multiple LLM providers and allows you to configure, switch, and manage models easily.

## Supported Providers

### OpenAI-Compatible APIs

Any API following the OpenAI chat completions format:

- OpenAI (GPT-4, GPT-4o, etc.)
- Azure OpenAI
- Ollama
- LM Studio
- vLLM
- Together AI
- Groq
- And many more...

### Anthropic-Compatible APIs

APIs following the Anthropic messages format:

- Anthropic (Claude 3, Claude 3.5, Claude 4, etc.)
- AWS Bedrock (via Anthropic format)

## Adding a Model

On first run, Omx prompts you to add a model. You can also add models later through the configuration menu.

### Required Fields

| Field | Description |
|-------|-------------|
| **Name** | Model identifier sent to the API (e.g., `gpt-4o`, `claude-sonnet-4-20250514`) |
| **Nickname** | Display name in Omx UI |
| **Provider** | `openai` or `anthropic` |
| **API Key** | Your API key |
| **API URL** | Base URL for the API |
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

## Model Settings

### Default Model

The model used when starting a new session. Set via configuration menu or by selecting when multiple models exist.

### Agent Model

A separate model specifically for SubAgent operations. Useful for:

- Using a faster/cheaper model for agents
- Using a more capable model for complex agent tasks
- Keeping main conversation on one model while agents use another

If not set, agents use the default model.

## Switching Models

### During a Session

Use the `/model` command to switch models mid-conversation:

```
/model
```

This shows a list of configured models. Select one to switch.

### Automatic Context Handling

When switching models:
- Switching between models with the same API type preserves conversation history
- Switching to a model with a different API type resets the session
- Token counts reset for the new model&#x27;s context window


## Managing Models

### Edit a Model

Access the configuration menu and select the model to edit. You can update any field.

### Delete a Model

Remove models through the configuration menu. If you delete the default model, you&#x27;ll be prompted to select a new default.


## Troubleshooting

### Connection Errors

Verify the API URL is correct:
- OpenAI: `https://api.openai.com/v1`
- Anthropic: `https://api.anthropic.com`
- Local: `http://localhost:PORT/v1`

### Authentication Errors

Check that your API key is valid and has the necessary permissions.

