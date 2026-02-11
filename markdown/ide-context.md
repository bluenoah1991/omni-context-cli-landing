---
slug: /tutorial/ide-context
title: IDE Context Awareness
sidebar_label: IDE Context
sidebar_position: 10
---

# IDE Context Awareness

Omx can integrate with your IDE to provide context-aware assistance. When connected, Omx displays the currently active file and selection from your editor.

## Requirements

IDE context requires the **OmniContext for VS Code** extension to be installed. You can install it via:

```bash
omx --install-vscode-extension
```

## How It Works

When you use the OmniContext extension in VS Code, it automatically:

- Starts a local Omx server in the background
- Monitors your active file and text selection in the editor
- Exposes IDE tools via MCP for file operations, diagnostics, and more
- Attaches file context to your messages for more relevant responses

## Connection Status

When Omx is connected to your IDE, you'll see:

- The IDE name displayed in the status bar
- Current file name and line numbers shown next to your input (e.g., `@ file.ts:10-20`)
- Selected text automatically included in your message context

## Available IDE Tools

The OmniContext extension provides these MCP tools:

| Tool | Description |
|------|-------------|
| `mcp_ide_visual_studio_code_openFile` | Open a file in the editor |
| `mcp_ide_visual_studio_code_openDiff` | View diffs between old and new content |
| `mcp_ide_visual_studio_code_getDiagnostics` | Get errors and warnings from VS Code |
| `mcp_ide_visual_studio_code_getOpenEditors` | List currently open editor tabs |
| `mcp_ide_visual_studio_code_closeAllDiffTabs` | Close all diff editor tabs |
| `mcp_ide_visual_studio_code_getWorkspaceFolders` | Get workspace folder paths |

## Configuration

IDE context is enabled by default. You can toggle it on/off through the menu (press Escape to access the menu).

## Workflow Tips

- Select code in your editor before asking questions for context-specific answers
- The file and line number display helps you track what's being referenced
- Use the diff tool to review changes before applying them
- Diagnostics help identify errors in your code automatically
