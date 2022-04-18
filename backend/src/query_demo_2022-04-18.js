// import
var MongoClient = require('mongodb').MongoClient;


// main function
async function main() {

  // deets on db, username, pw
  const uri = "mongodb+srv://scurvy-mango:mango.scurvy@scurvy-mango.qpzfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  // create a data object for interacting with the db
  const client = new MongoClient(uri);

  // put our db access commands in a try/catch structure so we fail gracefully
  try {

    // connect to mongo
    await client.connect();

    // uncomment any of these to try them
    // each sample calls a function which is found below main()

    // print out all dbs
    // await listDatabases(client);

    // add a single item to the db
    // await createListing(client);

    // find a single item
    // await findSingleItem(client);

    // count the number of recruiters
    await countRecruiters(client);

    // alternate way to count recruiters
    await countRecruitersAlternate(client);

  } catch (e) {
    // return an error if one arises
    console.error(e);
  } finally {
    // close db to ensure safe exit
    await client.close();
  }

}

async function countRecruitersAlternate(client){
  // this will return *all* companies with name Google
  // and produce an array of entries named result
  const cursor = client.db("Test").collection("Companies").find({Name:"Google"});
  const results = await cursor.toArray();
  console.log(results[0].Recruiters);
}

async function countRecruiters(client){
  // finds a single company named Google
  const result = await client.db("Test").collection("Companies").findOne({ Name: "Google" });
  console.log(`There are ${result.Recruiters.length} recruiters`);
  result.Recruiters.forEach( (recr , i) => {
    console.log(`  - ${i+1}: ${recr}`)
  });

}

async function findSingleItem(client) {
  const result = await client.db("Test").collection("Companies").findOne({ Name: "Google" });
  if (result) {
    console.log(result);
  } else {
    console.log("no results found");
  }
}

async function createListing(client, newListing) {
  newListing = {
    name: "Lovely Loft",
    summary: "A mediocre loft in paris",
    bedrooms: 1,
    bathrooms: 1
  };

  const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

  // console log insertedID comes up as 'undefined'
  // console.log(`New listing created with the following id: ${result.insertedID}`);
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));

}

// call the main function defined above
main().catch(console.error);

// References:
// https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
// https://www.mongodb.com/developer/quickstart/node-crud-tutorial/