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
|✔️| Elysia | https://github.com/elysiajs/elysia | | has oauth2, graphql, trpc plugins
|✔️|Hono|https://github.com/honojs||has graphql, trpc middleware
|✔️|Stric|https://github.com/bunsvr|
|🔧|Express|https://github.com/expressjs/express|0.6.6|mostly work, querystrings missing|

<br />

### Databases
|| module |  github | when | comments |
|--|--|--|--|--|
|✔️| pg | [brianc/node-postgres](https://github.com/brianc/node-postgres) |
|✔️|postgres|https://github.com/porsager/postgres|
|🔧|mongoose|[Automattic/mongoose](https://github.com/Automattic/mongoose)| 0.6.7 | works, but [issue](https://github.com/oven-sh/bun/issues/3195)
|🔧|mongodb|[mongodb/node-mongodb-native](https://github.com/mongodb/node-mongodb-native)| 0.6.7 | same as mongoose
|✔️|mysql2|[sidorares/node-mysql2](https://github.com/sidorares/node-mysql2)|
|✔️|redis|https://github.com/redis/node-redis|
|✔️|bun:sqlite|https://bun.sh/docs/api/sqlite||native

<br />

### ORMs
||module|github|when|comments|
|--|--|--|--|--|
|✔️|Prisma|https://github.com/prisma/prisma|||
|✔️|BunORM|https://github.com/deadlinecode/BunORM||sqlite only

<br />

### Full stack frameworks
||name|github|when|comments|
|--|--|--|--|--|
|✔️|Buchta|https://github.com/Fire-The-Fox/buchta||svelte, preact
|🔧|SvelteKit|https://github.com/sveltejs/kit|0.6.7|[svelte-adapter-bun](https://github.com/gornostay25/svelte-adapter-bun)
||Next.js|https://github.com/vercel/next.js|0.6.7|react

<br />

### GraphQL
||module|github|when|comments|
|--|--|--|--|--|
|✔️|@apollo/server|https://github.com/apollographql/apollo-server|
|✔️|graphql|https://github.com/graphql/graphql-js|
|✔️|graphql-yoga|https://github.com/dotansimha/graphql-yoga|

<br />

### Libraries
|| module |  github | when | comments |
|--|--|--|--|--|
||nodemailer|[nodemailer/nodemailer](https://github.com/nodemailer/nodemailer)|0.6.7|[issue](https://github.com/oven-sh/bun/issues/3003)
|✔️|dotenv|[bun docs](https://bun.sh/docs/cli/run#environment-variables)||native, Bun.env.VARIABLE
|✔️|zod|https://github.com/colinhacks/zod||schema validation
|✔️| Discord.js | [discordjs/discord.js](https://github.com/discordjs/discord.js) | | |
|🔧|sharp|https://github.com/lovell/sharp|0.6.6|image \| basic use may work, [discord issue](https://discord.com/channels/876711213126520882/1113918029097603233)
||Jimp|https://github.com/jimp-dev/jimp|0.6.6|image \| [issue](https://github.com/oven-sh/bun/issues/3122)
|✔️|jose|https://github.com/panva/jose||JWA, JWS, JWE, JWT, JWK, JWKS|
||jsonwebtoken|[auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)|0.6.7|jose works, [issue](https://github.com/oven-sh/bun/issues/1454)|
||jwt-simple|[hokaccha/node-jwt-simple](https://github.com/hokaccha/node-jwt-simple)|0.6.7|jose works, [issue](https://github.com/oven-sh/bun/issues/1454)|
|✔️|puppeteer|https://github.com/puppeteer/puppeteer/|
||@clack/prompts|https://github.com/natemoo-re/clack|0.6.6|[issue](https://github.com/oven-sh/bun/issues/3099)
|✔️|otpauth|https://github.com/hectorm/otpauth||one time password (HOTP/TOTP)
|✔️| fp-ts | https://github.com/gcanti/fp-ts ||
|✔️|purify-ts|https://github.com/gigobyte/purify||fp but with method chaining|
|✔️|garph|https://github.com/stepci/garph||end-to-end type-safe graphql
||canvas|https://github.com/Automattic/node-canvas|0.6.7|[@napi-rs/canvas](https://github.com/Brooooooklyn/canvas) may work

<br />

### Web3 frameworks
|| module |  github | when | comments |
|--|--|--|--|--|
|🔧| Web3 | https://github.com/web3/web3.js |2023.05.28| only works if required `const Web3 = require("web3/dist/web3.min.js");`
|🔧| Viem | https://github.com/wagmi-dev/viem |2023.05.28| Doesn't work unless used with `bun build`
