const { ApolloServer, gql, makeExecutableSchema } = require("apollo-server");
const userSchema = require('./schemas/user');
const express = require('express');
const { graphqlHTTP } = require("express-graphql");
const { startDatabase } = require('./config/database');
const { resolvers } = require('./schemas/user');

const app = express();
const typeDefs = gql`
  type Query
  type Mutation
`;

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, userSchema.typeDefs],
  resolvers: [userSchema.resolvers]
})

const server = new ApolloServer({
  schema
})

const context = async () => {
  const db = await startDatabase();

  return { db };
}


app.use('/', graphqlHTTP({schema, rootValue: resolvers, context}))

server.listen().then(() => {
  console.log(`
    INSPECT Server is running!
    Listening on port 4000
  `);
});

module.exports = app;