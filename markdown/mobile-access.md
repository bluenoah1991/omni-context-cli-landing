---
slug: /tutorial/mobile-access
title: Mobile Access
sidebar_label: Mobile Access
sidebar_position: 14
---

# Mobile Access

Code from anywhere using your phone or tablet. Omx's web client works great on mobile devices, letting you review code, make edits, and chat with AI while away from your desk.

## Starting the Server

First, start Omx in server mode with network access enabled:

```bash
omx --serve --host 0.0.0.0 --port 5281
```

The `--host 0.0.0.0` flag allows connections from other devices on your network, not just localhost.

## Connecting Your Devices

Your phone and computer need to be on the same network. If they're not on the same local network (like when you're on mobile data), you'll need a VPN or mesh networking solution.

### Using Tailscale (Recommended)

[Tailscale](https://tailscale.com/) creates a secure private network between your devices, even across different networks.

1. Install Tailscale on your computer and phone
2. Sign in with the same account on both devices
3. Find your computer's Tailscale IP (looks like `100.x.x.x`)
4. Use that IP to connect from your phone

Tailscale is free for personal use with up to 100 devices.

### Using Local Network

If both devices are on the same WiFi:

1. Find your computer's local IP address:
   - **Windows**: Run `ipconfig` and look for IPv4 Address
   - **macOS/Linux**: Run `ifconfig` or `ip addr`
2. The IP typically looks like `192.168.x.x` or `10.0.x.x`

## Accessing from Mobile

Open your phone's browser and navigate to:

```
http://<your-ip>:5281
```

For example: `http://100.64.0.1:5281` or `http://192.168.1.100:5281`

The web client will load with full functionality.

## Adding to Home Screen

For the best experience, add Omx to your home screen as a PWA (Progressive Web App):

### iOS (Safari)

1. Open the Omx web client in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap **Add to Home Screen**
4. Name it "Omx" and tap **Add**

### Android (Chrome)

1. Open the Omx web client in Chrome
2. Tap the three-dot menu
3. Tap **Add to Home screen** or **Install app**
4. Confirm the installation

Once installed, Omx appears as an app icon on your home screen. It opens in a standalone window without browser UI, just like a native app.

## Tips for Mobile Use

- **Portrait mode** works well for chat-focused tasks
- **Landscape mode** gives more space for code review
- Use the **model switcher** to pick faster models when on slower connections
- **Tool approval mode** (`--approve-write`) is helpful when you want to review changes before they happen
- The interface is touch-optimized with larger tap targets

## Keeping the Server Running

To keep Omx running after you close the terminal:

### Using a Process Manager

```bash
# Using pm2 (install with: npm install -g pm2)
pm2 start "omx --serve --host 0.0.0.0 --port 5281" --name omx

# Check status
pm2 status

# Stop
pm2 stop omx
```

### Using Screen or Tmux

```bash
# Start a screen session
screen -S omx

# Run Omx
omx --serve --host 0.0.0.0 --port 5281

# Detach with Ctrl+A, then D
# Reattach later with: screen -r omx
```

Now you can access Omx from your phone anytime the server is running.
