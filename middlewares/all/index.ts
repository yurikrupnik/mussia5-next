import nc from "next-connect";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
// import passport from "@/middlewares/passport";
import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/middlewares/db";
import type { Session } from "next-auth";
// import session from "@/middlewares/session";

async function prot(req: NextApiRequest, res: NextApiResponse, next: () => void) {
    const session: Session | null = await getSession({ req });
    if (session) {
        // Signed in
        console.log("Session", JSON.stringify(session, null, 2)); // eslint-disable-line
        return next();
        // res.end();
    }
    // Not Signed in hi
    // res.status(401);
    res.statusCode = 401;
    return res.json({ omg: "yes" });
    // res.send("Status Code: 401 Unauthorized\n");

    // return res.end();
}

// const handleUnAuth = (res: NextApiResponse) => (session: Session | null) => {
//     if (session) {
//         // Signed in
//         console.log("Session", JSON.stringify(session, null, 2)); // eslint-disable-line
//         // return next();
//         // res.end();
//     }
//     // console.log("Session", JSON.stringify(session, null, 2)); // eslint-disable-line
//     // return next();
//     res.statusCode = 401;
//     return res.end();
//     // console.log(err);
//     // res.statusCode = 401;
//     // res.json({ omg: "yes" });
//
//     // res.end();
// };

// const prot = (ctx: NextPageContext) => getSession(ctx).then(handleUnAuth(ctx.res));
// .catch((err) => {
//     // res.status(401);
//     console.log(err); // eslint-disable-line
//     res.statusCode = 401;
//     // res.json({ omg: "yes" });
//
//     res.end();
// });

// eslint-disable-next-line
const handler = nc().use(morgan("dev")).use(helmet()).use(cookieParser()).use(connectDb).use(prot);

// .use(passport.initialize())
// .use(passport.session())
// .use((req, res, next) => {
//     console.log("re.sessions", req.sessions); // eslint-disable-line no-console
//     console.log("re.user", req.user); // eslint-disable-line no-console
//     console.log("re.user", req.cookie); // eslint-disable-line no-console
//     // if (req.isAuthenticated()) {
//     //     console.log("Authenticated user"); // eslint-disable-line no-console
//     // } else {
//     //     console.log("Not Authenticated user"); // eslint-disable-line no-console
//     // }
//     next();
// });

export default handler;
