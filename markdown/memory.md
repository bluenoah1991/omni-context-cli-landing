---
slug: /tutorial/memory
title: Cross-Session Memory
sidebar_label: Cross-Session Memory
sidebar_position: 9
---

# Cross-Session Memory

OmniContext CLI can remember useful project knowledge across sessions. Memory is extracted when a conversation is compacted, then re-injected into later sessions automatically.

## How It Works

Every memory point carries a score that changes based on whether it helped:

| Rating | Score Change |
|--------|-------------|
| Helpful | +3 |
| Neutral | -1 |
| Harmful | -6 |

Points below `-10` are pruned. That gives useful memories a chance to build up over time while stale or bad guidance fades out naturally.

## Enabling Memory

Toggle memory from the preferences menu:

1. Press `Escape`
2. Choose **Change preferences**
3. Toggle **Cross-session memory**

## Storage

Each project keeps its own memory file at `.omx/memory.json`.

The file is a JSON array of memory entries, each with a content string and a score. You can edit it directly if you want full control.

## What Gets Remembered

The model decides what is worth keeping during compaction. Typical examples include:

- project structure and conventions
- technology choices and configs
- codebase-specific patterns
- repeated mistakes and their fixes
- user preferences that matter across sessions
