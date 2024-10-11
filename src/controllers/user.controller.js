import * as userService from "../services/user.service.js";

export const createUser = async (req, res, next) => {
  try {
    const { cant } = req.query;
    const response = await userService.createUsersMock(cant);
    res.status(200).json(response);
  } catch (error) {
    next(error);
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
    const response = await userService.getPets();
    res.json(response);
  } catch (error) {
    next(error);
  }
};
export const updUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    const user = await userService.updateUser(id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el usuario",
      details: error.message,
    });
  }
};

export const delUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userService.deleteUser(id);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const delAllUsers = async (req, res) => {
  try {
    const user = await userService.deleteAllUsers({});
    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar el usuario",
      details: error.message,
    });
  }
};
