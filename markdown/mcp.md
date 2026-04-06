---
slug: /tutorial/mcp
title: MCP Configuration
sidebar_label: MCP Configuration
sidebar_position: 6
---

# MCP Configuration

omx supports [Model Context Protocol](https://modelcontextprotocol.io) (MCP) for connecting external tools and data sources.

## Configuration File

Create `~/.omx/mcp.json` (global) or `.omx/mcp.json` (project) with your server definitions:

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

omx also reads Claude's MCP configuration from `~/.claude/claude_desktop_config.json` and `.claude/mcp.json` automatically.

## Server Types

### Stdio (Local Process)

Launches a local process and communicates over stdin/stdout:

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

### HTTP (Remote Server)

Connects to an HTTP-based MCP server:

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

## Tool Naming

MCP tools appear with a `Mcp_` prefix followed by the server name and tool name: `Mcp_servername_toolname`. This prevents naming conflicts with built-in tools.

## Environment Variables

Pass environment variables to stdio servers using the `env` field:

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
