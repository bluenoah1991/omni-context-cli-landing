---
slug: /
title: 快速开始
sidebar_label: 快速开始
sidebar_position: 1
---

# 快速开始

omx 是一个零遥测编程助手，运行在终端中，并扩展到 VS Code、Office、浏览器和手机。它将上下文窗口视为稀缺资源，每一层都为高效利用而设计。

## 安装

```bash
npm install -g omni-context-cli
```

## 快速上手

进入你的项目目录并运行：

```bash
omx
```

omx 原生支持四种 API 协议：Anthropic、OpenAI、Gemini 和 OpenAI Responses API。

### 添加第一个模型

首次运行时需要添加模型：

1. 按 `Escape` 打开菜单
2. 选择 **Manage your model list**
3. 选择 **Add a new model**
4. 填写表单：
   - **API Type**：选择 `Anthropic`、`OpenAI`、`Gemini` 或 `OpenAI Responses API`
   - **Model Name**：模型标识符（如 `claude-sonnet-4-20250514`、`gpt-4o`）
   - **API Key**：你的 API Key
   - **API URL**：API 基础端点（如 `https://api.anthropic.com`、`https://api.openai.com/v1`）
   - **Context Size (K)**：最大上下文窗口，单位为千 Token（如 `200` 表示 200K）
   - **Nickname**：在 UI 中显示的友好名称

或者一条命令添加供应商的所有模型：

```bash
omx --list-providers
omx --add-provider openrouter --api-key sk-...
```

## 命令行选项

| 选项 | 描述 |
|------|------|
| `-c, --continue` | 继续上次会话 |
| `-d, --diagnostic` | 启用诊断模式，保存请求/响应 JSON |
| `-a, --cost-analysis` | 记录 Token 用量到 CSV |
| `-s, --serve` | 以 HTTP 服务器模式启动 |
| `-w, --web` | 在浏览器中打开 Web UI（需要 `--serve`） |
| `-p, --port <port>` | 服务器端口（默认：5281） |
| `-H, --host <host>` | 服务器主机（默认：localhost） |
| `--workflow <preset>` | 覆盖工作流预设（programming、general） |
| `--scope <scope>` | 配置保存范围：global（默认）、project 或 memory |
| `--approve-write` | 写入工具执行前需要审批（Bash、Edit、Write） |
| `--approve-all` | 所有工具执行前需要审批 |
| `--theme <mode>` | 设置 Web UI 主题模式（light、dark、auto） |
| `--install-vscode-extension` | 安装 VS Code 扩展 |
| `--list-providers` | 列出可用模型供应商 |
| `--add-provider <id>` | 从供应商添加模型（需要 `--api-key`） |
| `--remove-provider <id>` | 移除供应商的所有模型 |
| `--api-key <key>` | 用于 `--add-provider` 的 API Key |
| `--parent-pid <pid>` | 父进程退出时自动退出（需要 `--serve`） |
| `--tls` | 启用 HTTPS |
| `--acp` | 以 ACP 代理模式运行（用于 Zed 等编辑器集成） |
| `--tls-cert <path>` | TLS 证书文件路径 |
| `--tls-key <path>` | TLS 私钥文件路径 |
| `--lang <code>` | 设置 UI 语言（如 `en-US`、`zh-CN`） |
| `--set-password [password]` | 设置 Web UI 密码 |
| `--clear-password` | 移除密码并禁用认证 |
| `--install-daemon` | 安装为 systemd 服务（仅 Linux） |
| `--export-project <path>` | 导出项目数据到 gzip 归档 |
| `--import-project <path>` | 从 gzip 归档导入项目数据 |

示例：

```bash
# 新建会话
omx

# 继续上次会话
omx --continue

# 调试 API 调用
omx --diagnostic

# 在浏览器中打开 Web UI
omx --serve --web

# 安装 VS Code 扩展
omx --install-vscode-extension

# 文件修改工具需要审批
omx --approve-write

# 使用特定工作流
omx --workflow general
```
