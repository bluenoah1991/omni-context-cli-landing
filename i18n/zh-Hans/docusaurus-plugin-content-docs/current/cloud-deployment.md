---
slug: /tutorial/cloud-deployment
title: 公有云部署
sidebar_label: 公有云部署
sidebar_position: 16
---

# 公有云部署

得益于内置的身份验证和 TLS 支持，你可以将 Omx 部署到公有云服务器上，从任何设备随时随地访问你的 AI 编程助手——笔记本、手机或平板。

## 为什么部署到云端

在云端虚拟机上运行 Omx，你可以获得：

- **全天候可用** -- 不需要保持本地电脑开机
- **一致的环境** -- 无论从哪里连接，项目文件和配置始终一致
- **远程协作** -- 使用相同密码与团队成员共享访问
- **强大算力** -- 利用云端 GPU 或大内存实例处理大型项目

## 前置要求

你需要：

- 一台安装了 Node.js 18+ 的 Linux 云服务器（Ubuntu、Debian 等）
- 一个指向服务器的域名（推荐，用于 TLS 证书）
- 全局安装 Omx：`npm install -g omni-context-cli`

## 快速部署

### 1. 安装 Omx

```bash
npm install -g omni-context-cli
```

### 2. 设置密码

这对公网部署至关重要。绝对不要在没有身份验证的情况下将 Omx 暴露到公网。

```bash
omx --set-password
```

### 3. 启动服务器

```bash
omx --serve --host 0.0.0.0 --port 5281
```

现在可以通过 `http://<你的服务器IP>:5281` 访问 Web UI。访问前会先出现登录页面。

## 启用 TLS (HTTPS)

生产环境部署务必使用 HTTPS。Omx 内置 TLS 支持，可以在同一端口同时处理 HTTP 和 HTTPS 连接。

### 使用 Let's Encrypt 和 Certbot

```bash
# 安装 certbot
sudo apt install certbot

# 为你的域名申请证书
sudo certbot certonly --standalone -d omx.example.com

# 证书文件保存在：
#   /etc/letsencrypt/live/omx.example.com/fullchain.pem
#   /etc/letsencrypt/live/omx.example.com/privkey.pem
```

### 使用 TLS 启动

```bash
omx --serve --host 0.0.0.0 --port 443 \
  --tls \
  --tls-cert /etc/letsencrypt/live/omx.example.com/fullchain.pem \
  --tls-key /etc/letsencrypt/live/omx.example.com/privkey.pem
```

现在可以通过 `https://omx.example.com` 访问你的实例。

服务器会自动检测每个传入连接是 HTTP 还是 HTTPS，并在同一端口上处理两者。

### 使用反向代理

也可以将 Omx 放在 Nginx 或 Caddy 后面，由代理处理 TLS：

**Nginx 示例：**

```nginx
server {
    listen 443 ssl;
    server_name omx.example.com;

    ssl_certificate /etc/letsencrypt/live/omx.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/omx.example.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:5281;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

**Caddy 示例（自动 TLS）：**

```
omx.example.com {
    reverse_proxy localhost:5281
}
```

Caddy 会自动处理证书的申请和续期。

## 作为系统服务运行

使用内置的守护进程安装器创建 systemd 服务，实现开机自启和故障自动重启：

```bash
cd /path/to/your/project
sudo omx --install-daemon
```

这会在 `/etc/systemd/system/omni-context-<项目名>.service` 创建 systemd 单元，它会：

- 以服务器模式在当前工作目录启动 Omx
- 崩溃时自动重启
- 系统启动时自动运行

使用标准的 systemd 命令管理服务：

```bash
# 查看状态
systemctl status omni-context-myproject

# 查看日志
journalctl -u omni-context-myproject -f

# 重启
systemctl restart omni-context-myproject

# 停止
systemctl stop omni-context-myproject
```

### 配合 TLS 使用

守护进程安装器会自动识别 TLS 参数：

```bash
sudo omx --install-daemon \
  --tls --tls-cert /path/to/cert.pem --tls-key /path/to/key.pem
```

## 安全检查清单

在将 Omx 暴露到公网之前：

- **设置强密码** -- 使用 `omx --set-password`，设置一个长且随机的密码
- **启用 TLS** -- 通过 Omx 内置参数或反向代理
- **配置防火墙** -- 只开放需要的端口（如 443）
- **保持更新** -- 定期运行 `npm update -g omni-context-cli`
- **审查工具权限** -- 使用 `--approve-write` 要求文件写入前确认
- **限制文件访问** -- 从专门的项目目录运行 Omx，而不是主目录

## 云服务商示例

### 阿里云 / 腾讯云 ECS

```bash
# 在 Ubuntu 云服务器上
sudo apt update && sudo apt install -y nodejs npm
npm install -g omni-context-cli

# 配置 API 密钥
omx --add-provider openai --api-key sk-...

# 设置鉴权并启动
omx --set-password
cd /home/ubuntu/my-project
sudo omx --install-daemon
```

确保安全组已放行你选择的端口的入站流量。

### AWS EC2

```bash
# 在 Ubuntu EC2 实例上
sudo apt update && sudo apt install -y nodejs npm
npm install -g omni-context-cli

# 配置 API 密钥
omx --add-provider openai --api-key sk-...

# 设置鉴权并启动
omx --set-password
cd /home/ubuntu/my-project
sudo omx --install-daemon
```

确保安全组允许你选择的端口的入站流量。

## 多项目部署

每个项目目录运行 `--install-daemon` 时会创建独立的 systemd 服务。服务名由目录名派生：

```bash
cd /home/ubuntu/project-alpha
sudo omx --install-daemon --port 5281

cd /home/ubuntu/project-beta
sudo omx --install-daemon --port 5282
```

这样你就有了独立的 Omx 实例，每个实例拥有自己的上下文、会话和记忆。
