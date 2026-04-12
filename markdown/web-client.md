---
slug: /tutorial/web-client
title: Web Client
sidebar_label: Web Client
sidebar_position: 12
---

# Web Client

OmniContext CLI includes a browser-based client for when you want the same assistant outside the terminal.

## Starting the Web Client

```bash
omx --serve --web
```

This starts the local server and opens the web client in your default browser.

### Custom Port and Host

```bash
omx --serve --web --port 8080
omx --serve --web --host 0.0.0.0
```

## Features

- **LaTeX rendering** for math
- **Mermaid diagrams** for charts and flows
- **Syntax highlighting** for code blocks
- **File attachments** with drag and drop
- **GitHub-flavored markdown** rendering
- **Custom status line** via `statusCommand`
- **Color themes** shared with the rest of OmniContext CLI
- **Session management** including rewind and switching
- **Model switching** mid-conversation

## Theme Mode

Use `--theme` to control light or dark mode behavior:

```bash
omx --serve --web --theme dark
omx --serve --web --theme light
omx --serve --web --theme auto
```

`auto` follows your system setting.

## Color Themes

The palette itself is controlled separately from light or dark mode. Change it from the preferences menu under **Color theme**.

## Custom Status Line

Set `statusCommand` in `omx.json` to render one line of shell output in the footer of both the terminal UI and web client.

```json
{
  "statusCommand": "git branch --show-current"
}
```

## Authentication

Protect the web client with a password:

```bash
omx --set-password
```

Remove the password later with:

```bash
omx --clear-password
```
