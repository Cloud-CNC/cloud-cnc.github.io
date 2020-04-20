# Cloud CNC
Scalable software to control CNC machines over the internet

## Roadmap
* Beta Release (~May 2020)
  * Additional guides and documentation
  * Better config system (Primarily for Docker users)
  * Frontend tests
* Full Release (~August 2020)
  * CLI client (We know some of you :heart: terminals)
  * Dashboard (Who doesn't love pretty graphs)
  * Native IP camera support
  * Redis based command buffer (Support for multiple core instances)
  * Redundant controllers

## What is it?
Cloud CNC is a collection of software designed to control CNC machines (3D printers, CNC routers, laser cutters, etc.) over the internet. Cloud CNC natively supports multiple controllers, machines, and users.

## Why does is exist?
Similar tools such as [OctoPrint](https://octoprint.org) do exist and work extremely well, however, we've noticed a lack of open source options that natively support multiple machines. Additionally, Cloud CNC places a heavy emphasis on security for we believe that it's a security risk to open devices up to the internet that were never designed to be connected to the internet. If you want to control a single 3D printer, OctoPrint is probably best suited for you; if you want to run multiple 3D printers or other CNC machines, you should consider giving Cloud CNC a shot.