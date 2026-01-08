---
slug: /tutorial/mcp
title: MCP 配置
sidebar_label: MCP 配置
sidebar_position: 4
---

# MCP 配置

Omx 支持 [Model Context Protocol (MCP)](https://modelcontextprotocol.io) 用于连接外部工具和服务。

## 什么是 MCP？

MCP 是一个开放协议，允许 AI 助手连接外部数据源和工具。通过 MCP，你可以扩展 Omx 的能力，例如：

- 数据库访问
- API 集成
- 文件系统监控
- 自定义工具实现

## 配置文件

创建 `~/.omx/mcp.json` 来配置 MCP 服务器：

```json
{
  "mcpServers": {
    "web-search": {
      "url": "https://open.bigmodel.cn/api/mcp/web_search_prime/mcp",
      "key": "<YOUR_ZHIPU_API_KEY>"
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "<YOUR_CONTEXT7_API_KEY>"]
    }
  }
}
```

## 服务器类型

### stdio 服务器

通过 stdin/stdout 与本地进程通信：

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "<YOUR_CONTEXT7_API_KEY>"]
    }
  }
}
```

### HTTP 服务器

使用 Streamable HTTP 传输的远程 HTTP 服务器：

```json
{
  "mcpServers": {
    "web-search": {
      "url": "https://open.bigmodel.cn/api/mcp/web_search_prime/mcp",
      "key": "<YOUR_ZHIPU_API_KEY>"
    }
  }
}
```

`key` 字段是可选的。如果提供，将作为 Bearer 令牌发送在 Authorization 头中。

## 示例

### Context7

查阅库和框架的文档：

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "<YOUR_CONTEXT7_API_KEY>"]
    }
  }
}
```

### 智谱网页搜索

使用智谱 AI 搜索网页：

```json
{
  "mcpServers": {
    "web-search": {
      "url": "https://open.bigmodel.cn/api/mcp/web_search_prime/mcp",
      "key": "<YOUR_ZHIPU_API_KEY>"
    }
  }
}
```

## 使用 MCP 工具

配置完成后，MCP 工具以 `mcp_` 前缀出现：

```
mcp_serverid_toolname
```

例如，如果你有一个名为 `github` 的服务器，其中有 `search_repositories` 工具，它会变成 `mcp_github_search_repositories`。

## 故障排除

### 服务器无法启动

检查命令是否正确，依赖是否已安装：

```bash
npx -y @modelcontextprotocol/server-filesystem --help
```

### 工具未显示

修改 `mcp.json` 后重启 Omx。MCP 服务器在启动时初始化。

### 连接错误

验证环境变量设置正确，所有必需的身份验证都已配置。
