import nc from "next-connect";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
// import passport from "@/middlewares/passport";
import connectDb from "@/middlewares/db";
// import session from "@/middlewares/session";

// eslint-disable-next-line
const handler = nc().use(morgan("dev")).use(helmet()).use(cookieParser()).use(connectDb);

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
