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
2. in the desktop app, click **Open Folder** under Browser Extension
3. in Chrome, open `chrome://extensions`
4. enable **Developer Mode**
5. click **Load unpacked** and choose the browser extension folder

The desktop app also installs a **Browser** workflow, which is the best default workflow for the sidebar.

## Features

- read the current page as text, HTML, or metadata
- inspect and switch browser tabs
- read bookmarks and recent history
- capture screenshots of the active tab
- automate browser tasks through natural-language instructions

## Usage

Open the side panel from the extension icon, then chat with OmniContext CLI while you browse. The Browser workflow is usually the right choice because it is set up for page and tab access.

## Connection

The extension talks to your local OmniContext CLI server, which defaults to `http://localhost:5281`. Make sure OmniContext CLI is already running in serve mode before you open the side panel.
