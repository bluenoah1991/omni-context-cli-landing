---
slug: /tutorial/external-tools
title: 外部工具
sidebar_label: 外部工具
sidebar_position: 10
---

# 外部工具

外部工具是一些小型 JavaScript 或 ESM 模块。OmniContext CLI 会在启动时加载它们，并把它们和内置工具一起暴露给模型。

## 存放位置

| 位置 | 作用范围 |
|------|---------|
| `~/.omx/tools/*.js` 或 `~/.omx/tools/*.mjs` | 所有项目 |
| `.omx/tools/*.js` 或 `.omx/tools/*.mjs` | 当前项目 |

当前工作流需要通过 `allowExternalTools` 允许外部工具，模型才可以调用它们。

## 工具模块格式

一个工具导出需要包含描述、JSON Schema 风格的 `parameters` 对象，以及异步 `execute` 函数。

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

如果省略 `name`，默认导出会使用文件名作为工具名。命名导出会使用 `filename_exportName`。

## 执行上下文

`execute(args, context)` 会收到：

| 字段 | 含义 |
|------|------|
| `signal` | 用于取消执行的 Abort signal |
| `cwd` | 当前工作目录 |
| `omxDir` | 用户级 `.omx` 目录 |
| `projectDir` | 当前项目目录 |

返回值可以是字符串、JSON 兼容数据，或者带有 `result` 字段的对象。

## 并行工具

如果工具可以安全地和其它独立工具调用一起运行，可以设置 `parallel: true`。

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

添加或修改外部工具文件后，需要重启 OmniContext CLI。
