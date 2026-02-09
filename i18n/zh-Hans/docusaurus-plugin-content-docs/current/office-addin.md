---
slug: /tutorial/office-addin
title: Office 扩展
sidebar_label: Office 扩展
sidebar_position: 18
---

# Office 扩展

OmniContext Office 扩展将 Omx 带入 Microsoft Excel、Word 和 PowerPoint。你可以直接在 Office 应用里跟 Omx 对话 -- 让它搭建表格、撰写文档、制作 PPT 等等。

本指南从零开始，带你走完从首次启动到在表格里聊天的每一步。

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

## 第三步：安装 Office 扩展

1. 点击左侧导航栏的 **Office Integration**
2. 你会看到状态显示为灰点 "Not installed"
3. 点击 **Install Office Add-in**

![Office Integration 标签页显示 Not installed 状态和 Install Office Add-in 按钮](/img/office-addin/office-integration-tab.png)

安装完成后，状态变为绿点 "Running"，并显示 HTTPS 端口号。桌面应用会将扩展注册到 Office，并运行一个扩展所需的本地 HTTPS 服务器。

![Office Integration 标签页显示 Running 状态，绿点和 HTTPS 端口号](/img/office-addin/office-addin-installed.png)

## 第四步：启动服务

1. 点击左侧导航栏的 **Workspaces**，选择一个工作区（或使用默认工作区）
2. 勾选底部的 **Serve only (for Office / Browser)** 复选框
3. 点击 **Start Serving**

![Workspaces 标签页，已选择一个工作区，Serve only 复选框已勾选](/img/desktop-app/serve-only.png)

启动后，侧边栏会显示一个绿点和一个本地地址（端口号是动态分配的）。下方还会提示："Paste this URL into the Office add-in or browser extension to connect."

![侧边栏显示运行中的服务器，绿点和本地地址](/img/desktop-app/serve-running.png)

## 第五步：在 Office 中打开扩展

1. 打开 Excel、Word 或 PowerPoint
2. 在 **开始** 选项卡中，点击功能区最左侧的加载项按钮，打开加载项下拉列表
3. 在开发人员加载项下找到 **OmniContext** 并点击

![Excel 中加载项下拉列表，显示 OmniContext](/img/office-addin/excel-ribbon-button.png)

OmniContext 任务面板会在右侧打开。首次加载后，功能区中也会直接显示一个 **OmniContext** 按钮，方便快速访问。

![Excel 中 OmniContext 任务面板已打开，显示聊天界面准备接收消息](/img/office-addin/taskpane-connected.png)

如果在加载项列表中没找到，进入 **插入** > **我的加载项** 手动添加。

## 第六步：选择模型

开始聊天之前，你需要选择使用哪个模型。点击任务面板右上角的齿轮图标，打开 **Settings**。

在 **Models** 标签页中配置：

- **Current Model** -- 当前会话使用的模型。推荐使用 Claude Opus 4.6 这样的强力模型。
- **Default Model** -- 新建会话时默认使用的模型。
- **Agent Model** -- 后台智能体任务使用的模型。推荐使用 Claude Haiku 4.5 这样快速且经济的模型。

配置好后点击 **Save**。

![Settings 对话框的 Models 标签页，Current Model 设为 Claude Opus 4.6，Agent Model 设为 Claude Haiku 4.5](/img/desktop-app/select-model.png)

## 在 Excel 中使用

打开一个表格，直接开聊。试试这些：

**从头搭建表格：**
> 创建一个月度预算表，包含房租、餐饮、交通和水电类别。底部加上 SUM 汇总公式。

**处理现有数据：**
> C 列的平均值是多少？

**格式化数据：**
> 把表头行加粗，设成蓝色背景。自适应所有列宽。

**添加公式：**
> 在 D 列填入公式，计算每行占总计的百分比。

**创建图表：**
> 用 A1:B10 的数据做一个柱状图。

**管理工作表：**
> 新建一个叫"汇总"的工作表，把合计数据复制过去。

![Omx 在 Excel 中搭建带公式和分类配色的月度预算表](/img/office-addin/excel-budget-demo.png)

### Excel 工具

