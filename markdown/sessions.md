---
slug: /tutorial/sessions
title: Session Management
sidebar_label: Session Management
sidebar_position: 11
---

# Session Management

OmniContext CLI saves sessions automatically so you can resume work, rewind mistakes, and move project state between machines.

## Automatic Saving

As you chat, OmniContext CLI keeps track of the conversation, the model you used, and the session state for the current project.

## Loading a Session

Resume the latest session from the command line:

```bash
omx --continue
```

Or load an older one from inside the app:

```
/session
```

## Rewinding

If you want to roll back to an earlier point:

```
/rewind
```

OmniContext CLI shows a list of earlier messages. Pick one, and everything after that point is discarded.

## Compaction

When the conversation reaches roughly 80% of the model's context window, OmniContext CLI compacts it automatically:

1. the session is summarized
2. memory points are extracted
3. a fresh session starts with the summary carried forward

You can also compact manually:

```
/compact
```

### Server Compaction

By default, compaction happens on the client side. If you prefer, enable **Server compaction** in preferences and let the server handle it instead.

## Project Backup

Export the current project's sessions and memory:

```bash
omx --export-project backup.tar.gz
```

Restore them later with:

```bash
omx --import-project backup.tar.gz
```
