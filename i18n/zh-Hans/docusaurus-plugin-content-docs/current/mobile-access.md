---
slug: /tutorial/mobile-access
title: 移动端访问
sidebar_label: 移动端访问
sidebar_position: 13
---

# 移动端访问

通过启用网络访问的服务器模式，从手机或平板访问 omx。

## 本地网络

将主机绑定到所有接口：

```bash
omx --serve --host 0.0.0.0
```

然后在手机上打开 `http://<你的IP>:5281`。使用 `ipconfig`（Windows）或 `ifconfig`（macOS/Linux）查找本地 IP。

## 通过 Tailscale 远程访问

安全地从任何地方访问：

1. 在电脑和手机上都安装 [Tailscale](https://tailscale.com)
2. 启动 omx：

```bash
omx --serve --host 0.0.0.0
```

3. 在手机上打开 `http://<tailscale-ip>:5281`

## 认证

设置密码保护实例：

```bash
omx --set-password
```

首次连接时会要求输入密码。

## 提示

- Web UI 完全响应式，在手机屏幕上效果良好
- 使用模型切换器选择适合快速移动交互的模型
- 文件附件通过手机的文件选择器工作
