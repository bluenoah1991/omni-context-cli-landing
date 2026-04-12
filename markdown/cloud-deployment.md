---
slug: /tutorial/cloud-deployment
title: Cloud Deployment
sidebar_label: Cloud Deployment
sidebar_position: 14
---

# Cloud Deployment

Run OmniContext CLI on a cloud VM when you want a shared, always-on instance for the web client, mobile access, or desktop integrations.

## Basic Setup

Install OmniContext CLI, set a password, and bind the server to the network interface you want to expose:

```bash
npm install -g omni-context-cli
omx --set-password
omx --serve --host 0.0.0.0
```

## Direct HTTPS from OmniContext CLI

If you want OmniContext CLI itself to serve HTTPS, provide both a certificate and a private key:

```bash
omx --serve --host 0.0.0.0 --tls --tls-cert /path/to/cert.pem --tls-key /path/to/key.pem
```

`--tls` is not enough on its own. You need both `--tls-cert` and `--tls-key`.

## Reverse Proxy Setup

Another common setup is to run OmniContext CLI behind a reverse proxy such as Nginx, Caddy, or Traefik:

- let the proxy handle TLS
- keep OmniContext CLI bound to an internal port
- forward authenticated traffic to OmniContext CLI

This is usually the simplest way to expose OmniContext CLI on the public internet.

## Running as a Service

On Linux, install OmniContext CLI as a systemd user service:

```bash
omx --install-daemon
```

That gives you automatic startup and restart behavior.

## Safety Checklist

- set a password with `omx --set-password`
- use TLS directly or put OmniContext CLI behind a reverse proxy
- prefer a private network like Tailscale if you don't need a public endpoint
- keep project data backed up with `omx --export-project`
