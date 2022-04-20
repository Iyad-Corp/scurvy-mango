const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
     const uri = "mongodb+srv://scurvy-mango:mango.scurvy@scurvy-mango.qpzfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    
    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        // await createUser(client, "Jason Windgard", 2, [{CompanyName: "Google", Status: "pending"}, {CompanyName: "Facebook", Status: "pending"}]);

        //find user
        // await getUser(client, "Jane");

        //add application
        // await addApplication(client, "Jane", {CompanyName: "Amazon" , Status: "pending"});

        //update user
        // await updateUser(client, "Jane Doe", "Jane");

        //update status
        await updateStatus2(client, "Jason Windgard", "Facebook", "accepted");

        //delete application
        // await deleteApplication(client, "Jason Windgard", "Google");

        
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// Add functions that make DB calls here
async function createUser(client, name, numapps, appdata){
    newUser = {
        Name: name,
        NumberOfApplications: numapps,
        CompaniesApplied: appdata
    }
    if(await client.db("Test").collection("User").findOne({Name: name})){
        console.log("User already exists");
    }
    else{
        const result = await client.db("Test").collection("User").insertOne(newUser);
        console.log(`New user created with the following id: ${result.insertedId}`);
    }
}

async function getUser(client, searchname){
    const result = await client.db("Test").collection("User").findOne({Name: searchname});
    console.log(result);
}

async function updateUser(client, searchname, newname){
    const result = await client.db("Test").collection("User").updateOne({Name: searchname}, {$set: {Name: newname}});
    console.log(result);
}
async function addApplication(client, searchname, company){
    const result = await client.db("Test").collection("User").updateOne({Name: searchname}, {$push: {CompaniesApplied: company}, $inc: {NumberOfApplications: 1}});
    console.log(result);
}

async function deleteUser(client, searchname){
    const result = await client.db("Test").collection("User").deleteOne({Name: searchname});
    console.log(result);
}

async function deleteApplication(client, searchname, company){
    const result = await client.db("Test").collection("User").updateOne({Name: searchname}, {$pull: {CompaniesApplied: {CompanyName: company}, $inc: {NumberOfApplications: -1}}});
    console.log(result);
}

// async function updateStatus(client, searchname, company, status){
//     const result = await client.db("Test").collection("User").updateOne({Name: searchname, CompaniesApplied: {$elemMatch: {CompaniesApplied: company}}}, {$set: {CompaniesApplied[1]: status}});
//     console.log(result);
// }

async function updateStatus2(client, searchname, company, status){
    const result = await client.db("Test").collection("User").updateOne({Name: searchname, CompaniesApplied: {$elemMatch: {CompanyName: company}}}, {$set: {CompaniesApplied: {CompanyName: company, Status: status}}});
    console.log(result);
}

// async function updateStatus(client, searchname, company, status){
//     await deleteApplication(client, searchname, company);
//     await addApplication(client, searchname, {CompanyName: company, Status: status});
    // console.log(result);
// }
