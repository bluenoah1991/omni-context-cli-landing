---
slug: /tutorial/browser-extension
title: Chrome Extension
sidebar_label: Chrome Extension
sidebar_position: 15
---

# Chrome Extension

The OmniContext Chrome Extension adds an AI sidebar to any webpage, connecting to your running omx instance.

## Installation

1. Start the desktop app or run `omx --serve`
2. In the desktop app, click **Open Folder** under Browser Extension to locate the extension files
3. In Chrome, go to `chrome://extensions`, enable Developer Mode, and click **Load unpacked**
4. Select the browser extension folder

The extension connects to your local omx server automatically.

## Features

- **Page context** - The extension can read the current page content
- **Summarization** - Summarize articles, documentation, or any webpage
- **Data extraction** - Pull structured data from web pages
- **Browser automation** - Automate tasks in the browser through natural language

## Usage

Click the extension icon to open the sidebar panel. You can chat with omx while browsing -- it has access to the current page content and can interact with the browser.

## Connection

The extension connects to your omx server (default: `http://localhost:5281`). Make sure omx is running in serve mode before using the extension.
