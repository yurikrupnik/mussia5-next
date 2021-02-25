import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";

console.log("process.env.GITHUB_CLIENT_ID", process.env.GITHUB_CLIENT_ID); // eslint-disable-line
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
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                clientId: process.env.GITHUB_CLIENT_ID,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                scope: "repo gist",
                // clientSecret: "e2652da3b0fa1320b294ba4b35d979ccf52aff69",
            }),
            Providers.Google({
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                clientId: process.env.GOOGLE_CLIENT_ID,
            }),
            Providers.Email({
                from: process.env.PROVIDER_EMAIL,
                maxAge: 50000,
                // server: "",
            }),
            // Providers.Credentials({}),
            // ...add more providers here
        ],
        database: process.env.MONGODB_URI,
        // debug: true,
    });
