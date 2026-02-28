---
slug: /tutorial/cloud-deployment
title: Cloud Deployment
sidebar_label: Cloud Deployment
sidebar_position: 16
---

# Cloud Deployment

With built-in authentication and TLS support, you can deploy Omx on a public cloud server and access your AI coding assistant from anywhere -- your laptop, phone, or tablet.

## Why Deploy to the Cloud

Running Omx on a cloud VM gives you:

- **Always-on access** -- no need to keep your local machine running
- **Consistent environment** -- same project files and config wherever you connect from
- **Remote collaboration** -- share access with teammates using the same password
- **Powerful hardware** -- leverage cloud GPUs or high-memory instances for large projects

## Prerequisites

You'll need:

- A Linux cloud VM (Ubuntu, Debian, etc.) with Node.js 18+ installed
- A domain name pointing to your server (recommended for TLS)
- Omx installed globally: `npm install -g omni-context-cli`

## Quick Setup

### 1. Install Omx

```bash
npm install -g omni-context-cli
```

### 2. Set a Password

This is critical for public-facing deployments. Never run Omx on a public server without authentication.

```bash
omx --set-password
```

### 3. Start the Server

```bash
omx --serve --host 0.0.0.0 --port 5281
```

You can now access the web UI at `http://<your-server-ip>:5281`. The login screen will appear before you can use it.

## Enabling TLS (HTTPS)

For production deployments, always use HTTPS. Omx has built-in TLS support that accepts both HTTP and HTTPS on the same port.

### Using Let's Encrypt with Certbot

```bash
# Install certbot
sudo apt install certbot

# Get a certificate for your domain
sudo certbot certonly --standalone -d omx.example.com

# The certificate files are saved to:
#   /etc/letsencrypt/live/omx.example.com/fullchain.pem
#   /etc/letsencrypt/live/omx.example.com/privkey.pem
```

### Starting with TLS

```bash
omx --serve --host 0.0.0.0 --port 443 \
  --tls \
  --tls-cert /etc/letsencrypt/live/omx.example.com/fullchain.pem \
  --tls-key /etc/letsencrypt/live/omx.example.com/privkey.pem
```

Now access your instance at `https://omx.example.com`.

The server automatically detects whether each incoming connection is HTTP or HTTPS and handles both on the same port.

### Using a Reverse Proxy

Alternatively, put Omx behind Nginx or Caddy and let the proxy handle TLS:

**Nginx example:**

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

**Caddy example (auto TLS):**

```
omx.example.com {
    reverse_proxy localhost:5281
}
```

Caddy handles certificate provisioning and renewal automatically.

## Running as a System Service

Use the built-in daemon installer to create a systemd service that starts on boot and restarts on failure:

```bash
cd /path/to/your/project
sudo omx --install-daemon
```

This creates a systemd unit at `/etc/systemd/system/omni-context-<project>.service` that:

- Starts Omx in server mode with your current working directory
- Restarts automatically on crashes
- Launches on system boot

Manage the service with standard systemd commands:

```bash
# Check status
systemctl status omni-context-myproject

# View logs
journalctl -u omni-context-myproject -f

# Restart
systemctl restart omni-context-myproject

# Stop
systemctl stop omni-context-myproject
```

### With TLS

The daemon installer picks up TLS flags automatically:

```bash
sudo omx --install-daemon \
  --tls --tls-cert /path/to/cert.pem --tls-key /path/to/key.pem
```

## Security Checklist

Before exposing Omx to the public internet:

- **Set a strong password** -- use `omx --set-password` with a long, random password
- **Enable TLS** -- either through Omx's built-in flag or a reverse proxy
- **Use a firewall** -- only open the ports you need (e.g. 443)
- **Keep Omx updated** -- run `npm update -g omni-context-cli` regularly
- **Review tool permissions** -- use `--approve-write` to require confirmation before file writes
- **Restrict file access** -- run Omx from a dedicated project directory, not your home folder

## Cloud Provider Examples

### AWS EC2

```bash
# On an Ubuntu EC2 instance
sudo apt update && sudo apt install -y nodejs npm
npm install -g omni-context-cli

# Configure your API keys
omx --add-provider openai --api-key sk-...

# Set auth and start
omx --set-password
cd /home/ubuntu/my-project
sudo omx --install-daemon
```

Make sure your security group allows inbound traffic on your chosen port.

### DigitalOcean / Vultr / Linode

The setup is the same on any Linux VPS. Just SSH in, install Node.js and Omx, set a password, and start the server.

## Multiple Projects

Each project directory gets its own systemd service when you run `--install-daemon`. The service name is derived from the directory name:

```bash
cd /home/ubuntu/project-alpha
sudo omx --install-daemon --port 5281

cd /home/ubuntu/project-beta
sudo omx --install-daemon --port 5282
```

This gives you separate Omx instances, each with their own context, sessions, and memory.
