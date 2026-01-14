---
slug: /tutorial/subagents
title: 自定义子智能体
sidebar_label: 自定义子智能体
sidebar_position: 5
---

# 自定义子智能体

你可以创建自己的子智能体来扩展 Omx 的专业能力。

## 智能体位置

自定义智能体存储在 `~/.omx/agents/`。每个智能体在一个 `.md` 文件中定义。

## 智能体结构

智能体文件由两部分组成：

1. **Frontmatter** - 定义智能体接口的 YAML 元数据
2. **提示模板** - 智能体指令的 Handlebars 模板

### 示例：代码审查智能体

创建 `~/.omx/agents/review.md`：

```markdown
---
name: review
description: 审查代码变更并提供关于质量、bug 和改进的反馈。
allowedTools: [Bash, Read, Grep]
parameters:
  properties:
    target:
      type: string
      description: 要审查的文件或目录，或 &#x27;staged&#x27; 表示 git 暂存的更改
    focus:
      type: string
      description: 关注点 - security、performance、style 或 all
  required: [target]
---

审查目标：{{target}}
关注领域：{{#if focus}}{{focus}}{{else}}all{{/if}}

{{#if (eq target &quot;staged&quot;)}}
首先，运行 `git diff --cached` 获取暂存的更改。
{{else}}
读取指定的文件或目录以理解代码。
{{/if}}

分析代码并提供以下方面的反馈：
1. 代码质量和可读性
2. 潜在的 bug 或边界情况
3. 性能考虑
4. 安全问题（如果关注点包含 security）
5. 改进建议

将你的回复格式化为结构化的审查，每个类别一个章节。
```

## Frontmatter 参考

### name

智能体的标识符。在工具调用中用作 `agent_name`。

### description

列出可用工具时显示的简短描述。

### allowedTools

智能体可以使用的工具数组：

- `Bash` - 执行 shell 命令
- `BashOutput` - 流式 bash 输出
- `Read` - 读取文件内容
- `Write` - 写入文件内容
- `Edit` - 编辑文件
- `Glob` - 按模式查找文件
- `Grep` - 搜索文件内容

### parameters

定义智能体输入参数的 JSON Schema：

```yaml
parameters:
  properties:
    paramName:
      type: string | number | boolean
      description: 参数描述
  required: [paramName]
```

## 提示模板

提示模板使用 [Handlebars](https://handlebarsjs.com/) 语法。

### 变量插值

```handlebars
{{variableName}}
```

### 条件

```handlebars
{{#if variable}}
  variable 为真时的内容
{{else}}
  variable 为假时的内容
{{/if}}
```

### 相等检查

```handlebars
{{#if (eq variable &quot;value&quot;)}}
  variable 等于 &quot;value&quot; 时的内容
{{/if}}
```

## 使用自定义智能体

创建后，你的智能体会作为 `agent_name` 出现在可用工具中。模型可以像调用内置智能体一样调用它。

你也可以明确请求你的智能体：

```
使用 review 智能体检查暂存的更改是否有安全问题。
```
