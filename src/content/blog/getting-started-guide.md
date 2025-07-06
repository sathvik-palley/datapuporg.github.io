---
title: Getting Started with DataPup - Your First Connection
description: Learn how to set up DataPup and connect to your first database in under 5 minutes.
pubDate: "2024-01-20"
author: sahith-vibudhi
tags: [tutorial, getting-started]
---

Welcome to DataPup! This guide will walk you through installing DataPup and connecting to your first database. Let's get started!

## Installation

### Download DataPup

DataPup is available for Windows, macOS, and Linux. Download the appropriate version for your platform:

1. Visit the [releases page](https://github.com/DataPupOrg/DataPup/releases)
2. Download the installer for your operating system
3. Run the installer and follow the prompts

### System Requirements

- **Windows**: Windows 10 or later
- **macOS**: macOS 10.15 (Catalina) or later
- **Linux**: Ubuntu 18.04+, Fedora 32+, or similar

## Your First Connection

### Step 1: Launch DataPup

After installation, launch DataPup. You'll be greeted with the connection manager.

### Step 2: Add a New Connection

Click the "New Connection" button and select your database type:

- ClickHouse (currently supported)
- More databases coming soon!

### Step 3: Enter Connection Details

For this example, let's connect to a ClickHouse database:

```
Host: localhost
Port: 8123
Database: default
Username: default
Password: ********
```

**Pro tip**: Enable "Save password" to avoid entering it each time.

### Step 4: Test Connection

Click "Test Connection" to verify your settings. If successful, you'll see a green checkmark.

### Step 5: Connect

Click "Connect" to establish the connection. You're now ready to explore your database!

## Exploring Your Database

### Schema Browser

The left sidebar shows your database structure:
- Databases
- Schemas
- Tables
- Views
- Functions

Click any item to view its details.

### Query Editor

To write a query:

1. Click "New Query" or press `Cmd/Ctrl + N`
2. Write your SQL query
3. Press `Cmd/Ctrl + Enter` to execute

Example query:
```sql
SELECT 
    u.name,
    u.email,
    COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name, u.email
ORDER BY order_count DESC
LIMIT 10;
```

### Viewing Results

Query results appear in the bottom panel. You can:
- Sort by clicking column headers
- Filter results using the search box
- Export to CSV, JSON, or clipboard
- View results as a chart

## Keyboard Shortcuts

Master these shortcuts for maximum productivity:

- `Cmd/Ctrl + N`: New query
- `Cmd/Ctrl + Enter`: Execute query
- `Cmd/Ctrl + S`: Save query
- `Cmd/Ctrl + D`: Duplicate line
- `Cmd/Ctrl + /`: Comment/uncomment line

## Tips for Success

1. **Use Query History**: Access previous queries with `Cmd/Ctrl + H`
2. **Save Frequent Queries**: Create a library of commonly used queries
3. **Leverage Auto-complete**: Start typing table or column names
4. **Format Your SQL**: Right-click and select "Format SQL" for clean code

## Next Steps

Now that you're connected, explore these features:
- [Managing Multiple Connections](/blog/managing-connections)
- [Advanced Query Features](/blog/advanced-queries)
- [Exporting and Importing Data](/blog/data-import-export)

## Need Help?

- Check our [documentation](https://docs.datapup.dev)
- Join our [Discord community](https://discord.gg/datapup)
- Report issues on [GitHub](https://github.com/DataPupOrg/DataPup/issues)

Happy querying! 🐕