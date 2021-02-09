import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";

// const options = {
//     // Configure one or more authentication providers
//     providers: [
//         Providers.Google({
//             // clientID: "552054097269-8dpq61pku540cl71mb9jtho3dag3sglk.apps.googleusercontent.com",
//             // clientSecret: process.env.GOOGLE_CLIENT_SECRET || "JG5rjZqAZluroM6eZ2H254LR",
//             clientId: "206012550014-pj6ilj273h60b7qiokg3dh4j450391er.apps.googleusercontent.com",
//             // clientId: process.env.GOOGLE_CLIENT_ID,
//             // clientSecret: process.env.GOOGLE_CLIENT_SECRET
//             clientSecret: "vJfuqmQAACdwAGGMCXtpdCQX",
//         }),
//         // ...add more providers here
//     ],
//
//     // A database is optional, but required to persist accounts in a database
//     // database: process.env.DATABASE_URL,
//     // todo
//     database: "mongodb://localhost/mussia5-next",
//     // database: "mongodb+srv://admin:AXnEdzgKsyg8XVaN@cluster0.zurzw.mongodb.net",
// };

export default (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, {
        providers: [
            // Providers.Credentials({
            //     // The name to display on the sign in form (e.g. 'Sign in with...')
            //     name: "Credentials",
            //     // The credentials is used to generate a suitable form on the sign in page.
            //     // You can specify whatever fields you are expecting to be submitted.
            //     // e.g. domain, username, password, 2FA token, etc.
            //     credentials: {
            //         username: { label: "Username", type: "text", placeholder: "jsmith" },
            //         password: { label: "Password", type: "password" },
            //     },
            //     async authorize(credentials) {
            //         console.log("credentials", credentials);
            //         // // Add logic here to look up the user from the credentials supplied
            //         // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };
            //         //
            //         // if (user) {
            //         //     // Any object returned will be saved in `user` property of the JWT
            //         //     return user;
            //         // }
            //         // If you return null or false then the credentials will be rejected
            //         return {};
            //         // You can also Reject this callback with an Error or with a URL:
            //         // throw new Error('error message') // Redirect to error page
            //         // throw '/path/to/redirect'        // Redirect to a URL
            //     },
            // }),
            Providers.GitHub({
                // clientId: "453146d4f22a9dc52f30",
                clientId: "Iv1.5b44de52edb0b343",
                clientSecret: "a98d15f9f52a5adde9643d2decd95ec8cdc46bd0",
                // clientSecret: "e2652da3b0fa1320b294ba4b35d979ccf52aff69",
            }),
            Providers.Google({
                // clientID: "552054097269-8dpq61pku540cl71mb9jtho3dag3sglk.apps.googleusercontent.com",
                // clientSecret: process.env.GOOGLE_CLIENT_SECRET || "JG5rjZqAZluroM6eZ2H254LR",
                clientId: "206012550014-djactupct5k19rbem7m6da2kffni2vmj.apps.googleusercontent.com",
                // clientId: process.env.GOOGLE_CLIENT_ID,
                // clientSecret: process.env.GOOGLE_CLIENT_SECRET
                clientSecret: "W1eaP-uDDtck8dgYG7TYQgRg",
            }),
            Providers.Email({
                from: "krupnik.yuri@gmail.com",
                maxAge: 50000,
                // server: "",
            }),
            // Providers.Credentials({}),
            // ...add more providers here
        ],
        database: "mongodb://0.0.0.0/mussia5-next",
        // debug: true,
    });
