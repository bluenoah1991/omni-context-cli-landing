---
slug: /tutorial/web-client
title: Web Client
sidebar_label: Web Client
sidebar_position: 12
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

- **Light and Dark Themes** - Automatically follows your system preference
- **LaTeX Rendering** - Mathematical equations render properly
- **Mermaid Diagrams** - Flowcharts, sequence diagrams, and more
- **Image Paste Support** - Paste images directly into the chat
- **Diff Panel** - View file changes side-by-side when edits are made
- **Token Usage** - Track input and output token consumption

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
