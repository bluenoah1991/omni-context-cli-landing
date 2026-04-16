---
slug: /
title: 快速开始
sidebar_label: 快速开始
sidebar_position: 1
---

# 快速开始

OmniContext CLI 是一个上下文优先、零遥测的助手，起点在终端，也能延伸到 VS Code、Office、浏览器和移动端。它原生支持 Anthropic、OpenAI、Gemini 和 OpenAI Responses API，并内置工作流、智能体工具和跨会话记忆。

## 安装

```bash
npm install -g omni-context-cli
```

## 快速上手

打开项目目录并运行：

```bash
omx
```

首次启动时，可以从菜单里添加模型：

1. 按 `Escape`
2. 选择 **Manage your model list**
3. 选择 **Add a new model**
4. 填写 provider、model name、API key、API URL、context size 和 nickname

如果你更想直接使用供应商预设：

```bash
omx --list-providers
omx --add-provider openrouter --api-key sk-...
```

内置供应商预设包括 Zenmux、DeepSeek、Kimi for Coding、OpenRouter、Zhipu 和 MiniMax。

## 内置工作流

OmniContext CLI 内置四个工作流：

- **Programming** - 默认的编程工作流，适合终端和编辑器场景
- **General** - 更通用的助手工作流，适合文档、表格和日常任务
- **Analytics** - 用量分析工作流，可直接查询本地请求日志数据库
- **Recall** - 聊天历史搜索工作流，用于检索和回顾过去的会话

如果你使用桌面应用，它还会额外安装一个给 Chrome 侧边栏使用的 **Browser** 工作流。

## 关键项目文件

有几类文件会直接影响 OmniContext CLI 在仓库中的行为：

- `OMX.md` - 主助手的项目指令
- `CLAUDE.md` - 当 `OMX.md` 缺失时的回退项目指令
- `AGENTS.md` - 内置和自定义 Agent 的专用指令
- `.omx/workflows/` - 项目级自定义工作流
- `.omx/agents/` - 项目级自定义 Agent
- `.omx/skills/` - 项目级技能
- `.omx/mcp.json` - 项目级 MCP 服务器

完整的文件布局和配置范围见 [项目文件与配置](/tutorial/project-files)。

## 命令行选项

| 选项 | 描述 |
|------|------|
| `-c, --continue` | 继续上一次会话 |
| `-d, --diagnostic` | 保存请求和响应数据用于调试 |
| `-s, --serve` | 以 HTTP 服务器模式启动 OmniContext CLI，而不是终端 UI |
| `-w, --web` | 启动服务器后在浏览器中打开 Web 客户端 |
| `-p, --port <port>` | 服务器模式使用的端口 |
| `-H, --host <host>` | 服务器模式使用的主机 |
| `--workflow <preset>` | 仅为当前启动覆盖工作流 |
| `--scope <scope>` | 将配置变更保存到 `global`、`project` 或 `memory` |
| `--approve-write` | 运行 Bash、Edit 和 Write 前先确认 |
| `--approve-all` | 运行任何工具前都先确认 |
| `--install-vscode-extension` | 安装内置的 VS Code 扩展 |
| `--list-providers` | 列出内置模型供应商 |
| `--add-provider <id>` | 添加某个供应商下的全部模型 |
| `--remove-provider <id>` | 移除某个供应商下的全部模型 |
| `--api-key <key>` | 与 `--add-provider` 搭配使用的 API key |
| `--parent-pid <pid>` | 父进程退出时自动结束服务器模式 |
| `--tls` | 与 `--tls-cert` 和 `--tls-key` 一起使用时，为服务器模式启用 HTTPS |
| `--tls-cert <path>` | TLS 证书文件 |
| `--tls-key <path>` | TLS 私钥文件 |
| `--theme <mode>` | Web 客户端模式：`light`、`dark` 或 `auto` |
| `--acp` | 以 ACP agent 的方式通过 stdio 运行，供 Zed 等编辑器集成使用 |
| `--set-password [password]` | 为 Web 客户端设置密码 |
| `--clear-password` | 清除 Web 客户端密码 |
| `--install-daemon` | 在 Linux 上安装为 systemd 用户服务 |
| `--export-project <path>` | 将项目会话和记忆导出为 gzip 压缩包 |
| `--import-project <path>` | 从 gzip 压缩包导入项目会话和记忆 |
| `--index-history` | 将所有已有会话索引到 recall 数据库以支持全文搜索 |

示例：

```bash
# 开始一个新会话
omx

# 接着上次继续
omx --continue

# 打开 Web 客户端
omx --serve --web

# 这次改用另一个工作流
omx --workflow general

# 一次性添加某个供应商的全部模型
omx --add-provider zenmux --api-key zmx-...

# 为 Web 客户端设置密码
omx --set-password
```
