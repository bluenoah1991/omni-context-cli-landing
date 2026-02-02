---
slug: /tutorial/slash
title: 自定义 Slash 命令
sidebar_label: 自定义 Slash 命令
sidebar_position: 7
---

# 自定义 Slash 命令

Slash 命令提供快速访问常用提示和操作的方式。你可以创建自定义命令来适应你的工作流程。

## 内置命令

| 命令 | 描述 |
|---------|-------------|
| `/clear` | 开始全新的对话 |
| `/status` | 显示当前配置 |
| `/compact` | 手动压缩上下文 |
| `/rewind` | 回到之前的消息 |
| `/model` | 切换模型 |
| `/session` | 加载之前的会话 |
| `/git-commit` | 为暂存的更改生成提交消息并提交 |
| `/exit` | 退出 Omx |

## 创建自定义命令

自定义 slash 命令存储在 `~/.omx/slash/`。每个命令是一个 `.md` 文件。

### 命令结构

```markdown
---
name: command-name
description: 这个命令做什么
---

你的提示模板。

{{argument}}
```

### 示例：Review 命令

创建 `~/.omx/slash/review.md`：

```markdown
---
name: review
description: 审查当前的 git 更改
---

审查当前的 git diff 并提供以下方面的反馈：

1. 代码质量和可读性
2. 潜在的 bug 或边界情况
3. 性能影响
4. 改进建议

专注于可操作的反馈。

{{argument}}
```

用法：

```
/review 关注安全性
```

## 模板变量

### {{argument}}

命令名称后的所有内容：

```
/mycommand this is the argument
```

`{{argument}}` 变成 `this is the argument`

### 条件内容

```markdown
{{#if argument}}
处理：{{argument}}
{{else}}
未提供参数，使用默认值。
{{/if}}
```

## 最佳实践

- 每个命令专注于一个任务
- 明确说明期望的输出格式
- 使用简短但有描述性的名称（`/review` 而不是 `/r`）
- 为帮助文本编写清晰的描述

## 分享命令

Slash 命令文件只是 markdown。你可以：
- 通过 Git 与团队分享
- 在机器之间复制

所有自定义命令存放在 `~/.omx/slash/`。
