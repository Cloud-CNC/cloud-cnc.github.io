(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{329:function(t,v,_){"use strict";_.r(v);var e=_(31),d=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"permissions"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),_("p",[t._v("Documentation for the "),_("strong",[t._v("upcoming")]),t._v(" revised permissions system.")]),t._v(" "),_("h2",{attrs:{id:"preface"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#preface"}},[t._v("#")]),t._v(" Preface")]),t._v(" "),_("p",[t._v("Permissions are configurable by admins via the web GUI or by the config file on the core server.")]),t._v(" "),_("h2",{attrs:{id:"roles"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#roles"}},[t._v("#")]),t._v(" Roles")]),t._v(" "),_("p",[t._v("As a Cloud CNC administrator, you can create as many roles as you want. Cloud CNC comes with 2 default roles: "),_("code",[t._v("User")]),t._v(" and "),_("code",[t._v("Admin")]),t._v(". Permissions are inheritied from the lowest ranking role ("),_("code",[t._v("User")]),t._v(") to the highest ("),_("code",[t._v("Admin")]),t._v(") meaning if the "),_("code",[t._v("User")]),t._v(" role is granted the "),_("code",[t._v("machines:get")]),t._v(" permission, the "),_("code",[t._v("Admin")]),t._v(" role will automatically gain this permission as well. To configure account specific permissions, you must create a role just for that account. To perform actions upon other accounts' files or trash, you must impersonate them.")]),t._v(" "),_("h2",{attrs:{id:"defaults"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#defaults"}},[t._v("#")]),t._v(" Defaults")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("User")]),t._v(" "),_("th",[t._v("Admin")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("accounts:admin")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Administrate other accounts")])]),t._v(" "),_("tr",[_("td",[t._v("accounts:all")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Get all accounts")])]),t._v(" "),_("tr",[_("td",[t._v("accounts:create")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Create an account")])]),t._v(" "),_("tr",[_("td",[t._v("accounts:impersonate:start")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Start impersonating another account")])]),t._v(" "),_("tr",[_("td",[t._v("accounts:impersonate:stop")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Stop impersonating another account")])]),t._v(" "),_("tr",[_("td",[t._v("accounts:get")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Get an account")])]),t._v(" "),_("tr",[_("td",[t._v("accounts:update")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Update an account")])]),t._v(" "),_("tr",[_("td",[t._v("accounts:remove")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Remove an account")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("files:admin")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Administrate other accounts' files")])]),t._v(" "),_("tr",[_("td",[t._v("files:all")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Get all files")])]),t._v(" "),_("tr",[_("td",[t._v("files:create")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Create a file")])]),t._v(" "),_("tr",[_("td",[t._v("files:get")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Get a file")])]),t._v(" "),_("tr",[_("td",[t._v("files:update")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Update a file")])]),t._v(" "),_("tr",[_("td",[t._v("files:remove")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Remove a file")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("trash:admin")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Administrate other accounts' trash")])]),t._v(" "),_("tr",[_("td",[t._v("trash:all")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Get all files in trash")])]),t._v(" "),_("tr",[_("td",[t._v("trash:recover")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Recover file")])]),t._v(" "),_("tr",[_("td",[t._v("trash:remove")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Permanently remove file")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("controllers:all")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Get all controllers")])]),t._v(" "),_("tr",[_("td",[t._v("controllers:create")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Create a controller")])]),t._v(" "),_("tr",[_("td",[t._v("controllers:get")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Get a controller")])]),t._v(" "),_("tr",[_("td",[t._v("controllers:update")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Update a controller")])]),t._v(" "),_("tr",[_("td",[t._v("controllers:remove")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Remove a controller")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("machines:all")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Get all machines")])]),t._v(" "),_("tr",[_("td",[t._v("machines:create")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Create a machine")])]),t._v(" "),_("tr",[_("td",[t._v("machines:get")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Get a machine")])]),t._v(" "),_("tr",[_("td",[t._v("machines:command")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Send a command to a machine")])]),t._v(" "),_("tr",[_("td",[t._v("machines:execute")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Execute a file on a machine")])]),t._v(" "),_("tr",[_("td",[t._v("machines:update")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Update a machine")])]),t._v(" "),_("tr",[_("td",[t._v("machines:remove")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✔️")]),t._v(" "),_("td",[t._v("Remove a machine")])])])])])}),[],!1,null,null,null);v.default=d.exports}}]);