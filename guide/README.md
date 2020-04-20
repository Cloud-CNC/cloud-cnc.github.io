# Introduction
Cloud CNC consists of 3 different components
* Frontend
* Core
* Controller

### Frontend
The frontend is the web interface users directly interact with. You will need to setup a static web server in order to serve the frontend.

### Core
The core connects the frontend and controller(s) together. It also connects to the database and stores your files on the same server you install the core to.

::: tip
The core does need to be port forwarded in order for the frontend and controller(s) to connect it.
:::

### Controller
The controller is meant to run on a small computer such as a [Raspberry Pi](https://raspberrypi.org/) and directly connects to your CNC machines typically over a USB or serial connection. The repository is located at [github.com/cloud-cnc/controller](https://github.com/cloud-cnc/controller).

::: tip
Because the controller(s) connect **to** the core, they typically only need an internet connection, you won't need to port forward them.
:::