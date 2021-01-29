// import express from "express";
// import passport from "passport";
import nc from "next-connect";
import passport from "passport";
// import { NextApiRequest, NextApiResponse } from "next";

import all from "../../../../middlewares/all";

const handler = nc().use(all);

// const stam = nc().use(all);
// .use("/callback", (req, res) => {
//     res.send("callback");
// });
// handler.get(passport.authenticate)
handler.get(
    passport.authenticate("google", {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        scope: ["email", "profile", "openid"],
    })
); // handling fail with router);
// handler.use("/callback", (req, res) => {
//     res.send("callback");
// });

// handler.use(stam);
// handler.use("/callback", stam);
// handler.all("/callback", stam);

export default handler;
