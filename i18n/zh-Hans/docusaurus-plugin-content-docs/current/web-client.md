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
- **图片粘贴** - 可直接粘贴图片到对话中

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

### 优势

- 无需离开编辑器即可聊天
- 上下文与代码并排显示
- 自动管理服务器
