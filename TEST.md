<a href="https://bun.sh">
<p align="center">
  <img src="https://raw.githubusercontent.com/emastho/bun-can-run/main/bun.svg" alt="Bun logo" /><br/>
  bun.sh
</p>
</a>
<br />

<br />

### Backend frameworks

> Most of the native frameworks are *way* more performant than node ports.

||name|github|when|comments|
|--|--|--|--|--|
|✔️|Elysiajs|https://github.com/elysiajs/elysia||has oauth2, graphql, trpc plugins|
|✔️|Hono|https://github.com/honojs||has graphql, trpc middleware|
|✔️|Stric|https://github.com/bunsvr|||
|🔧|Express|https://github.com/expressjs/express|0.6.8|mostly work, querystrings missing|
||Nestjs|https://github.com/nestjs/nest|0.6.7|[has interest](https://github.com/oven-sh/bun/issues/1641)|

<br />

### Databases
|| module |  github | when | comments |
|--|--|--|--|--|
|✔️|pg|[brianc/node-postgres](https://github.com/brianc/node-postgres)|||
|✔️|postgres|https://github.com/porsager/postgres|||
|🔧|mongoose|[Automattic/mongoose](https://github.com/Automattic/mongoose)|0.6.8|works, but [issue](https://github.com/oven-sh/bun/issues/3195)|
|🔧|mongodb|[mongodb/node-mongodb-native](https://github.com/mongodb/node-mongodb-native)|0.6.8|same as mongoose, [discord issue](https://discord.com/channels/876711213126520882/1116019102788636822)|
|✔️|mysql2|[sidorares/node-mysql2](https://github.com/sidorares/node-mysql2)|||