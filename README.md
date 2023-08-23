> At the current state of Bun, there is a higher chance of a library not in this list to be working than to not.<br />
If a library doesn't work - it's a bug and you should create an [issue](https://github.com/oven-sh/bun/issues).
<br />

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
|🟢| Elysia | https://github.com/elysiajs/elysia | | has oauth2, graphql, trpc plugins, ws
|🟢|Stric|https://github.com/bunsvr||ws
|🟢|Vixeny|[vixeny](https://github.com/mimiMonads/functor)||functional programming, fp
|🟢|Fluxify|[fluxify](https://github.com/simylein/fluxify)||
|🟢|Hono|https://github.com/honojs||has graphql, trpc middleware
|🟢|Express|https://github.com/expressjs/express||
||NestJS|https://github.com/nestjs/nest|0.7|[has interest](https://github.com/oven-sh/bun/issues/1641)

<br />

### Databases
|| module |  github | when | comments |
|--|--|--|--|--|
|🟢| pg | [brianc/node-postgres](https://github.com/brianc/node-postgres) |
|🟢|postgres|https://github.com/porsager/postgres|
|🟢|mongoose|[Automattic/mongoose](https://github.com/Automattic/mongoose)| 0.7 | works, but [issue](https://github.com/oven-sh/bun/issues/3195)
|🟢|mongodb|[mongodb/node-mongodb-native](https://github.com/mongodb/node-mongodb-native)| 0.7 | same as mongoose, [discord issue](https://discord.com/channels/876711213126520882/1116019102788636822)
|🟢|mysql2|[sidorares/node-mysql2](https://github.com/sidorares/node-mysql2)|
|🟢|redis|https://github.com/redis/node-redis|
|🟢|bun:sqlite|https://bun.sh/docs/api/sqlite||📣 native

<br />

### ORMs
||module|github|when|comments|
|--|--|--|--|--|
|🟢|Prisma|https://github.com/prisma/prisma|||
|🟢|DrizzleORM|[DrizzleOrm](https://github.com/drizzle-team/drizzle-orm)|
|🟢|great.db|https://github.com/tr1ckydev/great.db||sqlite only
|🟢|duckdb|https://github.com/duckdb/duckdb|||
|🟢|BunORM|https://github.com/deadlinecode/BunORM||sqlite only

<br />

### Full stack frameworks
||name|github|when|comments|
|--|--|--|--|--|
|🟢|Astro|https://docs.astro.build/en/recipes/bun/||thats Astro, you can use whatever
|🟢|SvelteKit|https://github.com/sveltejs/kit|0.7|[svelte-adapter-bun](https://github.com/gornostay25/svelte-adapter-bun)
||Qwik|https://github.com/BuilderIO/qwik|0.7|
||Next.js|https://github.com/vercel/next.js|0.6.7|react
|🟢|Vite|https://github.com/vitejs||
|🟢|Buchta|https://github.com/Fire-The-Fox/buchta||discontinued

<br />

### Libraries
|| module |  github | when | comments |
|--|--|--|--|--|
|🔧|nodemailer|[nodemailer](https://github.com/nodemailer/nodemailer)|0.7|[issue](https://github.com/oven-sh/bun/issues/3701)
|🟢|dotenv|[Bun docs](https://bun.sh/docs/cli/run#environment-variables)||📣 native \| Bun.env or process.env
|🟢|zod|[colinhacks/zod](https://github.com/colinhacks/zod)||schema validation
|🟢|bcrypt|[Bun docs](https://bun.sh/docs/api/hashing)||📣 native
|🟢|stripe|[stripe/stripe-node](https://github.com/stripe/stripe-node)|0.6.14|should work \| payments
|🟢| Discord.js | [discordjs/discord.js](https://github.com/discordjs/discord.js) | |no voice chat |
|🔧|sharp|[lovell/sharp](https://github.com/lovell/sharp)|0.6.13|image \| basic use may work, [discord issue](https://discord.com/channels/876711213126520882/1113918029097603233), [issue](https://github.com/oven-sh/bun/issues/3218)
||Jimp|[jimp-dev/jimp](https://github.com/jimp-dev/jimp)|0.6.13|image \| [issue](https://github.com/oven-sh/bun/issues/3122)
|🟢|jose|[panva/jose](https://github.com/panva/jose)||JWA, JWS, JWE, JWT, JWK, JWKS|
||jsonwebtoken|[node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)|0.6.7|jose works, [issue](https://github.com/oven-sh/bun/issues/1454)|
||jwt-simple|[node-jwt-simple](https://github.com/hokaccha/node-jwt-simple)|0.6.7|jose works, [issue](https://github.com/oven-sh/bun/issues/1454)|
|🟢|oauth4webapi|[panva/oauth4webapi](https://github.com/panva/oauth4webapi)||oauth openid
|🟢|puppeteer|[puppeteer/puppeteer](https://github.com/puppeteer/puppeteer/)||
|🟢|webview-bun|[webview-bun](https://github.com/tr1ckydev/webview-bun)||webview bindings
||@clack/prompts|[natemoo-re/clack](https://github.com/natemoo-re/clack)|0.6.6|terminal, [issue](https://github.com/oven-sh/bun/issues/3099)
|🟢|compression|[compression](https://github.com/expressjs/compression)||
|🟢|ts-pattern|[ts-pattern](https://github.com/gvergnaud/ts-pattern)||pattern matching
|🟢|chalk|[chalk/chalk](https://github.com/chalk/chalk)||terminal
|🟢|commander|[commander](https://github.com/tj/commander.js)||terminal
|🟢|lodash|[lodash/lodash](https://github.com/lodash/lodash)||utils
|🟢|underscore|[underscore](https://github.com/jashkenas/underscore/)||utils
|🟢|bun-promptx|[bun-promptx](https://github.com/wobsoriano/bun-promptx)||terminal
||Inquirer|[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)|0.6.8|terminal, [issue](https://github.com/oven-sh/bun/issues/3205)
|🟢|<sub><sup>@googlemaps/google-maps-services-js</sup></sub>|[google-maps-services-js](https://github.com/googlemaps/google-maps-services-js)||[issue closed, should work](https://github.com/oven-sh/bun/issues/3211)
|🟢|bkg|[bkg](https://github.com/theseyan/bkg)||bun into single executable
|🟢|otpauth|[hectorm/otpauth](https://github.com/hectorm/otpauth)||one time password (HOTP/TOTP)
|🟢| fp-ts | [gcanti/fp-ts](https://github.com/gcanti/fp-ts) ||
|🟢|purify-ts|[gigobyte/purify](https://github.com/gigobyte/purify)||fp but with method chaining|
|🟢|garph|[stepci/garph](https://github.com/stepci/garph)||end-to-end type-safe graphql
||canvas|[canvas](https://github.com/Automattic/node-canvas)|0.6.7|[@napi-rs/canvas](https://github.com/Brooooooklyn/canvas) may work
|🟢|ldapjs|[ldapjs](https://github.com/ldapjs/node-ldapjs)||should work, because ldap-authenticate uses it underneath|
|🟢|ldap-authentication|[ldap-authentication](https://github.com/shaozi/ldap-authentication)||[should work](https://github.com/oven-sh/bun/issues/3199)
|🟢|runtimey|[runtimey](https://github.com/tr1ckydev/runtimey)||detect js runtime

<br />

### Testing
||module|github|when|comments|
|--|--|--|--|--|
|🟢|jest|[bun docs](https://bun.sh/docs/cli/test)||📣 native \| [progress](https://github.com/oven-sh/bun/issues/1825)

<br />

### GraphQL
||module|github|when|comments|
|--|--|--|--|--|
|🟢|@apollo/server|https://github.com/apollographql/apollo-server|
|🟢|graphql|https://github.com/graphql/graphql-js|
|🟢|graphql-yoga|https://github.com/dotansimha/graphql-yoga|

<br />

### Web3 / Cryptocurrency
|| module |  github | when | comments |
|--|--|--|--|--|
|🔧| Web3 | [web3/web3.js](https://github.com/web3/web3.js) |2023.05.28| only works if required `const Web3 = require("web3/dist/web3.min.js");`
|🟢| Viem | [wagmi-dev/viem](https://github.com/wagmi-dev/viem) ||
