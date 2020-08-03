# Setup

::: danger
Cloud CNC is still under development! The below guide may be out of date; when Cloud CNC matures more, this guide will get updated more often and become more accurate.
:::

## 1. Mongo
Cloud CNC relies on Mongo to store everything except files (They're stored on the filesystem).
::: warning
By default, anyone can read and modify your database. Consider adding authentication mechanisms to prevent unauthorized access.
:::

### Docker
::: tip
You'll need to be able to connect to this container from another container, so you might want to setup networking first.
:::
1. Create a volume to persist data: `docker volume create --name Mongo`
2. Create a container: `docker run -d -v Mongo:/data/db --net=[NETWORK] --ip=[IP] --name Mongo mongo:latest`

### Bare Metal
1. Download and install Mongo from [mongodb.com](https://www.mongodb.com/download-center/community)
2. Start the database via running `mongod`.
::: tip
On Windows, you'll need to create the directory `C:\data\db` and add the Mongo install directory (Typically at `C:\Program Files\MongoDB\Server\[VERSION]\bin`) to your environment variable or `mongod` won't work.
:::

## 2. Core
::: tip
You'll need to port forward traffic to the core instance on port 443/TCP in most cases.
:::

### Docker
1. [Generate a config file](#bare-metal2)
2. Create a volume to persist files: `docker volume create --name Cloud-CNC`
3. Create a container: `docker run -d -v /to/config:/usr/src/core/config.js -v Cloud-CNC:/usr/src/core/files --net=[NETWORK] --ip=[IP] -p 443:443 --name Cloud-CNC cloudcnc/core:master`
::: tip
Make sure the tag (ie `latest`) is available before creating a container.
:::

### Bare Metal
1. Clone the repository: `git clone https://github.com/cloud-cnc/core.git`
2. Install [node-gyp](https://github.com/nodejs/node-gyp#installation)
3. Install dependencies: `npm i` (At the root of the cloned repository)
4. Generate a config file: `npm run config`
5. Create the directory to hold user files: `mkdir files` (At the root of the cloned repository)
6. Start: `npm start`

## 3. Controller

1. Clone the repository: `git clone https://github.com/cloud-cnc/core.git`
2. Install dependencies: `npm i` (At the root of the cloned repository)
3. Modify `config.js`. You'll need to create a controller and machine via the GUI in order to get the values to place here.

::: danger
Remotely operated equipment is hazardous. Please add emergency stop functions, lockouts, and any other safety features your local laws require on any machine controlled by Cloud CNC prior to running.
:::