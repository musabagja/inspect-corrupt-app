const { gql } = require('apollo-server');
const checkCredible = require('../helpers/puppeteer');

const typeDefs = gql`
  type Credibility {
    kpbn: Boolean,
    indoInvestments: Boolean
  }

  extend type Mutation {
    credibility(company: String) : Credibility
  }
`;

const resolvers = {
  Mutation: {
    credibility: async (_, args) => {
      try {
        const { company } = args;
        const credible = checkCredible(company);
        return credible;
      } catch(err) {
        return err;
      }
    }
  }
}

module.exports = { typeDefs, resolvers };
