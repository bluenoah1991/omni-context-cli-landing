---
slug: /tutorial/browser-extension
title: Browser Extension
sidebar_label: Browser Extension
sidebar_position: 17
---

# Browser Extension

OmniContext Connect is a Chrome extension that lets Omx interact with your browser. Once connected, you can ask Omx to read web pages, manage tabs, take screenshots, search your bookmarks, and more -- all through the chat.

This guide walks you through every step, from installing the desktop app to chatting with a live web page.

## Step 1: Install the Desktop App

Download the OmniContext desktop app for your platform:

- [Windows Installer (.exe)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)
- [macOS App Bundle (.dmg)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)

Run the installer and open the app. It automatically opens the **Models** tab because you need to configure a model first.

![The OmniContext desktop app after first launch, showing the Models tab with an empty provider list and a Required badge](/img/desktop-app/first-launch.png)

## Step 2: Add a Model

We'll use [Zenmux](https://zenmux.ai) as an example -- it's an API gateway that gives you access to multiple models with a single key.

1. On the **Models** tab, select **Zenmux** from the provider dropdown
2. Paste your Zenmux API key in the field on the right
3. Click **Add Provider**

![The Models tab with Zenmux selected in the dropdown and an API key entered](/img/desktop-app/add-provider-zenmux.png)

After a moment, Zenmux appears under **Configured** with all available models loaded. The sidebar at the bottom updates to show the model count.

![The Models tab showing Zenmux configured with 61 models](/img/desktop-app/models-configured.png)

## Step 3: Install the Browser Extension

1. Click **Browser Integration** in the left sidebar
2. Follow the steps on the page: click **Open Releases Page** to download the extension package (.zip)
3. Unzip the file to a folder on your computer

![The Browser Integration page showing the 4-step installation guide with an Open Releases Page button](/img/desktop-app/browser-integration-tab.png)

Now load it into Chrome:

4. Open `chrome://extensions/` in Chrome
5. Turn on **Developer mode** in the top-right corner
6. Click **Load unpacked** and select the **dist** folder from the unzipped package

![Chrome extensions page with Developer mode enabled and the Load unpacked button visible](/img/browser-extension/chrome-load-unpacked.png)

You should see **OmniContext Connect** appear in your extensions list.

## Step 4: Start Serving

1. Click **Workspaces** in the left sidebar and select a workspace (or use the default one)
2. Check the **Serve only (for Office / Browser)** checkbox at the bottom
3. Click **Start Serving**

![The Workspaces tab with a workspace selected and the Serve only checkbox checked](/img/desktop-app/serve-only.png)

Once running, the sidebar shows a green dot and a local address (the port is assigned dynamically). You'll also see a note: "Paste this URL into the Office add-in or browser extension to connect."

![The sidebar showing the running server with a green dot and the local address](/img/desktop-app/serve-running.png)

## Step 5: Connect the Extension

1. Click the OmniContext icon in the Chrome toolbar to open the side panel
2. Enter the server address shown in the desktop app (e.g. `localhost:5281`)
3. Click **Connect**

![The extension side panel showing the connection screen with a server address field and Connect button, alongside the installed OmniContext Connect extension](/img/browser-extension/sidepanel-connect.png)

Once connected, the side panel switches to the full chat interface with a message input at the bottom. You're all set.

![The extension side panel showing the chat interface, ready for messages](/img/browser-extension/sidepanel-connected.png)

## Step 6: Pick a Model

Before you start chatting, you need to select which model to use. Click the gear icon in the top-right corner of the side panel to open **Settings**.

On the **Models** tab, configure:

- **Current Model** -- The model for this session. A powerful model like Claude Opus 4.6 works best.
- **Default Model** -- The model used for new sessions going forward.
- **Agent Model** -- The model for background agent tasks. A fast, cost-effective model like Claude Haiku 4.5 is a good choice here.

Click **Save** when you're done.

![The Settings dialog showing the Models tab with Current Model set to Claude Opus 4.6 and Agent Model set to Claude Haiku 4.5](/img/desktop-app/select-model.png)

## Using It

Open any web page, then type your question in the side panel. Omx can see your browser and interact with it.

Here are some things you can try:

**Read a web page:**
> Summarize the article I'm looking at right now.

**Search your bookmarks:**
> Find my bookmarks about TypeScript.

**Manage tabs:**
> Close all the Stack Overflow tabs.

**Take a screenshot:**
> Take a screenshot of the current page.

**Run JavaScript on a page:**
> Extract all the image URLs from this page.

![The side panel showing Omx summarizing a web article while the page is open on the left](/img/browser-extension/chat-summarize-page.png)

For the best experience, switch to the **Assistant** workflow preset in the Omx menu. This mode is designed for interacting with apps like the browser and Office.

## Available Tools

Here's the full list of what the extension lets Omx do:

| Tool | What it does |
|------|-------------|
| **GetTabs** | List all open tabs |
| **OpenUrl** | Open a URL in a new or existing tab |
| **SwitchToTab** | Switch to a specific tab |
| **RefreshTab** | Refresh a tab |
| **CloseTab** | Close a tab |
| **GetPageContentHtml** | Get the HTML of a page |
| **GetPageContentText** | Get the readable text of a page |
| **GetPageMetadata** | Get page title, URL, meta tags, etc. |
| **CaptureScreenshot** | Take a screenshot of the active tab |
| **GetBookmarks** | Search your Chrome bookmarks |
| **GetHistory** | Search your browsing history |
| **ExecuteScript** | Run JavaScript on a page |
| **ExecuteCDP** | Run a Chrome DevTools Protocol command |
| **Wait** | Wait for a specified duration |

## Troubleshooting

**Extension won't connect:**
Make sure the desktop app is running and the server is started (green dot in the sidebar). Check that the address in the extension matches the one shown in the desktop app.

**Tools aren't showing up in Omx:**
Refresh the extension by disconnecting and reconnecting. If that doesn't help, restart the server in the desktop app.

**Can't read certain pages:**
Some pages (like `chrome://` URLs and Chrome Web Store pages) restrict extension access. This is a Chrome security limitation.
