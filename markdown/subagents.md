---
slug: /tutorial/custom-agents
title: Custom Agents
sidebar_label: Custom Agents
sidebar_position: 7
---

# Custom Agents

Custom agents let you turn a markdown file into a callable tool. Each one runs as a sub-agent with its own prompt, schema, and tool permissions.

Built-in agent tools like `Agent_Explore`, `Agent_Glance`, and `Agent_Search` use the same general idea.

## Where to Store Agents

| Location | Scope |
|----------|-------|
| `~/.omx/agents/` | Available in every project |
| `.omx/agents/` | Available only in the current project |

## File Structure

Each custom agent is a markdown file with YAML frontmatter and a Handlebars prompt template:

```markdown
---
name: Review
description: Review a file or directory for bugs and risky changes
allowBaseTools: [Read, Glob, Grep, Bash, BashOutput]
displayFields: [path]
parameters:
  properties:
    path:
      type: string
      description: File or directory to review
  required: [path]
---

Review the code at {{path}} for:
- bugs and logic issues
- risky edge cases
- unnecessary complexity

Use grep to find patterns and read to inspect the relevant files.
Return a concise report with file paths and line numbers.
```

The agent above becomes a tool named `Agent_Review`.

### Frontmatter Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Tool name. OmniContext CLI exposes it as `Agent_<name>` |
| `description` | string | Short description shown to the model |
| `allowBaseTools` | boolean or string[] | Enable all base tools or whitelist specific ones |
| `allowBuiltinAgents` | boolean or string[] | Allow built-in agent tools |
| `allowCustomAgents` | boolean or string[] | Allow other custom agents |
| `allowMcpTools` | boolean or string[] | Allow MCP tools |
| `allowRemoteTools` | boolean or string[] | Allow remote integration tools |
| `displayFields` | string[] | Which input fields should be shown in tool call previews |
| `parameters` | object | JSON Schema describing the input arguments |
| `model` | string | Override the default agent model for this agent |

### Template Variables

The prompt body uses Handlebars. Every field in `parameters.properties` is available as a template variable.

For optional fields, use the normal Handlebars pattern:

```handlebars
{{#if directory}}
Limit the review to {{directory}}.
{{/if}}
```

## Global Agent Instructions

Add an `AGENTS.md` file to your project root if you want instructions that apply to every agent.

When OmniContext CLI builds an agent prompt, it looks for instructions in this order:

1. `AGENTS.md` in the current project
2. `~/.omx/AGENTS.md`
3. `OMX.md` in the current project
4. `CLAUDE.md` in the current project
5. `~/.omx/OMX.md`

That makes it easy to share project rules across built-in agents and your own custom ones.
