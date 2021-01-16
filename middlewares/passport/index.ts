import passport from "passport";
import localStrategy from "./local";
import { serialize, deserialize } from "./utils";
// import googleStrategy from "./google";
// import UserModel from "../../models/User";
// import { Request, Response, NextFunction, Application } from "express";
// import auth from "./auth";
// import { createSocialNetworkRoutes } from "./utils";

// passport.serializeUser((user: any, done) => {
//     done(null, user._id);
// });

// export default (app: Application) => {
//     auth(passport);
//     app.use(passport.initialize());
//     app.use(passport.session());
//     createSocialNetworkRoutes(app);
//     // app.use(passport.authenticate('remember-me'));
//
//     // return passport.authenticate('remember-me');
//     return (req: Request, res: Response, next: NextFunction) => next();
//     // app.use(passport.authenticate('remember-me'));
// };

// const serialize = (user: any, done: any) => {
//     return done(null, user._id);
// };
// const deserialize = (_id: string, done: any) => {
//     console.log("deserialize id", _id);
//     return UserModel.findOne({ _id }, done);
// };

passport.serializeUser(serialize);
passport.deserializeUser(deserialize);
passport.use(localStrategy);
// passport.use(googleStrategy);

export default passport;
