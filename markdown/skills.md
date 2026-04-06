---
slug: /tutorial/skills
title: Skills
sidebar_label: Skills
sidebar_position: 7
---

# Skills

Skills are reusable instruction sets that inject domain-specific knowledge and workflows into the current conversation. They're invoked as slash commands and are compatible with the Claude Code skill format.

## Where to Store Skills

| Location | Scope |
|----------|-------|
| `~/.omx/skills/` | Available in all projects |
| `.omx/skills/` | Available in current project only |

## File Structure

Each skill is a directory containing a `SKILL.md` file:

```
~/.omx/skills/
  code-style/
    SKILL.md
  review/
    SKILL.md
```

The `SKILL.md` file contains the instructions that get injected into the conversation when the skill is invoked:

```markdown
---
name: Code Style
---

When reviewing or writing code in this project, follow these conventions:

- Use 2-space indentation
- Prefer const over let
- Use explicit return types on all exported functions
- Write tests for all public APIs
```

## Using Skills

Skills appear in the slash command picker. Type `/` and start typing the skill name:

```
/code-style
```

When invoked, the skill's instructions are injected into the current conversation context. The model then follows those instructions for the rest of the session.

## Frontmatter

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Display name for the skill |
| `description` | string | Short description shown in the command picker |
| `user-invocable` | boolean | Whether the user can invoke this skill directly (default: true) |
| `disable-model-invocation` | boolean | Prevent the model from invoking this skill via the Skill tool (default: false) |

## Claude Code Compatibility

omx reads skills in the same format as Claude Code. If you already have skills set up for Claude Code, they work with omx automatically.
