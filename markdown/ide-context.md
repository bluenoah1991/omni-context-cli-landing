---
slug: /tutorial/ide-context
title: VS Code Extension
sidebar_label: VS Code Extension
sidebar_position: 10
---

# VS Code Extension

The OmniContext VS Code extension connects your editor to omx, providing file context, diagnostics, and diff views.

## Installation

Install the extension directly from omx:

```bash
omx --install-vscode-extension
```

## How It Works

When IDE context is enabled in preferences, omx receives information about your editor state:

- **Active file** - The file currently open in the editor
- **Selection** - Any selected text
- **Diagnostics** - Errors and warnings from VS Code

This context is automatically included in your conversations, so omx knows what you're looking at without you having to copy-paste.

## MCP Tools

The VS Code extension provides MCP tools that omx can call:

| Tool | Description |
|------|-------------|
| **openFile** | Open a file in VS Code at a specific line and column |
| **openDiff** | Show a diff view comparing old and new content |
| **getDiagnostics** | Get errors and warnings from VS Code |
| **getOpenEditors** | List currently open editor tabs |
| **getWorkspaceFolders** | Get VS Code workspace folders |

## Enabling IDE Context

Toggle IDE context through the preferences menu:

1. Press `Escape` to open the menu
2. Select **Change preferences**
3. Toggle **IDE context**
