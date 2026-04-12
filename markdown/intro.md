---
slug: /
title: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
---

# Getting Started

OmniContext CLI is a context-first, zero-telemetry assistant that starts in your terminal and reaches into VS Code, Office, the browser, and mobile. It supports Anthropic, OpenAI, Gemini, and the OpenAI Responses API, with custom workflows, agent tools, and cross-session memory built in.

## Installation

```bash
npm install -g omni-context-cli
```

## Quick Start

Open a project and run:

```bash
omx
```

On first launch, add a model from the menu:

1. Press `Escape`
2. Choose **Manage your model list**
3. Choose **Add a new model**
4. Fill in the provider, model name, API key, API URL, context size, and nickname

If you'd rather start from a provider preset:

```bash
omx --list-providers
omx --add-provider openrouter --api-key sk-...
```

Built-in provider presets include Zenmux, DeepSeek, Kimi for Coding, OpenRouter, Zhipu, and MiniMax.

## Built-in Workflows

OmniContext CLI ships with two built-in workflows:

- **Programming** - the default coding workflow for terminal and editor use
- **General** - a broader assistant workflow for documents, spreadsheets, and everyday tasks

If you use the desktop app, it also installs a **Browser** workflow for the Chrome sidebar.

## Project Files That Matter

A few files shape how OmniContext CLI behaves in a repo:

- `OMX.md` - main project instructions for the assistant
- `CLAUDE.md` - fallback project instructions if `OMX.md` is missing
- `AGENTS.md` - agent-specific instructions for built-in and custom agents
- `.omx/workflows/` - project-local custom workflows
- `.omx/agents/` - project-local custom agents
- `.omx/skills/` - project-local skills
- `.omx/mcp.json` - project-local MCP servers

For the full config and file layout, see [Project Files & Config](/tutorial/project-files).

## Command Line Options

| Option | Description |
|--------|-------------|
| `-c, --continue` | Continue your last session |
| `-d, --diagnostic` | Save request and response payloads for debugging |
| `-a, --cost-analysis` | Record token usage to CSV |
| `-s, --serve` | Start OmniContext CLI as an HTTP server instead of the terminal UI |
| `-w, --web` | Open the web client in your browser after starting the server |
| `-p, --port <port>` | Port for server mode |
| `-H, --host <host>` | Host for server mode |
| `--workflow <preset>` | Override the workflow for this launch |
| `--scope <scope>` | Save config changes to `global`, `project`, or `memory` |
| `--approve-write` | Ask before running Bash, Edit, and Write |
| `--approve-all` | Ask before running any tool |
| `--install-vscode-extension` | Install the bundled VS Code extension |
| `--list-providers` | List built-in model providers |
| `--add-provider <id>` | Add every model from a provider |
| `--remove-provider <id>` | Remove every model from a provider |
| `--api-key <key>` | API key used with `--add-provider` |
| `--parent-pid <pid>` | Exit server mode when the parent process dies |
| `--tls` | Turn on HTTPS for server mode when used with `--tls-cert` and `--tls-key` |
| `--tls-cert <path>` | TLS certificate file |
| `--tls-key <path>` | TLS private key file |
| `--theme <mode>` | Web client mode: `light`, `dark`, or `auto` |
| `--acp` | Run as an ACP agent over stdio for editor integrations like Zed |
| `--set-password [password]` | Set a password for the web client |
| `--clear-password` | Remove the web client password |
| `--install-daemon` | Install OmniContext CLI as a systemd user service on Linux |
| `--export-project <path>` | Export project sessions and memory to a gzip archive |
| `--import-project <path>` | Import project sessions and memory from a gzip archive |

Examples:

```bash
# Start a new session
omx

# Pick up where you left off
omx --continue

# Open the web client
omx --serve --web

# Use a different workflow for this run
omx --workflow general

# Add all models from a provider
omx --add-provider zenmux --api-key zmx-...

# Protect the web client with a password
omx --set-password
```
