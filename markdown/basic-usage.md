---
slug: /tutorial/basic-usage
title: Basic Usage
sidebar_label: Basic Usage
sidebar_position: 2
---

# Basic Usage

This guide covers the essential shortcuts, commands, and menu options for working with omx.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Escape | Open menu (when idle) / Interrupt generation (when loading) |
| Ctrl+C | Press twice to exit |
| Ctrl+A | Move cursor to line start |
| Ctrl+E | Move cursor to line end |
| Ctrl+L | Clear input and attachments |
| Shift+Enter | Insert newline |
| Ctrl+J | Insert newline |
| Up/Down | Move cursor in multi-line input or browse input history |

## Slash Commands

Type these commands directly in the chat:

| Command | Description |
|---------|-------------|
| /clear | Start a fresh conversation |
| /status | Show session, model and configuration status |
| /compact | Manually compact context and start fresh |
| /rewind | Rewind to a previous message |
| /model | Switch to a different model |
| /session | Load a previous session |
| /git-commit | Generate a commit message for staged changes and commit |
| /exit | Exit omx |

When you start typing `/`, a picker appears with matching commands. Use arrow keys to navigate and Enter to select. Custom skills also appear in this picker.

## Menu

Press Escape to open the menu. From here you can:

- Switch to a different model
- Load a previous session
- Rewind to a previous message
- Switch workflow preset
- Manage your model list
- Change preferences

### Workflow Presets

omx ships with two workflow presets:

- **Programming** (default) - Coding assistant with base tools, agent tools, and MCP integration. Concise output, minimal overhead. Reads OMX.md and CLAUDE.md automatically.
- **General** - Personal assistant for documents, spreadsheets, and presentations. Proactive with tools, conversational tone.

You can create custom workflows by adding markdown files to `~/.omx/workflows/` or `.omx/workflows/`. See [Workflows](/tutorial/workflows) for details.

### Preferences

The preferences submenu lets you toggle:

- **Cache duration** - How long prompt caching lasts (5 minutes or 1 hour)
- **Completion notification** - Notify when response takes over a minute
- **Context editing** - Trim old tool calls and thinking blocks to save tokens
- **Cross-session memory** - Remember key points across sessions
- **Diff view** - Show inline diffs when the model edits files
- **Extended thinking** - Enable deeper reasoning for complex tasks
- **IDE context** - Include context from your IDE
- **Response language** - Choose the language for model responses (auto, English, Chinese)
- **Server compaction** - Let the server handle context compaction instead of the client
- **Color theme** - Pick a color scheme from 17 presets
- **Streaming output** - Show responses as they generate

Use arrow keys to navigate, Enter to select, and Escape to go back.
