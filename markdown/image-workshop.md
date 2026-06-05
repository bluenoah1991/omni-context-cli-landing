---
slug: /tutorial/image-workshop
title: Image Workshop
sidebar_label: Image Workshop
sidebar_position: 15
---

# Image Workshop

Image Workshop is a browser-based tool for generating and editing images and video. It runs alongside the OmniContext CLI server and supports multiple providers, privacy mode, and result management.

## Starting Image Workshop

```bash
omx --serve --image-workshop
```

This starts the local server and opens the Workshop in your default browser. You can also reach it at `http://localhost:5281/imageWorkshop` while the server is running.

## Supported Providers

| Provider | Capabilities |
|----------|-------------|
| **Google Imagen** | Image generation through Gemini's generateContent API |
| **OpenAI Images** | Image generation and editing through OpenAI's Images API |
| **xAI Images** | Image generation through the xAI image API |
| **Google Veo** | Video generation in the Workshop UI |
| **xAI Video** | Image-to-video and reference-to-video generation |

Image models are configured the same way as chat models—add them through the model list, choose the right provider type, and they appear as options in the Workshop UI. Video providers are only available in Image Workshop, not through the chat `ImageGen` tool.

## Image Generation

Pick a provider and model, describe what you want, and set the count (1–4 images at a time). The prompt box auto-resizes as you type. Generated images appear in a results grid where you can preview, download, or reuse them.

## Editing with Reference Images

You can upload a reference image and optionally provide a mask to control which areas get modified:

- **Reference image** — the base image to edit
- **Mask** — a second image where white pixels mark the areas the model should change and black pixels mark areas to preserve

Drag and drop images into the upload area, or pick them from the artifacts folder. The masked result replaces only the selected region and leaves everything else untouched.

## Video Generation

When a video-capable provider is selected (Google Veo or xAI Video), the Workshop shows video-specific controls:

- **Google Veo** — generates video from a text prompt
- **xAI Video** — supports image-to-video mode (animate a still image) and reference-to-video mode (use a reference frame as the starting point)

Video generation takes longer than images. The Workshop shows progress while the model works, and videos are saved as session artifacts once they finish.

## Privacy Mode

Toggle privacy mode from the Workshop toolbar to hide generated content behind a placeholder that says "Private Workshop." Other tabs and windows won't show thumbnails or previews. Flip the toggle off to reveal everything again.

This is useful when you're screen-sharing, working in a public space, or simply want to keep the Workshop private during a session.

## Results and Sessions

Generated images and videos are saved as **session artifacts**. You can:

- browse all artifacts in the current session
- open the artifacts folder on disk to copy or share files
- start a new result session from a generated image to continue iterating

The `ArtifactList` tool also lists artifacts from chat, so anything you generate through the `ImageGen` tool in a workflow appears alongside Workshop results.

## Settings

Click the settings icon in the Workshop toolbar to adjust:

- **Output resolution** and aspect ratio hints (where the provider supports them)
- **Model-specific options** such as style presets or quality levels
- **Provider switching** — change the active image or video provider without leaving the Workshop

Settings are per-provider, so switching between Google Imagen and OpenAI Images loads different configuration panels.

## Mobile Layout

On smaller screens, the Workshop switches to a segmented tab layout that separates prompt input, results, and settings into swipeable panels. The interface stays usable on phones and tablets without horizontal scrolling.
