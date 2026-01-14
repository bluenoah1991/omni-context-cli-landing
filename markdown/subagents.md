---
slug: /tutorial/subagents
title: Custom SubAgents
sidebar_label: Custom SubAgents
sidebar_position: 5
---

# Custom SubAgents

You can create your own SubAgents to extend Omx with specialized capabilities.

## Agent Location

Custom agents are stored in `~/.omx/agents/`. Each agent is defined in a single `.md` file.

## Agent Structure

An agent file consists of two parts:

1. **Frontmatter** - YAML metadata defining the agent&#x27;s interface
2. **Prompt Template** - Handlebars template for the agent&#x27;s instructions

### Example: Code Review Agent

Create `~/.omx/agents/review.md`:

```markdown
---
name: review
description: Review code changes and provide feedback on quality, bugs, and improvements.
allowedTools: [Bash, Read, Grep]
parameters:
  properties:
    target:
      type: string
      description: File or directory to review, or &#x27;staged&#x27; for git staged changes
    focus:
      type: string
      description: What to focus on - security, performance, style, or all
  required: [target]
---

Review target: {{target}}
Focus area: {{#if focus}}{{focus}}{{else}}all{{/if}}

{{#if (eq target "staged")}}
First, run `git diff --cached` to get the staged changes.
{{else}}
Read the specified file or directory to understand the code.
{{/if}}

Analyze the code and provide feedback on:
1. Code quality and readability
2. Potential bugs or edge cases
3. Performance considerations
4. Security issues (if focus includes security)
5. Suggested improvements

Format your response as a structured review with sections for each category.
```

## Frontmatter Reference

### name

The agent&#x27;s identifier. Used as `agent_name` in tool calls.

### description

Brief description shown when listing available tools.

### allowedTools

Array of tools the agent can use:

- `Bash` - Execute shell commands
- `BashOutput` - Stream bash output
- `Read` - Read file contents
- `Write` - Write file contents
- `Edit` - Edit files
- `Glob` - Find files by pattern
- `Grep` - Search file contents

### parameters

JSON Schema defining the agent&#x27;s input parameters:

```yaml
parameters:
  properties:
    paramName:
      type: string | number | boolean
      description: Parameter description
  required: [paramName]
```

## Prompt Template

The prompt template uses [Handlebars](https://handlebarsjs.com/) syntax.

### Variable Interpolation

```handlebars
{{variableName}}
```

### Conditionals

```handlebars
{{#if variable}}
  Content when variable is truthy
{{else}}
  Content when variable is falsy
{{/if}}
```

### Equality Check

```handlebars
{{#if (eq variable "value")}}
  Content when variable equals "value"
{{/if}}
```

## Using Custom Agents

Once created, your agent appears as `agent_name` in the available tools. The model can call it like any built-in agent.

You can also explicitly request your agent:

```
Use the review agent to check the staged changes for security issues.
```
