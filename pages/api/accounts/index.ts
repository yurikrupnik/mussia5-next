import nc from "next-connect";
// import { NextApiRequest, NextApiResponse } from "next";
import { all } from "../../../middlewares";
// import Accounts from "../../../models/Accounts";
// import { list, find } from "../../../utils/methods";

// import Model from "../../../models/User";

const handler = nc().use(all);

// handler.get((req, res) => {
//     res.send("aris");
// });

// handler.get(list(Accounts));
// handler.get(find(Accounts));
// handler.get((req: NextApiRequest, res: NextApiResponse) => {
//     Accounts.find(req.query).then(respondWithResult(res)).catch(handleError(res));
// });
// handler.post(create(Model));
// handler.put(update(Model));

export default handler;
