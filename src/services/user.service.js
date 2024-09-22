import { UserModel } from "../models/user.model.js";
import { generateUser } from "../utils/user.utils.js";

export const createUsersMock = async (cant = 50) => {
  try {
    let users = [];
    for (let i = 0; i <= cant; i++) {
      users.push(generateUser());
    }
    return await UserModel.create(users);
  } catch (error) {
    throw new Error(error);
  }
};
export const getUsers = async () => {
  try {
    return await UserModel.find({});
  } catch (error) {
    throw new Error(error);
  }
};
export const getPets = async () => {
  try {
    return await UserModel.where("pets").select("pets");
  } catch (error) {
    throw new Error(error);
  }
};
