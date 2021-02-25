import mongoose, { Schema, Document, Model as Mo, SchemaTypeOptions, SchemaTimestampsConfig } from "mongoose";
// import { dbModel } from "./config";
import UserModel from "./User";
// import { validateEmail } from "../utils/validation";
// import { generateHashSync } from "../utils/crypt";

// const usersRoles = ["editor", "finance", "admin", "crm"];
type SchemaFilter = "createdAt" | "updatedAt";

const dbModel = "account";

type AccountsFront = {
    compoundId: string;
    userId: string;
    providerType: string;
    providerId: "google" | "github" | "local";
    providerAccountId: number;
    refreshToken: string;
    accessToken: string;
    accessTokenExpires: string | null;
    // createdAt: Date; // automatic
    // updatedAt: Date; // automatic
    // _id: string; // automatic
};

// type UserGroup = AccountsFront;
// type User = Pick<SchemaTimestampsConfig, SchemaFilter> & AccountsFront;
type AccountsDocument = Pick<SchemaTimestampsConfig, SchemaFilter> & AccountsFront & Document;

const AccountsSchemaObj: Record<keyof AccountsFront, SchemaTypeOptions<string | number>> = {
    compoundId: {
        type: String,
    },
    userId: {
        type: String,
        ref: UserModel,
    },
    providerId: {
        type: String,
        enum: ["local", "google", "github"],
        default: "local",
    },
    providerType: {
        type: String,
    },
    providerAccountId: {
        type: Number,
    },
    refreshToken: {
        type: String,
    },
    accessToken: {
        type: String,
        // required: true,
        // required: function() [{ return this.a === 'test'; }, 'YOUR CUSTOME MSG HERE']
        // set: generateHashSync,
    },
    accessTokenExpires: {
        type: String,
    },
};

// if (process.env.IS_OFFLINE) {
delete mongoose.connection.models[dbModel];
// }

const AccountsSchema: Schema = new Schema(AccountsSchemaObj, { timestamps: true });

type UserGroupModel = Mo<AccountsDocument>;

const Model: UserGroupModel = mongoose.model<AccountsDocument>(dbModel, AccountsSchema);

// const mock: UserGroupFront[] = [
//     {
//         name: "Group 1",
//     },
//     {
//         name: "Group 2",
//     },
//     {
//         name: "Group 3",
//     },
//     {
//         name: "Group 4",
//     },
//     {
//         name: "Group 5",
//     },
// ];

export default Model;

export type { AccountsDocument, AccountsFront, UserGroupModel };
// export { mock };
