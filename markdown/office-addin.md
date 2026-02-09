---
slug: /tutorial/office-addin
title: Office Add-in
sidebar_label: Office Add-in
sidebar_position: 18
---

# Office Add-in

The OmniContext Office Add-in brings Omx into Microsoft Excel, Word, and PowerPoint. You can talk to Omx right inside your Office apps -- ask it to build spreadsheets, write documents, create presentations, and more.

This guide walks you through every step, from first launch to chatting with your spreadsheet.

## Step 1: Install the Desktop App

Download the OmniContext desktop app for your platform:

- [Windows Installer (.exe)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)
- [macOS App Bundle (.dmg)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)

Run the installer and open the app. It automatically opens the **Models** tab because you need to configure a model first.

![The OmniContext desktop app after first launch, showing the Models tab with an empty provider list and a Required badge](/img/desktop-app/first-launch.png)

## Step 2: Add a Model

We'll use [Zenmux](https://zenmux.ai) as an example -- it's an API gateway that gives you access to multiple models with a single key.

1. On the **Models** tab, select **Zenmux** from the provider dropdown
2. Paste your Zenmux API key in the field on the right
3. Click **Add Provider**

![The Models tab with Zenmux selected in the dropdown and an API key entered](/img/desktop-app/add-provider-zenmux.png)

After a moment, Zenmux appears under **Configured** with all available models loaded. The sidebar at the bottom updates to show the model count.

![The Models tab showing Zenmux configured with 61 models](/img/desktop-app/models-configured.png)

## Step 3: Install the Office Add-in

1. Click **Office Integration** in the left sidebar
2. You'll see the status as "Not installed" with a gray dot
3. Click **Install Office Add-in**

![The Office Integration tab showing Not installed status and the Install Office Add-in button](/img/office-addin/office-integration-tab.png)

Once installed, the status changes to a green dot with "Running" and shows the HTTPS port number. The desktop app registers the add-in with Office and runs a local HTTPS server that the add-in needs.

![The Office Integration tab showing Running status with a green dot and the HTTPS port number](/img/office-addin/office-addin-installed.png)

## Step 4: Start Serving

1. Click **Workspaces** in the left sidebar and select a workspace (or use the default one)
2. Check the **Serve only (for Office / Browser)** checkbox at the bottom
3. Click **Start Serving**

![The Workspaces tab with a workspace selected and the Serve only checkbox checked](/img/desktop-app/serve-only.png)

Once running, the sidebar shows a green dot and a local address (the port is assigned dynamically). You'll also see a note: "Paste this URL into the Office add-in or browser extension to connect."

![The sidebar showing the running server with a green dot and the local address](/img/desktop-app/serve-running.png)

## Step 5: Open the Add-in in Office

1. Open Excel, Word, or PowerPoint
2. On the **Home** tab, click the add-ins button (the leftmost button in the ribbon) to open the add-ins dropdown
3. You'll see **OmniContext** listed under developer add-ins -- click it

![Excel showing the add-ins dropdown with OmniContext listed under developer add-ins](/img/office-addin/excel-ribbon-button.png)

The OmniContext task pane opens on the right side. After loading the add-in once, an **OmniContext** button also appears directly in the ribbon for quick access.

![Excel with the OmniContext task pane open on the right, showing the chat interface ready for messages](/img/office-addin/taskpane-connected.png)

## Step 6: Pick a Model

Before you start chatting, you need to select which model to use. Click the gear icon in the top-right corner of the task pane to open **Settings**.

On the **Models** tab, configure:

- **Current Model** -- The model for this session. A powerful model like Claude Opus 4.6 works best.
- **Default Model** -- The model used for new sessions going forward.
- **Agent Model** -- The model for background agent tasks. A fast, cost-effective model like Claude Haiku 4.5 is a good choice here.

Click **Save** when you're done.

![The Settings dialog showing the Models tab with Current Model set to Claude Opus 4.6 and Agent Model set to Claude Haiku 4.5](/img/desktop-app/select-model.png)

## Using It with Excel

Open a spreadsheet and start chatting. Here are some things to try:

**Build a spreadsheet from scratch:**
> Create a monthly budget with categories for rent, food, transport, and utilities. Add SUM formulas at the bottom.

**Work with existing data:**
> What's the average value in column C?

**Format your data:**
> Make the header row bold with a blue background. Auto-fit all columns.

