---
slug: /tutorial/web-client
title: Web Client
sidebar_label: Web Client
sidebar_position: 14
---

# Web Client

OmniContext CLI includes a browser-based client for when you want the same assistant outside the terminal.

## Starting the Web Client

```bash
omx --serve --web
```

This starts the local server and opens the web client in your default browser.

To open Image Workshop instead:

```bash
omx --serve --image-workshop
```

You can also open it manually at `http://localhost:5281/imageWorkshop` while the server is running.

### Custom Port and Host

```bash
omx --serve --web --port 8080
omx --serve --web --host 0.0.0.0
```

## Features

- **LaTeX rendering** for math
- **Mermaid diagrams** for charts and flows
- **Syntax highlighting** for code blocks
- **File attachments** with drag and drop, plus automatic image normalization for uploads
- **GitHub-flavored markdown** rendering
- **Custom status line** via `statusCommand`
- **Color themes** shared with the rest of OmniContext CLI
- **Session management** including rewind and switching
- **Model switching** mid-conversation
- **Image Workshop** for image and video generation, edits with reference images and masks, **privacy mode**, result sessions, and opening the artifacts folder. Video models such as Google Veo and xAI Video are configured like other providers and appear in the Workshop UI.
- **Response and work language** settings (also available as `/language` and `/work-language` in the terminal)
- Optional **display translation** for assistant replies when you want the model's language and the on-screen language to differ
- **TTS read-aloud** on assistant messages using the browser's built-in speech synthesis
- **Diff rendering** for tool call outputs that return unified patches, with inline add/remove highlighting
- **Cache countdown timer** in the header showing when the current Anthropic prompt cache expires
- **Memory panel** for browsing, scoring, and editing cross-session key points directly in the browser
- **Rate-limit backoff** on the login page when too many failed attempts occur

## Languages

- **Response language** (`/language`) controls the language the assistant replies in.
- **Work language** (`/work-language`) can translate what you type before it is sent to the model, which is useful when you write in one language but want the model to reason in another.

The web client can also cache translated display text for assistant messages when display translation is enabled in settings.

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

Set `statusCommand` in `~/.omx/omx.json` or `~/.omx/projects/<project-id>/omx.json` to render one line of shell output in the terminal UI and in the web client's header.

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
