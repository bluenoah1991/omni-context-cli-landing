---
slug: /tutorial/desktop-app
title: Desktop App
sidebar_label: Desktop App
sidebar_position: 12
---

# Desktop App

The desktop app is the easiest way to run OmniContext CLI as a shared local service for the rest of the ecosystem.

Instead of juggling separate setup steps for the browser, Office, and mobile access, you can let the desktop app manage the server and wire everything together.

## What It Does

The desktop app is mainly a lightweight launcher and control panel for OmniContext CLI. It can:

- start and stop the local OmniContext CLI server
- manage workspaces
- help with model setup
- switch approval modes
- enable LAN access for phone or tablet use
- open the bundled browser extension folder
- install and remove the Office Add-in
- install the Browser workflow automatically
- bridge browser, Office, and other remote tools into the same OmniContext CLI instance

## Why Use It

If you mostly work in the terminal, you may not need the desktop app every day.

It becomes useful when you want OmniContext CLI to act like one shared assistant across multiple surfaces:

- terminal
- browser side panel
- Office panel
- mobile web client

That way your models, sessions, and memory all stay connected to the same running instance.

## Browser and Office Setup

The desktop app is the recommended entry point for these integrations:

- **Chrome Extension** - open the extension folder from the desktop app, then load it in Chrome
- **Office Add-in** - install or remove it from the desktop app's integrations area

For Office in particular, the desktop app handles the local HTTPS and certificate setup for you.

## Browser Workflow

On startup, the desktop app installs the **Browser** workflow into `~/.omx/workflows/`.

That workflow is tuned for page reading, tab actions, bookmarks, history, screenshots, and browser-side remote tools, so it's usually the best default when you're using the Chrome sidebar.

## Mobile Access

The desktop app can expose the local server to your LAN, which makes it easier to open OmniContext CLI from a phone or tablet without setting up commands by hand.

If you need a safer cross-network setup, pair it with Tailscale.

## Tips

- use the desktop app when you want one-click server control
- use the terminal directly when you want the leanest workflow
- if you're mainly doing docs, spreadsheets, or slides, the **General** workflow is usually the best fit
- if you're in the browser side panel, switch to **Browser**
