(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{370:function(t,v,_){"use strict";_.r(v);var e=_(25),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-api"}},[t._v("#")]),t._v(" HTTP API")]),t._v(" "),_("h2",{attrs:{id:"endpoint"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[t._v("#")]),t._v(" Endpoint")]),t._v(" "),_("p",[t._v("The HTTP API is available at "),_("code",[t._v("https://<your domain or ip>/api/")]),t._v(".")]),t._v(" "),_("h2",{attrs:{id:"authentication"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),_("p",[t._v("Authentication is solely handled by the sessions API family. Users must authenticate themselves via the login route, afterwhich, they will receive a cookie named "),_("code",[t._v("session")]),t._v(" containing a cookie managed by the "),_("code",[t._v("express-session")]),t._v(" middleware. The cookie is then used to authenticate the user on all subsequent requests.")]),t._v(" "),_("h2",{attrs:{id:"permissions"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),_("p",[t._v("Cloud CNC is "),_("em",[t._v("currently")]),t._v(" designed for 2 types of accounts ("),_("code",[t._v("Admin")]),t._v(" and "),_("code",[t._v("User")]),t._v(").")]),t._v(" "),_("h2",{attrs:{id:"response-handling"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#response-handling"}},[t._v("#")]),t._v(" Response handling")]),t._v(" "),_("p",[t._v("The reccommended way to handle an API response is to use the REST API Wrapper ("),_("code",[t._v("api.js")]),t._v("). The wrapper will automatically parse JSON and handle errors thrown by the server. The wrapper is compatible with all API routes.")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("Note: the wrapper will reject the promise if an error occurs.")])]),t._v(" "),_("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" api "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../api.js'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napi"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),_("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FAMILY")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),_("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACTION")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),_("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PARAMETERS")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Do stuff with 'res'")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("h2",{attrs:{id:"error-handling"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#error-handling"}},[t._v("#")]),t._v(" Error handling")]),t._v(" "),_("p",[t._v("All errors will be JSON encoded and in the following format:")]),t._v(" "),_("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Short yet descriptive message"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Longer message, detailing how to avoid/fix the underlying cause for the error"')]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),_("h2",{attrs:{id:"routes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#routes"}},[t._v("#")]),t._v(" Routes")]),t._v(" "),_("p",[_("em",[t._v("PATCH requests accept "),_("strong",[t._v("1")]),t._v(" or more parameters. If the intended account is the currently logged in account, use "),_("code",[t._v("own")]),t._v(" as the "),_("code",[t._v(":id")]),t._v(" parameter")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Family")]),t._v(" "),_("th",[t._v("Method")]),t._v(" "),_("th",[t._v("Route")]),t._v(" "),_("th",[t._v("Route Parameters")]),t._v(" "),_("th",[t._v("Body")]),t._v(" "),_("th",[t._v("Response")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Sessions")]),t._v(" "),_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("/sessions/login")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"username": String, "password": String}')])]),t._v(" "),_("td",[_("code",[t._v('{"valid": Boolean, "mfa": Boolean}')])]),t._v(" "),_("td",[t._v("Logs user in. If user has MFA enabled, they'll need to POST to "),_("code",[t._v("/sessions/mfa")]),t._v(" to complete the login process.")])]),t._v(" "),_("tr",[_("td",[t._v("Sessions")]),t._v(" "),_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("/sessions/mfa")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"otp": String}')])]),t._v(" "),_("td",[_("code",[t._v('{"valid": Boolean}')])]),t._v(" "),_("td",[t._v("Logs user in. Only required if user has MFA enabled.")])]),t._v(" "),_("tr",[_("td",[t._v("Sessions")]),t._v(" "),_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("/sessions/logout")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Logs user out.")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Accounts")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/accounts/all")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"accounts": Account[]}')])]),t._v(" "),_("td",[t._v("Gets all accounts.")])]),t._v(" "),_("tr",[_("td",[t._v("Accounts")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/accounts/roles")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"roles": String[]}')])]),t._v(" "),_("td",[t._v("Get all roles.")])]),t._v(" "),_("tr",[_("td",[t._v("Accounts")]),t._v(" "),_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("/accounts")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"role": String, "username": String, "password": String}, "mfa": Boolean')])]),t._v(" "),_("td",[_("code",[t._v('{"id": String, "otpauth": String')]),_("sup",[t._v("1")]),_("code",[t._v("}")])]),t._v(" "),_("td",[t._v("Creates an account.")])]),t._v(" "),_("tr",[_("td",[t._v("Accounts")]),t._v(" "),_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("/accounts/:id/impersonate")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[_("code",[t._v('{"enabled": Boolean}')])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Impersonates account, all actions performed by user will be performed on behalf of the target account until the user stops impersonation.")])]),t._v(" "),_("tr",[_("td",[t._v("Accounts")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/accounts/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"account": {"id": String, "role": String, "username": String}}')])]),t._v(" "),_("td",[t._v("Gets an account's information.")])]),t._v(" "),_("tr",[_("td",[t._v("Accounts")]),t._v(" "),_("td",[t._v("PATCH")]),t._v(" "),_("td",[t._v("/accounts/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[_("code",[t._v('{"role": String, "username": String, "password": String}, "mfa": Boolean}')])]),t._v(" "),_("td",[_("code",[t._v('{"otpauth": String')]),_("sup",[t._v("1")]),_("code",[t._v("}")])]),t._v(" "),_("td",[t._v("Updates part(s) of an account.")])]),t._v(" "),_("tr",[_("td",[t._v("Accounts")]),t._v(" "),_("td",[t._v("DELETE")]),t._v(" "),_("td",[t._v("/accounts/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Deletes an account.")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Files")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/files/all")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"files": File[]}')])]),t._v(" "),_("td",[t._v("Gets all files for a user. "),_("em",[t._v("(The raw attribute will not be present)")])])]),t._v(" "),_("tr",[_("td",[t._v("Files")]),t._v(" "),_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("/files")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"name": String, "description": String, "raw": String}')])]),t._v(" "),_("td",[_("code",[t._v('{"id": String}')])]),t._v(" "),_("td",[t._v("Creates a file.")])]),t._v(" "),_("tr",[_("td",[t._v("Files")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/files/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"file": {"id": String, "status": Number,\t"owner": String, "name": String, "description": String}, "raw": String}')])]),t._v(" "),_("td",[t._v("Gets a file.")])]),t._v(" "),_("tr",[_("td",[t._v("Files")]),t._v(" "),_("td",[t._v("PATCH")]),t._v(" "),_("td",[t._v("/files/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[_("code",[t._v('{"name": String, "description": String')])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Updates part(s) of a file.")])]),t._v(" "),_("tr",[_("td",[t._v("Files")]),t._v(" "),_("td",[t._v("DELETE")]),t._v(" "),_("td",[t._v("/files/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Deletes a file.")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Trash")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/trash/all")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"files": File[]}')])]),t._v(" "),_("td",[t._v("Gets all trashed files for a user. "),_("em",[t._v("(The raw attribute will not be present)")])])]),t._v(" "),_("tr",[_("td",[t._v("Trash")]),t._v(" "),_("td",[t._v("PUT")]),t._v(" "),_("td",[t._v("/trash/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Recovers a trashed file.")])]),t._v(" "),_("tr",[_("td",[t._v("Trash")]),t._v(" "),_("td",[t._v("DELETE")]),t._v(" "),_("td",[t._v("/trash/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Deletes a file permanently.")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Controller")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/controllers/all")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"controllers": Controller[]}')])]),t._v(" "),_("td",[t._v("Get all controllers.")])]),t._v(" "),_("tr",[_("td",[t._v("Controller")]),t._v(" "),_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("/controllers")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"name": String}')])]),t._v(" "),_("td",[_("code",[t._v('{"id": String}')])]),t._v(" "),_("td",[t._v("Creates a controller.")])]),t._v(" "),_("tr",[_("td",[t._v("Controller")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/controllers/:id/key")]),t._v(" "),_("td",[_("code",[t._v("id: string")])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"key": String}')])]),t._v(" "),_("td",[t._v("Gets a controller's key")])]),t._v(" "),_("tr",[_("td",[t._v("Controller")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/controllers/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"controller": {"id": String, "name": String}')])]),t._v(" "),_("td",[t._v("Gets a controller's information.")])]),t._v(" "),_("tr",[_("td",[t._v("Controller")]),t._v(" "),_("td",[t._v("PATCH")]),t._v(" "),_("td",[t._v("/controllers/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[_("code",[t._v('{"name": String}')])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Updates part(s) of a controller.")])]),t._v(" "),_("tr",[_("td",[t._v("Controller")]),t._v(" "),_("td",[t._v("DELETE")]),t._v(" "),_("td",[t._v("/controllers/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Deletes a controller.")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Machines")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/machines/all")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"machines": Machine[]}')])]),t._v(" "),_("td",[t._v("Get all machines.")])]),t._v(" "),_("tr",[_("td",[t._v("Machines")]),t._v(" "),_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("/machines")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[_("code",[t._v('{"controller": String, "name": String, "tags": String, "length": String, "width": String, "height": String}')])]),t._v(" "),_("td",[_("code",[t._v('{"id": String}')])]),t._v(" "),_("td",[t._v("Creates a machine.")])]),t._v(" "),_("tr",[_("td",[t._v("Machines")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/machines/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[_("code",[t._v('{"machine": {"id": String, "controller": String, "name": String, "tags": String, "length: Number, "width": Number, "height": Number}}')])]),t._v(" "),_("td",[t._v("Public")]),t._v(" "),_("td",[t._v("Gets a machines's information.")])]),t._v(" "),_("tr",[_("td",[t._v("Machines")]),t._v(" "),_("td",[t._v("PATCH")]),t._v(" "),_("td",[t._v("/machines/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[_("code",[t._v('{"controller": String, "name": String, "tags": String, "length": String, "width": String, "height": String}')])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Updates a machine.")])]),t._v(" "),_("tr",[_("td",[t._v("Machines")]),t._v(" "),_("td",[t._v("DELETE")]),t._v(" "),_("td",[t._v("/machines/:id")]),t._v(" "),_("td",[_("code",[t._v("id: String")])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Deletes a machine.")])])])]),t._v(" "),_("ol",[_("li",[t._v("Only present if the account has MFA enabled")])])])}),[],!1,null,null,null);v.default=s.exports}}]);