  const {MongoClient}=require("mongodb")
 const mongoURL = "mongodb+srv://riyanshichaudhary449_db_user:dLgrTOjmnbVd0QWx@cluster0.4mh94l1.mongodb.net/" 
    const client = new MongoClient(mongoURL);
    const dbName = "HelloWorld";
   async function main(){
    await client.connect();

    console.log("Connected successfully to server");
    const db = client.db(dbName);
    
    const collection = db.collection("User");
    const data = {name:"Riyanshi", age:21, city:"New Delhi"};

    const insertresult = await collection.insertOne(data);
    console.log("Inserted document =>", insertresult);  

    const findresult = await collection.find({}).toArray();
    console.log("Found documents =>", findresult);
    return 'done';
   }
   main()
     .then(console.log)
     .catch(console.error)
     .finally(() => client.close());
   


