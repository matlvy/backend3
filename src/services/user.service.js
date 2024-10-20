import { userModel } from "../models/user.model.js";

export const createUsers = async (body) => {
  try {
    return await userModel.create(body);
  } catch (error) {
    throw new Error(error);
  }
};
export const getUsers = async () => {
  try {
    return await userModel.find({});
  } catch (error) {
    throw new Error(error);
  }
};
export const getPets = async () => {
  try {
    return await userModel.find();
  } catch (error) {
    throw new Error(error);
  }
};
export const getUser = async (id) => {
  try {
    return await userModel.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUser = async (id, body) => {
  try {
    return await userModel.findByIdAndUpdate(id, body);
  } catch (error) {
    throw new Error(error);
  }
};
export const deleteUser = async (id) => {
  try {
    return await userModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};
export const deleteAllUsers = async () => {
  try {
    return await userModel.deleteMany({});
  } catch (error) {
    throw new Error(error);
  }
};
