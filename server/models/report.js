const { db, ObjectID } = require('../config/database')
const reportsCollection = db.collection(process.env.REPORTS_COLLECTION || 'Reports')

class Reports {
  static async getReports() {
    return await reportsCollection.find().toArray()
  }

  static async getReportById(id) {
    return await reportsCollection.findOne({"_id": ObjectID(id)})
  }

  static async makeReports(payload) {
    return await reportsCollection.insertOne(payload)
  }

  static async updateReport(id, payload) {
    return await reportsCollection.findOneAndUpdate({ "_id": ObjectID(id) },
      {
        $set: {
          'case': payload.case,
          'entity': payload.entity,
          'province': payload.province,
          'city': payload.city,
          'dateHappened': payload.dateHappened,
          'description': payload.description,
          'isDocumentProvided': payload.isDocumentProvided,
          'involvedPerson': payload.involvedPerson,
          'personRole': payload.personRole,
          'isReported': payload.isReported,
          'isKeepInTouch': payload.isKeepInTouch,
        }
      }, { returnOriginal: false })
  }

  static async deleteReport(id) {
    return await reportsCollection.findOneAndDelete({ "_id": ObjectID(id) })
  }
}

module.exports = Reports