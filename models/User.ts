import mongoose, { Schema, Document, Model as Mo, SchemaTypeOptions } from "mongoose";
// import { dbModel } from "./config";
import { validateEmail } from "../utils/validation";
// import { generateHashSync } from "../utils/crypt";

const usersRoles = ["editor", "finance", "admin", "crm"];

const dbModel = "user";

type UserGroupFront = {
    email: string;
    password: string;
    token: string;
    role: string;
    image: string;

    firstName: string;
    id?: string;
    lastName?: string;
    // fullName?: string;

    isActive?: boolean;
    creditCardNumber?: string;
    provider: "local" | "google";
    // aris?: string;
};

type UserGroup = UserGroupFront;

type UserGroupDocument = UserGroup & Document;

const userGroupSchemaObj: Record<keyof UserGroup, SchemaTypeOptions<any>> = {
    creditCardNumber: {
        type: String,
        transform: (str: string) => {
            if (str) {
                return `****-****-****-${str.substr(str.length - 4)}`;
            }
            return null;
        },
        // get: (str: string) => {
        //     if (str) {
        //         return `****-****-****-${str.substr(str.length - 4)}`;
        //     }
        //     return null;
        // },
    },
    // aris: {
    //     type: String,
    //     default: "aris",
    // },
    provider: {
        type: String,
        enum: ["local", "google"],
        default: "local",
    },
    id: {
        type: String,
        required() {
            return this.provider !== "local";
        },
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Email address is required"],
        validate: [validateEmail, "Please fill a valid email address"],
        // match: [emailReg, "pls"],
        // match: emailReg,
        index: true,
    },
    token: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        required() {
            return this.provider === "local";
        },
        // required: true,
        // required: function() [{ return this.a === 'test'; }, 'YOUR CUSTOME MSG HERE']
        // set: generateHashSync,
    },
    role: {
        type: String,
        enum: usersRoles,
        default: "admin",
    },
    image: {
        type: String,
        default: "",
    },
    firstName: {
        type: String,
        required() {
            return this.provider !== "local";
        },
    },
    lastName: {
        type: String,
        required() {
            return this.provider !== "local";
        },
    },
    isActive: {
        type: Boolean,
        default: true,
    },
};

// if (process.env.IS_OFFLINE) {
delete mongoose.connection.models[dbModel];
// }

const UsersSchema: Schema = new Schema(userGroupSchemaObj);

type UserGroupModel = Mo<UserGroupDocument>;

const Model: UserGroupModel = mongoose.model<UserGroupDocument>(dbModel, UsersSchema);

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

export type { UserGroup, UserGroupDocument, UserGroupFront };
// export { mock };
