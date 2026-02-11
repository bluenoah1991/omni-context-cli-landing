---
slug: /tutorial/figma-plugin
title: Figma Plugin
sidebar_label: Figma Plugin
sidebar_position: 19
---

# Figma Plugin

The OmniContext Figma plugin lets Omx interact with your Figma designs. Once connected, you can ask Omx to inspect your layout, create shapes, modify nodes, export assets, and more -- all through the chat.

This guide walks you through every step, from installing the desktop app to chatting with your design file.

## Step 1: Install the Desktop App

Download the OmniContext desktop app for your platform:

- [Windows Installer (.exe)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)
- [macOS App Bundle (.dmg)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)

Run the installer and open the app. It automatically opens the **Models** tab because you need to configure a model first.

## Step 2: Add a Model

1. On the **Models** tab, select a provider from the dropdown (e.g. **Zenmux**)
2. Paste your API key in the field on the right
3. Click **Add Provider**

## Step 3: Install the Figma Plugin

1. Click **Figma Integration** in the left sidebar
2. Click **Open Releases Page** to download the plugin package (.zip)
3. Unzip the file to a folder on your computer

Now load it into Figma:

4. Open the **Figma desktop app**
5. Go to **Plugins > Development > Import plugin from manifest...**
6. Select the **manifest.json** file inside the **dist** folder

The Figma plugin only works in the Figma desktop app. The web version of Figma does not support loading local development plugins.

## Step 4: Start Serving

1. Click **Workspaces** in the left sidebar and select a workspace (or use the default one)
2. Check the **Serve only (for Office / Browser)** checkbox at the bottom
3. Click **Start Serving**

Once running, the sidebar shows a green dot and a local address.

## Step 5: Connect the Plugin

1. In Figma, run the plugin from **Plugins > Development > OmniContext**
2. Enter the server address shown in the desktop app (e.g. `http://localhost:5281`)
3. Click **Connect**

Once connected, the plugin panel switches to the full chat interface.

## Step 6: Pick a Model

Click the gear icon in the top-right corner of the plugin panel to open **Settings**.

On the **Models** tab, configure:

- **Current Model** -- The model for this session
- **Default Model** -- The model used for new sessions
- **Agent Model** -- The model for background agent tasks

Click **Save** when you're done.

## Using It

Open any Figma design file, then type your question in the plugin panel. Omx can see your design and interact with it.

Here are some things you can try:

**Inspect your design:**
> What's currently selected?

**Create shapes:**
> Add a blue rectangle at 100, 100 with size 200x100.

**Modify nodes:**
> Change the fill color of the selected frame to #f0f0f0.

**Work with text:**
> Create a heading that says "Welcome" in 32px bold.

**Build layouts:**
> Create a vertical auto-layout frame with 3 cards inside.

**Export assets:**
> Export the selected node as a PNG.

For the best experience, switch to the **Assistant** workflow preset in the Omx menu. This mode is designed for interacting with apps like Figma, the browser, and Office.

## Available Tools

| Category | What Omx can do |
|----------|----------------|
| **Inspect** | Get selection, page structure, find nodes, get node details, list styles, components, variables, pages, fonts |
| **Create** | Rectangles, frames, text, ellipses, lines, sections, components, insert images |
| **Modify** | Change node properties, update text, move, clone, group, ungroup, delete nodes |
| **Export** | Export nodes as PNG, SVG, or PDF |
| **Navigate** | Switch pages, set viewport and zoom |
| **Transform** | Boolean operations (union, subtract, intersect, exclude), flatten to vector |

## Troubleshooting

**Plugin won't connect:**
Make sure the desktop app is running and the server is started (green dot in the sidebar). Check that the address in the plugin matches the one shown in the desktop app.

**Tools aren't working:**
Refresh the plugin by disconnecting and reconnecting. If that doesn't help, restart the server in the desktop app.

**Plugin doesn't appear in Figma:**
Make sure you're using the Figma desktop app, not the web version. Go to **Plugins > Development** and check that OmniContext is listed. If not, re-import the manifest.json file.
