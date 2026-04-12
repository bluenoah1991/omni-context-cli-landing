---
slug: /tutorial/mobile-access
title: 移动端访问
sidebar_label: 移动端访问
sidebar_position: 15
---

# 移动端访问

你可以把 Web 客户端暴露到本地网络，或者通过私有隧道，从手机或平板上使用 OmniContext CLI。

## 本地网络

把服务器绑定到所有网卡：

```bash
omx --serve --host 0.0.0.0
```

然后在手机上打开 `http://<你的IP>:5281`。

在 macOS 或 Linux 上，可以用 `ifconfig` 查本地 IP；在 Windows 上用 `ipconfig`。

## 通过 Tailscale 远程访问

如果你想在不同网络之间更安全地访问：

1. 在电脑和手机上都安装 [Tailscale](https://tailscale.com)
2. 运行 `omx --serve --host 0.0.0.0` 启动 OmniContext CLI
3. 在手机上打开 `http://<tailscale-ip>:5281`

## 认证

在把服务暴露到本机之外之前，先设置一个密码：

```bash
omx --set-password
```

## 提示

- Web 客户端是完全响应式的，在小屏幕上也很好用
- 模型切换器很适合做快速的移动端查看
- 文件附件可以直接通过手机的文件选择器上传
- 如果你需要直接对公网开放，请看 [云端部署](/tutorial/cloud-deployment)
