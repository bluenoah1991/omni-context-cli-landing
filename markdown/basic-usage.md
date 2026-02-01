---
slug: /tutorial/basic-usage
title: Basic Usage
sidebar_label: Basic Usage
sidebar_position: 2
---

# Basic Usage

This guide covers the essential shortcuts, commands, and menu options for working with Omx.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Escape | Open menu (when idle) / Interrupt generation (when loading) |
| Ctrl+C | Press twice to exit |
| Ctrl+A | Move cursor to line start |
| Ctrl+E | Move cursor to line end |
| Ctrl+L | Clear input box |
| Shift+Enter | Insert newline (multi-line input) |
| Ctrl+J | Insert newline (TUI) |
| Up/Down | Navigate cursor in multi-line input / Browse input history |

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
| /exit | Exit Omx |

When you start typing &#x60;/&#x60;, a picker appears with matching commands. Use arrow keys to navigate and Enter to select.

## Menu

Press Escape to open the menu. From here you can:

- Switch to a different model
- Load a previous session
- Rewind to a previous message
- Switch workflow preset
- Manage your model list
- Change preferences

### Workflow Presets

Omx supports three workflow presets:

- **Normal** - Basic tools with manual orchestration
- **Specialist** (default) - Agentic tools that work autonomously. See [Specialist Mode](/tutorial/specialist-mode)
- **Artist** - Responds primarily with images for visual design. See [Artist Mode](/tutorial/artist-mode)

### Preferences

The preferences submenu lets you toggle:

- **Auto-open diff panel** - Automatically show file changes in the diff panel (Web/VS Code)
- **Cache duration** - How long Anthropic caches your prompts (5 minutes or 1 hour)
- **Completion notification** - Notify when response takes over a minute
- **Context editing** - Slim down context during compaction
- **Cross-session memory** - Remember key points across sessions
- **Extended thinking** - Enable deeper reasoning for complex tasks
- **IDE context** - Include context from your IDE
- **Streaming output** - Show responses as they generate
- **Thinking block expansion** - Start thinking blocks expanded or collapsed

Use arrow keys to navigate, Enter to select, and Escape to go back.
