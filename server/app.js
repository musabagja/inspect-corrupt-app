const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server');
const userSchema = require('./schemas/user');

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

server.listen().then(() => {
  console.log(`
    INSPECT Server is running!
    Listening on port 4000
  `);
});
