// file: src/App.js

//=============================================================================
// module imports
//=============================================================================

import { Routes, Route, useLocation } from 'react-router-dom';
import * as reactRouterDom from "react-router-dom";
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import EmailPassword, { EmailPasswordAuth } from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import * as constants from "./constants";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

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
  ]
});

//=============================================================================
// define app routes
//=============================================================================

function App() {
  const location = useLocation();

  return (
    <div className="relative flex flex-col min-h-screen">
      <Routes location={location} key={location.pathname}>
        {/* This renders the login UI on the /auth route */}
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="dashboard" element={
            <EmailPasswordAuth>
              {/*Components that require to be protected by authentication*/}
              <Dashboard />
            </EmailPasswordAuth>
          } />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//
// end of file: src/App.js
