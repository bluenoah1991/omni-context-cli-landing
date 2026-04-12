---
slug: /tutorial/project-files
title: Project Files & Config
sidebar_label: Project Files & Config
sidebar_position: 6
---

# Project Files & Config

OmniContext CLI uses a few different file layers: repo-level instructions, repo-local extensions, and app config stored outside your repo. Once you know which layer does what, the rest of the system is pretty straightforward.

## Instruction Files

### Main Assistant Instructions

When OmniContext CLI looks for project instructions for the main assistant, it checks these locations in order:

1. `OMX.md` in the current project
2. `CLAUDE.md` in the current project
3. `~/.omx/OMX.md`

If both `OMX.md` and `CLAUDE.md` exist in the project, `OMX.md` wins.

### Agent Instructions

Built-in agent tools and custom agents use a slightly different lookup chain:

1. `AGENTS.md` in the current project
2. `~/.omx/AGENTS.md`
3. `OMX.md` in the current project
4. `CLAUDE.md` in the current project
5. `~/.omx/OMX.md`

That gives you one place for repo-wide coding rules and another place for agent-specific instructions when you need them.

## Repo-Local Customization

These files live inside your repo and are great for team-shared customization:

| Path | Purpose |
|------|---------|
| `.omx/workflows/*.md` | Project-local custom workflows |
| `.omx/agents/*.md` | Project-local custom agents |
| `.omx/skills/<name>/SKILL.md` | Project-local skills |
| `.omx/mcp.json` | Project-local MCP servers |

Each one also has a user-wide equivalent under `~/.omx/`, so you can keep personal tools and prompts separate from repo-specific ones.

## App Config

OmniContext CLI stores app config outside your repo:

| Scope | Location |
|-------|----------|
| Global | `~/.omx/omx.json` |
| Project | `~/.omx/projects/<project-id>/omx.json` |
| Memory-only | Not written to disk |

Choose the save target with `omx --scope global`, `omx --scope project`, or `omx --scope memory`.

A simple config looks like this:

```json
{
  "workflowPreset": "programming",
  "responseLanguage": "en",
  "statusCommand": "git branch --show-current",
  "cacheTtl": "1h"
}
```

Global config is the right place for defaults you want everywhere. Project scope is better for repo-specific choices like a preferred workflow, response language, or status line.

## Project Data

OmniContext CLI also keeps working state outside the repo under `~/.omx/projects/<project-id>/`.

That directory can include:

- project-scoped config
- session history and compaction state
- cross-session memory in `memory.json`

This split is intentional: you can commit shared rules like `OMX.md`, `AGENTS.md`, or `.omx/workflows/`, while keeping personal session data local.
