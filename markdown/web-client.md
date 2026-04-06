---
slug: /tutorial/web-client
title: Web Client
sidebar_label: Web Client
sidebar_position: 12
---

# Web Client

omx includes a browser-based UI with rich rendering support.

## Starting the Web Client

```bash
omx --serve --web
```

This starts the server and opens the web UI in your default browser.

### Custom Port and Host

```bash
omx --serve --web --port 8080
omx --serve --web --host 0.0.0.0
```

## Features

- **LaTeX rendering** - Mathematical expressions rendered with KaTeX
- **Mermaid diagrams** - Flowcharts, sequence diagrams, and more
- **Syntax highlighting** - Code blocks with language-specific highlighting
- **File attachments** - Drag and drop files into the chat
- **Markdown** - Full GitHub-flavored markdown support
- **Color themes** - 17 built-in color presets with light and dark mode
- **Session management** - Switch sessions, rewind messages
- **Model switching** - Change models mid-conversation

## Theme Mode

Set the theme mode via the command line:

```bash
omx --serve --web --theme dark
omx --serve --web --theme light
omx --serve --web --theme auto
```

The default is `auto`, which follows your system preference.

## Color Themes

Color themes are configured through the preferences menu (press Escape, select **Change preferences**, then **Color theme**). 17 built-in presets are available: crystal, splash, horizon, neon, forest, indigo, rosette, retro, tangerine, emerald, earth, twilight, inferno, sunshine, blossom, cocoa, nautical.

## Authentication

Set a password for the web UI:

```bash
omx --set-password mypassword
```

Remove the password:

```bash
omx --clear-password
```
