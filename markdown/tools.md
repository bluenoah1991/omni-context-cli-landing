---
slug: /tutorial/tools
title: Tools
sidebar_label: Tools
sidebar_position: 5
---

# Tools

OmniContext CLI has two tool layers: built-in tools that the main model calls directly, and agent tools that run as sub-agents on a secondary model.

## Built-in Tools

These are called by the main model, so their inputs and outputs become part of the conversation history.

| Tool | Description |
|------|-------------|
| **AnalyticsQuery** | Query the local request log database for usage, latency, cache, and cost analysis. |
| **Bash** | Run shell commands for builds, installs, tests, and other terminal work. Supports background tasks. |
| **BashOutput** | Check the output of a background Bash task by task ID. |
| **Edit** | Make precise in-place text replacements. |
| **Glob** | Find files by pattern, with `.gitignore` support. |
| **Grep** | Search file contents with regex and line numbers. |
| **LandmarkDelete** | Delete a layer from the landmark navigation system. |
| **LandmarkList** | List saved landmark layers for the current project. |
| **LandmarkRead** | Read a landmark layer with all of its pinned files, directories, and symbols. |
| **LandmarkUpdate** | Create or update a landmark layer so useful navigation knowledge survives across sessions. |
| **MemoryDelete** | Delete saved project memory points. |
| **MemoryList** | List saved cross-session memory points for the current project. |
| **MemoryUpdate** | Edit the text or score of existing memory points. |
| **Read** | Read files with line numbers. Supports offsets, limits, images, and PDFs. |
| **RecallRead** | Read a past session around a specific recall search hit. |
| **RecallSearch** | Search indexed past sessions with full-text search. |
| **Skill** | Load a reusable skill into the current conversation. |
| **WebFetch** | Fetch a URL and turn the page into clean markdown. |
| **WebSearch** | Search the web for up-to-date info. |
| **Write** | Write a file from scratch or fully replace it. Supports `createOnly` for safer file creation. |

Landmarks are best thought of as a separate navigation subsystem rather than a tiny add-on. If you want the bigger picture, see [Landmark Navigation](/tutorial/landmarks).

## Agent Tools

Agent tools run on the agent model, which is usually a cheaper or faster secondary model. Their intermediate tool calls, file reads, and reasoning never enter your main context. You only get the final answer back.

| Tool | Description |
|------|-------------|
| **Agent_Explore** | Map the project structure and explain how the codebase is organized. |
| **Agent_Glance** | Preview multiple files and directories with short summaries. |
| **Agent_Search** | Search across the codebase to answer a specific technical question. |
| **Agent_Recall** | Search past chat sessions and summarize what happened around a topic. |
| **Agent_Review** | Review the recent work in the current conversation with a fresh eye. |
| **Agent_Deduce** | Investigate a bug or complex question through read-only exploration and return a fix proposal. |

### How Agent Tools Work

When the main model calls something like `Agent_Search("How does session persistence work?")`:

1. OmniContext CLI starts a sub-agent on the agent model
2. that sub-agent can call built-in tools like `Glob`, `Grep`, `Read`, and `Bash`
3. it gathers whatever it needs to answer the question
4. only the concise final result comes back to the main conversation
5. the scratch work is discarded

Some built-in agent tools, like `Agent_Review` and `Agent_Deduce`, can also inherit the current conversation context so they can inspect recent work without you restating everything.

This is how OmniContext CLI keeps exploratory work out of your expensive context window.

### Agent Model

The agent model is configured separately from your default model. If you don't set one, OmniContext CLI uses the current main model for agent work too.

A common setup is:

- a stronger reasoning model as the main model
- a faster, cheaper model as the agent model

That keeps costs down without losing the quality of the final answer.

### Tool Approval

If you want a safety check before tools run:

- use `omx --approve-write` to confirm `Bash`, `Edit`, and `Write`
- use `omx --approve-all` to confirm every tool call

Agent tools, MCP tools, and remote tools do not ask for approval directly. Approval happens when they reach an underlying built-in tool that actually reads, writes, or executes something.
