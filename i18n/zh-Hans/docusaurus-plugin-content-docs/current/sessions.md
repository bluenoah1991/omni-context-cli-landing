---
slug: /tutorial/sessions
title: 会话管理
sidebar_label: 会话管理
sidebar_position: 10
---

# 会话管理

OmniContext CLI 会自动保存会话，这样你可以继续之前的工作、回退错误步骤，也可以把项目状态迁移到别的机器上。

## 自动保存

在你聊天的过程中，OmniContext CLI 会持续记录当前项目的对话内容、使用过的模型以及会话状态。

## 加载会话

通过命令行恢复最近一次会话：

```bash
omx --continue
```

也可以在应用内部加载更早的会话：

```
/session
```

## 回退

如果你想回到更早的某个节点：

```
/rewind
```

OmniContext CLI 会列出之前的消息。选中其中一条之后，这个时间点之后的内容就会被丢弃。

## 压缩

当对话大约达到模型上下文窗口的 80% 时，OmniContext CLI 会自动压缩：

1. 对当前会话做总结
2. 提取记忆点
3. 用带着总结的新会话继续往下聊

你也可以手动触发压缩：

```
/compact
```

## 存储模型

OmniContext CLI 会把会话状态存放在仓库外部的 `~/.omx/projects/<project-id>/` 目录里。

这个项目目录里可能包含：

- 会话历史
- 项目级配置
- 跨会话记忆

这样一来，你可以把 `OMX.md`、`AGENTS.md` 或 `.omx/workflows/` 这类共享规则放进仓库，同时把个人运行状态留在本地。

## 项目备份

导出当前项目中以 JSON 保存的会话、记忆、输入历史和 Image Workshop 会话元数据：

```bash
omx --export-project backup.tar.gz
```

之后可以这样恢复：

```bash
omx --import-project backup.tar.gz
```

这个导出不会包含 `atlas.sqlite` 或 `session-history.sqlite` 这类 SQLite 索引，也不会包含 `artifacts/` 目录下的文件；索引需要时可以根据项目数据重新创建或重新索引。
