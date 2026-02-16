---
slug: /tutorial/obsidian-plugin
title: Obsidian 插件
sidebar_label: Obsidian 插件
sidebar_position: 19
---

# Obsidian 插件

OmniContext Obsidian 插件将 Omx 带入你的知识库。启用后，Obsidian 内会打开一个聊天面板，你可以让 Omx 阅读、创建、整理和搜索笔记，它能完整访问你的仓库结构、标签、反向链接和元数据。

与浏览器或 Office 集成不同，Obsidian 插件是独立运行的。它会自动启动 OmniContext 服务器并在后台完成所有连接，无需桌面应用。

## 步骤 1：安装 OmniContext CLI

如果你还没有安装，请全局安装 CLI：

```bash
npm install -g omni-context-cli && omx
```

运行一次 `omx` 完成初始设置（配置模型服务商等），然后退出即可。

## 步骤 2：安装插件

1. 从 [发布页面](https://github.com/bluenoah1991/omni-context-cli-landing/releases) 下载最新的 **OmniContext Obsidian** 插件包（.zip）
2. 解压文件，你会得到一个名为 **omni-context** 的文件夹，包含 `main.js`、`manifest.json` 和 `styles.css`
3. 将 **omni-context** 文件夹移动到你仓库的插件目录：`<vault>/.obsidian/plugins/omni-context/`

如果 `plugins` 文件夹不存在，请先创建它。

## 步骤 3：启用插件

1. 打开 Obsidian
2. 前往 **Settings > Community plugins**
3. 在列表中找到 **OmniContext**，将其开关打开

你会看到左侧功能栏出现一个聊天图标。

## 步骤 4：打开面板

点击功能栏中的聊天图标（或使用命令面板搜索 **Open OmniContext**）。插件会启动一个本地服务器，并在侧边面板中加载聊天界面。

首次启动需要几秒钟等待服务器就绪。之后再打开就是瞬间完成。

## 步骤 5：选择模型

点击面板右上角的齿轮图标打开 **Settings**。

在 **Models** 标签页中配置：

- **Current Model** -- 当前会话使用的模型
- **Default Model** -- 新会话默认使用的模型
- **Agent Model** -- 后台智能体任务使用的模型

完成后点击 **Save**。

## 使用方法

面板打开后，直接输入你的问题。Omx 可以看到你的仓库并直接操作。

以下是一些你可以尝试的操作：

**查找和阅读笔记：**
> 我的"项目路线图"笔记写了什么？

**创建新笔记：**
> 创建一个名为 "Meeting Notes/2026-02-16" 的新笔记，写上今天站会的总结。

**整理仓库：**
> 把 "old-ideas.md" 重命名为 "archive/Old Ideas.md"。

**探索关联：**
> 有哪些笔记链接到了我的"架构设计"页面？

**使用标签：**
> 我的仓库里哪些标签用得最多？

**获取元数据：**
> 列出 "Design Doc.md" 里的所有标题和 frontmatter。

**追加内容：**
> 在我的日记笔记里添加一个新章节，写上这些待办事项。

为获得最佳体验，请在 Omx 菜单中切换到 **Assistant** 工作流预设。此模式专为与 Obsidian、浏览器和 Office 等应用交互而设计。

## 可用工具

| 类别 | Omx 可以做什么 |
|------|---------------|
| **读取** | 读取笔记内容、获取当前活动笔记、列出已打开的标签页 |
| **写入** | 创建、修改、追加、重命名和删除笔记 |
| **导航** | 打开笔记（可指定行号）、列出文件夹中的笔记 |
| **元数据** | Frontmatter、标题、内部链接、标签、嵌入内容、章节 |
| **图谱** | 反向链接、链接解析、全仓库标签统计 |
| **仓库** | 仓库名称、路径、文件夹树、文件数量 |

## 工作原理

插件在后台运行两个服务：

- **OmniContext 服务器** -- 与 CLI 和桌面应用相同的服务器，作为子进程自动启动。负责 AI 聊天、模型路由和所有核心功能。
- **MCP IDE 服务器** -- 一个本地 WebSocket 服务器，通过模型上下文协议（MCP）将你的仓库暴露给 OmniContext。它提供上面列出的仓库相关工具，并实时广播你当前的光标选区。

两者都在你打开面板时启动，关闭插件时停止。一切都在你的本地机器上运行。

## 故障排除

**面板显示 "Failed to start"：**
确保 OmniContext CLI 已安装且可访问。在终端中运行 `omx --version` 来验证。如果你使用 nvm 等版本管理器安装的 Node.js，插件可能找不到正确的二进制文件 -- 尝试在终端中运行一次 `omx` 来生成可执行文件信息。

**面板一直停在 "Starting server..."：**
服务器有 60 秒超时。如果在这段时间内未启动，请在终端中手动运行 `omx --serve` 检查错误。常见原因：端口冲突、缺少 API 密钥或配置文件损坏。

**工具不起作用：**
关闭并重新打开面板以重启连接。如果仍然不行，在 Obsidian 设置中禁用并重新启用插件。

**插件未出现在 Community plugins 中：**
确保文件夹结构正确：`<vault>/.obsidian/plugins/omni-context/main.js`。该插件仅支持桌面端，不会出现在 Obsidian 移动版中。

**使用多个仓库：**
Obsidian 插件是按仓库安装的，因此你需要在每个仓库中单独安装插件。或者，你可以创建符号链接，从每个仓库的插件目录指向一个共享副本。
