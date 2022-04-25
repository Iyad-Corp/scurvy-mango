import * as constants from "../constants.js";
import {updateStatus} from "../utils/mongo_funcs.js";

//uri for mongodb
const uri = "mongodb+srv://scurvy-mango:mango.scurvy@scurvy-mango.qpzfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

//update status of an application for the current user
async function updateAppStatus(req, res){
    
    console.log("[ STATUS ] POST /updateStatus -", Date());
    //get the current user, company and new status
    const {username, company, status} = req.body;
    //update the current status of the application for that company
    await updateStatus(client, username, company, status);

    //send a success message
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ status: "success" }));
}
