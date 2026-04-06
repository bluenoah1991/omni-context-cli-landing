---
slug: /tutorial/zed-editor
title: Zed Editor
sidebar_label: Zed Editor
sidebar_position: 17
---

# Zed Editor

omx works as an external agent in Zed via the Agent Client Protocol (ACP).

## Setup

Add omx to your Zed settings (`~/.config/zed/settings.json`):

```json
{
  "agent_servers": {
    "omx": {
      "command": "omx",
      "args": ["--acp"]
    }
  }
}
```

## Usage

Open Zed's agent panel and select omx as the agent. You get full tool access -- omx can read, edit, and search your project just like in the terminal.

## How It Works

When started with `--acp`, omx runs as an ACP agent over stdio instead of launching the TUI. Zed communicates with it using the Agent Client Protocol, sending messages and receiving tool calls and responses.
