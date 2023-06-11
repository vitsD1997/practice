import { MongoClient } from "mongodb";

 async function insertRecord() {
    const uri = "mongodb://127.0.0.1";
    
    const client = new MongoClient(uri);

    const db = client.db("mydb");
    const message = db.collection("message");

    let jsonDocument = { message: "hello world", to: "santosh", from: "tejas" };
    await message.insertOne(jsonDocument);

    //close the connection

   await client.close();
   console.log("record added");
 }
   async function main() {
    let jsonDocument = { message: "hello world", to: "santosh", from: "tejas"};
    await insertRecord(jsonDocument);
   }


main();