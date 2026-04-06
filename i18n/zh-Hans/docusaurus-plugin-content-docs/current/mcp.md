---
slug: /tutorial/mcp
title: MCP 配置
sidebar_label: MCP 配置
sidebar_position: 6
---

# MCP 配置

omx 支持 [Model Context Protocol](https://modelcontextprotocol.io)（MCP），用于连接外部工具和数据源。

## 配置文件

创建 `~/.omx/mcp.json`（全局）或 `.omx/mcp.json`（项目级）：

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

omx 也会自动读取 Claude 的 MCP 配置：`~/.claude/claude_desktop_config.json` 和 `.claude/mcp.json`。

## 服务器类型

### Stdio（本地进程）

启动本地进程，通过 stdin/stdout 通信：

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

连接到 HTTP MCP 服务器：

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

MCP 工具以 `Mcp_` 前缀加服务器名和工具名出现：`Mcp_servername_toolname`。这避免了与内置工具的命名冲突。

## 环境变量

使用 `env` 字段为 stdio 服务器传递环境变量：

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
