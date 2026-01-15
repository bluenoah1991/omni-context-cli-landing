---
slug: /tutorial/specialist-mode
title: Specialist Mode
sidebar_label: Specialist Mode
sidebar_position: 3
---

# Specialist Mode

Specialist mode is the core feature of Omx. It replaces basic file operations with intelligent tools that understand context, handle errors, and complete tasks autonomously.

## How It Works

In traditional coding assistants, the model calls low-level tools like `read_file`, `write_file`, and `bash`. Each tool call consumes context tokens and requires the model to handle errors manually.

Specialist mode introduces **Agentic Tools** - high-level tools that encapsulate complex workflows. When you ask Omx to do something, it delegates to a specialized tool that:

1. Understands your intent
2. Executes the necessary operations
3. Handles errors and retries automatically
4. Returns a clean result

## Available Agentic Tools

| Tool | Purpose |
|-------|---------:|
| **craft** | Execute bash commands with auto-retry on failure |
| **sculpt** | Edit files with automatic error correction |
| **weave** | Write files with auto-fix capabilities |
| **sweep** | Find files matching semantic criteria |
| **pluck** | Extract specific code segments from a file |
| **explore** | Survey project structure and architecture |
| **ripple** | Find all references to a symbol |
| **slice** | Extract code snippets relevant to answering specific questions |
| **morph** | Refactor code across multiple files |
| **quest** | Research topics via web search |

## Enabling Specialist Mode

Specialist mode is enabled by default. You can check your current settings with `/status`, or toggle it through the menu (press `Escape` to open).

When disabled, Omx uses basic file tools directly, giving you more granular control but requiring more context tokens.
