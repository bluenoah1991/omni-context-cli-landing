---
slug: /tutorial/specialist-mode
title: Specialist Mode
sidebar_label: Specialist Mode
sidebar_position: 3
---

# Specialist Mode

Specialist mode is the core feature of Omx. It swaps basic file operations for agentic tools that can complete multi-step tasks with fewer back-and-forths.

## How It Works

In traditional coding assistants, the model calls low-level tools like `read`, `edit`, `write`, and `bash`. Each tool call consumes context tokens and requires the model to handle errors manually.

Specialist mode introduces **agentic tools** - high-level tools that encapsulate complex workflows. When you ask Omx to do something, it delegates to a specialized tool that:

1. Understands your intent
2. Executes the necessary operations
3. Handles errors and retries automatically
4. Returns a clean result

## Available Agentic Tools

| Tool | Purpose |
|-------|---------:|
| **spark** | Execute bash commands with auto-retry on failure |
| **sculpt** | Edit files by replacing text with auto-fix on mismatch |
| **weave** | Write content to files with retry on failure |
| **sweep** | Find files matching search criteria |
| **pluck** | Extract code segments from a file |
| **explore** | Survey project structure and architecture |
| **ripple** | Find references to a symbol |
| **slice** | Extract code snippets relevant to a question |
| **glance** | Preview multiple files with brief summaries |
| **quest** | Research topics via web search |

## Enabling Specialist Mode

Specialist mode is enabled by default. You can check your current settings with `/status`, or switch presets through the menu (press `Escape` to open).

When disabled, Omx uses the basic file tools directly, giving you more granular control but requiring more context tokens.
