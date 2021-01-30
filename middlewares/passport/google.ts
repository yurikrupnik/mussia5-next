// import { Strategy } from "passport-google-oauth20";
// import { SecretManagerServiceClient } from "@google-cloud/secret-manager";
// // import { google } from "googleapis";
// // google.
// import { socialNetworkStrategy } from "./utils";
//
// const client = new SecretManagerServiceClient();
// const project = client.getProjectId();
//
// console.log("project", project); // eslint-disable-line
//
// export default new Strategy(
//     {
//         // project puzzle-pzl
//         clientID: "206012550014-pj6ilj273h60b7qiokg3dh4j450391er.apps.googleusercontent.com",
//         // process.env.GOOGLE_CLIENT_SECRET ||
//         clientSecret: "vJfuqmQAACdwAGGMCXtpdCQX",
//
//         // http://localhost:3000/api/auth/google/callback
//         // clientID: "813573427784-u6okgh1ituqakgv729uvuftpdmm38hs5.apps.googleusercontent.com",
//         // clientSecret: process.env.GOOGLE_CLIENT_SECRET || "qYhchpZVxQqkr2y6aqfO8_-6",
//         callbackURL: "/api/auth/google/callback",
//         // callbackURL: "/api/auth/google/callback",
//         // /oauthcallback?code={authorizationCode}
//     },
//     socialNetworkStrategy
// );
export default {};
