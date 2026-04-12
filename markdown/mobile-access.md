---
slug: /tutorial/mobile-access
title: Mobile Access
sidebar_label: Mobile Access
sidebar_position: 13
---

# Mobile Access

You can use OmniContext CLI from your phone or tablet by exposing the web client on your local network or over a private tunnel.

## Local Network

Bind the server to all interfaces:

```bash
omx --serve --host 0.0.0.0
```

Then open `http://<your-ip>:5281` on your phone.

On macOS or Linux, find your local IP with `ifconfig`. On Windows, use `ipconfig`.

## Remote Access with Tailscale

For a safer setup across networks:

1. install [Tailscale](https://tailscale.com) on both your computer and phone
2. start OmniContext CLI with `omx --serve --host 0.0.0.0`
3. open `http://<tailscale-ip>:5281` on your phone

## Authentication

Set a password before you share the server outside your own machine:

```bash
omx --set-password
```

## Tips

- the web client is fully responsive and works well on smaller screens
- the model switcher is handy for quick mobile check-ins
- file attachments work through your phone's file picker
- if you need public internet access, see [Cloud Deployment](/tutorial/cloud-deployment)
