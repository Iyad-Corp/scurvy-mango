// file: src/App.js

//=============================================================================
// module imports
//=============================================================================

import { Routes, Route, useLocation } from 'react-router-dom';
import * as reactRouterDom from "react-router-dom";
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

//=============================================================================
// initialize supertokens
//=============================================================================

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "Scurvy Mango",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init(),
    Session.init()
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
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//
// end of file: src/App.js
