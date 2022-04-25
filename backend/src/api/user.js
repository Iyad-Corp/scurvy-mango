import * as constants from "../constants.js";
import { getCollection } from "../utils/mongo.js";

/**
 * @param {*} req
 * @param {*} res
 */
 async function user(req, res) {
    console.log("[ STATUS ] GET /user -", Date());
  
    const user = await getCollection("User", {}, { _id: 0 });
  
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ companies: user }));
  }
  
  export default user;
  