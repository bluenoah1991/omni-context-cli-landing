---
slug: /tutorial/workflows
title: Workflows
sidebar_label: Workflows
sidebar_position: 3
---

# Workflows

A workflow controls everything about how omx behaves: the system prompt, which tools are available, and how the assistant interacts with you.

## Built-in Presets

| Preset | Use Case | Description |
|--------|----------|-------------|
| **Programming** (default) | Terminal, VS Code | Coding assistant with base tools, agent tools, and MCP integration. Concise output, minimal overhead. |
| **General** | Office, browser sidebar | Personal assistant for documents, spreadsheets, and presentations. Proactive with tools, conversational tone. |

Switch workflows at startup with `omx --workflow general` or through the menu during a session.

## Custom Workflows

Create your own by dropping a markdown file in `~/.omx/workflows/` or `.omx/workflows/`. Each workflow is a markdown file with YAML frontmatter that defines the tool set and a body that becomes the system prompt:

```markdown
---
name: My Workflow
allowBaseTools: true
allowBuiltinAgents: true
allowCustomAgents: true
allowMcpTools: true
allowRemoteTools: true
---
Your system prompt here. Template variables like {{OS_TYPE}},
{{PLATFORM}}, {{ARCH}}, {{CWD}}, and {{TODAY}} are available.
```

### Frontmatter Options

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Display name for the workflow |
| `icon` | string | Single character icon shown in the UI |
| `allowBaseTools` | boolean | Enable base tools (Bash, Read, Edit, Write, Glob, Grep, WebSearch, WebFetch, Skill) |
| `allowBuiltinAgents` | boolean | Enable built-in agent tools (Agent_Explore, Agent_Glance, Agent_Search) |
| `allowCustomAgents` | boolean | Enable custom agent tools from `~/.omx/agents/` |
| `allowMcpTools` | boolean | Enable MCP server tools |
| `allowRemoteTools` | boolean | Enable remote tools from integrations (VS Code, Chrome, Office) |

### Template Variables

Use these in your system prompt body:

| Variable | Value |
|----------|-------|
| `{{OS_TYPE}}` | Windows, macOS, or Linux |
| `{{PLATFORM}}` | `win32`, `darwin`, or `linux` |
| `{{ARCH}}` | `x64`, `arm64`, etc. |
| `{{CWD}}` | Current working directory |
| `{{TODAY}}` | Today's date in ISO format |
