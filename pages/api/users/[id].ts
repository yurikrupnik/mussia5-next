import nc from "next-connect";
import { find, removeOne } from "../../../utils/methods";
import Model from "../../../models/User";
import { all } from "../../../middlewares";

const handler = nc().use(all);

handler.get(find(Model));
handler.delete(removeOne(Model));

export default handler;
