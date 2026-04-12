---
slug: /tutorial/office-addin
title: Office Add-in
sidebar_label: Office Add-in
sidebar_position: 18
---

# Office Add-in

The OmniContext Office Add-in brings OmniContext CLI into Word, Excel, and PowerPoint.

## Installation

The desktop app handles setup for you:

1. open the desktop app
2. under **Integrations**, click **Install** next to Office Add-in
3. start the server from the desktop app
4. open Word, Excel, or PowerPoint and look for the OmniContext panel

The desktop app generates the certificates Office needs and starts the local server with the right HTTPS setup.

## Usage

Once installed, the OmniContext panel appears inside Office. You can use it to:

- draft and rework documents in Word
- build formulas, budgets, and analysis in Excel
- outline and refine slides in PowerPoint

The add-in talks to your local OmniContext CLI instance, so it shares the same models, sessions, and memory as the terminal workflow.

## Uninstalling

To remove the add-in, click **Uninstall** from the same Integrations section in the desktop app.

## Tips

- the **General** workflow is usually the best fit for Office tasks
- the desktop app status indicator shows whether Office is installed and ready
- because it runs through the same OmniContext CLI instance, project memory still applies when it helps
