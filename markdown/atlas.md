---
slug: /tutorial/atlas
title: Atlas Navigation
sidebar_label: Atlas Navigation
sidebar_position: 11.5
---

# Atlas Navigation

The atlas is OmniContext CLI's codebase navigation system. It saves durable repo knowledge as named maps, so future sessions can jump back to the important files, directories, and symbols instead of rediscovering the same structure from scratch.

The atlas is enabled by default. If you do not want it in a project, you can turn it off from preferences.

## What an Atlas Map Stores

An atlas map has three parts:

- a **name** for the concept, feature, or subsystem
- a **description** explaining what the map covers
- a set of **points** pointing at the key code objects

Each point can target one of three object types:

- `file`
- `directory`
- `symbol`

That makes atlas maps more structured than a plain note. Instead of remembering "the auth flow is somewhere under services", OmniContext CLI can save the exact files and symbols that matter.

## Built-in Atlas Tools

| Tool | What it does |
|------|---------------|
| `AtlasList` | Show every saved map for the current project |
| `AtlasRead` | Read one map and all of its points |
| `AtlasUpdate` | Create a new map or fully replace an existing one |
| `AtlasDelete` | Remove an outdated map and all of its points |

The default **Programming** workflow includes these tools. If you build your own workflow, you can also whitelist them through `allowBuiltinTools`.

## Typical Flow

A normal atlas flow looks like this:

1. start with `AtlasList` to see what already exists
2. use `AtlasRead` when a saved map looks relevant
3. explore the codebase normally if nothing useful exists yet
4. save durable structure with `AtlasUpdate` once you understand it
5. update a map when it changes, and delete it only when it is no longer useful

One important detail: `AtlasUpdate` replaces the full point set for a map, so if you are extending an existing map, read it first and keep the points you still want.

## Good Atlas Candidates

Atlas maps are most useful when they capture structure that would be annoying to rediscover later, such as:

- a subsystem spread across multiple files
- an end-to-end request or data flow
- key extension points and registries
- project-specific path conventions
- the real files behind a recurring bug or feature area

They are less useful for one-off trivia or tiny single-file edits.

## Turning the Atlas On or Off

Toggle the atlas from the preferences menu:

1. Press `Escape`
2. Choose **Change preferences**
3. Toggle **Atlas**

When the atlas is turned off, the atlas tools are hidden.

## Storage

Each project stores its atlas data in `~/.omx/projects/<project-id>/atlas.sqlite`.

That database stores map metadata plus the points attached to each map. Since it is project-scoped, a map you build for one repository does not leak into unrelated work.
