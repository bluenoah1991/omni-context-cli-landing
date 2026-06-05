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

如果要打开 Image Workshop：

```bash
omx --serve --image-workshop
```

服务器运行时，也可以手动打开 `http://localhost:5281/imageWorkshop`。

### 自定义端口和主机

```bash
omx --serve --web --port 8080
omx --serve --web --host 0.0.0.0
```

## 功能

- **LaTeX 渲染**，适合数学公式
- **Mermaid 图表**，适合流程图和时序图
- **语法高亮**，适合代码块
- **文件附件**，支持拖放，上传图像自动标准化处理
- **GitHub 风格 markdown** 渲染
- **自定义状态栏**，通过 `statusCommand` 注入
- **颜色主题**，和 OmniContext CLI 其他界面共用
- **会话管理**，支持回退和切换
- **模型切换**，可在对话中途完成
- **Image Workshop**，支持图像与**视频**生成（如 Google Veo、xAI Video）、基于参考图和 mask 的编辑、**隐私模式**、结果会话，以及打开 artifacts 文件夹
- **响应语言与工作语言**（终端里也可用 `/language` 和 `/work-language`）
- 可选的**展示层翻译**，让界面显示语言与模型回复语言分离
- **TTS 朗读**，利用浏览器内置语音合成朗读助手回复
- **Diff 渲染**，对返回 unified patch 的工具输出进行行内增删高亮展示
- **缓存倒计时**，页头显示当前 Anthropic 提示词缓存的剩余有效时间
- **记忆面板**，可直接在浏览器中浏览、评分和编辑跨会话关键要点
- **登录限流**，多次登录失败后自动进入冷却倒计时

## 语言

- **响应语言**（`/language`）控制助手用什么语言回复你。
- **工作语言**（`/work-language`）可在发送给模型前翻译你输入的内容，适合用一种语言写、让模型用另一种语言思考。

在设置里开启展示层翻译后，Web 客户端还可以缓存助手消息的翻译显示文本。

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
