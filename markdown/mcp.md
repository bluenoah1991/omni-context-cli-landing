---
slug: /tutorial/mcp
title: MCP Configuration
sidebar_label: MCP Configuration
sidebar_position: 6
---

# MCP Configuration

OmniContext CLI supports [Model Context Protocol](https://modelcontextprotocol.io) (MCP) for connecting external tools and data sources.

The built-in Programming and General workflows already allow MCP tools, so you usually just need to configure the servers.

## Where OmniContext CLI Looks

OmniContext CLI reads MCP definitions from these locations:

- `~/.omx/mcp.json`
- `.omx/mcp.json`
- `~/.claude/claude_desktop_config.json`
- `.claude/mcp.json`

## Configuration File

A minimal config looks like this:

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

## Server Types

### Stdio (Local Process)

Use `stdio` when OmniContext CLI should launch a local process and talk to it over standard input and output.

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

Use `http` when the MCP server is already running somewhere else.

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

MCP tools are exposed with an `Mcp_` prefix, followed by the server name and tool name:

```
Mcp_servername_toolname
```

This keeps them from colliding with built-in tools.

## Environment Variables

For `stdio` servers, pass environment variables with `env`:

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
