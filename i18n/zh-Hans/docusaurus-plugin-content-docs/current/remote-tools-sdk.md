---
slug: /tutorial/remote-tools-sdk
title: 远程工具与 SDK
sidebar_label: 远程工具与 SDK
sidebar_position: 12
---

# 远程工具与 SDK

远程工具允许另一个本地客户端把工具注入正在运行的 OmniContext CLI server。浏览器扩展、Office 插件、桌面应用和自定义 SDK 客户端都使用这个模型。

## 工作方式

1. 以 server 模式启动 OmniContext CLI。
2. 远程客户端连接到 `http://localhost:5281`。
3. 客户端注册工具定义。
4. OmniContext CLI 将它们暴露为 `Remote_<clientType>_<toolName>`。
5. 当模型调用其中一个工具时，OmniContext CLI 会通过长轮询把请求发回远程客户端。

当前工作流需要通过 `allowRemoteTools` 允许远程工具。

## SDK 示例

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

这个工具会在 OmniContext CLI 中显示为 `Remote_Demo_Ping`。

## 工具结果

handler 可以返回普通值，也可以返回结构化结果：

```js
return {success: true, result: {ok: true}};
```

抛出的错误会被转换成失败的工具结果。

## 内置远程客户端

- Desktop 工具提供 memo、通知、PDF 和预览相关操作。
- Browser 工具提供标签页、页面、书签、历史记录、截图和页面自动化操作。
- Office 工具提供 Word、Excel 和 PowerPoint 相关操作。

除非 server 已经配置认证和传输安全，否则建议只在本机或可信网络中使用远程客户端。
