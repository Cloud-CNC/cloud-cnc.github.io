(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{329:function(t,e,r){"use strict";r.r(e);var o=r(31),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),r("p",[t._v("Cloud CNC consists of 3 different components")]),t._v(" "),r("ul",[r("li",[t._v("Frontend")]),t._v(" "),r("li",[t._v("Core")]),t._v(" "),r("li",[t._v("Controller")])]),t._v(" "),r("h3",{attrs:{id:"frontend"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontend"}},[t._v("#")]),t._v(" Frontend")]),t._v(" "),r("p",[t._v("The frontend is "),r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue"),r("OutboundLink")],1),t._v(" based and uses "),r("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuetify"),r("OutboundLink")],1),t._v(" as a UI library. It uses "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI"),r("OutboundLink")],1),t._v(" to manage builds. The frontend connects to the core via an "),r("a",{attrs:{href:"./http-api"}},[t._v("HTTP API")]),t._v(".")]),t._v(" "),r("p",[t._v("The repository is located at "),r("a",{attrs:{href:"https://github.com/cloud-cnc/frontend",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/cloud-cnc/frontend"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"core"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[t._v("#")]),t._v(" Core")]),t._v(" "),r("p",[t._v("The core "),r("em",[t._v("glues")]),t._v(" the frontend and controller(s) together. It uses "),r("a",{attrs:{href:"https://expressjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Express"),r("OutboundLink")],1),t._v(" for HTTP routing and "),r("a",{attrs:{href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mongo"),r("OutboundLink")],1),t._v(" for a database. The core is both an HTTP and a websocket server.")]),t._v(" "),r("p",[t._v("The repository is located at "),r("a",{attrs:{href:"https://github.com/cloud-cnc/core",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/cloud-cnc/core"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("The core does need to be port forwarded in order for the frontend to make HTTP requests to it and for the controller(s) to initiate web socket sessions.")])]),t._v(" "),r("h3",{attrs:{id:"controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[t._v("#")]),t._v(" Controller")]),t._v(" "),r("p",[t._v("The controller is meant to run on a small computer such as a "),r("a",{attrs:{href:"https://raspberrypi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi"),r("OutboundLink")],1),t._v(" and directly connects to your CNC machines typically over a USB or serial connection. The controller connects to the core via a "),r("a",{attrs:{href:"./websocket-api"}},[t._v("Websocket API")]),t._v(".")]),t._v(" "),r("p",[t._v("The repository is located at "),r("a",{attrs:{href:"https://github.com/cloud-cnc/controller",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/cloud-cnc/controller"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("Because the controller(s) connect "),r("strong",[t._v("to")]),t._v(" the core, they typically only need an internet connection, you don't need to port forward them.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);