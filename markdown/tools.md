---
slug: /tutorial/tools
title: Tools
sidebar_label: Tools
sidebar_position: 4
---

# Tools

omx has two categories of tools: base tools that the model calls directly, and agent tools that run as autonomous sub-agents on a cheaper model.

## Base Tools

These are called directly by the main model. Each tool call adds its input and output to your conversation context.

| Tool | Description |
|------|-------------|
| **Bash** | Run shell commands. Great for builds, installs, CLI tools, and system tasks. Background tasks supported via BashOutput. |
| **Read** | Read file contents with line numbers. Supports offset and limit for navigating large files. Also reads images and PDFs. |
| **Edit** | Make surgical text replacements. Provide exact text to find and what to replace it with. |
| **Write** | Write content to a file, creating parent directories as needed. Supports createOnly mode for safety. |
| **Glob** | Find files by pattern. Standard glob syntax with gitignore support. Capped at 100 results. |
| **Grep** | Search file contents using regex. Returns matches with file paths and line numbers. |
| **WebSearch** | Search the web for up-to-date information. |
| **WebFetch** | Fetch content from a URL and convert HTML to clean markdown. |
| **Skill** | Load a skill to get detailed instructions for domain-specific tasks. |

## Agent Tools

Agent tools run as autonomous sub-agents on the agent model (a secondary, typically cheaper model). Their intermediate tool calls, file contents, and reasoning never enter your main context. You get a concise answer back; the scratch work stays off the books.

| Tool | Description |
|------|-------------|
| **Agent_Explore** | Survey project architecture. Maps directory layout, key files, and how the codebase is organized. |
| **Agent_Glance** | Preview multiple files at once. Reads files and directories, returns a brief summary for each. |
| **Agent_Search** | Search the codebase to answer a specific question. Returns targeted code segments from across the project. |

### How Agent Tools Work

When the main model calls an agent tool like `Agent_Search("How does session persistence work?")`:

1. A sub-agent is spawned on the agent model
2. The sub-agent has access to base tools (Glob, Grep, Read, Bash)
3. It makes as many tool calls as needed to find the answer
4. Only the final, concise result is returned to the main conversation
5. All intermediate work is discarded

This means a single agent tool call might internally run 5-10 base tool calls, but your main context only grows by the size of the final answer.

### Agent Model

The agent model is configured separately from your main model. Set it through the menu under **Manage your model list**. If not set, the main model is used for agent work too.

For cost efficiency, pair an expensive reasoning model (e.g. Claude Opus) as your main model with a cheap, fast model (e.g. GLM-4) as the agent model.
