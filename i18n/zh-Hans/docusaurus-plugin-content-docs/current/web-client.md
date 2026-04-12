---
slug: /tutorial/web-client
title: Web 客户端
sidebar_label: Web 客户端
sidebar_position: 14
---

# Web 客户端

OmniContext CLI 自带一个浏览器客户端，适合你想在终端之外继续使用同一个助手的时候。

## 启动 Web 客户端

```bash
omx --serve --web
```

这会启动本地服务器，并在默认浏览器中打开 Web 客户端。

### 自定义端口和主机

```bash
omx --serve --web --port 8080
omx --serve --web --host 0.0.0.0
```

## 功能

- **LaTeX 渲染**，适合数学公式
- **Mermaid 图表**，适合流程图和时序图
- **语法高亮**，适合代码块
- **文件附件**，支持拖放
- **GitHub 风格 markdown** 渲染
- **自定义状态栏**，通过 `statusCommand` 注入
- **颜色主题**，和 OmniContext CLI 其他界面共用
- **会话管理**，支持回退和切换
- **模型切换**，可在对话中途完成

## 主题模式

用 `--theme` 控制亮色或暗色模式：

```bash
omx --serve --web --theme dark
omx --serve --web --theme light
omx --serve --web --theme auto
```

`auto` 会跟随系统设置。

## 颜色主题

配色方案本身和亮色/暗色模式是分开的。你可以在偏好设置里的 **Color theme** 中切换。

## 自定义状态栏

在 `~/.omx/omx.json` 或 `~/.omx/projects/<project-id>/omx.json` 中设置 `statusCommand`，就可以在终端 UI 和 Web 客户端页头显示一行 shell 输出。

```json
{
  "statusCommand": "git branch --show-current"
}
```

## 认证

你可以用密码保护 Web 客户端：

```bash
omx --set-password
```

之后如果想去掉密码：

```bash
omx --clear-password
```
