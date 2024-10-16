import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import passport from "passport";
import authRoutes from "./routers/auth.router.js";
import mocksRoute from "./routers/mocks.router.js";
import cookieParser from "cookie-parser";
import { initializePassport } from "./config/passport.config.js";
import { dbConnection } from "./config/db.connection.js";

const app = express();
const PORT = 8081;

// Express config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// Routes config
app.use("/api/mocks", mocksRoute);
app.use("/api/auth", authRoutes);

// Passport Config
initializePassport();
app.use(passport.initialize());

// Mongoose Config
dbConnection().then(() => console.log("Connected to MongoDB"));

// Start server
const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
server.on("error", (err) => console.log(err));

export default app;
