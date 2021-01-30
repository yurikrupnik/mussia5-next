// import session from "express-session";
// import connectMongo from "connect-mongo";
// todo check wny express
import { Request, Response, NextFunction } from "express";
// import { NextApiRequest, NextApiResponse } from "next";

export default (req: Request, res: Response, next: NextFunction) => {
    // const MongoStore = connectMongo(session);
    // const opts = { url: "mongodb://localhost/mussia5-next" };
    // session({
    //     // name: 'app',
    //     // todo make env var
    //     secret: "secret-app",
    //     saveUninitialized: false,
    //     resave: false, // need to touch and then can use false as the value
    //     store: new MongoStore(opts),
    //     cookie: {
    //         maxAge: 86400 * 1000,
    //     },
    // })(req, res, next);
    next(); // does not work
};
