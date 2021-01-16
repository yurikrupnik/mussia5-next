import mongoose, { ConnectionStates } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const connection: Partial<{ isConnected: ConnectionStates }> = {};

async function connectDb(req: NextApiRequest, res: NextApiResponse, next: () => void) {
    if (connection.isConnected) {
        console.log("Using existing connection"); // eslint-disable-line
        return next();
    }
    // const db = await mongoose.connect("mongodb+srv://admin:AXnEdzgKsyg8XVaN@cluster0.zurzw.mongodb.net/", {
    const db = await mongoose.connect("mongodb://localhost/mussia5-next", {
        useNewUrlParser: true,
        // useCreateIndex: false,
        // useFindAndModify: false,
        // useUnifiedTopology: true,
    });
    console.log("DB Connected"); // eslint-disable-line
    connection.isConnected = db.connections[0].readyState;
    // console.log("db.base", db.connections[0].base);
    // console.log("db._connectionString", db.connections[0]._connectionString);
    return next();
}

export default connectDb;
