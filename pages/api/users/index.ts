import nc from "next-connect";
import morgan from "morgan";
import connectDb from "../../../middlewares/db";
import { create, list, update } from "../../../utils/methods";

import Model from "../../../models/User";

const handler = nc().use(morgan("dev")).use(connectDb);

handler.get(list(Model));
handler.post(create(Model));
handler.put(update(Model));

export default handler;
