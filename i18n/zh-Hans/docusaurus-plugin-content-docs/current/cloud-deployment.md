---
slug: /tutorial/cloud-deployment
title: 云端部署
sidebar_label: 云端部署
sidebar_position: 14
---

# 云端部署

如果你希望 Web 客户端、移动端访问或桌面集成随时在线，可以把 OmniContext CLI 部署在云服务器上。

## 基本设置

安装 OmniContext CLI、设置密码，然后把服务器绑定到你想暴露出去的网卡：

```bash
npm install -g omni-context-cli
omx --set-password
omx --serve --host 0.0.0.0
```

## 由 OmniContext CLI 直接提供 HTTPS

如果你希望 HTTPS 直接由 OmniContext CLI 提供，就必须同时传入证书和私钥：

```bash
omx --serve --host 0.0.0.0 --tls --tls-cert /path/to/cert.pem --tls-key /path/to/key.pem
```

单独使用 `--tls` 是不够的，必须配合 `--tls-cert` 和 `--tls-key` 一起使用。

## 反向代理方案

另一种很常见的做法，是把 OmniContext CLI 放在 Nginx、Caddy 或 Traefik 这类反向代理后面：

- 由代理来处理 TLS
- OmniContext CLI 继续监听内部端口
- 由代理把经过认证的流量转发给 OmniContext CLI

如果你要把 OmniContext CLI 暴露到公网，这通常是最省心的方式。

## 作为服务运行

在 Linux 上，可以把 OmniContext CLI 安装成 systemd 用户服务：

```bash
omx --install-daemon
```

这样就能获得自动启动和自动重启能力。

## 安全检查清单

- 用 `omx --set-password` 设置密码
- 直接启用 TLS，或者把 OmniContext CLI 放在反向代理后面
- 如果不需要公网入口，优先考虑 Tailscale 之类的私有网络
- 用 `omx --export-project` 定期备份项目数据