| 类别 | Omx 能做什么 |
|------|-------------|
| **单元格和区域** | 读取、写入、清除、复制、格式化单元格和区域 |
| **公式** | 写公式、设置数据验证、添加条件格式 |
| **表格** | 创建、排序、筛选、增删行列 |
| **工作表** | 新增、删除、重命名、复制、排序、保护工作表 |
| **图表** | 创建图表、设置格式、调整位置 |
| **形状** | 添加形状、设置文字、设置样式 |
| **批注** | 添加、读取、删除批注 |
| **工作簿** | 获取/设置属性、命名区域、数据透视表 |

## 在 Word 中使用

打开文档，直接提问：

**撰写内容：**
> 写一段关于我们公司使命的介绍。

**编辑和格式化：**
> 把所有标题 1 改成深蓝色。正文设为 Calibri 11 号字、1.15 倍行距。

**查找替换：**
> 把所有的"公司名称"替换成"极客科技"。

**处理表格：**
> 插入一个 3 列的表格，对比我们的基础版、专业版和企业版。

**审阅：**
> 显示文档中所有的批注。

> 接受所有修订。

**页眉页脚：**
> 添加页眉，左边放日期，右边写"机密"。

![Omx 在 Word 中创建格式化的简历文档，包含样式化标题、分区和专业排版](/img/office-addin/word-formatting-demo.png)

### Word 工具

| 类别 | Omx 能做什么 |
|------|-------------|
| **内容** | 读取文本/HTML/OOXML，获取段落、节、样式 |
| **编辑** | 插入文本、HTML、图片、分页符，查找替换 |
| **格式** | 应用样式、设置字体、段落间距、超链接 |
| **表格** | 插入表格、读写单元格、增删行列 |
| **审阅** | 读取/添加/删除批注，处理修订 |
| **结构** | 页眉页脚、内容控件、书签、域 |
| **注释** | 脚注和尾注 |

## 在 PowerPoint 中使用

打开演示文稿，开始构建：

**创建幻灯片：**
> 做一个 10 页的产品路线图 PPT。包含一个标题页和一个结尾总结页。

**编辑内容：**
> 把第 2 页的标题改成"市场分析"。

**添加视觉元素：**
> 在右上角添加一个蓝色矩形，写上"2025 Q2"。

> 在标题和内容之间画一条分隔线。

**调整顺序：**
> 把第 5 页移到第 2 的位置。

> 删掉最后 3 张幻灯片。

**导出：**
> 把第 3 页导出为图片。

![Omx 在 PowerPoint 中创建专业设计的多页公司介绍演示文稿](/img/office-addin/powerpoint-slides-demo.png)

### PowerPoint 工具

| 类别 | Omx 能做什么 |
|------|-------------|
| **幻灯片** | 添加、删除、移动、选中幻灯片 |
| **内容** | 读取/写入幻灯片文字，导出为图片 |
| **版式** | 获取可用版式和母版，应用版式 |
| **形状** | 添加几何形状、线条、表格；移动、缩放、删除 |
| **格式** | 填充颜色、线条样式、文字格式、超链接、旋转 |
| **属性** | 标签、演示文稿标题、幻灯片尺寸 |

## 小贴士

- 使用 **Assistant** 工作流预设效果最好。在 Omx 菜单中切换，或用 `omx --workflow assistant` 启动。
- Omx 在修改前会先检查你的文档，了解当前状态。
- 修改前可以先问 Omx"这个表格里有什么？"，让它先看看再动手。
- 大批量操作（格式化几百行、创建多张幻灯片）可能需要几秒钟。
- 所有数据都留在你的电脑上。扩展连接的是本地服务器，不会向外部发送任何东西。
- 桌面应用需要保持运行，扩展才能工作。

## 常见问题

**加载项列表中没出现 OmniContext：**
确认扩展已安装（桌面应用 Office Integration 标签页显示绿色 "Running" 状态）。试试重启 Office 应用。如果还是没有，进入 **插入** > **我的加载项** 手动添加。

**任务面板显示"Disconnected"：**
检查桌面应用是否在运行，服务是否已启动（侧边栏有绿点）。任务面板中的服务器地址应该和桌面应用显示的一致。

**修改没有生效：**
某些操作需要文档不在特定单元格/区域的编辑状态。点击文档其他位置，再试一次。
