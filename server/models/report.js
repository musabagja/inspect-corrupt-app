const { db } = require('../config/database')
const reportsCollection = db.collection(process.env.REPORTS_COLLECTION || 'Reports')

class Reports {
  static async makeReports(payload) {
    return await reportsCollection.insertOne(payload)
  }
}

module.exports = Reports