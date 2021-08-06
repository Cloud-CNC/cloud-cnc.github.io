# Repositories
These are all the repositories that Cloud CNC is comprised of. The use of [NodeJS](https://nodejs.org) is
implied and required for most repositories.

### [Frontend](https://github.com/cloud-cnc/frontend/tree/v2)
[Nuxt](https://nuxtjs.org) + [TypeScript](https://typescriptlang.org) frontend. Uses
[Vuetify](https://vuetifyjs.com) for components, [Vuex](https://vuex.vuejs.org) for state management, and
[WebdriverIO](https://webdriver.io) for E2E tests.

### [Core](https://github.com/cloud-cnc/core/tree/v2)
[Koa](https://koajs.com) + [SocketIO](https://socket.io) + [TypeScript](https://typescriptlang.org) REST
**and** websocket API server. Uses [Mongo](https://mongodb.com) for persisted storage and optionally
[Redis](https://redis.io) for high availability (Via the [Redis SocketIO adapter](https://socket.io/docs/v4/redis-adapter/)).
Responsible for managing all resources, authentication (Of both clients and controllers), and connecting
the frontend and controller via a [SocketIO room](https://socket.io/docs/v4/rooms/).

### [Controller](https://github.com/cloud-cnc/controller/tree/v2)
[SocketIO](https://socket.io) + [TypeScript](https://typescriptlang.org) websocket client. Connects **to** the
core (To eliminate additional networking configuration).

### [Cura WASM](https://github.com/cloud-cnc/cura-wasm)
[Threads](https://threads.js.org) + [TypeScript](https://typescriptlang.org) wrapper around Cloud CNC's
[Cura Engine](#cura-engine) fork. Uses [Unified 3D Loader](#unified-3d-loader) for mesh preprocessing/broader
file support and [Threads Rollup Plugin](#threads-rollup-plugin) to enable importing NPM packages in worker threads.

### [Cura Engine](https://github.com/cloud-cnc/cura-engine)
[Wasmer](https://wasmer.io) port of [Cura Engine](https://github.com/ultimaker/curaengine). Designed to stay close
to the upstream source while still compiling to WASM.

### [Setup Wasmer](https://github.com/wasmerio/setup-wasmer)
[TypeScript](https://typescriptlang.org) based [GitHub Action](https://github.com/features/actions) for automatically
installing [Wasmer](https://wasmer.io).

### [WAPM Publish](https://github.com/wasmerio/wapm-publish)
[TypeScript](https://typescriptlang.org) based [GitHub Action](https://github.com/features/actions) for automatically
publishing to [WAPM](https://wapm.io).

### [Vue 3D Viewer](https://github.com/cloud-cnc/vue-3d-viewer)
[ThreeJS](https://threejs.org) + [TypeScript](https://typescriptlang.org) viewer for 3D files. Uses
[Unified 3D Loader](#unified-3d-loader) for mesh parsing and [Threads Webpack Plugin](#threads-webpack-plugin) to
enable importing NPM packages in worker threads.

### [Unified 3D Loader](https://github.com/cloud-cnc/unified-3d-loader)
[TypeScript](https://typescriptlang.org) 3D loader/parser that produces consistent mesh data regardless of the inputted
file format.

### [Threads Rollup Plugin](https://github.com/cloud-cnc/rollup-plugin-threads)
[Rollup](https://rollupjs.org) + [TypeScript](https://typescriptlang.org) plugin that executes a child Rollup bundler
upon [Threads](https://threads.js.org) (Otherwise the threads won't have access to imported NPM dependencies).

### [Threads Webpack Plugin](https://github.com/cloud-cnc/threads-webpack-plugin)
[Rollup](https://rollupjs.org) + [TypeScript](https://typescriptlang.org) plugin that executes a child Webpack bundler
upon [Threads](https://threads.js.org) (Otherwise the threads won't have access to imported NPM dependencies).

### [Branding](https://github.com/cloud-cnc/branding)
[Inkscape](https://inkscape.org) icons and wordmarks for Cloud CNC.

### [Website](https://github.com/cloud-cnc/cloud-cnc.github.io)
[Vuepress](https://v2.vuepress.vuejs.org) powered documentation website (Probably where you're reading this).

---

*Note: the above may reflect the intended and not actual state of a repository (Check the `package.json` to be sure).*