---
slug: /tutorial/web-client
title: Web 客户端
sidebar_label: Web 客户端
sidebar_position: 12
---

# Web 客户端

Omx 包含一个基于 Web 的界面，可以在浏览器中运行，也可以作为 VS Code 扩展使用。它提供了现代化的聊天体验，支持 LaTeX 渲染和 Mermaid 图表等额外功能。

## 启动 Web 客户端

以服务器模式启动 Omx 并打开浏览器：

```bash
omx --serve --web
```

这会在 5281 端口启动 HTTP 服务器，并在默认浏览器中打开 Web UI。

### 自定义端口

使用 `--port` 参数指定不同的端口：

```bash
omx --serve --web --port 8080
```

### 自定义主机

使用 `--host` 参数绑定到指定的网络接口：

```bash
omx --serve --web --host 0.0.0.0
```

当你需要从网络上的其他设备访问 Web 客户端时，这非常有用。

### 仅服务器模式

只启动服务器而不打开浏览器：

```bash
omx --serve
```

然后手动打开 `http://localhost:5281`。

## 功能特性

Web 客户端提供图形化界面，支持：

- **浅色和深色主题** - 自动跟随系统偏好设置
- **LaTeX 渲染** - 数学公式正确显示
- **Mermaid 图表** - 支持流程图、时序图等
- **文件附件** - 可附加图片和文档（PDF）到消息中
- **拖放上传** - 直接将文件拖放到输入框即可附加
- **Diff 面板** - 文件编辑时并排查看更改
- **Token 用量** - 追踪输入和输出 Token 消耗
- **工具审批** - 启用审批模式时可确认或拒绝工具执行

## VS Code 扩展

Omx 提供 VS Code 扩展，将 Web 客户端直接嵌入到编辑器中。

### 安装

通过命令行安装扩展：

```bash
omx --install-vscode-extension
```

### 使用方法

安装后：

1. 在 VS Code 中打开一个工作区文件夹
2. 点击活动栏中的 OmniContext 图标
3. 扩展会自动启动本地 Omx 服务器
4. 开始输入与 Omx 交互

服务器在后台运行，VS Code 关闭时自动停止。

你也可以通过命令面板在完整编辑器面板中打开 OmniContext：

1. 按 `Ctrl+Shift+P`（Mac 上为 `Cmd+Shift+P`）
2. 搜索 "OmniContext: Open in Editor"
3. 聊天界面将以完整编辑器标签页的形式打开，而非侧边栏

### 优势

- 无需离开编辑器即可聊天
- 上下文与代码并排显示
- 自动管理服务器
- Diff 面板内联显示文件更改

### MCP 集成

VS Code 扩展通过 Model Context Protocol (MCP) 暴露 IDE 特定的工具：

- **打开文件** 在编辑器中
- **查看差异** 对比新旧内容
- **获取诊断信息** 来自 VS Code 的错误和警告
- **列出打开的编辑器** 当前工作区中
- **获取工作区文件夹** 用于项目上下文

使用扩展时这些工具会自动出现，让 Omx 可以直接与你的 VS Code 环境交互。

### 远程开发

VS Code 扩展支持远程开发场景：

- **Remote SSH** 连接
- **Dev Containers** 开发容器
- **GitHub Codespaces**
- **WSL**（Windows 子系统 Linux）

扩展会自动处理外部 URI，无论你的开发环境如何，Omx 都能正确打开文件和链接。
