---
slug: /tutorial/office-addin
title: Office Add-in
sidebar_label: Office Add-in
sidebar_position: 16
---

# Office Add-in

The OmniContext Office Add-in brings AI assistance into Word, Excel, and PowerPoint.

## Prerequisites

1. Install the desktop app
2. Configure at least one model
3. Start serve mode from the desktop app

## Installation

1. Open Excel, Word, or PowerPoint
2. Go to **Insert** > **Add-ins** > **My Add-ins**
3. Select **Upload My Add-in**
4. Browse to the add-in manifest file from the desktop app's resources

## Usage

Once installed, an OmniContext panel appears in the sidebar. You can:

- **Excel** - Generate formulas, create budgets, analyze data
- **Word** - Draft content, format documents, summarize text
- **PowerPoint** - Design slides, create presentations, add content

The add-in communicates with your local omx server. It has access to your current document context and can read and modify the active document.

## Tips

- Use the General workflow preset for the best Office experience
- The add-in works with the same models and memory as the terminal
- Start serve mode from the desktop app for the smoothest setup
