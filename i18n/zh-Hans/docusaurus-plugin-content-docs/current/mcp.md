---
slug: /tutorial/mcp
title: MCP 配置
sidebar_label: MCP 配置
sidebar_position: 9
---

# MCP 配置

OmniContext CLI 支持 [Model Context Protocol](https://modelcontextprotocol.io)（MCP），用于连接外部工具和数据源。

内置的 Programming 和 General 工作流默认就允许 MCP 工具，所以大多数情况下你只需要配置服务器本身。

## OmniContext CLI 会从哪里读取

OmniContext CLI 会从这些位置读取 MCP 定义：

- `~/.claude.json`
- `.mcp.json`
- `~/.omx/mcp.json`
- `.omx/mcp.json`

## 配置文件

一个最小配置长这样：

```json
{
  "mcpServers": {
    "my-server": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "my-mcp-server"]
    }
  }
}
```

## 服务器类型

### Stdio（本地进程）

当你希望 OmniContext CLI 自己启动一个本地进程，并通过标准输入输出与它通信时，使用 `stdio`。

```json
{
  "mcpServers": {
    "filesystem": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    }
  }
}
```

### HTTP（远程服务器）

当 MCP 服务器已经运行在别处时，使用 `http`。

```json
{
  "mcpServers": {
    "remote-tools": {
      "type": "http",
      "url": "http://localhost:8080/mcp"
    }
  }
}
```

## 工具命名

MCP 工具会以 `Mcp_` 前缀暴露出来，后面再拼接服务器名和工具名：

```
Mcp_servername_toolname
```

这样可以避免和内置工具重名。

## 环境变量

对于 `stdio` 服务器，可以用 `env` 传递环境变量：

```json
{
  "mcpServers": {
    "my-server": {
      "type": "stdio",
      "command": "node",
      "args": ["server.js"],
      "env": {
        "API_KEY": "your-key-here"
      }
    }
  }
}
```
