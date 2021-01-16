import nc from "next-connect";
import { all } from "../../../middlewares";
import { create, list, update } from "../../../utils/methods";

import Model from "../../../models/User";

const handler = nc().use(all);

handler.get(list(Model));
handler.post(create(Model));
handler.put(update(Model));

export default handler;
