---
slug: /tutorial/slash
title: Custom Slash Commands
sidebar_label: Custom Slash Commands
sidebar_position: 7
---

# Custom Slash Commands

Slash commands provide quick access to common prompts and actions. You can create custom commands to fit your workflow.

## Built-in Commands

| Command | Description |
|---------|-------------|
| `/clear` | Start a fresh conversation |
| `/status` | Show current configuration |
| `/compact` | Manually compact context |
| `/rewind` | Go back to a previous message |
| `/model` | Switch models |
| `/session` | Load a previous session |
| `/git-commit` | Generate a commit message for staged changes and commit |
| `/exit` | Exit Omx |

## Creating Custom Commands

Custom slash commands are stored in `~/.omx/slash/`. Each command is a `.md` file.

### Command Structure

```markdown
---
name: command-name
description: What this command does
---

Your prompt template here.

{{argument}}
```

### Example: Review Command

Create `~/.omx/slash/review.md`:

```markdown
---
name: review
description: Review the current git changes
---

Review the current git diff and provide feedback on:

1. Code quality and readability
2. Potential bugs or edge cases
3. Performance implications
4. Suggestions for improvement

Focus on actionable feedback.

{{argument}}
```

Usage:

```
/review focus on security
```

## Template Variables

### {{argument}}

Everything after the command name:

```
/mycommand this is the argument
```

`{{argument}}` becomes `this is the argument`

### Conditional Content

```markdown
{{#if argument}}
Process: {{argument}}
{{else}}
No argument provided, using defaults.
{{/if}}
```

## Best Practices

- Keep each command focused on one task
- Be explicit about expected output format
- Use short but descriptive names (`/review` not `/r`)
- Write clear descriptions for help text

## Sharing Commands

Slash command files are just markdown. You can:

- Share them with your team via Git
- Copy them between machines

All custom commands live in `~/.omx/slash/`.
