---
slug: /tutorial/custom-agents
title: 自定义 Agent
sidebar_label: 自定义 Agent
sidebar_position: 5
---

# 自定义 Agent

自定义 Agent 让你通过编写 Markdown 文件来创建新的智能体工具。每个 Agent 成为模型可调用的工具，以子智能体方式运行并拥有自己的工具权限。

## 存储位置

| 位置 | 作用范围 |
|------|---------|
| `~/.omx/agents/` | 所有项目可用 |
| `.omx/agents/` | 仅当前项目可用 |

## 文件结构

每个 Agent 是一个包含 YAML 前置信息和 Handlebars 提示模板的 Markdown 文件：

```markdown
---
name: Review
description: Review code changes for bugs and style issues
allowBaseTools: [Read, Glob, Grep, Bash, BashOutput]
display_fields: [filePath]
parameters:
  properties:
    filePath:
      type: string
      description: Path to the file or directory to review
  required: [filePath]
---

Review the code at {{filePath}} for:
- Bugs and logic errors
- Style inconsistencies
- Performance issues

Use grep to find patterns and read to examine specific files.
Return a summary of findings with file paths and line numbers.
```

### 前置信息字段

| 字段 | 类型 | 描述 |
|------|------|------|
| `name` | string | 工具名称（变为 `Agent_Name`） |
| `description` | string | 工具功能描述（展示给模型） |
| `allowBaseTools` | boolean 或 string[] | 此 Agent 可使用的基础工具 |
| `allowBuiltinAgents` | boolean 或 string[] | 允许内置智能体工具 |
| `allowCustomAgents` | boolean 或 string[] | 允许自定义智能体工具 |
| `allowMcpTools` | boolean 或 string[] | 允许 MCP 服务器工具 |
| `allowRemoteTools` | boolean 或 string[] | 允许来自集成的远程工具 |
| `display_fields` | string[] | 在 UI 中显示的参数字段 |
| `parameters` | object | 工具输入参数的 JSON Schema |
| `model` | string | 覆盖此 Agent 使用的模型 |

### 模板变量

提示正文使用 Handlebars 语法。Schema 中定义的所有参数都可作为模板变量使用。可选参数使用 `{{#if param}}`。

## 全局 Agent 指令

在项目根目录创建 `AGENTS.md`，为所有 Agent 添加通用指令。该文件会自动添加到每个 Agent 的提示前面。如果不存在，omx 会依次回退到 `OMX.md` 和 `CLAUDE.md`。
