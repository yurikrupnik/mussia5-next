import nc from "next-connect";
import all from "@/middlewares/all";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nc().use(all);

handler.get((req: NextApiRequest, res: NextApiResponse) => {
    // res.statusCode = 200;
    // res.json({ ad: "yes" });
    res.status(200).json({ ar: "ssss" });
});

export default handler;
