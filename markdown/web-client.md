---
slug: /tutorial/web-client
title: Web Client
sidebar_label: Web Client
sidebar_position: 14
---

# Web Client

Omx includes a web-based interface that runs in your browser or as a VS Code extension. This provides a modern chat experience with additional features like LaTeX rendering and Mermaid diagrams.

## Starting the Web Client

Launch Omx in server mode and open the browser:

```bash
omx --serve --web
```

This starts an HTTP server on port 5281 and opens the web UI in your default browser.

### Custom Port

Use a different port with the `--port` flag:

```bash
omx --serve --web --port 8080
```

### Custom Host

Bind to a specific network interface with the `--host` flag:

```bash
omx --serve --web --host 0.0.0.0
```

This is useful when you want to access the web client from other devices on your network.

### Server Mode Only

Start the server without opening a browser:

```bash
omx --serve
```

Then open `http://localhost:5281` manually.

## Features

The web client provides a graphical interface with:

- **Light and Dark Themes** - Follow your system preference
- **LaTeX Rendering** - Mathematical equations render properly
- **Mermaid Diagrams** - Flowcharts, sequence diagrams, and more
- **File Attachments** - Attach images and documents (PDF) to your messages
- **Drag and Drop** - Drop files directly into the input box to attach them
- **Image Downloads** - Click to download AI-generated images
- **Diff Panel** - View file changes side-by-side when edits are made
- **Token Usage** - Track input and output token consumption
- **Tool Approval** - Confirm or deny tool executions when approval mode is enabled
- **Mobile Support** - Responsive design works on phones and tablets
- **Appearance Settings** - Theme preferences saved to your config

## VS Code Extension

Omx provides a VS Code extension that embeds the web client directly in your editor.

### Installation

Install the extension via command line:

```bash
omx --install-vscode-extension
```

### Usage

After installation:

1. Open a workspace folder in VS Code
2. Click the OmniContext icon in the VS Code activity bar
3. The extension automatically starts a local Omx server
4. Start typing to interact with Omx

The server runs in the background and stops when VS Code closes.

You can also open OmniContext in a full editor panel using the command palette:

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Search for "OmniContext: Open in Editor"
3. The chat opens as a full editor tab instead of the sidebar

### Benefits

- Chat without leaving your editor
- Context stays visible alongside your code
- Automatic server management
- Diff panel shows file changes inline

### MCP Integration

The VS Code extension exposes IDE-specific tools via the Model Context Protocol (MCP):

- **Open files** in the editor
- **View diffs** between old and new content
- **Get diagnostics** (errors and warnings) from VS Code
- **List open editors** in the current workspace
- **Get workspace folders** for project context

These tools appear automatically when using the extension and allow Omx to interact directly with your VS Code environment.

### Remote Development

The VS Code extension supports remote development scenarios:

- **Remote SSH** connections
- **Dev Containers**
- **GitHub Codespaces**
- **WSL** (Windows Subsystem for Linux)

The extension automatically handles external URIs, so Omx can open files and links correctly regardless of your development environment.

## Desktop Client

The desktop client is a standalone application that bundles everything you need to run Omx without installing Node.js or managing dependencies.

### Download

Download the latest release for your platform:

- [Windows Installer (.exe)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)
- [macOS App Bundle (.dmg)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)

### Features

- **Zero Setup** - No Node.js installation required
- **Configuration Portal** - Graphical interface for providers, permissions, and settings
- **App Integrations** - Connect Office, browser, and Figma through dedicated setup tabs
- **Custom Prompts** - Customize system prompts for specialist, artist, explorer, and assistant modes
- **Auto Workspace** - Opens your default workspace (Documents/OmniContext) on launch
- **Dynamic Port** - Automatically finds an available port for the local server

### Configuration Portal

The desktop client includes a configuration portal where you can:

1. **Manage Providers** - Add and configure API keys for different LLM providers
2. **Set Permissions** - Control which tools require approval before execution
3. **Custom Prompts** - Write custom system prompts for each workflow mode:
   - **Specialist Prompt** - Customizes how the assistant approaches agentic coding tasks
   - **Artist Prompt** - Customizes visual-first image generation behavior
   - **Explorer Prompt** - Customizes research and web search behavior
   - **Assistant Prompt** - Customizes how the assistant interacts with your apps

Custom prompts are saved to `~/.omx/` as text files (`specialist.txt`, `artist.txt`, `explorer.txt`, `assistant.txt`) and persist across sessions.
