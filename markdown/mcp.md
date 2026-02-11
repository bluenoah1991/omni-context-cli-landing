---
slug: /tutorial/mcp
title: MCP Configuration
sidebar_label: MCP Configuration
sidebar_position: 6
---

# MCP Configuration

Omx supports the [Model Context Protocol (MCP)](https://modelcontextprotocol.io) for connecting external tools and services.

## What is MCP?

MCP is an open protocol that allows AI assistants to connect with external data sources and tools. With MCP, you can extend Omx with capabilities like:

- Database access
- API integrations
- File system watchers
- Custom tool implementations

## Configuration File

Create `~/.omx/mcp.json` (user-wide) or `.omx/mcp.json` in your project root (project-specific) to configure MCP servers. If both exist, they are merged, with the project-level config taking priority:

```json
{
  "mcpServers": {
    "web-search": {
      "url": "https://api.z.ai/api/mcp/web_search_prime/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_ZAI_API_KEY>"
      }
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "<YOUR_CONTEXT7_API_KEY>"]
    }
  }
}
```

## Server Types

### stdio Servers

Local process communication via stdin/stdout:

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

### HTTP Servers

Remote HTTP servers using Streamable HTTP transport:

```json
{
  "mcpServers": {
    "web-search": {
      "url": "https://api.z.ai/api/mcp/web_search_prime/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_ZAI_API_KEY>"
      }
    }
  }
}
```

## Examples

### Context7

Look up documentation for libraries and frameworks:

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

### Z.ai Web Search

Search the web using Z.ai:

```json
{
  "mcpServers": {
    "web-search": {
      "url": "https://api.z.ai/api/mcp/web_search_prime/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_ZAI_API_KEY>"
      }
    }
  }
}
```

## Using MCP Tools

Once configured, MCP tools appear with the `mcp_` prefix:

```
mcp_serverid_toolname
```

For example, if you have a server named `github` with a tool `search_repositories`, it becomes `mcp_github_search_repositories`.

Some integrations (like browser or Office clients) show up as `remote_` tools when connected.

## Troubleshooting

### Server Not Starting

Check that the command is correct and dependencies are installed:

```bash
npx -y @modelcontextprotocol/server-filesystem --help
```

### Tools Not Appearing

Restart Omx after modifying `mcp.json`. MCP servers are initialized on startup. Both `~/.omx/mcp.json` and `.omx/mcp.json` are loaded.

### Connection Errors

Verify environment variables are set correctly and any required authentication is configured.