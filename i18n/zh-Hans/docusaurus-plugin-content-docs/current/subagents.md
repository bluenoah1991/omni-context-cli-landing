---
slug: /tutorial/custom-agents
title: 自定义 Agent
sidebar_label: 自定义 Agent
sidebar_position: 7
---

# 自定义 Agent

自定义 Agent 可以把一个 markdown 文件变成可调用工具。每个 Agent 都会以子智能体的方式运行，拥有自己的提示词、参数 schema 和工具权限。

内置的 `Agent_Explore`、`Agent_Glance` 和 `Agent_Search` 本质上也是基于同样的思路。

## 存放位置

| 位置 | 作用范围 |
|------|---------|
| `~/.omx/agents/` | 所有项目都可用 |
| `.omx/agents/` | 仅当前项目可用 |

## 文件结构

每个自定义 Agent 都是一个带 YAML frontmatter 和 Handlebars 提示模板的 markdown 文件：

```markdown
---
name: Review
description: Review a file or directory for bugs and risky changes
allowBaseTools: [Read, Glob, Grep, Bash, BashOutput]
displayFields: [path]
parameters:
  properties:
    path:
      type: string
      description: File or directory to review
  required: [path]
---

Review the code at {{path}} for:
- bugs and logic issues
- risky edge cases
- unnecessary complexity

Use grep to find patterns and read to inspect the relevant files.
Return a concise report with file paths and line numbers.
```

上面这个 Agent 会变成一个名为 `Agent_Review` 的工具。

### 前置信息字段

| 字段 | 类型 | 描述 |
|------|------|------|
| `name` | string | 工具名称。OmniContext CLI 会将它暴露为 `Agent_<name>` |
| `description` | string | 展示给模型的简短说明 |
| `allowBaseTools` | boolean 或 string[] | 启用全部基础工具，或仅白名单中的工具 |
| `allowBuiltinAgents` | boolean 或 string[] | 允许使用内置智能体工具 |
| `allowCustomAgents` | boolean 或 string[] | 允许使用其他自定义 Agent |
| `allowMcpTools` | boolean 或 string[] | 允许使用 MCP 工具 |
| `allowRemoteTools` | boolean 或 string[] | 允许使用远程集成工具 |
| `displayFields` | string[] | 工具调用预览中显示哪些输入字段 |
| `parameters` | object | 描述输入参数的 JSON Schema |
| `model` | string | 为当前 Agent 单独覆盖默认 agent model |

### 模板变量

提示正文使用 Handlebars。`parameters.properties` 中定义的每个字段都可以直接作为模板变量使用。

对于可选字段，使用普通的 Handlebars 写法：

```handlebars
{{#if directory}}
Limit the review to {{directory}}.
{{/if}}
```

## 全局 Agent 指令

如果你希望给所有 Agent 统一补充规则，可以在项目根目录放一个 `AGENTS.md`。

OmniContext CLI 在构造 Agent 提示词时，会按这个顺序查找项目指令：

1. 当前项目里的 `AGENTS.md`
2. `~/.omx/AGENTS.md`
3. 当前项目里的 `OMX.md`
4. 当前项目里的 `CLAUDE.md`
5. `~/.omx/OMX.md`

这样你就能把项目规则同时共享给内置 Agent 和你自己写的 Agent。
