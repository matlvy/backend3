import { userModel } from "../models/user.model.js";
import { generateToken } from "../utils/jwtFunctions.js";

class AuthController {
  async login(req, res) {
    console.log(req.user);

    const payload = {
      email: req.user.email,
      role: req.user.role,
    };

    const token = generateToken(payload);

    res.cookie("token", token, {
      maxAge: 1000 * 60 * 2, // 2 minutos
      httpOnly: true,
    });

    res.status(200).json({ message: "Successful login" });
  }

  async loginError(req, res) {
    res.status(401).json({ message: "Incorrect user or password" });
  }

  async register(req, res) {
    const { first_name, last_name, email, password } = req.body;

    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({
        error: "Missing information",
      });
    }

    try {
      const userExists = await userModel.findOne({ email });

      if (userExists) {
        return res.status(400).json({
          error: "The user already exists",
        });
      }

      const user = new userModel({
        first_name,
        last_name,
        email,
        password,
      });

      await user.save();

      res.status(201).json({ message: "User created" });
    } catch (error) {
      res.status(500).json({
        error: "There was an error",
        details: error.message,
      });
    }
  }

  async current(req, res) {
    console.log(req.user);

    res.json({ message: "Logged user", user: req.user });
  }

  async logout(req, res) {
    req.clearCookie("token");

    res.json({ message: "The session has been expired" });
  }
}

export default new AuthController();
