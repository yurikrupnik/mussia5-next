import nc from "next-connect";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import passport from "@/middlewares/passport";
import connectDb from "@/middlewares/db";
import session from "@/middlewares/session";

const handler = nc()
    .use(morgan("dev"))
    .use(cookieParser())
    .use(connectDb)
    .use(session)
    .use(passport.initialize())
    .use(passport.session())
    .use((req, res, next) => {
        console.log("re.sessions", req.sessions);
        console.log("re.user", req.user);
        if (req.isAuthenticated()) {
            console.log("Authenticated user"); // eslint-disable-line no-console
        } else {
            console.log("Not Authenticated user"); // eslint-disable-line no-console
        }
        next();
    });

export default handler;
