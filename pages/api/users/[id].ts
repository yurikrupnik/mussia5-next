import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
// import { find, removeOne } from "../../../utils/methods";
// import Model from "../../../models/User";
import { all } from "../../../middlewares";

const handler = nc().use(all);

handler.get((req: NextApiRequest, res: NextApiResponse) => {
    res.json({ status: "ok" });
});
// handler.get(find(Model));
// handler.delete(removeOne(Model));

export default handler;
