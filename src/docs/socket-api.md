# Socket API

## Endpoint
The socket API is available at `https://<your domain or ip>`. Please note that it is based upon [SocketIO server](https://socket.io) and will not work with normal websockets.

## Authentication
A key will be generated and provided to the user when they create a controller via the web interface. The key is then entered into the controller's configuration file. When the controller initiates contact with the socket server, the key in addition to the controller's ID is provided to the socket server via a header named `key` and `_id` respectively.

## Error handling

All errors will be JSON encoded and in the following format:
```javascript
{
	"error": {
		"name": "Short yet descriptive message",
		"description": "Longer message, detailing how to avoid/fix the underlying cause for the error"
	}
}
```

## Messages

Name | Hops | Body | Description
--- | --- | --- | ---
`command` | Frontend ▶ Core ▶ Controller | `{"machine": String, "payload": String}` | Send some short binary data to a machine (To command it)
`execute` | Frontend ▶ Core | `{"machine": String}` | Start executing a file on a machine (File payload is not sent yet because it's not stored by the frontend)
`execute` | Core ▶ Controller | `{"machine": String, "payload": String}` | Start executing a file on a machine (File payload is added by the core)
`output` | Controller ▶ Core | `{"machine": String, "payload": String}` | Forward serial output from a machine (Note that this is **always sent**, even if no users are connected)
`output` | Core ▶ Frontend | `{"machine": String, "payload": String}` | Forward serial output from a machine (Note that this is **only** forwarded to the frontend if a user is actively commanding a machine)