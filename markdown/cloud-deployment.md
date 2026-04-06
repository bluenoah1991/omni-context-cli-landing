---
slug: /tutorial/cloud-deployment
title: Cloud Deployment
sidebar_label: Cloud Deployment
sidebar_position: 14
---

# Cloud Deployment

Deploy omx on a cloud VM for always-on access from any device.

## Setup

```bash
npm install -g omni-context-cli
omx --set-password your-secure-password
omx --serve --host 0.0.0.0 --tls
```

## Authentication

Always set a password when exposing omx to the network:

```bash
omx --set-password
```

## TLS Configuration

Enable HTTPS with your own certificates:

```bash
omx --serve --tls --tls-cert /path/to/cert.pem --tls-key /path/to/key.pem
```

Or use `--tls` alone for a self-signed certificate (development only).

## Running as a Service

On Linux, install omx as a systemd service:

```bash
omx --install-daemon
```

This creates a service that starts automatically on boot and restarts on failure.

## Benefits

- **Always-on access** - Connect from any device, anywhere
- **Persistent sessions** - Your conversations survive reboots
- **Shared context** - Same memory and sessions across all your devices
- **Powerful hardware** - Use a beefy VM for faster tool execution
