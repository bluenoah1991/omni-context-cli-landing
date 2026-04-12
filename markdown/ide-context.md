---
slug: /tutorial/ide-context
title: VS Code Extension
sidebar_label: VS Code Extension
sidebar_position: 13
---

# VS Code Extension

The OmniContext VS Code extension connects your editor to OmniContext CLI, so the assistant can see the same files, selections, and diagnostics you're looking at.

## Installation

Install the bundled extension directly from OmniContext CLI:

```bash
omx --install-vscode-extension
```

## How It Works

When **IDE context** is enabled in preferences, OmniContext CLI can receive:

- the active file
- the current selection
- diagnostics from VS Code

That context is attached automatically, which means less copy-paste and fewer "which file are we talking about?" turns.

## MCP Tools

The extension exposes MCP tools that OmniContext CLI can call:

| Tool | Description |
|------|-------------|
| **Mcp_ide_visual_studio_code_openFile** | Open a file in VS Code at a specific line and column |
| **Mcp_ide_visual_studio_code_openDiff** | Show a diff view between old and new content |
| **Mcp_ide_visual_studio_code_getDiagnostics** | Return current errors and warnings |
| **Mcp_ide_visual_studio_code_getOpenEditors** | List open editor tabs |
| **Mcp_ide_visual_studio_code_closeAllDiffTabs** | Close diff tabs created in VS Code |
| **Mcp_ide_visual_studio_code_getWorkspaceFolders** | Return workspace folders |

## Enabling IDE Context

Turn it on from the preferences menu:

1. Press `Escape`
2. Choose **Change preferences**
3. Toggle **IDE context**
