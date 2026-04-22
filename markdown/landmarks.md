---
slug: /tutorial/landmarks
title: Landmark Navigation
sidebar_label: Landmark Navigation
sidebar_position: 11.5
---

# Landmark Navigation

Landmarks are OmniContext CLI's codebase navigation system. They let the assistant save durable repo knowledge as named layers, so future sessions can jump back to the important files, directories, and symbols instead of rediscovering the same structure from scratch.

Landmarks are enabled by default. If you do not want them in a project, you can turn them off from preferences.

## What a Landmark Stores

A landmark layer has three parts:

- a **name** for the concept, feature, or subsystem
- a **description** explaining what the layer covers
- a set of **pins** pointing at the key code objects

Each pin can target one of three object types:

- `file`
- `directory`
- `symbol`

That makes landmarks more structured than a plain note. Instead of remembering "the auth flow is somewhere under services", OmniContext CLI can save the exact files and symbols that matter.

## Built-in Landmark Tools

| Tool | What it does |
|------|---------------|
| `LandmarkList` | Show every saved layer for the current project |
| `LandmarkRead` | Read one layer and all of its pins |
| `LandmarkUpdate` | Create a new layer or fully replace an existing one |
| `LandmarkDelete` | Remove an outdated layer and all of its pins |

The default **Programming** workflow includes these tools. If you build your own workflow, you can also whitelist them through `allowBuiltinTools`.

## Typical Flow

A normal landmark flow looks like this:

1. start with `LandmarkList` to see what already exists
2. use `LandmarkRead` when a saved layer looks relevant
3. explore the codebase normally if nothing useful exists yet
4. save durable structure with `LandmarkUpdate` once you understand it
5. update a layer when it changes, and delete it only when it is no longer useful

One important detail: `LandmarkUpdate` replaces the full pin set for a layer, so if you are extending an existing layer, read it first and keep the pins you still want.

## Good Landmark Candidates

Landmarks are most useful when they capture structure that would be annoying to rediscover later, such as:

- a subsystem spread across multiple files
- an end-to-end request or data flow
- key extension points and registries
- project-specific path conventions
- the real files behind a recurring bug or feature area

They are less useful for one-off trivia or tiny single-file edits.

## Turning Landmarks On or Off

Toggle landmarks from the preferences menu:

1. Press `Escape`
2. Choose **Change preferences**
3. Toggle **Landmarks**

When landmarks are turned off, the landmark tools are hidden.

## Storage

Each project stores its landmark data in `~/.omx/projects/<project-id>/landmark.sqlite`.

That database stores layer metadata plus the pins attached to each layer. Since it is project-scoped, a map you build for one repository does not leak into unrelated work.
