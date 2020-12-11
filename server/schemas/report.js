const { gql } = require('apollo-server')
const { makeReports, getReports } = require('../models/report')

const typeDefs = gql`
  type Report {
    _id: ID
    case: String
    entity: String
    province: String
    city: String
    dateHappened: String
    description: String
    isDocumentProvided: Boolean
    involvedPerson: [String]
    personRole: String
    isReported: Boolean
    isKeepInTouch: Boolean
  }

  input newReport {
    case: String!
    entity: String!
    province: String!
    city: String!
    dateHappened: String!
    description: String!
    isDocumentProvided: Boolean!
    involvedPerson: [String]!
    personRole: String!
    isReported: Boolean!
    isKeepInTouch: Boolean!
  }
  extend type Query {
    reports: [Report]
  }
  extend type Mutation {
    AddReport(payload: newReport!): Report
  }
`

const resolvers = {
  Query: {},
  Mutation: {
    AddReport: async(_, args) => {
      try {
        const { payload } = args
        const newReports = await makeReports(payload)
        return newReports
      } catch (error) {
        return error
      }
    }
  }
}

module.exports = { typeDefs, resolvers }