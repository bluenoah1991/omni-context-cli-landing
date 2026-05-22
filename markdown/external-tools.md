---
slug: /tutorial/external-tools
title: External Tools
sidebar_label: External Tools
sidebar_position: 10
---

# External Tools

External tools are small JavaScript or ESM modules that OmniContext CLI loads at startup and exposes beside the built-in tools.

## Where to Store Tools

| Location | Scope |
|----------|-------|
| `~/.omx/tools/*.js` or `~/.omx/tools/*.mjs` | All projects |
| `.omx/tools/*.js` or `.omx/tools/*.mjs` | Current project |

The current workflow must allow external tools through `allowExternalTools` before the model can call them.

## Tool Module Shape

A tool export needs a description, a JSON-schema-style `parameters` object, and an async `execute` function.

```js
export default {
  name: 'Echo',
  description: 'Echo text back to the user.',
  parameters: {
    properties: {
      text: {type: 'string'}
    },
    required: ['text']
  },
  async execute(args, context) {
    return `Echo: ${args.text}`;
  }
};
```

If `name` is omitted, OmniContext CLI uses the file name for a default export. For named exports, it uses `filename_exportName`.

## Execution Context

`execute(args, context)` receives:

| Field | Meaning |
|-------|---------|
| `signal` | Abort signal for cancellation |
| `cwd` | Current working directory |
| `omxDir` | User-level `.omx` directory |
| `projectDir` | Current project directory |

The return value can be a string, JSON-compatible data, or an object with a `result` field.

## Parallel Tools

Set `parallel: true` when the tool is safe to run alongside other independent tool calls.

```js
export const Now = {
  description: 'Return the current timestamp.',
  parallel: true,
  parameters: {properties: {}},
  async execute() {
    return new Date().toISOString();
  }
};
```

Restart OmniContext CLI after adding or changing external tool files.
