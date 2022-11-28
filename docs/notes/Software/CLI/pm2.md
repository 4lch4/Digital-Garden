---
tags:
  - Software/CLI
  - Development
---

# PM2

> PM2 is a daemon process manager that will help you manage and keep your application online 24/7.

!!! info Source
This note was originally found in the [rstacrus/cheatsheets](https://github.com/rstacruz/cheatsheets) GitHub repository.

## Table of Contents

- [PM2](#pm2)
  - [Table of Contents](#table-of-contents)
  - [Basic CLI Usage](#basic-cli-usage)
    - [Fork mode](#fork-mode)
    - [Cluster mode](#cluster-mode)
    - [Listing](#listing)
    - [Logs](#logs)
    - [Actions](#actions)
    - [Misc](#misc)
  - [Ecosystem File](#ecosystem-file)
    - [Overview](#overview)
    - [Simple Config](#simple-config)
    - [Multiple Applications](#multiple-applications)
    - [CLI Management of Application](#cli-management-of-application)
      - [Manage All At Once](#manage-all-at-once)
      - [Manage Specific Applications](#manage-specific-applications)
      - [Switching Environments](#switching-environments)

## Basic CLI Usage

### Fork mode

| Command                          | Description              |
| -------------------------------- | ------------------------ |
| `pm2 start app.js --name my-api` | Start and name a process |

### Cluster mode

| Command                   | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| `pm2 start app.js -i 0`   | Will start maximum processes with LB depending on available CPUs |
| `pm2 start app.js -i max` | Same as above, but deprecated                                    |
| `pm2 scale app +3`        | Scales `app` up by 3 workers                                     |
| `pm2 scale app 2`         | Scales `app` up or down to 2 workers total                       |

### Listing

| Command          | Description                                      |
| ---------------- | ------------------------------------------------ |
| `pm2 list`       | Display all processes status                     |
| `pm2 jlist`      | Print process list in raw JSON                   |
| `pm2 prettylist` | Print process list in beautified JSON            |
| ---              | ---                                              |
| `pm2 describe 0` | Display all information about a specific process |
| ---              | ---                                              |
| `pm2 monit`      | Monitor all processes                            |

### Logs

| Command            | Description                             |
| ------------------ | --------------------------------------- |
| `pm2 logs [--raw]` | Display all processes logs in streaming |
| `pm2 flush`        | Empty all log files                     |
| `pm2 reloadLogs`   | Reload all logs                         |

### Actions

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `pm2 stop all`    | Stop all processes                           |
| `pm2 restart all` | Restart all processes                        |
| ---               | ---                                          |
| `pm2 reload all`  | Will 0s downtime reload (for NETWORKED apps) |
| ---               | ---                                          |
| `pm2 stop 0`      | Stop specific process id                     |
| `pm2 restart 0`   | Restart specific process id                  |
| ---               | ---                                          |
| `pm2 delete 0`    | Will remove process from pm2 list            |
| `pm2 delete all`  | Will remove all processes from pm2 list      |

### Misc

| Command                             | Description                                                  |
| ----------------------------------- | ------------------------------------------------------------ |
| `pm2 reset <process>`               | Reset meta data (restarted time...)                          |
| `pm2 updatePM2`                     | Update in memory pm2                                         |
| `pm2 ping`                          | Ensure pm2 daemon has been launched                          |
| `pm2 sendSignal SIGUSR2 my-app`     | Send system signal to script                                 |
| ---                                 | ---                                                          |
| `pm2 start app.js --no-daemon`      | Run pm2 daemon in the foreground if it doesn't exist already |
| `pm2 start app.js --no-vizion`      | Skip vizion features (versioning control)                    |
| `pm2 start app.js --no-autorestart` | Do not automatically restart app                             |

## Ecosystem File

### Overview

The ecosystem file tells PM2 how to run/manage your application to simplify working with it. The file by default is called `ecosystem.config.js`, but it can be called anything so long as it ends with `.config.extension`. It also supports JSON and YAML formats:

| Format     | Filename                |
| ---------- | ----------------------- |
| JavaScript | `ecosystem.config.js`   |
| JSON       | `ecosystem.config.json` |
| YAML       | `ecosystem.config.yaml` |

### Simple Config

`pm2 ecosystem` will generate a sample file to get you started, which can then be managed with `pm2 [start|restart|stop|delete] ecosystem.config.js` to start/restart/stop/delete the file:

```javascript
module.exports = {
  apps: [
    {
      name: 'app',
      script: './app.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
```

### Multiple Applications

```javascript
module.exports = {
  apps: [
    {
      name: 'worker',
      script: './worker.js',
      watch: true,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'api-app',
      script: './api.js',
      instances: 4,
      exec_mode: 'cluster'
    }
  ]
}
```

### CLI Management of Application

#### Manage All At Once

```bash
# Start all applications in file, if already running, they're restarted
pm2 start ecosystem.config.js

# Only start the app named worker-app
pm2 start ecosystem.config.js --only worker-app

# Stops all applications in file
pm2 stop ecosystem.config.js

# Restarts all applications in the file
pm2 restart ecosystem.config.js

# Reload all applications in the file
pm2 reload ecosystem.config.js

# Deletes all applications in the file
pm2 delete ecosystem.config.js
```

#### Manage Specific Applications

```bash
pm2 start   ecosystem.config.js --only api-app
pm2 restart ecosystem.config.js --only api-app
pm2 reload  ecosystem.config.js --only api-app
pm2 delete  ecosystem.config.js --only api-app

# Specific multiple applications
pm2 start ecosystem.config.js --only "api-app,worker-app"
```

#### Switching Environments

```bash
# Start the app using the variables defined in env_production
pm2 start ecosystem.config.js --env production

# Restart the app using the variables defined in env_staging
pm2 start ecosystem.config.js --env staging
```
