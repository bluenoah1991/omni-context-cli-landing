---
slug: /
title: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
---

# Getting Started

omx is a zero-telemetry coding assistant that runs in your terminal and extends into VS Code, Office, the browser, and mobile. It treats the context window as a scarce resource and engineers every layer to use it efficiently.

## Installation

```bash
npm install -g omni-context-cli
```

## Quick Start

Navigate to your project directory and run:

```bash
omx
```

omx supports four API protocols natively: Anthropic, OpenAI, Gemini, and OpenAI Responses API.

### Adding Your First Model

On first run, you'll need to add a model:

1. Press `Escape` to open the menu
2. Select **Manage your model list**
3. Select **Add a new model**
4. Fill in the form:
   - **API Type**: Choose `Anthropic`, `OpenAI`, `Gemini`, or `OpenAI Responses API`
   - **Model Name**: The model identifier (e.g. `claude-sonnet-4-20250514`, `gpt-4o`)
   - **API Key**: Your API key
   - **API URL**: The base API endpoint (e.g. `https://api.anthropic.com`, `https://api.openai.com/v1`)
   - **Context Size (K)**: Max context window in thousands (e.g. `200` for 200K)
   - **Nickname**: A friendly name to display in the UI

Or add all models from a provider in one command:

```bash
omx --list-providers
omx --add-provider openrouter --api-key sk-...
```

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
| `--workflow <preset>` | Override workflow preset (programming, general) |
| `--scope <scope>` | Where to save config changes: global (default), project, or memory |
| `--approve-write` | Require approval before write tools (Bash, Edit, Write) |
| `--approve-all` | Require approval before all tools |
| `--theme <mode>` | Set web UI theme mode (light, dark, auto) |
| `--install-vscode-extension` | Install the VS Code extension |
| `--list-providers` | List available model providers |
| `--add-provider <id>` | Add models from a provider (requires `--api-key`) |
| `--remove-provider <id>` | Remove all models from a provider |
| `--api-key <key>` | API key for `--add-provider` |
| `--parent-pid <pid>` | Exit when the parent process dies (requires `--serve`) |
| `--tls` | Enable HTTPS for server mode |
| `--acp` | Run as ACP agent over stdio (for editor integrations like Zed) |
| `--tls-cert <path>` | Path to TLS certificate file |
| `--tls-key <path>` | Path to TLS private key file |
| `--lang <code>` | Set UI language (e.g. `en-US`, `zh-CN`) |
| `--set-password [password]` | Set a password for web UI authentication |
| `--clear-password` | Remove the password and disable web UI authentication |
| `--install-daemon` | Install as a systemd service (Linux only) |
| `--export-project <path>` | Export project data (sessions, memory) to a gzip archive |
| `--import-project <path>` | Import project data from a gzip archive |

Examples:

```bash
# Start a new session
omx

# Resume where you left off
omx --continue

# Debug API calls
omx --diagnostic

# Start web UI in browser
omx --serve --web

# Install VS Code extension
omx --install-vscode-extension

# Require approval for file-modifying tools
omx --approve-write

# Use a specific workflow
omx --workflow general
```
