---
slug: /tutorial/memory
title: Cross-Session Memory
sidebar_label: Cross-Session Memory
sidebar_position: 11
---

# Cross-Session Memory

Memory is Omx's implementation of **Agentic Context Engineering (ACE)** - a system for persistent memory that improves responses over time.

## How It Works

Traditional AI assistants start fresh every session. They don't remember your coding style preferences, project-specific patterns, mistakes made in previous sessions, or successful approaches that worked.

Memory maintains a persistent set of **Key Points** - concise learnings extracted from your conversations. These key points are automatically injected into future conversations, helping Omx better understand and adapt to your workflow.

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

**Removal**: Key points with scores at -5 or below are automatically removed, ensuring memory stays relevant.

## Enabling Memory

Memory is enabled by default. You can toggle it through the menu:

1. Press `Escape` to open the menu
2. Select **Change your preferences**
3. Select **Cross-session memory**

Check with `/status` -- look for `Cross-session memory: √`.

## What Gets Learned

Memory captures:
- Project structure
- Coding preferences
- Common patterns
- Gotchas and caveats
- Tool usage preferences

## Data Storage

Memory is stored per-project at `~/.omx/projects/<encoded-path>/memory.json`, where `<encoded-path>` is the base64url encoding of the lowercased current working directory.

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

You can manually edit `memory.json` to remove unwanted key points, adjust scores, or add known information directly.
