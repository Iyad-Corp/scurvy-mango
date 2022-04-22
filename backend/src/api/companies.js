import * as constants from "../constants.js";

/**
 * @param {*} req
 * @param {*} res
 */
function companies(req, res) {
  console.log("[ STATUS ] GET /companies -", Date());

  const companies = [
    {
      name: "Lockheed Martin",
      logo: `${constants.BACKEND_URI}/company-images/lockheedmartin.jpg`,
      industries: ["Aerospace", "Defense"],
      headquarters: "Fort Rucker, AL",
      website: "https://www.lockheedmartin.com/",
      linkedin: "https://www.linkedin.com/company/lockheed-martin/",
      twitter: "https://twitter.com/LockheedMartin",
    },
    {
      name: "Google",
      logo: `${constants.BACKEND_URI}/company-images/google.jpg`,
      industries: ["Internet", "Search"],
      headquarters: "Mountain View, CA",
      website: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/company/google/",
      twitter: "https://twitter.com/Google",
    },
    {
      name: "Microsoft",
      logo: `${constants.BACKEND_URI}/company-images/microsoft.jpg`,
      industries: ["Internet", "Software"],
      headquarters: "Redmond, WA",
      website: "https://www.microsoft.com/",
      linkedin: "https://www.linkedin.com/company/microsoft/",
      twitter: "https://twitter.com/Microsoft",
    },
    {
      name: "The Seattle Times",
      logo: `${constants.BACKEND_URI}/company-images/seattletimes.jpg`,
      industries: ["News", "Media"],
      headquarters: "Seattle, WA",
      website: "https://www.seattletimes.com/",
      linkedin: "https://www.linkedin.com/company/seattle-times/",
      twitter: "https://twitter.com/seattletimes",
    },
    {
      name: "Central Intelligence Agency",
      logo: `${constants.BACKEND_URI}/company-images/cia.jpg`,
      industries: ["Government", "Intelligence"],
      headquarters: "Washington, D.C.",
      website: "https://www.cia.gov/",
      linkedin: "https://www.linkedin.com/company/central-intelligence-agency",
      twitter: "https://twitter.com/CIA",
    },
  ];

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ companies: companies }));
}

export default companies;
