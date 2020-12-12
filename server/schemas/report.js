const { gql } = require('apollo-server')
const { makeReports, getReports, updateReport, deleteReport, getReportById } = require('../models/report')

const typeDefs = gql`
  type Report {
    _id: ID
    UserId: String
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
    UserId: String!
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
    report(_id: ID): Report
  }
  extend type Mutation {
    AddReport(payload: newReport!): Report
    UpdateReport(_id: ID, payload: newReport!) : Report
    DeleteReport(_id: ID) : Report
  }
`

const resolvers = {
  Query: {
    reports: async () => {
      try {
        const reports = await getReports()
        return reports
      } catch (error) {
        return error
      }
    },
    report: async (_, args) => {
      try {
        const { _id } = args
        const report = await getReportById(_id)
        return report
      } catch (error) {
        return error
      }
    }
  },
  Mutation: {
    AddReport: async (_, args) => {
      try {
        const { payload } = args
        const newReports = await makeReports(payload)
        return newReports.ops[0]
      } catch (error) {
        return error
      }
    },
    UpdateReport: async (_, args) => {
      try {
        const { _id, payload } = args
        const updatedReport = await updateReport(_id, payload)
        return updatedReport.value
      } catch (error) {
        return error
      }
    },
    DeleteReport: async (_, args) => {
      try {
        const { _id } = args
        const deletedReport = await deleteReport(_id)
        return deletedReport.value
      } catch (error) {
        return error
      }
    }
  }
}

module.exports = { typeDefs, resolvers }