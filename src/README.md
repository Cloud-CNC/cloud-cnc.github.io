# Cloud CNC
Scalable software to control CNC machines over the internet

## Features
* Extreme scalability
* Browser-based workflow
  * Includes client-side 3D file slicer and viewer
  * PWA functionality enriches experience even on slow internet connections
* Modern security practices
  * Role-based access control (RBAC)
  * [Argon2 ID](https://github.com/P-H-C/phc-winner-argon2) hashing algorithm
  * Uses **all** non-experimental [OWASP HTTP headers](https://owasp.org/www-project-secure-headers/)
  * Controller access is governed by 512-byte symmetric keys
* Hackable
  * Easy to use REST API
  * Well commented code
  * Modularized

## Planned Features
* Improved camera support
* Tagging of additional entities