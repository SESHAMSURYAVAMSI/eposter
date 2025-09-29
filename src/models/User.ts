import mongoose, { Schema, Document, Model } from "mongoose";

// 1. Define the User interface
export interface IUser extends Document {
  name: string;
  institute: string;
  password: string;
}

// 2. Define the schema
const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    institute: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// 3. Create a model with proper type checks
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
