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

## VS Code UI

The extension provides two ways to interact with OmniContext CLI inside the editor:

- **Side panel** — click the OmniContext icon in the activity bar to open a chat panel docked to the sidebar
- **Editor tab** — run the `OmniContext: Open in Editor` command to open the chat in a full editor tab

Both surfaces connect to the same OmniContext CLI instance, so your sessions, models, and memory are shared.

When the extension is active, it also broadcasts your **current selection** in real time. If IDE context is enabled, the assistant sees what you highlight as you move the cursor — no need to copy and paste file paths or code snippets.

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
