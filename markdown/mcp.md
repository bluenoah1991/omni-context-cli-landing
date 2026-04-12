---
slug: /tutorial/mcp
title: MCP Configuration
sidebar_label: MCP Configuration
sidebar_position: 9
---

# MCP Configuration

OmniContext CLI supports [Model Context Protocol](https://modelcontextprotocol.io) (MCP) for connecting external tools and data sources.

The built-in Programming and General workflows already allow MCP tools, so you usually just need to configure the servers.

## Where OmniContext CLI Looks

OmniContext CLI reads MCP definitions from these locations:

- `~/.claude.json`
- `.mcp.json`
- `~/.omx/mcp.json`
- `.omx/mcp.json`

## Configuration File

A minimal config looks like this:

```json
{
  "mcpServers": {
    "my-server": {
      "command": "npx",
      "args": ["-y", "my-mcp-server"]
    }
  }
}
```

## Server Types

### Stdio (Local Process)

Use a `command` when OmniContext CLI should launch a local process and talk to it over standard input and output.

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    }
  }
}
```

### Streamable HTTP (Remote Server)

Use a `url` when the MCP server is already running somewhere else.

```json
{
  "mcpServers": {
    "remote-tools": {
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

For command-based servers, pass environment variables with `env`:

```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["server.js"],
      "env": {
        "API_KEY": "your-key-here"
      }
    }
  }
}
```
