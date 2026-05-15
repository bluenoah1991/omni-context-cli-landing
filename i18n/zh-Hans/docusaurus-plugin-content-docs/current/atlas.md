---
slug: /tutorial/atlas
title: Atlas 导航
sidebar_label: Atlas 导航
sidebar_position: 11.5
---

# Atlas 导航

Atlas 是 OmniContext CLI 的代码库导航系统。它会把稳定、可复用的仓库知识保存成带名字的地图，这样后续会话就能直接回到关键文件、目录和符号，而不用每次都从头重新摸结构。

Atlas 默认就是开启的。如果你不想在某个项目里使用它，也可以在偏好设置里关掉。

## 一个 Atlas 地图会存什么

一个 atlas 地图包含三部分：

- 表示某个概念、功能或子系统的 **name**
- 说明这一地图覆盖范围的 **description**
- 指向关键代码对象的 **points**

每个 point 可以指向三种对象类型之一：

- `file`
- `directory`
- `symbol`

所以 atlas 地图比普通笔记更结构化。它不是只记一句"鉴权逻辑大概在 services 下面"，而是可以把真正相关的文件和符号精确保存下来。

## 内置 Atlas 工具

| 工具 | 作用 |
|------|------|
| `AtlasList` | 列出当前项目里所有已保存的地图 |
| `AtlasRead` | 读取某个地图以及它的全部 points |
| `AtlasUpdate` | 创建新地图，或完整替换已有地图 |
| `AtlasDelete` | 删除一个已经过时的地图和它的所有 points |

默认的 **Programming** 工作流已经包含这些工具。如果你自己写工作流，也可以通过 `allowBuiltinTools` 把它们白名单进去。

## 典型使用流程

一个常见的 atlas 流程大概是这样：

1. 先用 `AtlasList` 看看当前项目里已经存了什么
2. 如果有相关地图，再用 `AtlasRead` 打开细看
3. 如果还没有，就先按正常方式探索代码库
4. 当你搞清楚了某块稳定结构后，用 `AtlasUpdate` 把它保存下来
5. 结构发生变化时更新它；只有在它彻底没用了时才删除

有一点需要注意：`AtlasUpdate` 会用新的 point 集合完整替换某个地图，所以如果你想在已有地图上扩展，请先读取，然后保留你还想继续使用的 points。

## 适合保存的内容

Atlas 地图最适合用来保存那些以后重新摸索会很麻烦的结构，例如：

- 分散在多个文件中的子系统
- 端到端的请求或数据流
- 关键的扩展点和注册入口
- 项目特有的路径约定
- 反复出现的 bug 或功能区域背后的实际文件

它们不太适合用来存一次性琐事或很小的单文件改动。

## 开关 Atlas

在偏好菜单里可以开关 atlas：

1. 按 `Escape`
2. 选择 **Change preferences**
3. 切换 **Atlas**

关掉 atlas 之后，相关的 atlas 工具会被隐藏。

## 存储

每个项目都会把 atlas 数据存放在 `~/.omx/projects/<project-id>/atlas.sqlite` 里。

这个数据库会保存地图的元信息以及每个地图关联的 points。因为它是按项目隔离的，所以你在一个仓库里建立的地图不会泄漏到无关工作中。
