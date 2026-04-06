---
slug: /tutorial/cloud-deployment
title: 云端部署
sidebar_label: 云端部署
sidebar_position: 14
---

# 云端部署

将 omx 部署到云端虚拟机，实现随时随地的访问。

## 设置

```bash
npm install -g omni-context-cli
omx --set-password your-secure-password
omx --serve --host 0.0.0.0 --tls
```

## 认证

暴露到网络时务必设置密码：

```bash
omx --set-password
```

## TLS 配置

使用自有证书启用 HTTPS：

```bash
omx --serve --tls --tls-cert /path/to/cert.pem --tls-key /path/to/key.pem
```

或单独使用 `--tls` 生成自签名证书（仅用于开发）。

## 作为服务运行

在 Linux 上，将 omx 安装为 systemd 服务：

```bash
omx --install-daemon
```

创建一个开机自动启动、失败自动重启的服务。

## 优势

- **持续在线** - 从任何设备、任何地方连接
- **持久化会话** - 对话在重启后保留
- **共享上下文** - 所有设备共享相同的记忆和会话
- **强大硬件** - 使用高性能虚拟机加速工具执行
