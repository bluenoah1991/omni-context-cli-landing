---
slug: /tutorial/mobile-access
title: Mobile Access
sidebar_label: Mobile Access
sidebar_position: 13
---

# Mobile Access

Access omx from your phone or tablet by running the server with network access enabled.

## Local Network

Start omx with the host bound to all interfaces:

```bash
omx --serve --host 0.0.0.0
```

Then open `http://<your-ip>:5281` on your phone. Find your local IP with `ipconfig` (Windows) or `ifconfig` (macOS/Linux).

## Remote Access with Tailscale

For secure access from anywhere:

1. Install [Tailscale](https://tailscale.com) on both your computer and phone
2. Start omx with Tailscale's IP:

```bash
omx --serve --host 0.0.0.0
```

3. Open `http://<tailscale-ip>:5281` on your phone

## Authentication

Set a password to protect your instance:

```bash
omx --set-password
```

You'll be prompted for a password on first connection.

## Tips

- The web UI is fully responsive and works well on mobile screens
- Use the model switcher to pick a model suited for quick mobile interactions
- File attachments work through your phone's file picker
