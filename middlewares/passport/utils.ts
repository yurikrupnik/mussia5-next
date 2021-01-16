import passport from "passport";
import { Application } from "express";
import { validatePassword } from "./crypt";

import UserM, { UserGroupDocument } from "../../models/User";

const serialize = (user: any, done: any) => done(null, user._id);

const deserialize = (_id: string, done: any) => UserM.findOne({ _id }, done);

const checkValidUser = (user: UserGroupDocument, done: any) => (valid: boolean) => {
    console.log(">>>>>>>>>>>>>valid", valid);
    if (!valid) {
        done(null, false, "huuu"); // todo check it
        // done({ message: "Not valid email or psssword", status: "500" }, false, "huuu"); // todo check it
    } else {
        done(null, user);
    }
};

// eslint-disable-next-line
// const checkUserByEmailAndPassNoBoth = (req: Express.Request, email: string, password: string, done: any) => (
//     user: any
// ) => {
//     if (!user) {
//         done("error here", null);
//         // done(new Error("second custom error try"), null, {
//         //      message: "second custom error try1111",
//         // });
//     } else {
//         return validatePassword(password, user.password).then(checkValidUser(user, done));
//     }
// };

// const saveUser = (done: any) => (user: any) => user.save(done);

const checkUserByEmailAndPass = (req: any, email: string, password: string, done: any) => (user: any) => {
    if (!user) {
        const newUser = new UserM({
            email,
            password,
            // name: faker.name.findName(),
            // id: shortid.generate(),
            // todo remove id and use mongo _id
        });

        return newUser
            .save()
            .then((result) => {
                console.log("result", result);
                done(null, result);
                // req.login(result, (err, s) => {
                //     if (err) {
                //         console.log('err' err)
                //     } else {
                //         console.log({s})
                //     }
                // });
            })
            .catch(done);
    }
    return validatePassword(password, user.password).then(checkValidUser(user, done));
};

const localStrategyHandler = (req: any, email: string, password: string, done: any) =>
    UserM.findOne({ email }).then(checkUserByEmailAndPass(req, email, password, done)).catch(done);

// const localStrategyHandler = (req: Request, email: string, password: string, done: any) => {
//     if (req.body.token) {
//         UserM.findOne({ token: req.body.token })
//             .then((user) => {
//                 done(null, user);
//             })
//             .catch(done);
//     } else {
//         UserM.findOne({ email })
//             // eslint-disable-next-line
//             .then((user) => {
//                 if (!user) {
//                     console.log("no user found");
//                     // done(null, null, "dammmm");
//                     // done({ message: "no suyser" }, null, "omg some message");
//                 } else {
//                     return user;
//                 }
//             })
//             .then(checkUserByEmailAndPass(req, email, password, done))
//             .catch(done);
//     }
// };

const socialAppsRegisterCallback = (profile: any, token: string, refreshTocken: string, done: any) => () => {
    console.log("token", token);

    console.log("refreshTocken", refreshTocken);
    UserM.findOne({ id: profile.id })
        .then((user) => {
            if (user) {
                done(null, user);
            } else {
                const { provider } = profile;
                const newUser = new UserM({
                    id: profile.id,
                    // password: "asd",
                    email: profile.emails[0].value,
                    image: profile.photos[0].value,
                    provider,
                    token,
                    // name: provider === "facebook" ? profile.displayName : profile.fullName,
                    // firstName: provider.name.givenName,
                    firstName: profile.name.givenName,
                    // lastName: provider.name.familyName,
                    // firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    // lastName: "aris",
                });
                newUser.save(done);
            }
        })
        .catch(done);
};

const socialNetworkStrategy = (token: string, refreshTocken: any, profile: any, done: any) =>
    process.nextTick(socialAppsRegisterCallback(profile, token, refreshTocken, done));

const setSocialAuth = (provider: string) =>
    passport.authenticate(provider, {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        scope: ["email", "profile", "openid"],
    }); // handling fail with router

const createSocialNetworkRoutes = (app: Application) => {
    const socialNetworks = ["google"];
    socialNetworks.forEach((provider) => {
        // register middlewares
        app.get(`/auth/${provider}`, setSocialAuth(provider));
        app.get(`/auth/${provider}/callback`, setSocialAuth(provider));
    });
};

export { serialize, deserialize, socialNetworkStrategy, localStrategyHandler, createSocialNetworkRoutes };
