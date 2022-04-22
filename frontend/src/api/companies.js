import * as constants from "../constants";

async function getCompanies() {
  const res = await fetch(`${constants.BACKEND_URI}/companies`);
  const data = await res.json();
  return data.companies;
}

export default getCompanies;
