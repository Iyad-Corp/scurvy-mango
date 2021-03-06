import * as constants from "../constants.js";

async function hello() {
  const res = await fetch(`${constants.BACKEND_URI}/hello`);
  const data = await res.json();
  return data.message;
}

export default hello;
