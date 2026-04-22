---
slug: /tutorial/landmarks
title: 地标导航
sidebar_label: 地标导航
sidebar_position: 11.5
---

# 地标导航

Landmarks 是 OmniContext CLI 的代码库导航系统。它会把稳定、可复用的仓库知识保存成带名字的 layer，这样后续会话就能直接回到关键文件、目录和符号，而不用每次都从头重新摸结构。

Landmarks 默认就是开启的。如果你不想在某个项目里使用它，也可以在偏好设置里关掉。

## 一个地标会存什么

一个 landmark layer 包含三部分：

- 表示某个概念、功能或子系统的 **name**
- 说明这一层覆盖范围的 **description**
- 指向关键代码对象的 **pins**

每个 pin 可以指向三种对象类型之一：

- `file`
- `directory`
- `symbol`

所以 landmarks 比普通笔记更结构化。它不是只记一句“鉴权逻辑大概在 services 下面”，而是可以把真正相关的文件和符号精确保存下来。

## 内置地标工具

| 工具 | 作用 |
|------|------|
| `LandmarkList` | 列出当前项目里所有已保存的 layer |
| `LandmarkRead` | 读取某个 layer 以及它的全部 pins |
| `LandmarkUpdate` | 创建新 layer，或完整替换已有 layer |
| `LandmarkDelete` | 删除一个已经过时的 layer 和它的所有 pins |

默认的 **Programming** 工作流已经包含这些工具。如果你自己写工作流，也可以通过 `allowBuiltinTools` 把它们白名单进去。

## 典型使用流程

一个常见的 landmark 流程大概是这样：

1. 先用 `LandmarkList` 看看当前项目里已经存了什么
2. 如果有相关 layer，再用 `LandmarkRead` 打开细看
3. 如果还没有，就先按正常方式探索代码库
4. 当你搞清楚了某块稳定结构后，用 `LandmarkUpdate` 把它保存下来
5. 结构发生变化时更新它；只有在它彻底没用了时才删除

有一个细节要注意：`LandmarkUpdate` 会整体替换某个 layer 的 pin 集合，所以如果你是在扩展已有 layer，最好先读出来，再把还想保留的 pins 一起带回去。

## 哪些内容适合做地标

Landmarks 最适合拿来保存那些下次重找会很烦的结构，比如：

- 跨多个文件分散的子系统
- 一条完整的请求链路或数据流
- 关键扩展点和注册表位置
- 项目特有的路径约定
- 某个反复出现的 bug 或功能区背后的真实文件集合

相反，那些一次性的琐碎细节，或者只改了一个小文件的临时信息，就不太值得存成 landmark。

## 如何开启或关闭

你可以在偏好设置菜单里切换 landmarks：

1. 按 `Escape`
2. 选择 **Change preferences**
3. 切换 **Landmarks**

当 landmarks 被关闭时，对应的地标工具也会一起隐藏。

## 存储位置

每个项目都会把 landmark 数据存放在 `~/.omx/projects/<project-id>/landmark.sqlite` 中。

这个数据库保存的是 layer 元数据以及它下面挂的 pins。因为它是项目级存储，所以你在一个仓库里建立的导航地图，不会串到别的仓库去。
