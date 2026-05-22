---
slug: /tutorial/hooks
title: Hooks
sidebar_label: Hooks
sidebar_position: 10
---

# Hooks

Hooks let OmniContext CLI run command or HTTP handlers during chat and tool execution.

## Where to Store Hooks

| Location | Scope |
|----------|-------|
| `.omx/hooks.json` | Current project |
| `~/.omx/hooks/*.json` | All projects |

Hooks are controlled by the `hooksEnabled` app config option. You can toggle it from preferences or set it in app config.

## Events

| Event | When It Runs | Can Block |
|-------|--------------|-----------|
| `UserPromptSubmit` | Before a user prompt is accepted | Yes |
| `PreToolUse` | Before a tool call runs | Yes |
| `PreCompact` | Before context compaction starts | Yes |
| `PostCompact` | After compaction finishes | No |
| `Stop` | When a response completes or stops | No |

For `PreToolUse`, add a `tools` list to match specific tool names.

## Command Hooks

Command hooks receive the hook input JSON on stdin and run with `cwd` set to the current workspace.

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "tools": ["Bash"],
        "command": "node",
        "args": [".omx/hooks/check-bash.mjs"],
        "timeout": 30
      }
    ]
  }
}
```

To block a blockable event, print a JSON object to stdout:

```json
{"block": true, "reason": "Bash is disabled for this repo."}
```

Hook failures are ignored, and hook files are loaded at startup, so restart OmniContext CLI after changing them.

## HTTP Hooks

HTTP hooks receive a POST request with the same hook input JSON.

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "url": "http://localhost:8787/omx-hook",
        "headers": {
          "Authorization": "Bearer ${HOOK_TOKEN}"
        },
        "allowedEnvVars": ["HOOK_TOKEN"],
        "timeout": 10
      }
    ]
  }
}
```

Header values can reference environment variables with `${VAR}`, but only names listed in `allowedEnvVars` are expanded.
