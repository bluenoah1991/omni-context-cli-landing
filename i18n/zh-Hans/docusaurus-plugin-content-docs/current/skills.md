---
slug: /tutorial/skills
title: 技能
sidebar_label: 技能
sidebar_position: 7
---

# 技能 (Skills)

技能是可复用的指令集，将特定领域的知识和工作流注入当前对话。通过斜杠命令调用，兼容 Claude Code 技能格式。

## 存储位置

| 位置 | 作用范围 |
|------|---------|
| `~/.omx/skills/` | 所有项目可用 |
| `.omx/skills/` | 仅当前项目可用 |

## 文件结构

每个技能是一个包含 `SKILL.md` 文件的目录：

```
~/.omx/skills/
  code-style/
    SKILL.md
  review/
    SKILL.md
```

`SKILL.md` 文件包含调用技能时注入对话的指令：

```markdown
---
name: Code Style
---

When reviewing or writing code in this project, follow these conventions:

- Use 2-space indentation
- Prefer const over let
- Use explicit return types on all exported functions
- Write tests for all public APIs
```

## 使用技能

技能会出现在斜杠命令选择器中。输入 `/` 并开始输入技能名称：

```
/code-style
```

调用后，技能的指令会注入当前对话上下文。模型会在整个会话中遵循这些指令。

## 前置信息

| 字段 | 类型 | 描述 |
|------|------|------|
| `name` | string | 技能的显示名称 |

## Claude Code 兼容性

omx 读取与 Claude Code 相同格式的技能。如果你已经为 Claude Code 设置了技能，它们可以直接在 omx 中使用。
