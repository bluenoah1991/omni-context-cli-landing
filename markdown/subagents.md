---
slug: /tutorial/custom-agents
title: Custom Agents
sidebar_label: Custom Agents
sidebar_position: 5
---

# Custom Agents

Custom agents let you create new agent tools by writing a markdown file. Each agent becomes a callable tool that the model can invoke, running as a sub-agent with its own set of allowed tools.

## Where to Store Agents

| Location | Scope |
|----------|-------|
| `~/.omx/agents/` | Available in all projects |
| `.omx/agents/` | Available in current project only |

## File Structure

Each agent is a markdown file with YAML frontmatter and a Handlebars prompt template:

```markdown
---
name: Review
description: Review code changes for bugs and style issues
allowBaseTools: [Read, Glob, Grep, Bash, BashOutput]
display_fields: [filePath]
parameters:
  properties:
    filePath:
      type: string
      description: Path to the file or directory to review
  required: [filePath]
---

Review the code at {{filePath}} for:
- Bugs and logic errors
- Style inconsistencies
- Performance issues

Use grep to find patterns and read to examine specific files.
Return a summary of findings with file paths and line numbers.
```

### Frontmatter Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Tool name (becomes `Agent_Name`) |
| `description` | string | What the tool does (shown to the model) |
| `allowBaseTools` | boolean or string[] | Which base tools this agent can use |
| `allowBuiltinAgents` | boolean or string[] | Allow built-in agent tools |
| `allowCustomAgents` | boolean or string[] | Allow custom agent tools |
| `allowMcpTools` | boolean or string[] | Allow MCP server tools |
| `allowRemoteTools` | boolean or string[] | Allow remote tools from integrations |
| `display_fields` | string[] | Which parameter fields to show in the UI |
| `parameters` | object | JSON Schema for the tool's input parameters |
| `model` | string | Override the agent model for this agent |

### Template Variables

The prompt body uses Handlebars syntax. All parameters defined in the schema are available as template variables. Use `{{#if param}}` for optional parameters.

## Global Agent Instructions

Create `OMX-AGENTS.md` in your project root to add instructions that apply to all agents. This file is automatically prepended to every agent's prompt.
