import { Strategy } from "passport-google-oauth20";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";
// import { google } from "googleapis";
// google.
import { socialNetworkStrategy } from "./utils";

const client = new SecretManagerServiceClient();
const project = client.getProjectId();

console.log("project", project);

export default new Strategy(
    {
        // project puzzle-pzl
        clientID: "552054097269-8dpq61pku540cl71mb9jtho3dag3sglk.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "JG5rjZqAZluroM6eZ2H254LR",
        // clientID: "813573427784-u6okgh1ituqakgv729uvuftpdmm38hs5.apps.googleusercontent.com",
        // clientSecret: process.env.GOOGLE_CLIENT_SECRET || "qYhchpZVxQqkr2y6aqfO8_-6",
        callbackURL: "/api/auth/google/callback",
        // /oauthcallback?code={authorizationCode}
    },
    socialNetworkStrategy
);
