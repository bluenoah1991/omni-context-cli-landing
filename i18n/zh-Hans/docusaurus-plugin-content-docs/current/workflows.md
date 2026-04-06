---
slug: /tutorial/workflows
title: 工作流
sidebar_label: 工作流
sidebar_position: 3
---

# 工作流

工作流控制 omx 的一切行为：系统提示词、可用工具和交互方式。

## 内置预设

| 预设 | 使用场景 | 描述 |
|------|---------|------|
| **Programming**（默认） | 终端、VS Code | 编程助手，配备基础工具、智能体工具和 MCP 集成。简洁输出，最小开销。 |
| **General** | Office、浏览器侧边栏 | 个人助理，用于文档、表格和演示文稿。主动使用工具，对话式语调。 |

启动时切换工作流：`omx --workflow general`，或在会话中通过菜单切换。

## 自定义工作流

将 Markdown 文件放入 `~/.omx/workflows/` 或 `.omx/workflows/` 即可创建。每个工作流是一个包含 YAML 前置信息的 Markdown 文件，正文即系统提示词：

```markdown
---
name: My Workflow
allowBaseTools: true
allowBuiltinAgents: true
allowCustomAgents: true
allowMcpTools: true
allowRemoteTools: true
---
你的系统提示词。可以使用模板变量如 {{OS_TYPE}}、
{{PLATFORM}}、{{ARCH}}、{{CWD}} 和 {{TODAY}}。
```

### 前置信息选项

| 字段 | 类型 | 描述 |
|------|------|------|
| `name` | string | 工作流显示名称 |
| `icon` | string | UI 中显示的单字符图标 |
| `allowBaseTools` | boolean | 启用基础工具（Bash、Read、Edit、Write、Glob、Grep、WebSearch、WebFetch、Skill） |
| `allowBuiltinAgents` | boolean | 启用内置智能体工具（Agent_Explore、Agent_Glance、Agent_Search） |
| `allowCustomAgents` | boolean | 启用 `~/.omx/agents/` 中的自定义智能体 |
| `allowMcpTools` | boolean | 启用 MCP 服务器工具 |
| `allowRemoteTools` | boolean | 启用来自集成的远程工具（VS Code、Chrome、Office） |

### 模板变量

| 变量 | 值 |
|------|-----|
| `{{OS_TYPE}}` | Windows、macOS 或 Linux |
| `{{PLATFORM}}` | `win32`、`darwin` 或 `linux` |
| `{{ARCH}}` | `x64`、`arm64` 等 |
| `{{CWD}}` | 当前工作目录 |
| `{{TODAY}}` | 今天的日期（ISO 格式） |
