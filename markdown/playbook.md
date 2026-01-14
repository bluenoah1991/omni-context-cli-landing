---
slug: /tutorial/playbook
title: Playbook (ACE)
sidebar_label: Playbook (ACE)
sidebar_position: 9
---

# Playbook (ACE)

Playbook is Omx's implementation of **Agentic Context Engineering (ACE)** - a system for persistent memory that improves responses over time.

## How It Works

Traditional AI assistants start fresh every session. They don't remember your coding style preferences, project-specific patterns, mistakes made in previous sessions, or successful approaches that worked.

Playbook maintains a persistent set of **Key Points** - concise learnings extracted from your conversations. These key points are automatically injected into future conversations, helping Omx better understand and adapt to your workflow.

## Reflection and Compaction

At the end of each conversation (whether through automatic compaction or manual `/compact`), Omx reflects on the dialogue:

1. Distill conversation into trajectories
2. Extract new key points
3. Evaluate existing key points
4. Update scores

### Key Point Lifecycle

**Creation**: When compaction occurs, Omx analyzes the conversation and extracts new insights. These become new key points with a score of 0.

**Evaluation**: Each time compaction occurs, existing key points are evaluated:
- **Helpful** (+1): The key point contributed to a good outcome
- **Harmful** (-3): The key point led to a poor outcome
- **Neutral** (-2): The key point was irrelevant

Unused key points naturally decay over time.

**Removal**: Key points with scores below -5 are automatically removed, ensuring the playbook stays relevant.

## Enabling Playbook

Playbook is disabled by default. Enable it via:

1. Configuration menu on startup
2. `/status` command to toggle settings

When enabled, you'll see `Playbook memory: √` in the status output.

## What Gets Learned

Playbook captures:
- Project structure
- Coding preferences
- Common patterns
- Gotchas and caveats
- Tool usage preferences

## Data Storage

Playbook is stored per-project at `~/.omx/projects/<encoded-path>/playbook.json`, where `<encoded-path>` is the base64url encoding of the current working directory:

```json
{
  "version": "1.0",
  "keyPoints": [
    {
      "name": "kpt_001",
      "text": "This project uses TypeScript strict mode...",
      "score": 3
    }
  ]
}
```

## Manual Management

You can manually edit `playbook.json` to remove unwanted key points, adjust scores, or add known information directly.