**Add formulas:**
> Fill column D with a formula that calculates the percentage of the total for each row.

**Create charts:**
> Make a bar chart from the data in A1:B10.

**Manage sheets:**
> Add a new sheet called "Summary" and copy the totals there.

![Omx building a formatted monthly budget spreadsheet in Excel with formulas and color-coded categories](/img/office-addin/excel-budget-demo.png)

### Excel Tools

| Category | What Omx can do |
|----------|----------------|
| **Cells & Ranges** | Read, write, clear, copy, format cells and ranges |
| **Formulas** | Write formulas, set data validation, add conditional formatting |
| **Tables** | Create, sort, filter, add/remove rows and columns |
| **Sheets** | Add, delete, rename, copy, reorder, protect sheets |
| **Charts** | Create charts, format them, position them |
| **Shapes** | Add shapes, set text, format styles |
| **Comments** | Add, read, delete comments |
| **Workbook** | Get/set properties, named ranges, pivot tables |

## Using It with Word

Open a document and ask away:

**Write content:**
> Write an introduction paragraph about our company's mission.

**Edit and format:**
> Change all Heading 1 styles to dark blue. Set the body text to Calibri 11pt with 1.15 line spacing.

**Find and replace:**
> Replace all instances of "Company Name" with "Acme Corp".

**Work with tables:**
> Insert a 3-column table comparing our Basic, Pro, and Enterprise plans.

**Review:**
> Show me all the comments in this document.

> Accept all tracked changes.

**Headers and footers:**
> Add a header with the date on the left and "Confidential" on the right.

![Omx creating a formatted resume in Word with styled headings, sections, and a professional layout](/img/office-addin/word-formatting-demo.png)

### Word Tools

| Category | What Omx can do |
|----------|----------------|
| **Content** | Read text/HTML/OOXML, get paragraphs, sections, styles |
| **Editing** | Insert text, HTML, images, page breaks, search and replace |
| **Formatting** | Apply styles, set fonts, paragraph spacing, hyperlinks |
| **Tables** | Insert tables, read/write cells, add/remove rows and columns |
| **Review** | Read/add/delete comments, handle tracked changes |
| **Structure** | Headers, footers, content controls, bookmarks, fields |
| **Notes** | Footnotes and endnotes |

## Using It with PowerPoint

Open a presentation and start building:

**Create slides:**
> Make a 10-slide presentation about our product roadmap. Include a title slide and a summary slide at the end.

**Edit content:**
> Change the title on slide 2 to "Market Analysis".

**Add visuals:**
> Add a blue rectangle in the top-right corner with the text "Q2 2025".

> Draw a line separating the header from the content.

**Reorganize:**
> Move slide 5 to position 2.

> Delete the last 3 slides.

**Export:**
> Export slide 3 as an image.

![Omx creating a multi-slide company profile presentation in PowerPoint with a professional design](/img/office-addin/powerpoint-slides-demo.png)

### PowerPoint Tools

| Category | What Omx can do |
|----------|----------------|
| **Slides** | Add, delete, move, select slides |
| **Content** | Read/write slide text, export slides as images |
| **Layouts** | Get available layouts and masters, apply layouts |
| **Shapes** | Add geometric shapes, lines, tables; move, resize, delete |
| **Formatting** | Fill colors, line styles, text formatting, hyperlinks, rotation |
| **Properties** | Tags, presentation title, slide dimensions |

## Tips

- Use the **Assistant** workflow preset for the best experience. Switch it in the Omx menu or start with `omx --workflow assistant`.
- Omx checks your document before making changes, so it understands what's already there.
- Ask Omx to describe what it sees before making edits -- "What's in this spreadsheet?" is a great first question.
- Large operations (formatting hundreds of rows, creating many slides) may take a few seconds.
- All data stays on your computer. The add-in connects to a local server, nothing is sent externally.
- The desktop app needs to be running for the add-in to work.

## Troubleshooting

**The OmniContext add-in doesn't appear:**
Make sure the add-in is installed (green "Running" status in the desktop app's Office Integration tab). Try restarting the Office app. If it still doesn't show, go to **Insert** > **My Add-ins** and add it manually.

**The task pane says "Disconnected":**
Check that the desktop app is running and the server is started (green dot in the sidebar). The server address in the task pane should match the one shown in the desktop app.

**Changes aren't being applied:**
Some operations require the document to not be in edit mode for a specific cell/range. Click somewhere else in the document and try again.
