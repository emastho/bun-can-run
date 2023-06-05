<a href="https://bun.sh">
<p align="center">
  <img src="https://raw.githubusercontent.com/emastho/bun-can-run/main/bun.svg" alt="Bun logo" /><br/>
  bun.sh
</p>
</a>
<br /><br />

### Backend frameworks
> Most of the native frameworks are *way* more performant than node ports.

||name|github|when|comments|
|--|--|--|--|--|
|✔️| Elysia | https://github.com/elysiajs/elysia | | has oauth2, graphql, trpc plugins
|✔️|Hono|https://github.com/honojs||has graphql, trpc middleware
|✔️|Stric|https://github.com/bunsvr|
|🔧|Express|https://github.com/expressjs/express|0.6.6|mostly work, querystrings missing|
||NestJS|https://github.com/nestjs/nest|0.6.7|[has interest](https://github.com/oven-sh/bun/issues/1641)

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
||nodemailer|[nodemailer](https://github.com/nodemailer/nodemailer)|0.6.7|[issue](https://github.com/oven-sh/bun/issues/3003)
|✔️|dotenv|[bun docs](https://bun.sh/docs/cli/run#environment-variables)||native \| [issue in windows](https://github.com/oven-sh/bun/issues/3042) and [issue](https://github.com/oven-sh/bun/issues/2823)
|✔️|zod|[colinhacks/zod](https://github.com/colinhacks/zod)||schema validation
|🔧|bcrypt|[node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js)|0.6.7|right now there is [this](https://bun.sh/docs/api/hashing), soon [this](https://github.com/oven-sh/bun/pull/3204) will be native
|✔️| Discord.js | [discordjs/discord.js](https://github.com/discordjs/discord.js) | | |
|🔧|sharp|[lovell/sharp](https://github.com/lovell/sharp)|0.6.6|image \| basic use may work, [discord issue](https://discord.com/channels/876711213126520882/1113918029097603233)
||Jimp|[jimp-dev/jimp](https://github.com/jimp-dev/jimp)|0.6.6|image \| [issue](https://github.com/oven-sh/bun/issues/3122)
|✔️|jose|[panva/jose](https://github.com/panva/jose)||JWA, JWS, JWE, JWT, JWK, JWKS|
||jsonwebtoken|[node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)|0.6.7|jose works, [issue](https://github.com/oven-sh/bun/issues/1454)|
||jwt-simple|[node-jwt-simple](https://github.com/hokaccha/node-jwt-simple)|0.6.7|jose works, [issue](https://github.com/oven-sh/bun/issues/1454)|
|✔️|puppeteer|[puppeteer/puppeteer](https://github.com/puppeteer/puppeteer/)|
||@clack/prompts|[natemoo-re/clack](https://github.com/natemoo-re/clack)|0.6.6|terminal, [issue](https://github.com/oven-sh/bun/issues/3099)
||Inquirer|[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)|0.6.8|terminal, [issue](https://github.com/oven-sh/bun/issues/3205)
|✔️|otpauth|[hectorm/otpauth](https://github.com/hectorm/otpauth)||one time password (HOTP/TOTP)
|✔️| fp-ts | [gcanti/fp-ts](https://github.com/gcanti/fp-ts) ||
|✔️|purify-ts|[gigobyte/purify](https://github.com/gigobyte/purify)||fp but with method chaining|
|✔️|garph|[stepci/garph](https://github.com/stepci/garph)||end-to-end type-safe graphql
||canvas|[canvas](https://github.com/Automattic/node-canvas)|0.6.7|[@napi-rs/canvas](https://github.com/Brooooooklyn/canvas) may work
|✔️|ldapjs|[ldapjs](https://github.com/ldapjs/node-ldapjs)||should work, because ldap-authenticate uses it underneath|
|✔️|ldap-authentication|[ldap-authentication](https://github.com/shaozi/ldap-authentication)||[should work](https://github.com/oven-sh/bun/issues/3199)

<br />

### Web3 frameworks
|| module |  github | when | comments |
|--|--|--|--|--|
|🔧| Web3 | [web3/web3.js](https://github.com/web3/web3.js) |2023.05.28| only works if required `const Web3 = require("web3/dist/web3.min.js");`
|🔧| Viem | [wagmi-dev/viem](https://github.com/wagmi-dev/viem) |2023.05.28| Doesn't work unless used with `bun build`
