---
slug: /tutorial/web-client
title: Web 客户端
sidebar_label: Web 客户端
sidebar_position: 12
---

# Web 客户端

omx 内置浏览器 UI，支持丰富的渲染功能。

## 启动 Web 客户端

```bash
omx --serve --web
```

启动服务器并在默认浏览器中打开 Web UI。

### 自定义端口和主机

```bash
omx --serve --web --port 8080
omx --serve --web --host 0.0.0.0
```

## 功能

- **LaTeX 渲染** - 使用 KaTeX 渲染数学表达式
- **Mermaid 图表** - 流程图、时序图等
- **语法高亮** - 代码块支持语言特定高亮
- **文件附件** - 拖放文件到聊天中
- **Markdown** - 完整的 GitHub 风格 Markdown 支持
- **颜色主题** - 17 种内置颜色预设，支持亮色和暗色模式
- **会话管理** - 切换会话、回退消息
- **模型切换** - 在对话中切换模型

## 颜色主题

通过命令行设置颜色主题：

```bash
omx --serve --web --theme crystal
```

可用预设：crystal、splash、horizon、neon、forest、indigo、rosette、retro、tangerine、emerald、earth、twilight、inferno、sunshine、blossom、cocoa、nautical。

## 认证

设置 Web UI 密码：

```bash
omx --set-password mypassword
```

移除密码：

```bash
omx --clear-password
```
