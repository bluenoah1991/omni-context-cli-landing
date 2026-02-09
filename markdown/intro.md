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
| `-s, --serve` | Start as HTTP server instead of TUI |
| `-w, --web` | Open web UI in browser (requires `--serve`) |
| `-p, --port <port>` | Port for server mode (default: 5281) |
| `-H, --host <host>` | Host for server mode (default: localhost) |
| `--workflow <preset>` | Override workflow preset (normal, specialist, artist, explorer, assistant) |
| `--scope <scope>` | Where to save config changes: global (default), project, or memory |
| `--approve-write` | Require approval before write tools (Bash, Edit, Write) |
| `--approve-all` | Require approval before all tools |
| `--install-vscode-extension` | Install the VS Code extension |
| `--list-providers` | List available model providers |
| `--add-provider <id>` | Add models from a provider (requires `--api-key`) |
| `--remove-provider <id>` | Remove all models from a provider |
| `--api-key <key>` | API key for `--add-provider` |

Examples:

```bash
# Start a new session
omx

# Resume where you left off
omx --continue

# Debug API calls
omx --diagnostic

# Track token costs
omx --cost-analysis

# Start web UI in browser
omx --serve --web

# Install VS Code extension
omx --install-vscode-extension

# Require approval for file-modifying tools
omx --approve-write

# Require approval for all tools
omx --approve-all

# Start in assistant mode
omx --workflow assistant

# Save config changes only to the current project
omx --scope project

# Bind to all network interfaces
omx --serve --host 0.0.0.0
```

## Proxy Configuration

Omx supports HTTP, HTTPS, and SOCKS proxies. You can set a proxy in two ways:

**Via the menu:** Press `Escape` > **Change preferences** > **Proxy** and enter your proxy URL.

**Via environment variables:** Omx automatically picks up `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` environment variables when no proxy is configured in the menu.

Supported URL formats:

```
http://proxy.example.com:8080
https://proxy.example.com:8443
socks5://proxy.example.com:1080
```

## Documentation

- [Basic Usage](./tutorial/basic-usage) - Shortcuts, commands, and menu options
- [Web Client](./tutorial/web-client) - Browser UI and VS Code extension
- [Browser Extension](./tutorial/browser-extension) - Control your browser from Omx
- [Office Add-in](./tutorial/office-addin) - Work with Excel, Word, and PowerPoint
- [Specialist Mode](./tutorial/specialist-mode) - High-level agentic tools
- [Artist Mode](./tutorial/artist-mode) - Visual-first responses with image generation
- [MCP Configuration](./tutorial/mcp) - Connect external tools via Model Context Protocol
- [Custom SubAgents](./tutorial/subagents) - Create your own agents
- [Custom Slash Commands](./tutorial/slash) - Add custom commands
- [Custom Skills](./tutorial/skills) - Reusable instruction sets
- [Cross-Session Memory](./tutorial/memory) - Persistent memory across sessions
- [Model Management](./tutorial/models) - Configure multiple LLM providers
- [Session Management](./tutorial/sessions) - Save and restore conversations
