---
slug: /tutorial/zed-editor
title: Zed Editor
sidebar_label: Zed Editor
sidebar_position: 17
---

# Zed Editor

OmniContext CLI can run inside Zed as an external agent over ACP (Agent Client Protocol).

## Setup

Add OmniContext CLI to your Zed settings file:

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

Open Zed's agent panel and pick `omx` as the active agent. From there, OmniContext CLI can use the same tools, workflows, and model setup you already use in the terminal.

## How It Works

When launched with `--acp`, OmniContext CLI skips the terminal UI and starts an ACP agent over stdio instead. Zed sends messages to that agent and receives model output and tool calls back through the protocol.
