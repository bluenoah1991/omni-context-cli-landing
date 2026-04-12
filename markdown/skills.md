---
slug: /tutorial/skills
title: Skills
sidebar_label: Skills
sidebar_position: 8
---

# Skills

Skills are reusable instruction packs. They inject domain-specific guidance into the current conversation, and OmniContext CLI can surface them as slash commands or load them through the `Skill` tool.

## Where to Store Skills

| Location | Scope |
|----------|-------|
| `~/.omx/skills/` | Available in all projects |
| `.omx/skills/` | Available only in the current project |
| `~/.claude/skills/` | Imported automatically from Claude Code |
| `.claude/skills/` | Imported automatically from Claude Code in the current project |

## File Structure

Each skill is a directory with a `SKILL.md` file inside:

```
~/.omx/skills/
  review/
    SKILL.md
  release/
    SKILL.md
```

A simple skill looks like this:

```markdown
---
name: Review
description: Review changed code for bugs and risky edits
---

When reviewing code in this project:

- focus on correctness first
- call out risky edge cases
- keep the final answer short and actionable
```

## Using Skills

Skills appear in the slash command picker. Type `/` and start typing the skill name:

```
/review
```

You can also load them programmatically through the `Skill` tool when that tool is available in the current workflow.

## Arguments and Variables

Skills can interpolate arguments and a few built-in variables:

| Pattern | Meaning |
|---------|---------|
| `$ARGUMENTS` | The full argument string after the slash command |
| `$ARGUMENTS[0]` | The first whitespace-separated argument |
| `$1`, `$2`, ... | Positional arguments |
| `${OMX_SKILL_DIR}` | The skill directory path |
| `${CLAUDE_SKILL_DIR}` | Same as above for Claude-compatible skills |
| `${OMX_SESSION_ID}` | The current session ID |
| `${CLAUDE_SESSION_ID}` | Claude-compatible alias for the current session ID |

If the skill body doesn't use any argument placeholders, OmniContext CLI appends the raw arguments at the end automatically.

## Frontmatter

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Display name for the skill |
| `description` | string | Short description shown in the picker |
| `user-invocable` | boolean | Whether the user can call the skill directly. Defaults to `true` |
| `disable-model-invocation` | boolean | Prevent the model from loading this skill through the `Skill` tool |

## Claude Code Compatibility

OmniContext CLI reads the same skill format Claude Code uses, so existing Claude skills usually work without changes.
