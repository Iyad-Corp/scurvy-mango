import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, GlobeIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import lockheedmartin from "../assets/companies/lockheedmartin.jpg";
import google from "../assets/companies/google.jpg";
import microsoft from "../assets/companies/microsoft.jpg";
import theseattletimes from "../assets/companies/theseattletimes.jpg";
import centralintelligenceagency from "../assets/companies/centralintelligenceagency.jpg";

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

export default function Companies() {
  const [query, setQuery] = useState(""); // search input
  const [foundCompanies, setFoundCompanies] = useState(companies); // displayed companies

  const searchInputRef = useRef(null); // search input ref

  useEffect(() => {
    // focus search on '/' or 'ctrl+k'
    window.addEventListener("keydown", (e) => {
      if (e.key === "/" || (e.key === "k" && e.ctrlKey)) {
        e.preventDefault();
        searchInputRef.current.focus();
      }
    });
  }, []);

  // filter companies by search query
  function onSearchChange(e) {
    const { value } = e.target; // input value
    // if query is empty, display all companies
    if (value === "") {
      setFoundCompanies(companies);
    } else {
      // match query to company name or industry
      const filteredCompanies = companies.filter((company) => {
        const { name, industries } = company;
        return name.toLowerCase().includes(value.toLowerCase()) || industries.join(" ").toLocaleLowerCase().includes(value.toLowerCase());
      });
      setFoundCompanies(filteredCompanies);
    }

    // update search input
    setQuery(value);
  }

  return (
    <div className="flex flex-col justify-center items-center py-5 px-28 space-y-3 mx-auto w-full max-w-screen-lg">
      {/* search bar */}
      <div class="w-4/5 flex items-center px-10 pb-2 border-b space-x-2 mb-8 border-gray-400">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          type="search"
          value={query}
          onChange={onSearchChange}
          placeholder="Search by name or industry (Press '/' to focus)"
          ref={searchInputRef}
          className="text-gray-600 placeholder:text-gray-500 placeholder:focus:text-gray-400 w-full focus:outline-none "
        />
      </div>
      {foundCompanies.length !== 0 ? (
        foundCompanies.map((company) => (
          <Link to={`/companies/${company.name}`} className="w-full border-2 rounded-xl hover:shadow-xl duration-200">
            <div className="flex p-4 space-x-4">
              <img src={company.logo} alt="profile" className=" h-24 rounded-lg " />
              <div className="flex flex-col items-start">
                <p className="text-2xl font-bold">{company.name}</p>
                <p className="text-sm">{`${company.industries.join(", ")} | ${company.headquarters}`}</p>
                <div className="flex space-x-2 pt-2 text-gray-600 items-center">
                  <a href={company.linkedin}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 hover:text-gray-800 duration-200">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a href={company.website}>
                    <GlobeIcon className="h-7 w-7 hover:text-gray-800 duration-200" />
                  </a>
                  <a href={company.twitter}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 hover:text-gray-800 duration-200">
                      <path
                        d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-2xl font-bold">No results found 😟</p>
          <p className="text-sm">Try searching for another company.</p>
        </div>
      )}

      {/* see more button that doesn't do anything yet (only show with results) */}
      {foundCompanies.length !== 0 && (
        <>
          <div className="h-2" />
          <button onClick={{}} className="flex justify-center items-center text-gray-600 rounded-full bg-gray-200 py-2 px-4 hover:bg-gray-600 hover:text-gray-300 duration-200">
            <p className="text-center text-base font-semibold">See more</p>
            <ChevronDownIcon className="h-5 w-5 -mb-1 -mr-1" />
          </button>
        </>
      )}
    </div>
  );
}
