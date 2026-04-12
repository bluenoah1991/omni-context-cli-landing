---
slug: /tutorial/tools
title: 工具
sidebar_label: 工具
sidebar_position: 5
---

# 工具

OmniContext CLI 有两层工具体系：一层是主模型直接调用的基础工具，另一层是运行在辅助模型上的智能体工具。

## 基础工具

这些工具由主模型直接调用，因此它们的输入和输出会进入对话历史。

| 工具 | 描述 |
|------|------|
| **Bash** | 运行 shell 命令，用于构建、安装、测试和其他终端任务。支持后台任务。 |
| **BashOutput** | 通过任务 ID 查看后台 Bash 任务的输出。 |
| **Read** | 按行号读取文件。支持 offset、limit、图片和 PDF。 |
| **Edit** | 对文件进行精确的原地文本替换。 |
| **Write** | 从头写入文件或整文件覆盖。支持 `createOnly`，让新建文件更安全。 |
| **Glob** | 按模式查找文件，并支持 `.gitignore`。 |
| **Grep** | 用正则和行号搜索文件内容。 |
| **WebSearch** | 搜索网页上的最新信息。 |
| **WebFetch** | 抓取 URL，并把网页转换成干净的 markdown。 |
| **Skill** | 将可复用的技能加载到当前对话里。 |

## 智能体工具

智能体工具运行在 agent model 上，通常是更便宜或更快的辅助模型。它们的中间工具调用、文件读取和推理过程不会进入主上下文，你只会收到最后的结果。

| 工具 | 描述 |
|------|------|
| **Agent_Explore** | 梳理项目结构，并解释代码库是如何组织的。 |
| **Agent_Glance** | 预览多个文件和目录，并给出简短摘要。 |
| **Agent_Search** | 针对某个技术问题，在整个代码库中搜索答案。 |

### 智能体工具是怎么工作的

当主模型调用 `Agent_Search("How does session persistence work?")` 这样的工具时：

1. OmniContext CLI 会在 agent model 上启动一个子智能体
2. 这个子智能体可以调用 `Glob`、`Grep`、`Read`、`Bash` 等基础工具
3. 它会收集回答问题所需的内容
4. 返回到主对话中的只有最终的精简结果
5. 中间的探索过程会被丢弃

这也是 OmniContext CLI 把探索性工作挡在昂贵上下文窗口之外的方式。

### Agent 模型

Agent 模型与默认模型分开配置。如果你没有单独设置，OmniContext CLI 会直接使用当前主模型来做智能体任务。

常见搭配是：

- 主模型用更强的推理模型
- agent model 用更快、更便宜的模型

这样可以在不影响最终答案质量的前提下，把成本压下来。

### 工具审批

如果你希望在工具执行前先确认一下：

- 用 `omx --approve-write` 为 `Bash`、`Edit` 和 `Write` 加确认
- 用 `omx --approve-all` 为所有工具调用都加确认

智能体工具、MCP 工具和远程工具本身不会直接弹确认。真正需要确认的是它们最终触发的底层基础工具。
