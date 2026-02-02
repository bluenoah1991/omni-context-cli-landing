---
slug: /tutorial/skills
title: Custom Skills
sidebar_label: Custom Skills
sidebar_position: 9
---

# Custom Skills

Skills are reusable instruction sets that extend Omx with specialized knowledge and workflows. Unlike agents (which execute tools autonomously), skills provide detailed instructions that the model follows within the current conversation.

## What Are Skills?

Skills are a way to teach Omx how to handle specific tasks. When you load a skill, its instructions become available to guide the model's behavior. This is useful for:

- Complex multi-step workflows
- Domain-specific knowledge
- Project-specific conventions
- Reusable templates and patterns

## Skill Location

Skills are stored in `~/.omx/skills/`. Each skill lives in its own directory:

```
~/.omx/skills/
├── my-skill/
│   ├── SKILL.md      # Required: skill definition
│   └── templates/    # Optional: additional resources
└── another-skill/
    └── SKILL.md
```

## Skill Structure

A skill is defined in a `SKILL.md` file with frontmatter and instructions:

```markdown
---
name: skill-name
description: Brief description of what this skill does
---

## Instructions

Detailed instructions for the skill...

## Example Usage

Show how to use the skill...
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Unique identifier for the skill |
| `description` | Yes | Brief description shown in skill listings |

## Creating a Skill

Create `~/.omx/skills/code-style/SKILL.md`:

```markdown
---
name: code-style
description: Project-specific coding conventions
---

## Code Style Guidelines

### TypeScript Conventions
- Use `interface` for object shapes, `type` for unions
- Always specify return types for public functions

### Naming Conventions
- Components: PascalCase
- Hooks: camelCase with `use` prefix
- Files: kebab-case
```

## Using Skills

### Loading a Skill

Ask Omx to load a skill:

```
Load the api-design skill
```

Or use the skill tool directly:

```
Use the skill tool to load code-style
```

### Skill in Context

Once loaded, the skill's instructions are available to the model. For example, after loading `api-design`:

```
Design an API for user authentication
```

The model will follow the conventions defined in your skill.

The model will autonomously load relevant skills as needed during the conversation.

## Skills vs Agents vs Slash Commands

| Feature | Purpose | Execution |
|---------|---------|-----------|
| **Skills** | Provide instructions/knowledge | Model follows instructions in context |
| **Agents** | Execute autonomous tasks | Model delegates to sub-agent with tools |
| **Slash Commands** | Quick prompt shortcuts | Expands to full prompt, model responds |

Choose skills when you want to:
- Establish conventions for the session
- Provide domain knowledge
- Guide behavior without automation

Choose agents when you want to:
- Automate multi-step tasks
- Execute commands autonomously
- Handle errors automatically

## Progressive Context

Skills use progressive disclosure. Only skill names and descriptions appear in the system prompt. When the model calls the skill tool, Omx returns the full instructions along with the skill's base directory path.

Your skill can then reference additional files in its directory:

```markdown
---
name: templates
description: Project templates and boilerplate
---

## Available Templates

Read files from this skill's base directory as needed:

- `templates/component.tsx` - Standard component structure
- `templates/test.ts` - Test file structure
```

The model can read these files using the standard read tool when needed, keeping context usage efficient.

## Best Practices

- Keep each skill focused on a single concern
- Write specific, actionable instructions
- Update skills as your project evolves
- Share via version control or team wiki


