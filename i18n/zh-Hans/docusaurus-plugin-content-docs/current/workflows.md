---
slug: /tutorial/workflows
title: 工作流
sidebar_label: 工作流
sidebar_position: 4
---

# 工作流

工作流决定 OmniContext CLI 的行为方式：系统提示词、可用工具，以及整体交互风格。

## 内置预设

| 工作流 | 使用场景 | 描述 |
|--------|----------|------|
| **Programming** | 终端、VS Code | 默认的编程工作流。包含基础工具、内置智能体工具、自定义 Agent、MCP 和远程工具。 |
| **General** | 桌面应用、Office | 更通用的助手工作流，适合文档、表格、演示文稿和日常任务。 |
| **Analytics** | Token 开销、延迟 | 用量分析工作流，可直接用 SQL 查询本地请求日志数据库。 |
| **Recall** | 聊天历史 | 按关键词检索和回顾过去会话的搜索工作流。 |

如果你使用桌面应用，它还会额外安装两个工作流：

- **Browser** - 给 Chrome 侧边栏使用，带有标签页、页面、书签、历史记录和截图访问能力。
- **Memo** - 用于个人提醒和通知。在 macOS 上，备忘事项会通过原生桥接直接同步进系统的"提醒事项"；在其他平台上则回退到本地 JSON 文件存储。

你可以在启动时通过 `omx --workflow general` 切换工作流，也可以在会话中通过菜单切换。

## 自定义工作流

把一个 markdown 文件放进 `~/.omx/workflows/` 或 `.omx/workflows/` 就能创建自己的工作流。文件名就是你在 `--workflow` 中使用的工作流 ID。

```markdown
---
name: Review
icon: "◈"
allowBaseTools: [Read, Glob, Grep, WebFetch, Skill]
allowBuiltinAgents: true
allowCustomAgents: false
allowMcpTools: true
allowRemoteTools: false
---
You are a careful reviewer. Focus on correctness, edge cases,
and practical fixes. Keep the final answer concise.
```

YAML frontmatter 用来定义工具过滤规则，markdown 正文会成为系统提示词。

内置工作流总是最先加载，不能被同名自定义文件覆盖。对于自定义补充项，`.omx/workflows/` 里的项目级工作流优先于 `~/.omx/workflows/` 里的用户级工作流。

### 前置信息选项

| 字段 | 类型 | 描述 |
|------|------|------|
| `name` | string | UI 中显示的名称 |
| `icon` | string | 工作流选择器中显示的单字符图标 |
| `allowBaseTools` | boolean 或 string[] | 启用全部基础工具，或仅白名单中的工具 |
| `allowBuiltinAgents` | boolean 或 string[] | 启用全部内置智能体工具，或仅白名单中的工具 |
| `allowCustomAgents` | boolean 或 string[] | 启用 `~/.omx/agents/` 或 `.omx/agents/` 中的自定义 Agent |
| `allowMcpTools` | boolean 或 string[] | 启用 MCP 工具 |
| `allowRemoteTools` | boolean 或 string[] | 启用来自 VS Code、Chrome、Office 等集成的远程工具 |

### 模板变量

可以在工作流正文中使用这些变量：

| 变量 | 值 |
|------|-----|
| `{{OS_TYPE}}` | `Windows`、`macOS` 或 `Linux` |
| `{{PLATFORM}}` | `win32`、`darwin` 或 `linux` |
| `{{ARCH}}` | `x64`、`arm64` 等 |
| `{{CWD}}` | 当前工作目录 |
| `{{TODAY}}` | 今天的 ISO 格式日期 |
