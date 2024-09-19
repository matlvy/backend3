import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  image: {
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

export const UserModel = model("users", userSchema);
