import { MongoClient } from "mongodb";

async function readMessage() {
  const uri = "mongodb://127.0.0.1";
  const client = new MongoClient(uri);

  //logic of read
  let db = client.db("mydb");
  let message = db.collection("message");

  let list = await message.find().toArray();
  console.log(list);
  await client.close();
}
async function main() {
  let jsonDocument = { message: "hello world", to: "vitthal", from: "tejas" };
  readMessage();
}

main();
