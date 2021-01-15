import mongoose, { Schema, Document, Model as Mo } from "mongoose";
// import { dbModel } from "./config";

const dbModel = "user";

type UserGroupFront = {
  name: string;
};

type UserGroup = UserGroupFront;

type UserGroupDocument = UserGroup & Document;

const userGroupSchemaObj: Record<keyof UserGroup, any> = {
  name: {
    type: String,
  },
};

// if (process.env.IS_OFFLINE) {
delete mongoose.connection.models[dbModel];
// }

const UsersSchema: Schema = new Schema(userGroupSchemaObj);

type UserGroupModel = Mo<UserGroupDocument>;

const Model: UserGroupModel = mongoose.model<UserGroupDocument>(
  dbModel,
  UsersSchema
);

const mock: UserGroupFront[] = [
  {
    name: "Group 1",
  },
  {
    name: "Group 2",
  },
  {
    name: "Group 3",
  },
  {
    name: "Group 4",
  },
  {
    name: "Group 5",
  },
];

export default Model;

export type { UserGroup, UserGroupDocument, UserGroupFront };
export { mock };
