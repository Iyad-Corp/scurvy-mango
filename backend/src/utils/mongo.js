import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://scurvy-mango:mango.scurvy@scurvy-mango.qpzfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGODB_DB = process.env.MONGODB_DB || "Test";

// set MongoClient options
const options = {};

let client;
let db;

// establishes connection to specified database
async function connectToDatabase() {
  if (!client && !db) {
    client = await MongoClient.connect(MONGODB_URI, options);
    db = client.db(MONGODB_DB);
  }
}

// returns an object containing the requested collection from MONGODB_DB
export async function getCollection(collection, find = {}, projection = {}) {
  await connectToDatabase();
  const data = await db.collection(collection).find(find).project(projection).toArray();
  return JSON.parse(JSON.stringify(data));
}

//
// end of file: lib/mongo.js
