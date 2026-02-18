import { MongoClient } from "mongodb";

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.warn(" MONGODB_URI not available. Skipping DB connection.");
  clientPromise = Promise.resolve(null);
} else {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
}

export default clientPromise;
