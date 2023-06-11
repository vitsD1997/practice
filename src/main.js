import { MongoClient } from "mongodb";

async function insertMessage(jsonDocument) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const message = db.collection("message");

  await message.insertOne(jsonDocument);

  await client.close();
  console.log("Record Added");
}

async function readMessage() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  // logic of read
  let db = client.db("mydb");
  let message = db.collection("message");

  let list = await message.find().toArray();
  await client.close();

  return list;
}

async function main() {
  let jsonDocument = {
    message: "Hello Universee",
    to: "santosh",
    from: "tejas",
  };
  // await insertMessage(jsonDocument);
  let list = await readMessage();
  console.log(list);
}

main();