---
slug: /tutorial/memory
title: Cross-Session Memory
sidebar_label: Cross-Session Memory
sidebar_position: 11
---

# Cross-Session Memory

OmniContext CLI can remember useful project knowledge across sessions. Memory is extracted when a conversation is compacted, then re-injected into later sessions automatically.

Memory is enabled by default. If you don't want it for a project, you can turn it off from preferences.

## How It Works

Every memory point carries a score that changes based on whether it helped:

| Rating | Score Change |
|--------|-------------|
| Helpful | +3 |
| Neutral | -1 |
| Harmful | -6 |

Points at `-10` or lower are pruned during reflection. That gives useful memories a chance to build up over time while stale or bad guidance fades out naturally.

Each memory point stores a name, text, and score. The text is injected verbatim into future session prompts, so keeping memory clean matters.

## Managing Memory

The easiest way to manage memory is the built-in **Memory** workflow:

```bash
omx --workflow memory
```

That workflow is built around three tools:

- `MemoryList` - show existing key points
- `MemoryUpdate` - edit text or scores on existing key points
- `MemoryDelete` - remove outdated or noisy key points

You can also leave memory on and never touch it manually. OmniContext CLI will keep extracting and pruning points automatically during compaction.

## Turning Memory On or Off

Toggle memory from the preferences menu:

1. Press `Escape`
2. Choose **Change preferences**
3. Toggle **Cross-session memory**

## Storage

Each project keeps its own memory file at `~/.omx/projects/<project-id>/memory.json`.

The file stores versioned key points with names, text, and scores. You can edit it directly if you want full control.

## What Gets Remembered

The model decides what is worth keeping during compaction. Typical examples include:

- project structure and conventions
- technology choices and config details
- codebase-specific patterns that keep coming up
- failed approaches worth avoiding next time
- repeated user preferences that still matter later
