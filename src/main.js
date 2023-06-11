import { MongoClient } from "mongodb";

 async function main() {
    const uri = "mongodb://127.0.0.1";
    const client = new MongoClient(uri);
      //open the connection
    const db = client.db("mydb");
    const message = db.collection("message");
    //close the connection
   await message.insertOne({});
   await client.close();
   console.log("record added");
}

main();