---
slug: /tutorial/workflows
title: Workflows
sidebar_label: Workflows
sidebar_position: 4
---

# Workflows

A workflow controls how OmniContext CLI behaves: the system prompt, which tools are available, and the overall interaction style.

## Built-in Presets

| Workflow | Use Case | Description |
|----------|----------|-------------|
| **Programming** | Terminal, VS Code | The default coding workflow. Includes base tools, built-in agent tools, custom agents, MCP, and remote tools. |
| **General** | Desktop app, Office | A broader assistant workflow for docs, spreadsheets, presentations, and everyday tasks. |
| **Analytics** | Token costs, latency | A usage analytics workflow with direct SQL access to the local request log database. |
| **Recall** | Chat history | A search workflow for finding and reviewing past sessions by keyword. |

If you use the desktop app, it also installs a **Browser** workflow for the Chrome sidebar, with tab, page, bookmark, history, and screenshot access.

Switch workflows at startup with `omx --workflow general`, or switch during a session from the menu.

## Custom Workflows

Create your own workflow by dropping a markdown file into `~/.omx/workflows/` or `.omx/workflows/`. The file name becomes the workflow ID you use with `--workflow`.

```markdown
---
name: Review
icon: "◈"
allowBaseTools: [Read, Glob, Grep, WebFetch, Skill]
allowBuiltinAgents: true
allowCustomAgents: false
allowMcpTools: true
allowRemoteTools: false
---
You are a careful reviewer. Focus on correctness, edge cases,
and practical fixes. Keep the final answer concise.
```

The YAML frontmatter defines the tool filter. The markdown body becomes the system prompt.

Built-in workflows always load first and cannot be overridden by a custom file with the same ID. For custom additions, project-local workflows in `.omx/workflows/` take precedence over user-wide ones in `~/.omx/workflows/`.

### Frontmatter Options

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Display name shown in the UI |
| `icon` | string | Single-character icon shown in the workflow picker |
| `allowBaseTools` | boolean or string[] | Enable all base tools, or whitelist specific ones |
| `allowBuiltinAgents` | boolean or string[] | Enable all built-in agent tools, or whitelist specific ones |
| `allowCustomAgents` | boolean or string[] | Enable custom agents from `~/.omx/agents/` or `.omx/agents/` |
| `allowMcpTools` | boolean or string[] | Enable MCP tools |
| `allowRemoteTools` | boolean or string[] | Enable remote tools from integrations like VS Code, Chrome, and Office |

### Template Variables

Use these in the workflow body:

| Variable | Value |
|----------|-------|
| `{{OS_TYPE}}` | `Windows`, `macOS`, or `Linux` |
| `{{PLATFORM}}` | `win32`, `darwin`, or `linux` |
| `{{ARCH}}` | `x64`, `arm64`, and so on |
| `{{CWD}}` | Current working directory |
| `{{TODAY}}` | Today's date in ISO format |
