const { buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql"); // Middleware de graphql
const { append } = require("express/lib/response");
const { readFileSync } = require("fs");
const { join } = require("path");
const resolvers = require("./lib/resolvers")

const app = express();
const port = process.env.port || 3000;

// define the schema

const schema = buildSchema(
  readFileSync(join(__dirname, `lib`, `schema.graphql`), `utf-8`)
);

// Run Query in express

app.use(
  "/api",
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: resolvers,
  })
);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
