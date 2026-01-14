---
slug: /tutorial/ide-context
title: IDE Context Awareness
sidebar_label: IDE Context
sidebar_position: 8
---

# IDE Context Awareness

Omx can integrate with your IDE to provide context-aware assistance. When connected, Omx displays the currently active file and selection from your editor.

## Requirements

IDE context requires the **Claude Code for VS Code** extension to be installed and running in Visual Studio Code.

## How It Works

When you start Omx from a workspace that's open in VS Code with Claude Code running, Omx automatically:

- Connects to the IDE and detects the current workspace
- Monitors your active file and text selection in the editor
- Attaches file context to your messages for more relevant responses

## Connection Status

When Omx is connected to your IDE, you'll see:

- The IDE name displayed in the status bar
- Current file name and line numbers shown next to your input (e.g., `⌘ file.ts:10-20`)
- Selected text automatically included in your message context

## Configuration

IDE context is enabled by default. You can toggle it on/off through the menu (press Escape to access the menu).

## Workflow Tips

- Select code in your editor before asking questions for context-specific answers
- The file and line number display helps you track what's being referenced
- IDE tools from Claude Code are automatically available as MCP tools

