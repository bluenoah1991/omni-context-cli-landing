---
slug: /tutorial/remote-tools-sdk
title: Remote Tools & SDK
sidebar_label: Remote Tools & SDK
sidebar_position: 10
---

# Remote Tools & SDK

Remote tools let another local client inject tools into a running OmniContext CLI server. The browser extension, Office Add-in, desktop app, and custom SDK clients all use this model.

## How It Works

1. Start OmniContext CLI in server mode.
2. A remote client connects to `http://localhost:5281`.
3. The client registers tool definitions.
4. OmniContext CLI exposes them as `Remote_<clientType>_<toolName>`.
5. When the model calls one, OmniContext CLI sends the request back to the remote client over long-polling.

The current workflow must allow remote tools through `allowRemoteTools`.

## SDK Example

```js
import {RemoteClient} from 'omni-context-sdk';

const client = new RemoteClient({
  serverUrl: 'http://localhost:5281',
  clientType: 'Demo'
});

client.addTool({
  name: 'Ping',
  description: 'Return a pong response.',
  parameters: {properties: {}}
}, async () => {
  return 'pong';
});

await client.connect();
```

The tool appears in OmniContext CLI as `Remote_Demo_Ping`.

## Tool Results

A handler can return a plain value, or a structured result:

```js
return {success: true, result: {ok: true}};
```

Throwing an error is converted into a failed tool result.

## Built-in Remote Clients

- Desktop tools expose memo, notification, PDF, and preview actions.
- Browser tools expose tab, page, bookmark, history, screenshot, and page-side automation actions.
- Office tools expose Word, Excel, and PowerPoint actions.

Keep remote clients local or on a trusted network unless the server is protected with authentication and transport security.
