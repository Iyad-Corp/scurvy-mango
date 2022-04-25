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
        // await createUser(client, "Jane", 2, [{CompanyName: "Google", Status: "pending"}, {CompanyName: "Facebook", Status: "pending"}]);

        //delete user
        // await deleteUser(client, "John Smith");

        //find user
        // await getUser(client, "Jane");

        //add application
        // await addApplication(client, "Jason Windgard", {CompanyName: "Amazon" , Status: "pending"});

        //update user
        // await updateUser(client, "Jane Doe", "Jane");

        //update status
        await updateStatus(client, "Jane", "Facebook", "pending");

        //delete application
        // await deleteApplication(client, "Jason Windgard", "Google");

        
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);


/*------------------------------------------------------*/
/*----------------------Connect to DB-------------------*/
/*------------------------------------------------------*/

async function mongoConnect(client){
    const uri = "mongodb+srv://scurvy-mango:mango.scurvy@scurvy-mango.qpzfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    if (!client.isConnected()) {
        client = new MongoClient(uri);
    }
}

/*------------------------------------------------------*/
/*-----------------------Users--------------------------*/
/*------------------------------------------------------*/

// Create a new User entry
async function createUser(name, numapps, appdata){

    //connect to database
    await mongoConnect(client);

    //define parameters
    const collection = client.db("Test").collection("User");
    const filter = {Name: name};
    
    //create new user
    newUser = {
        Name: name,
        NumberOfApplications: numapps,
        CompaniesApplied: appdata
    }
    
    //check if user already exists
    if(await collection.findOne(filter)){
        console.log("User already exists");
    }
    //insert new user
    else{
        const result = await collection.insertOne(newUser);
        console.log(`New user created with the following id: ${result.insertedId}`);
    }
}

//get user data by name
async function getUser(searchname){
    
    //connect to database
    await mongoConnect(client);

    //define parameters
    const collection = client.db("Test").collection("User");
    const filter = {Name: searchname};

    //log user data
    if(await collection.findOne(filter)){
        console.log(result);
    }
    else(console.log("User does not exist"));
}

//change user's name
async function updateName(searchname, newname){

    //connect to database
    await mongoConnect(client);
    
    //define parameters
    const collection = client.db("Test").collection("User");
    const filter = {Name: searchname};
    const update = {$set: {Name: newname}};

    //update name
    if(await collection.findOne(filter)){
        const result = await collection.updateOne(filter, update);
        console.log(result);
    }
    else(console.log("User does not exist"));
}

//delete all user data
async function deleteUser(searchname){

    //connect to database
    await mongoConnect(client);
    
    //define parameters
    const collection = client.db("Test").collection("User");
    const filter = {Name: searchname};

    //delete user
    if(await collection.findOne(filter)){
        const result = await collection.deleteOne(filter);
        console.log(result);
    }
    else(console.log("User does not exist"));
}

//create a new application, default status: pending
async function addApplication(searchname, newCompany){

    //connect to database
    await mongoConnect(client);

    //define parameters
    const newApplication = {CompanyName: newCompany, Status: "pending"};
    const collection = client.db("Test").collection("User");
    const filter = {Name: searchname};
    //add new application
    const update = {$push: {CompaniesApplied: newApplication}, $inc: {NumberOfApplications: 1}};

    //check if user exists
    if(await collection.findOne(filter)){
        const result = await collection.updateOne(filter, update);
        console.log(result);
    }
    else(console.log("User does not exist"));
}

//delete an application entry
async function deleteApplication(searchname, company){

    //connect to database
    await mongoConnect(client);

    //define parameters
    const collection = client.db("Test").collection("User");
    const filter = {Name: searchname};
    const update = {$pull: {CompaniesApplied: {CompanyName: company}}, $inc: {NumberOfApplications: -1}};

    //check if user exists
    if(await collection.findOne(filter)){
        const result = await collection.updateOne(filter, update);
        console.log(result);
    }
    else(console.log("User does not exist"));
}

//get status of specific application
async function getStatus(searchName, searchCompany){

    //connect to database
    await mongoConnect(client);

    //define parameters
    const collection = client.db("Test").collection("User");
    const filter = {Name: searchName, CompaniesApplied: {$elemMatch: {CompanyName: searchCompany}}};

    //check if application exists
    if(await collection.findOne(filter)){
        const result = collection.findOne(filter);
        console.log(result);
    }
    else(console.log("Application does not exist"));
}

//update status of a specific application
async function updateStatus(searchName, searchCompany, newStatus){

    //connect to database
    await mongoConnect(client);

    //define parameters
    const collection = client.db("Test").collection("User");
    const filter = {Name: searchName, CompaniesApplied: {$elemMatch: {CompanyName: searchCompany}}};
    const update = {$set: { "CompaniesApplied.$.Status": newStatus}};

    //check if application exists
    if(await collection.findOne(filter)){
        const result = await collection.updateOne(filter, update);
        console.log(result);
    }
    else(console.log("Application does not exist"));
}

/*------------------------------------------------------*/
/*-------------------Companies--------------------------*/
/*------------------------------------------------------*/

async function addCompany(company){

    //connect to database
    await mongoConnect(client);

    //define parameters
    const collection = client.db("Test").collection("Company");
    const filter = {CompanyName: company};

    //check if company already exists
    if(await collection.findOne(filter)){
        console.log("Company already exists");
    }

    //insert new company
    else{
        const result = await collection.insertOne(filter);
        console.log(`New company created with the following id: ${result.insertedId}`);
    }
}

//get company data by name
async function getCompany(searchname){

    //connect to database
    await mongoConnect(client);

    //define parameters
    const collection = client.db("Test").collection("Company");
    const filter = {CompanyName: searchname};

    //log company data
    if(await collection.findOne(filter)){
        console.log(result);
    }
    else(console.log("Company does not exist"));
}

//delete all company data
async function deleteCompany(compName){

    //connect to database
    await mongoConnect(client);

    //define parameters
    const collection = client.db("Test").collection("Company");
    const filter = {CompanyName: compName};

    //delete company
    if(await collection.findOne(filter)){
        const result = await collection.deleteOne(filter);
        console.log(result);
    }
    else(console.log("Company does not exist"));
}