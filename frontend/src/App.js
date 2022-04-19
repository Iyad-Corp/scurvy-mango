// file: src/App.js

//=============================================================================
// module imports
//=============================================================================

import { Routes, Route, useLocation } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import EmailPassword, { EmailPasswordAuth } from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import * as constants from "./constants";
import * as pages from "./pages";
import NavBar from "./components/NavBar";

//=============================================================================
// initialize supertokens
//=============================================================================

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "Scurvy Mango",
    apiDomain: constants.BACKEND_URI,
    websiteDomain: constants.FRONTEND_URI,
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init({
      // uncomment to redirect to /dashboard post login
      // getRedirectionURL: async (context) => {
      //   if (context.action === "SUCCESS") {
      //     if (context.redirectToPath !== undefined) {
      //       // we are navigating back to where the user was before they authenticated
      //       return context.redirectToPath;
      //     }
      //     return "/dashboard";
      //   }
      //   return undefined;
      // }
    }),
    Session.init(),
  ],
});

//=============================================================================
// define app routes
//=============================================================================

function App() {
  const location = useLocation();

  return (
    <div className="relative flex flex-col items-center min-h-screen">
      <NavBar />
      <Routes location={location} key={location.pathname}>
        {/* This renders the login UI on the /auth route */}
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
        <Route path="/">
          <Route index element={<pages.Home />} />
          <Route path="companies" element={<pages.Companies />} />
          <Route path="people" element={<pages.People />} />
          <Route path="about" element={<pages.About />} />
          <Route
            path="profile"
            element={
              <EmailPasswordAuth>
                {/* page protected by authentication */}
                <pages.Profile />
              </EmailPasswordAuth>
            }
          />
          <Route path="*" element={<pages.PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//
// end of file: src/App.js
