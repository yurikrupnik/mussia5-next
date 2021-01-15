import nc from "next-connect";
import morgan from "morgan";
import connectDb from "../../../../middlewares/db";
import { find, removeOne } from "../../../../utils/methods";
import Model from "../../../../models/User";

const handler = nc().use(morgan("dev")).use(connectDb);

handler.get(find(Model));
handler.delete(removeOne(Model));

export default handler;
