// import express from "express";
// import passport from "passport";
import nc from "next-connect";
// import { NextApiRequest, NextApiResponse } from "next";
// import morgan from "morgan";

// import { login, logout, register } from "./config";
// import UsersModel from "../../../models/User";
// import { generateHash } from "../../../utils/crypt";
import all from "../../../middlewares/all";

const handler = nc().use(all);

// handler.post(passport.authenticate("local"), (req, res) => {
//     // res.redirect("/dashboard");
//     // console.log("local auth req.user", req.user);
//     // console.log("session", req.session);
//     res.statusCode = 200;
//     res.end();
//     // res.json({ aris: true });
//     // res.send("ok");
//     //                             // req.login(result, (error) => {
//     //                             //     if (error) {
//     //                             //         throw error;
//     //                             //     } else {
//     //                             //         // res.status(200).send(user);
//     //                             res.redirect("/onboarding/step3");
//     //                             //     }
//     //                             // });
// });
// handler.post(
//     passport.authenticate("local", { failWithError: true }),
//     (req: NextApiRequest, res: NextApiResponse) => {
//         // console.log('res.status', res.status);
//         // res.status(200).json(req.user._id);
//         res.send("aris");
//         // res.redirect("/dashboard");
//     }
//     // (err: Error, req: NextApiRequest, res: NextApiResponse) => {
//     //     console.log("login error", err);
//     //     res.status(500).send(err);
//     // }
// );

// const handleHash = (user: any) => (hash: string) => {
//     user.hashPassword = hash; // eslint-disable-line no-param-reassign
//     return user;
// };
// router.get("/auth/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc    Google auth callback
// @route   GET /auth/google/callback
// router.get(googleCallback, passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
//     res.redirect("/dashboard");
// });
// router.get(google, passport.authenticate("google", { scope: ["profile"] }));
// router.get(google, (req, res) => {
//     res.status(200).json("ok");
// });
//
// router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
//     // Successful authentication, redirect home.
//     res.redirect("/");
// });
// handler.post((req: NextApiRequest, res: NextApiResponse) => {
//     const { email, password, username } = req.body;
//     console.log("{email", email);
//     UsersModel.findOne({ email }).then((user) => {
//         if (user) {
//             res.status(400).json({
//                 message: "User exists",
//             });
//         } else {
//             generateHash(password)
//                 .then(
//                     handleHash(
//                         new UsersModel({
//                             email,
//                             username,
//                         })
//                     )
//                 )
//                 .then((newUser) => {
//                     newUser.save((err: Error, result: any) => {
//                         if (err) {
//                             throw err;
//                         } else {
//                             console.log("newUser result", result);
//                             // req.login(result, (error) => {
//                             //     if (error) {
//                             //         throw error;
//                             //     } else {
//                             //         // res.status(200).send(user);
//                             res.redirect("/onboarding/step3");
//                             //     }
//                             // });
//                         }
//                     });
//                 });
//         }
//     });
// });

// handler.delete((req: NextApiRequest, res: NextApiResponse, next) => {
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     req.session.destroy((err) => {
//         if (err) {
//             next(err);
//         } else {
//             res.redirect("/");
//         }
//     });
//     // todo check with
//     // req.logOut();
//     // res.status(200).send("logout");
// });

export default handler;
