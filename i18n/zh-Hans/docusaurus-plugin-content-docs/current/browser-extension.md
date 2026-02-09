---
slug: /tutorial/browser-extension
title: 浏览器扩展
sidebar_label: 浏览器扩展
sidebar_position: 17
---

# 浏览器扩展

OmniContext Connect 是一个 Chrome 扩展，让 Omx 可以操控你的浏览器。连接后，你可以让 Omx 阅读网页、管理标签页、截图、搜索书签等等 -- 全程在聊天中完成。

本指南从零开始，带你走完从安装到实际使用的每一步。

## 第一步：安装桌面应用

下载适合你系统的 OmniContext 桌面应用：

- [Windows 安装程序 (.exe)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)
- [macOS 应用包 (.dmg)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)

运行安装程序并打开应用。应用会自动打开 **Models** 标签页，因为你需要先配置一个模型。

![OmniContext 桌面应用首次启动，显示 Models 标签页，提供商列表为空并标有 Required 标记](/img/desktop-app/first-launch.png)

## 第二步：添加模型

这里以 [Zenmux](https://zenmux.ai) 为例 -- 它是一个 API 网关，用一个密钥就能访问多个模型。

1. 在 **Models** 标签页中，从提供商下拉菜单选择 **Zenmux**
2. 在右侧输入框中粘贴你的 Zenmux API Key
3. 点击 **Add Provider**

![Models 标签页，下拉菜单已选择 Zenmux，并输入了 API Key](/img/desktop-app/add-provider-zenmux.png)

稍等片刻，Zenmux 会出现在 **Configured** 下方，显示已加载的模型数量。侧边栏底部也会更新，显示可用的模型数。

![Models 标签页显示 Zenmux 已配置，共 61 个模型](/img/desktop-app/models-configured.png)

## 第三步：安装浏览器扩展

1. 点击左侧导航栏的 **Browser Integration**
2. 按照页面上的步骤操作：点击 **Open Releases Page** 下载扩展包（.zip 文件）
3. 将下载的文件解压到电脑上的一个文件夹中

![Browser Integration 页面，显示 4 步安装指南和 Open Releases Page 按钮](/img/desktop-app/browser-integration-tab.png)

接下来把扩展加载到 Chrome：

4. 在 Chrome 中打开 `chrome://extensions/`
5. 打开右上角的 **开发者模式**
6. 点击 **加载已解压的扩展程序**，选择解压后的 **dist** 文件夹

![Chrome 扩展程序页面，开发者模式已启用，显示"加载已解压的扩展程序"按钮](/img/browser-extension/chrome-load-unpacked.png)

你应该能在扩展列表中看到 **OmniContext Connect**。

## 第四步：启动服务

1. 点击左侧导航栏的 **Workspaces**，选择一个工作区（或使用默认工作区）
2. 勾选底部的 **Serve only (for Office / Browser)** 复选框
3. 点击 **Start Serving**

![Workspaces 标签页，已选择一个工作区，Serve only 复选框已勾选](/img/desktop-app/serve-only.png)

启动后，侧边栏会显示一个绿点和一个本地地址（端口号是动态分配的）。下方还会提示："Paste this URL into the Office add-in or browser extension to connect."

![侧边栏显示运行中的服务器，绿点和本地地址](/img/desktop-app/serve-running.png)

## 第五步：连接扩展

1. 点击 Chrome 工具栏中的 OmniContext 图标，打开侧边面板
2. 输入桌面应用中显示的服务器地址（例如 `localhost:5281`）
3. 点击 **Connect**

![扩展侧边面板显示连接界面，包含服务器地址输入框和 Connect 按钮，左侧可见已安装的 OmniContext Connect 扩展](/img/browser-extension/sidepanel-connect.png)

连接成功后，侧边面板切换到完整的聊天界面，底部出现消息输入框。

![扩展侧边面板显示聊天界面，准备接收消息](/img/browser-extension/sidepanel-connected.png)

## 第六步：选择模型

开始聊天之前，你需要选择使用哪个模型。点击侧边面板右上角的齿轮图标，打开 **Settings**。

在 **Models** 标签页中配置：

- **Current Model** -- 当前会话使用的模型。推荐使用 Claude Opus 4.6 这样的强力模型。
- **Default Model** -- 新建会话时默认使用的模型。
- **Agent Model** -- 后台智能体任务使用的模型。推荐使用 Claude Haiku 4.5 这样快速且经济的模型。

配置好后点击 **Save**。

![Settings 对话框的 Models 标签页，Current Model 设为 Claude Opus 4.6，Agent Model 设为 Claude Haiku 4.5](/img/desktop-app/select-model.png)

## 开始使用

打开任意网页，然后在侧边面板中输入你的问题。Omx 能看到你的浏览器并与之交互。

试试这些：

**阅读网页：**
> 帮我总结一下我正在看的这篇文章。

**搜索书签：**
> 找一下我关于 TypeScript 的书签。

**管理标签页：**
> 关掉所有 Stack Overflow 的标签页。

**截图：**
> 截一下当前页面的图。

**在页面上执行 JavaScript：**
> 提取这个页面上所有的图片链接。

![侧边面板中 Omx 正在总结网页文章，网页在左侧打开](/img/browser-extension/chat-summarize-page.png)

为了获得最佳体验，建议在 Omx 菜单中切换到 **Assistant** 工作流预设。这个模式专门为与浏览器、Office 等应用交互而设计。

## 可用工具

以下是扩展赋予 Omx 的全部能力：

| 工具 | 功能 |
|------|------|
| **GetTabs** | 列出所有打开的标签页 |
| **OpenUrl** | 在新标签页或现有标签页中打开 URL |
| **SwitchToTab** | 切换到指定标签页 |
| **RefreshTab** | 刷新标签页 |
| **CloseTab** | 关闭标签页 |
| **GetPageContentHtml** | 获取页面的 HTML 内容 |
| **GetPageContentText** | 获取页面的可读文本 |
| **GetPageMetadata** | 获取页面标题、URL、meta 标签等 |
| **CaptureScreenshot** | 截取当前标签页的截图 |
| **GetBookmarks** | 搜索 Chrome 书签 |
| **GetHistory** | 搜索浏览记录 |
| **ExecuteScript** | 在页面上执行 JavaScript |
| **ExecuteCDP** | 执行 Chrome DevTools Protocol 命令 |
| **Wait** | 等待指定时长 |

## 常见问题

**扩展连不上：**
确认桌面应用正在运行，且服务已启动（侧边栏有绿点）。检查扩展中输入的地址是否和桌面应用显示的一致。

**Omx 里没有出现浏览器工具：**
试试断开并重新连接扩展。如果还不行，在桌面应用中重启服务。

**某些页面读不了：**
部分页面（如 `chrome://` 开头的地址和 Chrome 网上应用店页面）会限制扩展的访问权限，这是 Chrome 本身的安全限制。
