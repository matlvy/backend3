import { Schema, model } from "mongoose";
import bcrypt, { genSaltSync } from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    default: "coder123",
  },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  pets: { type: Array },
});
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
export const UserModel = model("users", userSchema);
