---
slug: /tutorial/image-workshop
title: Image Workshop
sidebar_label: Image Workshop
sidebar_position: 15
---

# Image Workshop

Image Workshop 是一个基于浏览器的图像与视频生成及编辑工具。它与 OmniContext CLI 服务一起运行，支持多个供应商、隐私模式和结果管理。

## 启动 Image Workshop

```bash
omx --serve --image-workshop
```

这会启动本地服务器并在默认浏览器中打开 Workshop。服务器运行时，也可以手动访问 `http://localhost:5281/imageWorkshop`。

## 支持的供应商

| 供应商 | 能力 |
|--------|------|
| **Google Imagen** | 通过 Gemini 的 generateContent API 生成图像 |
| **OpenAI Images** | 通过 OpenAI Images API 生成和编辑图像 |
| **xAI Images** | 通过 xAI 图像 API 生成图像 |
| **Google Veo** | 在 Workshop UI 中生成视频 |
| **xAI Video** | 图像转视频和参考帧转视频生成 |

图像模型的配置方式与聊天模型相同——在模型列表中添加，选择正确的供应商类型，它们就会出现在 Workshop UI 的选项中。视频供应商仅在 Image Workshop 中可用，不能通过聊天的 `ImageGen` 工具使用。

## 图像生成

选择一个供应商和模型，描述你想要的内容，并设置数量（每次 1–4 张）。提示框会随着输入自动调整高度。生成的图像显示在结果网格中，你可以预览、下载或重复使用。

## 使用参考图编辑

你可以上传一张参考图像，并可选择提供蒙版来控制修改区域：

- **参考图像** — 要编辑的基础图像
- **蒙版** — 第二张图像，其中白色像素标记模型应该修改的区域，黑色像素标记需要保留的区域

将图像拖放到上传区域，或从 artifacts 文件夹中选择。蒙版编辑的结果只替换选中区域，其余部分保持不变。

## 视频生成

选择支持视频的供应商（Google Veo 或 xAI Video）后，Workshop 会显示视频专用控件：

- **Google Veo** — 通过文本提示生成视频
- **xAI Video** — 支持图像转视频模式（将静态图像动画化）和参考帧转视频模式（以参考帧为起点生成视频）

视频生成比图像耗时更长。Workshop 会在模型工作期间显示进度，视频完成后保存为会话 artifacts。

## 隐私模式

从 Workshop 工具栏切换隐私模式，可以将生成的内容隐藏在一个显示"Private Workshop"的占位符后面。其他标签页和窗口不会显示缩略图或预览。再次关闭开关即可恢复显示。

这在屏幕共享、在公共空间工作、或只想在会话期间保持 Workshop 私密时非常有用。

## 结果与会话

生成的图像和视频会保存为**会话 artifacts**。你可以：

- 浏览当前会话中的所有 artifacts
- 打开磁盘上的 artifacts 文件夹以复制或分享文件
- 从生成的图像开始新的结果会话，继续迭代

`ArtifactList` 工具也会列出聊天中生成的 artifacts，所以通过工作流中的 `ImageGen` 工具生成的内容会与 Workshop 结果一起显示。

## 设置

点击 Workshop 工具栏中的设置图标可以调整：

- **输出分辨率**和宽高比提示（取决于供应商是否支持）
- **模型特定选项**，如风格预设或质量级别
- **供应商切换** — 在不离开 Workshop 的情况下更改活跃的图像或视频供应商

设置按供应商区分，切换 Google Imagen 和 OpenAI Images 时会加载不同的配置面板。

## 移动端布局

在小屏幕上，Workshop 会切换为分段选项卡布局，将提示输入、结果和设置分离到可滑动切换的面板中。在手机和平板上都能正常使用，无需水平滚动。
