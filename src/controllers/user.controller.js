import * as userService from "../services/user.service.js";

export const createUsers = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await userService.createUsers(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: "Error while creating the user",
      details: error.message,
    });
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const response = await userService.getUsers();
    res.json(response);
  } catch (error) {
    next(error);
  }
};
export const getPets = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUser(id);
    const pets = await userService.getPets();
    res.json(user.pets);
  } catch (error) {
    res.status(500).json({
      error: "Error while getting the user",
      details: error.message,
    });
  }
};
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUser(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: "Error while getting the user",
      details: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    const user = await userService.updateUser(id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: "Error while trying to update the user",
      details: error.message,
    });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userService.deleteUser(id);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const deleteAllUsers = async (req, res) => {
  try {
    const user = await userService.deleteAllUsers({});
    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: "Error while trying to erase the user",
      details: error.message,
    });
  }
};
