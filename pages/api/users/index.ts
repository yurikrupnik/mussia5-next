import nc from "next-connect";
import morgan from "morgan";
import connectDb from "../../../middlewares/db";
import { create, list, update } from "../../../utils/methods";

import Model from "./model";

const handler = nc().use(morgan("dev")).use(connectDb);

handler.get(list(Model));
handler.post(create(Model));
handler.put(update(Model));

// handler.get("/dsss", (req: NextApiRequest, res: NextApiResponse) => {
//     console.log("req.queryaaaa", req.query);
//     Model.find({}).then(respondWithResult(res)).catch(handleError(res));
// });
// handler.use("/:id", find(Model));

export default handler;

// export default (req, res) => {
//     console.log("req.query", req.query);
//     console.log("req.params", req.params);
//     const { method } = req;
//     console.log("method", method);
//     if (method === "GET") {
//         console.log("req", req.url);
//         console.log("req", req.params);
//         // res.status(200).json("send");
//         return Model.find(req.query).then(respondWithResult(res)).catch(handleError(res));
//     } else if (method === "post") {
//         return res.status(200).json("send");
//     }
//     res.status(200).json("send");
// };
