import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            // clientID: "552054097269-8dpq61pku540cl71mb9jtho3dag3sglk.apps.googleusercontent.com",
            // clientSecret: process.env.GOOGLE_CLIENT_SECRET || "JG5rjZqAZluroM6eZ2H254LR",
            clientId: "552054097269-8dpq61pku540cl71mb9jtho3dag3sglk.apps.googleusercontent.com",
            // clientId: process.env.GOOGLE_CLIENT_ID,
            // clientSecret: process.env.GOOGLE_CLIENT_SECRET
            clientSecret: "JG5rjZqAZluroM6eZ2H254LR",
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
