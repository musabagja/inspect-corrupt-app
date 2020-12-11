const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server');

const typeDefs = gql``;

const schema = makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: []
})

const server = new ApolloServer({
  schema
})

server.listen().then(() => {
  console.log(`
    INSPECT Server is running!
    Listening on port 4000
  `);
});

module.exports = server