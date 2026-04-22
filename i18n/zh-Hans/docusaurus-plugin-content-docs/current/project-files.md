---
slug: /tutorial/project-files
title: 项目文件与配置
sidebar_label: 项目文件与配置
sidebar_position: 6
---

# 项目文件与配置

OmniContext CLI 会用到几层不同的文件：仓库级指令、仓库本地扩展，以及存放在仓库外部的应用配置。把这些层次分清之后，整套系统就会清楚很多。

## 指令文件

### 主助手指令

OmniContext CLI 为主助手查找项目指令时，会按这个顺序检查：

1. 当前项目里的 `OMX.md`
2. 当前项目里的 `CLAUDE.md`
3. `~/.omx/OMX.md`

如果项目里同时存在 `OMX.md` 和 `CLAUDE.md`，会优先使用 `OMX.md`。

### Agent 指令

内置智能体工具和自定义 Agent 使用的是另一条查找链：

1. 当前项目里的 `AGENTS.md`
2. `~/.omx/AGENTS.md`
3. 当前项目里的 `OMX.md`
4. 当前项目里的 `CLAUDE.md`
5. `~/.omx/OMX.md`

这样你既可以把仓库级编码约定放在一个地方，也可以在需要时为 Agent 单独补一层规则。

## 仓库内的本地扩展

这些文件放在仓库里，适合团队共享：

| 路径 | 用途 |
|------|------|
| `.omx/workflows/*.md` | 项目级自定义工作流 |
| `.omx/agents/*.md` | 项目级自定义 Agent |
| `.omx/skills/<name>/SKILL.md` | 项目级技能 |
| `.omx/mcp.json` | 项目级 MCP 服务器 |

这些能力在 `~/.omx/` 下也都有对应的用户级位置，所以你可以把个人习惯和仓库共享配置分开管理。

## 应用配置

OmniContext CLI 的应用配置存放在仓库外部：

| 作用域 | 位置 |
|--------|------|
| 全局 | `~/.omx/omx.json` |
| 项目 | `~/.omx/projects/<project-id>/omx.json` |
| 仅内存 | 不写入磁盘 |

可以通过 `omx --scope global`、`omx --scope project` 或 `omx --scope memory` 选择配置保存目标。

一个简单的配置示例：

```json
{
  "workflowPreset": "programming",
  "responseLanguage": "en",
  "colorTheme": "neon",
  "cacheTtl": "1h",
  "landmarkEnabled": true,
  "memoryEnabled": true
}
```

全局配置适合放你希望处处生效的默认值。项目作用域更适合保存某个仓库自己的偏好，比如默认工作流、回复语言、颜色主题，或者是否启用 landmarks。

## 项目数据

OmniContext CLI 还会把运行中的状态放到 `~/.omx/projects/<project-id>/` 下面。

这个目录里可能包含：

- `omx.json` 里的项目级配置
- 会话历史和压缩状态
- `memory.json` 里的跨会话记忆
- `landmark.sqlite` 里的地标导航数据
- `session-history.sqlite` 里的 recall 搜索数据

如果你想看 landmarks 的完整数据模型和工具使用流程，可以继续读 [地标导航](/tutorial/landmarks)。

这种拆分是有意为之的：你可以把 `OMX.md`、`AGENTS.md` 或 `.omx/workflows/` 这类共享规则提交到仓库里，同时把个人会话数据留在本地。
