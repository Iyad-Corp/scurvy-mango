import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { Routes, Route, useLocation } from 'react-router-dom';
import * as reactRouterDom from "react-router-dom";
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "Scurvy Mango",
    apiDomain: "https://952f1871b9ba11ecafb6277fa4e3aa94-us-east-1.aws.supertokens.io:3568",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init(),
    Session.init()
  ]
});

export default function App() {
  const location = useLocation();

  return (
    <div className="relative flex flex-col min-h-screen bg-prussian-blue text-white">
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