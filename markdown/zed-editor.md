---
slug: /tutorial/zed-editor
title: Zed Editor
sidebar_label: Zed Editor
sidebar_position: 20
---

# Zed Editor

Omx works as an external agent in [Zed](https://zed.dev) through the [Agent Client Protocol (ACP)](https://agentclientprotocol.com). Once configured, you can chat with Omx directly inside Zed's agent panel -- it has full access to your files, can run commands, and works just like it does in the terminal.

## Prerequisites

Install Omx globally:

```bash
npm install -g omni-context-cli
```

Make sure you have at least one model configured. If you haven't set one up yet, run `omx` in your terminal and follow the [Getting Started](/) guide.

## Configuration

Open Zed's settings file. You can get there from the command palette (`Cmd+Shift+P` on Mac, `Ctrl+Shift+P` on Linux) by searching for `zed: open settings`.

Add Omx under `agent_servers`:

```json
{
  "agent_servers": {
    "Omx": {
      "type": "custom",
      "command": "omx",
      "args": ["--acp"]
    }
  }
}
```

If you installed Omx locally in a project rather than globally, use the full path instead:

```json
{
  "agent_servers": {
    "Omx": {
      "type": "custom",
      "command": "npx",
      "args": ["omni-context-cli", "--acp"]
    }
  }
}
```

## Usage

1. Open the agent panel in Zed (click the agent icon in the sidebar or use the command palette)
2. Select **Omx** from the agent dropdown at the top of the panel
3. Start typing -- Omx will respond with full tool access, just like in the terminal

Omx picks up your project instructions (`OMX.md`) and MCP configuration automatically, so everything works the same way it does when you run `omx` directly.

## Workflow Modes

Zed shows the available workflow modes in the agent panel. You can switch between them on the fly:

| Mode | What it does |
|------|-------------|
| Specialist | Agent mode with specialized sub-agents |
| Normal | Direct mode with all tools available |
| Artist | Image-first responses |
| Explorer | Web search-focused |
| Assistant | General assistant |

## Model Switching

Your configured models show up in Zed's agent panel as well. Switch between them without leaving the editor.

## Slash Commands

All Omx slash commands work through Zed. Type `/compact` to compress context, `/git-commit` to commit staged changes, and so on. The full list appears in Zed's command picker.

## Debugging

If something isn't working, open the ACP logs from the command palette:

1. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Linux)
2. Search for `dev: open acp logs`
3. Check the messages between Zed and Omx for errors

## How It Works

When you start a conversation in Zed, it launches `omx --acp` as a child process. Omx communicates with Zed over stdio using the ACP protocol -- newline-delimited JSON messages flowing back and forth. Zed sends your prompts, Omx runs tools and streams responses back, and Zed renders everything in the agent panel.

This is different from the VS Code extension, which runs Omx as an HTTP server and connects via MCP. The ACP approach is simpler -- no server, no port, just stdin/stdout.
