(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{328:function(e,t,s){"use strict";s.r(t);var a=s(31),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"websocket-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket-api"}},[e._v("#")]),e._v(" Websocket API")]),e._v(" "),s("h2",{attrs:{id:"endpoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[e._v("#")]),e._v(" Endpoint")]),e._v(" "),s("p",[e._v("The Websocket API is available at "),s("code",[e._v("wss://<your domain or ip>")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),s("p",[e._v("A key will be generated and provided to the user when they create a controller via the web interface. The key is then entered into the controller's configuration file. When the controller initiates contact with the websocket server, the key in addition to the controller's ID is provided to the websocket server via a header named "),s("code",[e._v("key")]),e._v(" and "),s("code",[e._v("_id")]),e._v(" respectively.")]),e._v(" "),s("h2",{attrs:{id:"error-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-handling"}},[e._v("#")]),e._v(" Error handling")]),e._v(" "),s("p",[e._v("All errors will be JSON encoded and in the following format:")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Short yet descriptive message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Longer message, detailing how to avoid/fix the underlying cause for the error"')]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h2",{attrs:{id:"messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),s("p",[s("em",[e._v("All JSON messages must contain the "),s("code",[e._v("event")]),e._v(" property. The "),s("code",[e._v("_id")]),e._v(" property is used for message responses.")])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Initiator")]),e._v(" "),s("th",[e._v("Body")]),e._v(" "),s("th",[e._v("Response")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("API Server")]),e._v(" "),s("td",[s("code",[e._v('{"_id": String, "event": "command", "machine": String, "command": String}')])]),e._v(" "),s("td",[s("code",[e._v('{"_id": String, "event": "response:command", "machine": String, "response": String}')])]),e._v(" "),s("td",[e._v("Sends a "),s("em",[e._v("small")]),e._v(" command to the controller which forwards it to the specified machine.")])]),e._v(" "),s("tr",[s("td",[e._v("API Server")]),e._v(" "),s("td",[s("code",[e._v('{"_id": String, "event": "execute", "machine": String, "file": String}')])]),e._v(" "),s("td",[s("code",[e._v('{"_id": String, "event": "response:execute", "machine": String, "success": Boolean}')])]),e._v(" "),s("td",[e._v("Sends a file to the controller which forwards it to the designated machine.")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);