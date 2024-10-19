import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import passport from "passport";
import authRoutes from "./routers/auth.router.js";
import userRoutes from "./routers/users.router.js";
import cookieParser from "cookie-parser";
import { initializePassport } from "./config/passport.config.js";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { info } from "./docs/info.js";

const app = express();
const PORT = 8081;

// Express Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// Routes Config
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Passport Config
initializePassport();
app.use(passport.initialize());

// Mongoose Config
mongoose
  .connect(
    "mongodb+srv://mattlevyprg:coderhouse@cluster0.0nikfi0.mongodb.net/backend3"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

//Swagger Config
const specs = swaggerJSDoc(info);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
