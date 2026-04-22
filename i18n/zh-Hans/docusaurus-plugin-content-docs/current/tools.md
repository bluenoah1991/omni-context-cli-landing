---
slug: /tutorial/tools
title: 工具
sidebar_label: 工具
sidebar_position: 5
---

# 工具

OmniContext CLI 有两层工具体系：一层是主模型直接调用的内置工具，另一层是运行在辅助模型上的智能体工具。

## 内置工具

这些工具由主模型直接调用，因此它们的输入和输出会进入对话历史。

| 工具 | 描述 |
|------|------|
| **AnalyticsQuery** | 查询本地请求日志数据库，用于分析用量、延迟、缓存和成本。 |
| **Bash** | 运行 shell 命令，用于构建、安装、测试和其他终端任务。支持后台任务。 |
| **BashOutput** | 通过任务 ID 查看后台 Bash 任务的输出。 |
| **Edit** | 对文件进行精确的原地文本替换。 |
| **Glob** | 按模式查找文件，并支持 `.gitignore`。 |
| **Grep** | 用正则和行号搜索文件内容。 |
| **LandmarkDelete** | 从地标导航系统中删除一个 layer。 |
| **LandmarkList** | 列出当前项目里已保存的地标 layer。 |
| **LandmarkRead** | 读取某个地标 layer，包括它关联的文件、目录和符号。 |
| **LandmarkUpdate** | 创建或更新地标 layer，让有价值的代码导航知识能跨会话保留下来。 |

Landmarks 更适合被看成一套独立的导航子系统，而不是一个零散小功能。想看完整说明，可以直接跳到 [地标导航](/tutorial/landmarks)。
| **MemoryDelete** | 删除已保存的项目记忆要点。 |
| **MemoryList** | 列出当前项目里已保存的跨会话记忆要点。 |
| **MemoryUpdate** | 修改已有记忆要点的文本或分数。 |
| **Read** | 按行号读取文件。支持 offset、limit、图片和 PDF。 |
| **RecallRead** | 读取某个 recall 搜索命中的过去会话上下文。 |
| **RecallSearch** | 用全文检索搜索已经索引的历史会话。 |
| **Skill** | 将可复用的技能加载到当前对话里。 |
| **WebFetch** | 抓取 URL，并把网页转换成干净的 markdown。 |
| **WebSearch** | 搜索网页上的最新信息。 |
| **Write** | 从头写入文件或整文件覆盖。支持 `createOnly`，让新建文件更安全。 |

## 智能体工具

智能体工具运行在 agent model 上，通常是更便宜或更快的辅助模型。它们的中间工具调用、文件读取和推理过程不会进入主上下文，你只会收到最后的结果。

| 工具 | 描述 |
|------|------|
| **Agent_Explore** | 梳理项目结构，并解释代码库是如何组织的。 |
| **Agent_Glance** | 预览多个文件和目录，并给出简短摘要。 |
| **Agent_Search** | 针对某个技术问题，在整个代码库中搜索答案。 |
| **Agent_Recall** | 搜索过去的聊天会话，并围绕某个主题总结发生了什么。 |
| **Agent_Review** | 用新的视角复查当前对话里最近完成的工作。 |
| **Agent_Deduce** | 通过只读探索调查 bug 或复杂问题，并给出修复建议。 |

### 智能体工具是怎么工作的

当主模型调用 `Agent_Search("How does session persistence work?")` 这样的工具时：

1. OmniContext CLI 会在 agent model 上启动一个子智能体
2. 这个子智能体可以调用 `Glob`、`Grep`、`Read`、`Bash` 等内置工具
3. 它会收集回答问题所需的内容
4. 返回到主对话中的只有最终的精简结果
5. 中间的探索过程会被丢弃

有些内置智能体工具，比如 `Agent_Review` 和 `Agent_Deduce`，还可以继承当前对话上下文，这样你就不用把最近的工作重新描述一遍。

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

智能体工具、MCP 工具和远程工具本身不会直接弹确认。真正需要确认的是它们最终触发的底层内置工具。
