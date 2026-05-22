---
slug: /tutorial/hooks
title: Hooks
sidebar_label: Hooks
sidebar_position: 10
---

# Hooks

Hooks 可以让 OmniContext CLI 在聊天和工具执行过程中运行命令或 HTTP handler。

## 存放位置

| 位置 | 作用范围 |
|------|---------|
| `.omx/hooks.json` | 当前项目 |
| `~/.omx/hooks/*.json` | 所有项目 |

Hooks 由应用配置里的 `hooksEnabled` 控制。你可以在偏好设置里切换，也可以直接写入应用配置。

## 事件

| 事件 | 触发时机 | 可以阻断 |
|------|----------|----------|
| `UserPromptSubmit` | 用户 prompt 被接受前 | 是 |
| `PreToolUse` | 工具调用执行前 | 是 |
| `PreCompact` | 上下文压缩开始前 | 是 |
| `PostCompact` | 压缩完成后 | 否 |
| `Stop` | 回复完成或停止时 | 否 |

对于 `PreToolUse`，可以添加 `tools` 列表来匹配指定工具名。

## 命令 Hooks

命令 hooks 会从 stdin 接收 hook 输入 JSON，并以当前工作区作为 `cwd` 运行。

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

如果要阻断可阻断事件，在 stdout 输出一个 JSON 对象：

```json
{"block": true, "reason": "Bash is disabled for this repo."}
```

Hook 失败会被忽略，hook 文件会在启动时加载，所以修改后需要重启 OmniContext CLI。

## HTTP Hooks

HTTP hooks 会收到一个 POST 请求，请求体就是同样的 hook 输入 JSON。

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

Header 值可以用 `${VAR}` 引用环境变量，但只有列在 `allowedEnvVars` 里的变量名会被展开。
