---
slug: /tutorial/memory
title: Cross-Session Memory
sidebar_label: Cross-Session Memory
sidebar_position: 9
---

# Cross-Session Memory

omx can remember key insights across sessions. When a conversation is compacted, the model reflects on the session, pulls out key points, and evaluates existing ones.

## How It Works

Memory extraction runs automatically during compaction. Each memory point carries a score that shifts based on usefulness:

| Rating | Score Change |
|--------|-------------|
| Helpful | +3 |
| Neutral | -1 |
| Harmful | -6 |

Points that drop below -10 are pruned. Good insights accumulate weight over multiple sessions. Bad advice is flushed quickly. Stale knowledge decays on its own.

## Enabling Memory

Toggle cross-session memory through the preferences menu:

1. Press `Escape` to open the menu
2. Select **Change preferences**
3. Toggle **Cross-session memory**

## Storage

Each project maintains its own memory file at `.omx/memory.json`. The file is a JSON array of memory points, each with a content string and a numeric score.

Edit the file directly for full control -- add project-specific knowledge, remove incorrect entries, or adjust scores manually.

## What Gets Remembered

The model decides what's worth remembering during compaction. Typical memory points include:

- Project structure and conventions
- Technology choices and configurations
- Coding patterns specific to the codebase
- Mistakes made and corrections applied
- User preferences for code style
