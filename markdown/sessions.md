---
slug: /tutorial/sessions
title: Session Management
sidebar_label: Session Management
sidebar_position: 12
---

# Session Management

Omx automatically saves your conversations and provides tools to navigate and restore sessions.

## Automatic Saving

Every conversation is automatically saved. Sessions are organized by project based on your current working directory or git repository root.

## Loading Previous Sessions

Use `/session` to browse and load previous sessions:

```
/session
```

Select a session from the list to restore the conversation history.

## Rewinding

Use `/rewind` to go back to a previous point in the current session:

```
/rewind
```

This shows a list of your messages. Selecting one creates a new session from that point, preserving everything up to your selection.

Use rewind when:
- The conversation went in the wrong direction
- You want to try a different approach
- An error occurred and you want to retry

## Compaction

When the context window fills up, Omx can compress the conversation history.

### Automatic Compaction

When token usage exceeds 80% of the model's context size, Omx prompts for compaction. This summarizes the conversation while preserving key context.

### Manual Compaction

Use `/compact` to manually trigger compaction:

```
/compact
```

This is useful when:
- You want to reduce context before a complex task
- The conversation has accumulated irrelevant content
- You're approaching the context limit

### Compaction Configuration

Omx supports context editing to optimize compaction. You can enable or disable this feature through the `contextEditing` setting.

By default, Omx preserves all tool call results when compacting conversations. If you want to remove tool results during compaction to reduce token usage, you can manually adjust the relevant parameter in your settings file.

## Starting Fresh

Use `/clear` to start a completely new session:

```
/clear
```

This clears the terminal and creates a new empty session. The previous session is saved and can be restored with `/session`.
