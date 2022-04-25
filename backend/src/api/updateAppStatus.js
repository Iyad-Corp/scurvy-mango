import * as constants from "../constants.js";
import {updateStatus} from "../utils/mongo_funcs.js";

//update status of an application for the current user
async function updateAppStatus(req, res){
    
    console.log("[ STATUS ] POST /updateStatus -", Date());
    //get the current user, company and new status
    const {username, company, status} = req.body;
    //update the current status of the application for that company
    await updateStatus(username, company, status);

    //send a success message
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ status: "success" }));
}
