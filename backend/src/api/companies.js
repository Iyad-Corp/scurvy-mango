import * as constants from "../constants.js";
import { getCollection } from "../utils/mongo.js";

/**
 * @param {*} req
 * @param {*} res
 */
async function companies(req, res) {
  console.log("[ STATUS ] GET /companies -", Date());

  const companies = await getCollection("Companies", {}, { _id: 0 });

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ companies: companies }));
}

export default companies;
