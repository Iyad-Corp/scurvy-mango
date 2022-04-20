import * as constants from "../constants";
import lockheedmartin from "../assets/companies/lockheedmartin.jpg";
import google from "../assets/companies/google.jpg";
import microsoft from "../assets/companies/microsoft.jpg";
import theseattletimes from "../assets/companies/theseattletimes.jpg";
import centralintelligenceagency from "../assets/companies/centralintelligenceagency.jpg";

async function getCompanies() {
  const companies = [
    {
      name: "Lockheed Martin",
      logo: lockheedmartin,
      industries: ["Aerospace", "Defense"],
      headquarters: "Fort Rucker, AL",
      website: "https://www.lockheedmartin.com/",
      linkedin: "https://www.linkedin.com/company/lockheed-martin/",
      twitter: "https://twitter.com/LockheedMartin",
    },
    {
      name: "Google",
      logo: google,
      industries: ["Internet", "Search"],
      headquarters: "Mountain View, CA",
      website: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/company/google/",
      twitter: "https://twitter.com/Google",
    },
    {
      name: "Microsoft",
      logo: microsoft,
      industries: ["Internet", "Software"],
      headquarters: "Redmond, WA",
      website: "https://www.microsoft.com/",
      linkedin: "https://www.linkedin.com/company/microsoft/",
      twitter: "https://twitter.com/Microsoft",
    },
    {
      name: "The Seattle Times",
      logo: theseattletimes,
      industries: ["News", "Media"],
      headquarters: "Seattle, WA",
      website: "https://www.seattletimes.com/",
      linkedin: "https://www.linkedin.com/company/seattle-times/",
      twitter: "https://twitter.com/seattletimes",
    },
    {
      name: "Central Intelligence Agency",
      logo: centralintelligenceagency,
      industries: ["Government", "Intelligence"],
      headquarters: "Washington, D.C.",
      website: "https://www.cia.gov/",
      linkedin: "https://www.linkedin.com/company/central-intelligence-agency",
      twitter: "https://twitter.com/CIA",
    },
  ];

  // simulate a 500ms delay for API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(companies);
    }, 500);
  });
}

export default getCompanies;
