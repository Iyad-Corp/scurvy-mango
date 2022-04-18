// file: src/app.mjs

//=============================================================================
// module imports
//=============================================================================

import express from 'express';
import cors from 'cors';
import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session/index.js";
import EmailPassword from "supertokens-node/recipe/emailpassword/index.js";
import { middleware, errorHandler } from "supertokens-node/framework/express/index.js";
import { verifySession } from "supertokens-node/recipe/session/framework/express/index.js";
import * as constants from './constants.js';
import hello from './api/hello.js';

// print back/front-end URIs for debuggin
console.log(`[ DEBUG ] back/front-end URIs:\n${constants.BACKEND_URI}\n${constants.FRONTEND_URI}`)

//=============================================================================
// check if vital environment variables are set
//=============================================================================

if (!constants.SUPERTOKENS_URI || !constants.SUPERTOKENS_API_KEY) {
    console.log("[ ERROR ] SUPERTOKENS_URI and SUPERTOKENS_API_KEY environment variables must be set.");
    process.exit(1);
}

//=============================================================================
// initialize supertokens
//=============================================================================

supertokens.init({
    framework: "express",
    supertokens: {
        // These are the connection details of the app you created on supertokens.com
        connectionURI: constants.SUPERTOKENS_URI,
        apiKey: constants.SUPERTOKENS_API_KEY,
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/session/appinfo
        appName: "Scurvy Mango",
        apiDomain: constants.BACKEND_URI,
        websiteDomain: constants.FRONTEND_URI,
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init(), // initializes signin / sign up features
        Session.init() // initializes session features
    ]
});

//=============================================================================
// create express app and configure middlewares
//=============================================================================

const app = express();

// set supertokens cors policy
app.use(cors({
    origin: [constants.FRONTEND_URI, 'https://sm-frontend-bdav4hq7ta-uk.a.run.app'],
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
}));

// use supertokens middleware
// adds a few APIs: https://app.swaggerhub.com/apis/supertokens/FDI
app.use(middleware());

// use built-in middleware to parse JSON payloads
app.use(express.json());

// serve static files from the public directory
app.use('/', express.static('public'));

//=============================================================================
// set API endpoints
//=============================================================================

// hello message
app.get('/hello', verifySession({ sessionRequired: false }), hello);

//=============================================================================
// set error handlers
//=============================================================================

// supertoken error handler
app.use(errorHandler())

// custom error handler
// import express, { Request, Response, NextFunction } from 'express';
// app.use((err: unknown, req: Request, res: Response, next: NextFunction) => { /* ... */ });

//=============================================================================
// bind port and listen for connections
//=============================================================================

app.listen(constants.PORT, () => {
    console.log(`Scurvy Mango backend listening on port ${constants.PORT}`);
});

//
// end of file: src/app.mjs
