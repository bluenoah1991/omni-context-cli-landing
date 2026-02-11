---
slug: /tutorial/skills
title: 自定义 Skills
sidebar_label: 自定义 Skills
sidebar_position: 9
---

# 自定义 Skills

Skills 是可重用的指令集，可以扩展 Omx 的专业知识和工作流程。与智能体（自主执行工具）不同，skills 提供详细的指令，模型在当前对话中遵循这些指令。

## 什么是 Skills？

Skills 是一种教会 Omx 如何处理特定任务的方式。当你加载一个 skill 时，它的指令就可用于指导模型的行为。这对以下情况很有用：

- 复杂的多步骤工作流程
- 领域特定的知识
- 项目特定的约定
- 可重用的模板和模式

## Skill 位置

Skills 存储在 `~/.omx/skills/`（用户级）或项目根目录下的 `.omx/skills/`（项目级）。每个 skill 都在自己的目录中。项目级 skill 在同名时优先于用户级 skill。

```
~/.omx/skills/
├── my-skill/
│   ├── SKILL.md      # 必需：skill 定义
│   └── templates/    # 可选：额外资源
└── another-skill/
    └── SKILL.md
```

## Skill 结构

Skill 在 `SKILL.md` 文件中定义，包含 frontmatter 和指令：

```markdown
---
name: skill-name
description: 这个 skill 做什么的简短描述
---

## 指令

skill 的详细指令...

## 使用示例

展示如何使用这个 skill...
```

### Frontmatter 字段

| 字段 | 必需 | 描述 |
|-------|----------|-------------|
| `name` | 是 | Skill 的唯一标识符 |
| `description` | 是 | 在 skill 列表中显示的简短描述 |

## 创建 Skill

创建 `~/.omx/skills/code-style/SKILL.md`：

```markdown
---
name: code-style
description: 项目特定的编码约定
---

## 代码风格指南

### TypeScript 约定
- 对象形状使用 `interface`，联合类型使用 `type`
- 公共函数始终指定返回类型

### 命名约定
- 组件：PascalCase
- Hooks：camelCase 带 `use` 前缀
- 文件：kebab-case
```

## 使用 Skills

### 加载 Skill

要求 Omx 加载一个 skill：

```
加载 api-design skill
```

或直接使用 skill 工具：

```
使用 skill 工具加载 code-style
```

### 上下文中的 Skill

加载后，skill 的指令就可以供模型使用。例如，加载 `api-design` 后：

```
设计一个用户认证的 API
```

模型会遵循你的 skill 中定义的约定。

## Skills vs 智能体 vs Slash 命令

| 功能 | 用途 | 执行方式 |
|---------|---------|-----------|
| **Skills** | 提供指令/知识 | 模型在上下文中遵循指令 |
| **智能体** | 执行自主任务 | 模型委托给带工具的子智能体 |
| **Slash 命令** | 快速提示快捷方式 | 展开为完整提示，模型响应 |

在以下情况选择 skills：
- 为会话建立约定
- 提供领域知识
- 在没有自动化的情况下指导行为

在以下情况选择智能体：
- 自动化多步骤任务
- 自主执行命令
- 自动处理错误

## 渐进式上下文

Skills 采用渐进式披露。系统提示中只显示 skill 名称和描述。当模型调用 skill 工具时，Omx 返回完整指令以及 skill 的基础目录路径。

Skills 只在 **Normal** 预设下可用，其他预设不会把 skills 加入系统提示。

你的 skill 可以引用其目录中的额外文件：

```markdown
---
name: templates
description: 项目模板和样板代码
---

## 可用模板

根据需要从这个 skill 的基础目录读取文件：

- `templates/component.tsx` - 标准组件结构
- `templates/test.ts` - 测试文件结构
```

模型可以在需要时使用标准 read 工具读取这些文件，保持上下文使用高效。

## 最佳实践

- 每个 skill 专注于单一关注点
- 编写具体、可操作的指令
- 随项目演进更新 skills
- 通过版本控制或团队 wiki 分享
