const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server');
const newsSchema = require('./schemas/news')
const reportSchema = require('./schemas/report')

const typeDefs = gql`
  type Query
  type Mutation
`;

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, newsSchema.typeDefs, reportSchema.typeDefs],
  resolvers: [newsSchema.resolvers, reportSchema.resolvers]

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
