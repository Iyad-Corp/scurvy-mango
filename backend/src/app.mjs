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
import hello from './api/hello.mjs';

//=============================================================================
// get environment variables and define constants
//=============================================================================

const PORT = (process.env.PORT) ? process.env.PORT : 3001;

//=============================================================================
// initialize supertokens
//=============================================================================

supertokens.init({
    framework: "express",
    supertokens: {
        // These are the connection details of the app you created on supertokens.com
        connectionURI: "https://952f1871b9ba11ecafb6277fa4e3aa94-us-east-1.aws.supertokens.io:3568",
        apiKey: "dKnikUiRgXIxBmgsEjukCLjxeydVnw",
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/session/appinfo
        appName: "Scurvy Mango",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3000",
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
    origin: "http://localhost:3000",
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
app.get('/hello', hello);

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

app.listen(PORT, () => {
    console.log(`Scurvy Mango backend listening on port ${PORT}`);
});

//
// end of file: src/app.mjs
