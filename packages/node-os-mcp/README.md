# Node OS MCP Server

This is a Node.js MCP Server in TypeScript implementing operating system information tools. It can be used as a scaffold for your own MCP Server. It includes the following features: 

- **CPU Usage Tool**: A tool that provides average CPU usage percentage over a 100ms sampling period.
- **Hostname Tool**: A tool that returns the system hostname.
- **Architecture Tool**: A tool that returns the system architecture.
- **Uptime Tool**: A tool that returns the system uptime in seconds.
- **Connect to Agent Builder**: A feature that allows you to connect the MCP server to the Agent Builder for testing and debugging.
- **Debug SSE in MCP Inspector**: A feature that allows you to debug the MCP Server using the MCP Inspector.
- **Debug STDIO in MCP Inspector**: A feature that allows you to debug the MCP Server using the MCP Inspector.

## Get started with the Node OS MCP Server template

> **Prerequisites**
>
> To run the MCP Server in your local dev machine, you will need: [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/)

1. Open VS Code Debug panel. Select `Debug in Agent Builder` or press `F5` to start debugging the MCP server.
2. Use AI Toolkit Agent Builder to test the server with [this prompt](vscode://ms-windows-ai-studio.windows-ai-studio/open_prompt_builder?model_id=github/gpt-4o-mini&&system_prompt=You%20are%20a%20system%20administrator%20that%20can%20provide%20operating%20system%20information&&user_prompt=What%20is%20the%20current%20CPU%20usage%20and%20system%20uptime?&track_from=vsc_md&mcp=node_os_mcp). Server will be auto-connected to the Agent Builder.
3. Click `Run` to test the server with the prompt.

**Congratulations**! You have successfully run the Node OS MCP Server in your local dev machine via Agent Builder as the MCP Client.
![DebugMCP](https://raw.githubusercontent.com/microsoft/windows-ai-studio-templates/refs/heads/dev/mcpServers/mcp_debug.gif)

## What's included in the template
| Folder / File| Contents                                     |
| ------------ | -------------------------------------------- |
| `.vscode`    | VSCode files for debugging                   |
| `.aitk`      | Configurations for AI Toolkit                |
| `src`        | The source code for the OS info mcp server   |

## How to debug the Node OS MCP Server

> Notes:
> - [MCP Inspector](https://github.com/modelcontextprotocol/inspector) is a visual developer tool for testing and debugging MCP servers.
> - All debugging modes support breakpoints, so you can add breakpoints to the tool implementation code.

| Debug Mode | Description | Steps to debug |
| ---------- | ----------- | --------------- |
| Agent Builder | Debug the MCP server in the Agent Builder via AI Toolkit. | 1. Open VS Code Debug panel. Select `Debug in Agent Builder` and press `F5` to start debugging the MCP server.<br>2. Use AI Toolkit Agent Builder to test the server with [this prompt](vscode://ms-windows-ai-studio.windows-ai-studio/open_prompt_builder?model_id=github/gpt-4o-mini&&system_prompt=You%20are%20a%20system%20administrator%20that%20can%20provide%20operating%20system%20information&&user_prompt=What%20is%20the%20current%20CPU%20usage%20and%20system%20uptime?&track_from=vsc_md&mcp=node_os_mcp). Server will be auto-connected to the Agent Builder.<br>3. Click `Run` to test the server with the prompt. |
| MCP Inspector for SSE | Debug the MCP server using the MCP Inspector. | 1. Open VS Code Debug panel. Select `Debug SSE in Inspector (Edge)` or `Debug SSE in Inspector (Chrome)`. Press F5 to start debugging.<br>2. When MCP Inspector launches in the browser, click the `Connect` button to connect this MCP server.<br>3. Then you can `List Tools`, select a tool, input parameters, and `Run Tool` to debug your server code.<br> |
| MCP Inspector for STDIO | Debug the MCP server using the MCP Inspector. | 1. Open VS Code Debug panel. Select `Debug STDIO in Inspector`. Press F5 to start debugging.<br>2. When MCP Inspector launches in your default browser, click the `Connect` button to connect this MCP server.<br>3. Then you can `List Tools`, select a tool, input parameters, and `Run Tool` to debug your server code.<br>4. Of course, you can add breakpoint to the tool implementation code. |

## Default Ports and customizations

| Debug Mode | Ports | Definitions | Customizations | Note |
| ---------- | ----- | ------------ | -------------- |-------------- |
| Agent Builder | 3001 | [tasks.json](.vscode/tasks.json) | Edit [launch.json](.vscode/launch.json), [tasks.json](.vscode/tasks.json), [index.ts](src/index.ts), [mcp.json](.aitk/mcp.json) to change ports and parameters. | N/A |
| MCP Inspector for SSE | 3001 (Server); 5173 and 3000 (Inspector) | [tasks.json](.vscode/tasks.json) | Edit [launch.json](.vscode/launch.json), [tasks.json](.vscode/tasks.json), [index.ts](src/index.ts), [mcp.json](.aitk/mcp.json) to change above ports.| N/A |
| MCP Inspector for STDIO | N/A | [launch.json](.vscode/launch.json) | N/A |   When launching debugging, it launches MCP Inspector with MCP settings pre-configured (default to `npm --silent run dev:stdio`). After clicking `Connect`, Inspector launches MCP server on STDIO, which is also auto-attached for debugging via VSCode. | 

## Feedback

If you have any feedback or suggestions for this template, please open an issue on the [AI Toolkit GitHub repository](https://github.com/microsoft/vscode-ai-toolkit/issues)