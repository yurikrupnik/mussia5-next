import mongoose, { ConnectionStates } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const connection: Partial<{ isConnected: ConnectionStates }> = {};

async function connectDb(req: NextApiRequest, res: NextApiResponse, next: () => void) {
    console.log("process.env.MONGODB_URIf", process.env.MONGODB_URI); // eslint-disable-line
    console.log("process.env.VERCEL_URL", process.env.VERCEL_URL); // eslint-disable-line
    console.log("process.env.VERCEL_GIT_REPO_SLUG", process.env.VERCEL_GIT_REPO_SLUG); // eslint-disable-line
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
