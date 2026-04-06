---
slug: /tutorial/sessions
title: Session Management
sidebar_label: Session Management
sidebar_position: 11
---

# Session Management

omx automatically saves your conversation sessions and lets you resume, rewind, or switch between them.

## Automatic Saving

Sessions are saved automatically as you chat. Each session records the full conversation history, model used, and token usage.

## Loading a Session

Resume your last session from the command line:

```bash
omx --continue
```

Or load any previous session through the menu or slash command:

```
/session
```

This shows a list of recent sessions. Select one to continue where you left off.

## Rewinding

Made a mistake? Rewind to a previous message:

```
/rewind
```

This shows your recent messages. Select one to rewind to that point -- everything after it is discarded.

## Compaction

When your conversation context reaches 80% of the model's limit, omx automatically compacts the session:

1. The conversation is summarized
2. Key memory points are extracted
3. A fresh session starts with the summary injected

You can also trigger compaction manually:

```
/compact
```

### Server Compaction

By default, compaction happens on the client side. If you prefer, enable **Server compaction** in preferences to let the server handle it instead.
