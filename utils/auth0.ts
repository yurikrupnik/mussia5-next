import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    // // domain: "client-apps-dev.eu.auth0.com" || process.env.AUTH0_DOMAIN,
    secret: process.env.AUTH0_SECRET,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,

    baseURL: process.env.AUTH0_BASE_URL,
    // // issuerBaseURL: "http://localhost:3000",;
    // session: {
    //     cookie: {
    //         // aris: "a45ris",
    //     },
    // },
});
