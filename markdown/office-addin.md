---
slug: /tutorial/office-addin
title: Office Add-in
sidebar_label: Office Add-in
sidebar_position: 16
---

# Office Add-in

The OmniContext Office Add-in brings AI assistance into Word, Excel, and PowerPoint.

## Installation

The desktop app handles Office Add-in setup automatically:

1. Open the desktop app
2. Under **Integrations**, click **Install** next to Office Add-in
3. Start the server from the desktop app
4. Open Excel, Word, or PowerPoint -- the OmniContext panel appears in the sidebar

The desktop app generates the TLS certificates needed for Office and starts the server with HTTPS enabled.

## Usage

Once installed, an OmniContext panel appears in the sidebar. You can:

- **Excel** - Generate formulas, create budgets, analyze data
- **Word** - Draft content, format documents, summarize text
- **PowerPoint** - Design slides, create presentations, add content

The add-in communicates with your local omx server. It has access to your current document context and can read and modify the active document.

## Uninstalling

To remove the add-in, click **Uninstall** in the desktop app's Integrations section.

## Tips

- Use the General workflow preset for the best Office experience
- The add-in works with the same models and memory as the terminal
- The status indicator in the desktop app shows whether the add-in is installed and the server is running
