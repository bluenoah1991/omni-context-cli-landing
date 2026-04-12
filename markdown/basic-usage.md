---
slug: /tutorial/basic-usage
title: Basic Usage
sidebar_label: Basic Usage
sidebar_position: 2
---

# Basic Usage

This guide covers the shortcuts, commands, and menu paths you'll use most often in OmniContext CLI.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Escape | Open the menu when idle, or interrupt generation while a response is streaming |
| Ctrl+C | Press twice to exit |
| Ctrl+A | Move the cursor to the start of the line |
| Ctrl+E | Move the cursor to the end of the line |
| Ctrl+L | Clear the current input and attachments |
| Shift+Enter | Insert a newline |
| Ctrl+J | Insert a newline |
| Up/Down | Move inside multi-line input or browse input history |

## Slash Commands

Type these directly into the chat box:

| Command | Description |
|---------|-------------|
| /clear | Start a fresh conversation |
| /status | Show your session, model, workflow, and preference status |
| /compact | Compact the current context manually |
| /rewind | Rewind to an earlier message |
| /model | Switch to another model |
| /session | Load a previous session |
| /git-commit | Generate a commit message for staged changes and commit |
| /exit | Exit OmniContext CLI |

When you type `/`, OmniContext CLI opens a picker with matching commands. Skills also show up here, so you can load reusable prompt instructions without leaving the keyboard.

## Menu

Press `Escape` to open the menu. From there you can:

- switch models
- load an older session
- rewind to an earlier message
- switch workflows
- manage your model list
- change preferences

### Workflow Presets

OmniContext CLI includes two built-in workflows:

- **Programming** - the default coding workflow with base tools, built-in agent tools, custom agents, MCP, and remote tools
- **General** - a broader assistant workflow for docs, spreadsheets, presentations, and day-to-day tasks

If you're using the desktop app, it also installs a **Browser** workflow for the Chrome sidebar.

Custom workflows live in `~/.omx/workflows/` or `.omx/workflows/`. See [Workflows](/tutorial/workflows) for the full format.

### Preferences

The preferences menu lets you toggle or change:

- **Cache duration** - `5m` for faster iteration or `1h` for longer cached prompts
- **Completion notification** - desktop notifications for slower replies
- **Context editing** - trim bulky old tool calls and reasoning blocks
- **Diff view** - show inline diffs when OmniContext CLI edits files
- **Cross-session memory** - keep useful project knowledge between sessions
- **Extended thinking** - enable deeper reasoning for harder tasks
- **IDE context** - include context from your editor
- **Server compaction** - let the server handle compaction instead of the client
- **Streaming output** - render replies token by token as they arrive

From the main menu, you can also switch:

- **Response language** - force replies to English or Simplified Chinese, or leave it on auto
- **Color theme** - pick one of the built-in palettes

Use arrow keys to move, `Enter` to confirm, and `Escape` to go back.
