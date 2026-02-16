---
slug: /tutorial/obsidian-plugin
title: Obsidian Plugin
sidebar_label: Obsidian Plugin
sidebar_position: 19
---

# Obsidian Plugin

The OmniContext Obsidian plugin brings Omx into your knowledge base. Once enabled, a chat panel opens right inside Obsidian where you can ask Omx to read, create, organize, and search your notes -- with full access to your vault's structure, tags, backlinks, and metadata.

Unlike the browser or Office integrations, the Obsidian plugin is self-contained. It launches the OmniContext server automatically and connects everything behind the scenes -- no desktop app needed.

## Step 1: Install OmniContext CLI

If you haven't already, install the CLI globally:

```bash
npm install -g omni-context-cli && omx
```

Run `omx` once to complete the initial setup (configure a model provider, etc.), then exit.

## Step 2: Install the Plugin

1. Download the latest **OmniContext Obsidian** plugin package (.zip) from the [releases page](https://github.com/bluenoah1991/omni-context-cli-landing/releases)
2. Unzip the file -- you'll get a folder called **omni-context** containing `main.js`, `manifest.json`, and `styles.css`
3. Move the **omni-context** folder into your vault's plugin directory: `<vault>/.obsidian/plugins/omni-context/`

Create the `plugins` folder if it doesn't exist yet.

## Step 3: Enable the Plugin

1. Open Obsidian
2. Go to **Settings > Community plugins**
3. Find **OmniContext** in the list and toggle it on

You'll see a chat icon appear in the left ribbon bar.

## Step 4: Open the Panel

Click the chat icon in the ribbon (or use the command palette and search for **Open OmniContext**). The plugin spins up a local server and loads the chat interface in a side panel.

The first launch takes a few seconds while the server starts. After that, it's instant.

## Step 5: Pick a Model

Click the gear icon in the top-right corner of the panel to open **Settings**.

On the **Models** tab, configure:

- **Current Model** -- The model for this session
- **Default Model** -- The model used for new sessions
- **Agent Model** -- The model for background agent tasks

Click **Save** when you're done.

## Using It

With the panel open, just type your question. Omx can see your vault and work with it directly.

Here are some things you can try:

**Find and read notes:**
> What does my "Project Roadmap" note say?

**Create new notes:**
> Create a new note called "Meeting Notes/2026-02-16" with a summary of today's standup.

**Organize your vault:**
> Rename "old-ideas.md" to "archive/Old Ideas.md".

**Explore connections:**
> What notes link back to my "Architecture" page?

**Work with tags:**
> Which tags do I use most across the vault?

**Get metadata:**
> Show me all the headings and frontmatter in "Design Doc.md".

**Append to existing notes:**
> Add a new section to my daily note with these action items.

For the best experience, switch to the **Assistant** workflow preset in the Omx menu. This mode is designed for interacting with apps like Obsidian, the browser, and Office.

## Available Tools

| Category | What Omx can do |
|----------|----------------|
| **Read** | Read note content, get active note, list open tabs |
| **Write** | Create, modify, append to, rename, and delete notes |
| **Navigate** | Open notes (with optional line number), list notes in folders |
| **Metadata** | Frontmatter, headings, internal links, tags, embeds, sections |
| **Graph** | Backlinks, link resolution, vault-wide tag counts |
| **Vault** | Vault name, path, folder tree, file counts |

## How It Works

The plugin runs two things in the background:

- **OmniContext server** -- The same server that powers the CLI and desktop app, launched automatically as a child process. This handles the AI chat, model routing, and all the core features.
- **MCP IDE server** -- A local WebSocket server that exposes your vault to OmniContext through the Model Context Protocol. It provides the vault-aware tools listed above and broadcasts your current selection in real time.

Both start when you open the panel and stop when you close the plugin. Everything runs locally on your machine.

## Troubleshooting

**Panel shows "Failed to start":**
Make sure OmniContext CLI is installed and accessible. Run `omx --version` in your terminal to verify. If you installed it with a version manager like nvm, the plugin might not find the right Node.js binary -- try running `omx` once from your terminal to generate the executable info file.

**Panel is stuck on "Starting server...":**
The server has a 60-second timeout. If it doesn't start within that time, check your terminal for errors by running `omx --serve` manually. Common causes: port conflicts, missing API keys, or a corrupted config.

**Tools aren't working:**
Close and reopen the panel to restart the connection. If that doesn't help, disable and re-enable the plugin in Obsidian settings.

**Plugin not showing in Community plugins:**
Make sure the folder structure is correct: `<vault>/.obsidian/plugins/omni-context/main.js`. The plugin is desktop-only and won't appear on Obsidian mobile.

**Using multiple vaults:**
Obsidian plugins are vault-scoped, so you need to install the plugin in each vault separately. Alternatively, create a symlink from each vault's plugin directory to a single shared copy.
