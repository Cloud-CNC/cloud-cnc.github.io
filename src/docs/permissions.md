# Permissions
Documentation for the role-based permissions system.

## Preface
Permissions are configurable by admins via the config file on the core server.

## Roles
As a Cloud CNC administrator, you can create as many roles as you want. Cloud CNC comes with 2 default roles: `User` and `Admin`. Permissions are inherited from the lowest ranking role (`User`) to the highest (`Admin`) meaning if the `User` role is granted the `machines:get` permission, the `Admin` role will automatically gain this permission as well. To configure account specific permissions, you must create a role just for that account. To perform actions upon other accounts' files or trash, you must impersonate them.

## Defaults

Name | User | Admin | Description
--- | --- | --- | ---
accounts:all | ❌ | ✔️ | Get all accounts
accounts:roles | ✔️ | ✔️ | Get all account roles
accounts:create | ❌ | ✔️ | Create an account
accounts:impersonate:start | ❌ | ✔️ | Start impersonating another account
accounts:impersonate:stop | ✔️ | ✔️ | Stop impersonating another account (This is needed for admins to stop impersonating non-admin accounts)
accounts:get | ✔️ | ✔️ | Get an account
accounts:update | ✔️ | ✔️ | Update an account
accounts:remove | ✔️ | ✔️ | Remove an account
| | |
files:all | ✔️ | ✔️ | Get all files
files:create | ✔️ | ✔️ | Create a file
files:get | ✔️ | ✔️ | Get a file
files:update | ✔️ | ✔️ | Update a file
files:remove | ✔️ | ✔️ | Remove a file
| | |
trash:all | ✔️ | ✔️ | Get all files in trash
trash:recover | ✔️ | ✔️ | Recover file
trash:remove | ✔️ | ✔️ | Permanently remove file
| | |
controllers:all | ❌ | ✔️ | Get all controllers
controllers:create | ❌ | ✔️ | Create a controller
controllers:key | ❌ | ✔️ | Download a controller's authentication key
controllers:get | ❌ | ✔️ | Get a controller
controllers:update | ❌ | ✔️ | Update a controller
controllers:remove | ❌ | ✔️ | Remove a controller
| | |
machines:all | ✔️ | ✔️ | Get all machines
machines:create | ❌ | ✔️ | Create a machine
machines:get | ✔️ | ✔️ | Get a machine
machines:command | ✔️ | ✔️ | Send a command to a machine
machines:execute | ✔️ | ✔️ | Execute a file on a machine
machines:update | ❌ | ✔️ | Update a machine
machines:remove | ❌ | ✔️ | Remove a machine