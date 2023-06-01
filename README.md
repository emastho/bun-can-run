<a href="https://bun.sh">
<p align="center">
  <img src="https://raw.githubusercontent.com/emastho/bun-can-run/main/bun.svg" alt="Bun logo" /><br/>
  bun.sh
</p>
</a>
<br /><br />

### Backend frameworks
> Most of the native frameworks are *way* more performant than node ports.

||module|github|when|comments|
|--|--|--|--|--|
|✅| Elysia | https://github.com/elysiajs/elysia | | has oauth2 plugin
|✅|Hono|https://github.com/honojs|
|✅|Stric|https://github.com/bunsvr|
|⚠️|Express|https://github.com/expressjs/express|2023.05.28|querystrings missing|

### Databases
|| module |  github | when |
|--|--|--|--|
|✅| pg | https://github.com/brianc/node-postgres |
||mongoose|https://github.com/Automattic/mongoose| 0.6.0
|✅|mysql2|https://github.com/sidorares/node-mysql2|
|✅|redis|https://github.com/redis/node-redis|
||mongodb|https://github.com/mongodb/node-mongodb-native| 0.6.0

### ORMs
||module|github|when|
|--|--|--|--|
|⚠️|prisma|https://github.com/prisma/prisma|0.6.6|if you use the prisma data proxy, it works. so that's a workaround for now. the napi-based prisma engine does not work yet|

### Libraries
|| module |  github | when |
|--|--|--|--|
|✅| fp-ts | https://github.com/gcanti/fp-ts |
|✅|purify-ts|https://github.com/gigobyte/purify|

### Web3 frameworks
|| module |  github | when | comments |
|--|--|--|--|--|
|⚠️| Web3 | https://github.com/web3/web3.js |2023.05.28| only works if required `const Web3 = require("web3/dist/web3.min.js");`
|⚠️| Viem | https://github.com/wagmi-dev/viem |2023.05.28| Doesn't work unless used with `bun build`
