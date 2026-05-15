---
slug: /tutorial/skills
title: 技能
sidebar_label: 技能
sidebar_position: 8
---

# 技能

技能是一种可复用的指令包。它会把特定领域的指导注入当前对话里，OmniContext CLI 既可以把它们作为斜杠命令展示出来，也可以通过 `Skill` 工具动态加载。

## 内置技能

OmniContext CLI 内置四个技能：

| 技能 | 描述 |
|------|------|
| **save-atlas** | 回顾当前会话，并把有价值的代码导航知识保存到 Atlas 中。 |
| **cookbook** | MCP 服务器、技能、Agent 和工作流的配置指南。 |
| **simplify** | 复查已修改的代码，检查质量、复用和效率，然后直接修复问题。 |
| **audit** | 把项目拆分成多个区域，并对每个区域运行独立的全面审计。 |

内置技能无需额外配置即可使用。在完成一次有意义的多文件改动后，输入 `save-atlas` 就能把刚掌握的结构固定下来。

## 技能存放位置

| 位置 | 作用范围 |
|------|---------|
| `~/.omx/skills/` | 所有项目可用 |
| `.omx/skills/` | 仅当前项目可用 |
| `~/.claude/skills/` | 自动从 Claude Code 导入 |
| `.claude/skills/` | 自动从当前项目里的 Claude Code 配置导入 |

## 文件结构

每个技能都是一个目录，里面放一个 `SKILL.md`：

```
~/.omx/skills/
  review/
    SKILL.md
  release/
    SKILL.md
```

一个简单的技能大概是这样：

```markdown
---
name: Review
description: Review changed code for bugs and risky edits
---

When reviewing code in this project:

- focus on correctness first
- call out risky edge cases
- keep the final answer short and actionable
```

## 使用技能

技能会出现在斜杠命令选择器里。输入 `/`，然后继续输入技能名：

```
/review
```

如果当前工作流允许 `Skill` 工具，你也可以通过这个工具在对话里动态加载技能。

## 参数和变量

技能支持插值参数，也支持少量内置变量：

| 写法 | 含义 |
|------|------|
| `$ARGUMENTS` | 斜杠命令后面的完整参数字符串 |
| `$ARGUMENTS[0]` | 按空格切分后的第一个参数 |
| `$1`, `$2`, ... | 位置参数 |
| `${OMX_SKILL_DIR}` | 当前技能目录路径 |
| `${CLAUDE_SKILL_DIR}` | Claude 兼容技能对应的目录路径 |
| `${OMX_SESSION_ID}` | 当前会话 ID |
| `${CLAUDE_SESSION_ID}` | 当前会话 ID 的 Claude 兼容别名 |

如果技能正文里没有使用任何参数占位符，OmniContext CLI 会自动把原始参数追加到末尾。

## 前置信息字段

| 字段 | 类型 | 描述 |
|------|------|------|
| `name` | string | 技能显示名称 |
| `description` | string | 选择器里显示的简短描述 |
| `user-invocable` | boolean | 用户是否可以直接调用。默认值是 `true` |
| `disable-model-invocation` | boolean | 阻止模型通过 `Skill` 工具加载这个技能 |

## Claude Code 兼容性

OmniContext CLI 读取的技能格式和 Claude Code 一致，所以现有的 Claude 技能通常可以直接拿来用。
