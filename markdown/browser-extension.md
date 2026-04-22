---
slug: /tutorial/browser-extension
title: Chrome Extension
sidebar_label: Chrome Extension
sidebar_position: 17
---

# Chrome Extension

The OmniContext Chrome Extension adds an AI sidebar to any page and connects it to your running OmniContext CLI instance.

## Installation

1. start the desktop app, or run `omx --serve`
2. make sure the browser extension folder is available locally
3. in Chrome, open `chrome://extensions`
4. enable **Developer Mode**
5. click **Load unpacked** and choose the browser extension folder

The desktop app also installs a **Browser** workflow, which is the best default workflow for the sidebar.

## Features

- read the current page as text, HTML, or metadata
- inspect and switch browser tabs
- read bookmarks and recent history
- capture screenshots of the active tab
- run page-side scripts when higher-level tools are not enough
- automate browser tasks through natural-language instructions

## Safety Limits

Page-side scripting is intentionally limited.

`ExecuteScript` cannot access sensitive browser data APIs such as:

- `document.cookie`
- `cookieStore`
- `localStorage`
- `sessionStorage`
- `indexedDB`
- `caches`

That keeps the Browser workflow useful for page understanding and automation without turning it into a cookie or storage exfiltration tool.

## Usage

Open the side panel from the extension icon, then chat with OmniContext CLI while you browse. The side panel is designed around the **Browser** workflow, so page and tab tools are ready to use right away.

## Connection

The extension talks to your local OmniContext CLI server, which defaults to `http://localhost:5281`. Make sure OmniContext CLI is already running in serve mode before you open the side panel.
