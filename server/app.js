const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server');
const newsSchema = require('./schemas/news')

const typeDefs = gql`
  type Query
`;

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, newsSchema.typeDefs],
  resolvers: [newsSchema.resolvers]
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
