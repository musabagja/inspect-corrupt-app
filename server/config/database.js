const { MongoClient, ObjectID } = require('mongodb');
const { MongoMemoryServer } = require("mongodb-memory-server");

const mongo = new MongoMemoryServer();

const databaseUrl = process.env.MONGO_URL || 'mongodb://localhost:27017';
const databaseName = process.env.DATABASE_NAME || 'workspace';

const client = new MongoClient(databaseUrl, { useUnifiedTopology: true });

client.connect();

const db = client.db(databaseName);

async function startDatabase() {
  const mongoDBURL = await mongo.getConnectionString();
  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
  });
 
  //Seed Database
  if (!database) {
    database = connection.db();
    await database.collection("Users").insertMany(data.Users);
  }
 
  return database;
}

async function stopDatabase() {
  await mongo.stop();
}

module.exports = { ObjectID, db, stopDatabase, startDatabase };
