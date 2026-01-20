---
slug: /
title: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
---

# Getting Started

Omx is a small, helpful, zero-telemetry coding assistant that runs in your terminal.

## Installation

```bash
npm install -g omni-context-cli
```

## Quick Start

Navigate to your project directory and run:

```bash
omx
```

Omx supports any OpenAI-compatible or Anthropic-compatible API.

### Adding Your First Model

On first run, you'll need to add a model before you can start chatting:

1. Press `Escape` to open the menu
2. Select **Manage your model list**
3. Select **Add a new model**
4. Fill in the form:
   - **API Type**: Choose `Anthropic` or `OpenAI`
   - **Model Name**: The model identifier (e.g. `claude-sonnet-4-20250514`, `gpt-4o`)
   - **API Key**: Your API key
   - **API URL**: The API endpoint (e.g. `https://api.anthropic.com`, `https://api.openai.com/v1`)
   - **Context Size (K)**: Max context window in thousands (e.g. `200` for 200K)
   - **Nickname**: A friendly name to display in the UI

Press `Enter` after each field, and `Escape` to go back.

## Command Line Options

| Option | Description |
|--------|-------------|
| `-c, --continue` | Continue from your last session |
| `-d, --diagnostic` | Enable diagnostic mode to save request/response JSON |
| `-a, --cost-analysis` | Record token usage to CSV for cost analysis |
| `--list-providers` | List available model providers |
| `--add-provider <id>` | Add models from a provider (requires `--api-key`) |
| `--remove-provider <id>` | Remove all models from a provider |
| `--api-key <key>` | API key for `--add-provider` |

Examples:

```bash
# Start a new session
omx

# Resume where you left off
omx -c

# Debug API calls
omx --diagnostic

# Track token costs
omx --cost-analysis
```

## Documentation

- [Basic Usage](./tutorial/basic-usage) - Shortcuts, commands, and menu options
- [Specialist Mode](./tutorial/specialist-mode) - High-level agentic tools
- [MCP Configuration](./tutorial/mcp) - Connect external tools via Model Context Protocol
- [Custom SubAgents](./tutorial/subagents) - Create your own agents
- [Custom Slash Commands](./tutorial/slash) - Add custom commands
- [Custom Skills](./tutorial/skills) - Reusable instruction sets
- [Cross-Session Memory](./tutorial/memory) - Persistent memory across sessions
- [Model Management](./tutorial/models) - Configure multiple LLM providers
- [Session Management](./tutorial/sessions) - Save and restore conversations
