import mongoose, { ConnectionStates } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const connection: Partial<{ isConnected: ConnectionStates }> = {};

console.log("process.env.MONGODB_URI", process.env.MONGODB_URI); // eslint-disable-line
async function connectDb(req: NextApiRequest, res: NextApiResponse, next: () => void) {
    if (connection.isConnected) {
        console.log("Using existing connection"); // eslint-disable-line
        return next();
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        // useCreateIndex: false,
        // useFindAndModify: false,
        // useUnifiedTopology: true,
    });
    console.log("DB Connected"); // eslint-disable-line
    connection.isConnected = db.connections[0].readyState;
    return next();
}

export default connectDb;
