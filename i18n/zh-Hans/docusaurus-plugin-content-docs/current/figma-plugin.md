---
slug: /tutorial/figma-plugin
title: Figma 扩展
sidebar_label: Figma 扩展
sidebar_position: 19
---

# Figma 扩展

OmniContext Figma 扩展让 Omx 可以与你的 Figma 设计交互。连接后，你可以让 Omx 查看布局、创建形状、修改节点、导出资源等，所有操作都通过聊天完成。

本指南将带你从安装桌面应用到与设计文件对话的每一步。

## 步骤 1：安装桌面应用

下载适合你平台的 OmniContext 桌面应用：

- [Windows 安装程序 (.exe)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)
- [macOS 应用包 (.dmg)](https://github.com/bluenoah1991/omni-context-cli-landing/releases)

运行安装程序并打开应用。它会自动打开 **Models** 标签页，因为你需要先配置一个模型。

## 步骤 2：添加模型

1. 在 **Models** 标签页中，从下拉菜单选择一个服务商（如 **Zenmux**）
2. 在右侧字段中粘贴你的 API 密钥
3. 点击 **Add Provider**

## 步骤 3：安装 Figma 扩展

1. 点击左侧边栏的 **Figma Integration**
2. 点击 **Open Releases Page** 下载扩展包（.zip）
3. 将文件解压到你电脑上的一个文件夹

然后在 Figma 中加载它：

4. 打开 **Figma 桌面应用**
5. 前往 **Plugins > Development > Import plugin from manifest...**
6. 选择 **dist** 文件夹内的 **manifest.json** 文件

Figma 扩展仅在 Figma 桌面应用中可用。网页版 Figma 不支持加载本地开发扩展。

## 步骤 4：开始服务

1. 点击左侧边栏的 **Workspaces**，选择一个工作区（或使用默认工作区）
2. 勾选底部的 **Serve only (for Office / Browser)** 复选框
3. 点击 **Start Serving**

运行后，侧边栏会显示绿色圆点和本地地址。

## 步骤 5：连接扩展

1. 在 Figma 中，从 **Plugins > Development > OmniContext** 运行扩展
2. 输入桌面应用中显示的服务器地址（如 `http://localhost:5281`）
3. 点击 **Connect**

连接后，扩展面板会切换到完整的聊天界面。

## 步骤 6：选择模型

点击扩展面板右上角的齿轮图标打开 **Settings**。

在 **Models** 标签页中配置：

- **Current Model** -- 当前会话使用的模型
- **Default Model** -- 新会话默认使用的模型
- **Agent Model** -- 后台智能体任务使用的模型

完成后点击 **Save**。

## 使用方法

打开任意 Figma 设计文件，然后在扩展面板中输入你的问题。Omx 可以看到你的设计并与之交互。

以下是一些你可以尝试的操作：

**查看设计：**
> 当前选中了什么？

**创建形状：**
> 在 100, 100 位置添加一个 200x100 的蓝色矩形。

**修改节点：**
> 将选中的画框填充色改为 #f0f0f0。

**处理文本：**
> 创建一个 32px 粗体的标题，内容是"欢迎"。

**构建布局：**
> 创建一个垂直自动布局画框，里面放 3 个卡片。

**导出资源：**
> 将选中的节点导出为 PNG。

为获得最佳体验，请在 Omx 菜单中切换到 **Assistant** 工作流预设。此模式专为与 Figma、浏览器和 Office 等应用交互而设计。

## 可用工具

| 类别 | Omx 可以做什么 |
|------|---------------|
| **查看** | 获取选择内容、页面结构、查找节点、获取节点详情、列出样式、组件、变量、页面、字体 |
| **创建** | 矩形、画框、文本、椭圆、线条、分区、组件、插入图片 |
| **修改** | 更改节点属性、更新文本、移动、克隆、编组、取消编组、删除节点 |
| **导出** | 将节点导出为 PNG、SVG 或 PDF |
| **导航** | 切换页面、设置视口和缩放 |
| **变换** | 布尔运算（合并、减去、相交、排除）、展平为矢量 |

## 故障排除

**扩展无法连接：**
确保桌面应用正在运行且服务器已启动（侧边栏显示绿色圆点）。检查扩展中的地址是否与桌面应用中显示的一致。

**工具不起作用：**
通过断开连接并重新连接来刷新扩展。如果仍然不行，在桌面应用中重启服务器。

**扩展未出现在 Figma 中：**
确保你使用的是 Figma 桌面应用，而非网页版。前往 **Plugins > Development** 检查 OmniContext 是否在列表中。如果没有，重新导入 manifest.json 文件。
