import express from "express";
import mocksRoute from "./routers/mocks.router.js";
import { dbConnection } from "./config/db.connection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/mocks", mocksRoute);

const PORT = 8081;

dbConnection().then(() => console.log("Connected to MongoDB"));

const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
server.on("error", (err) => console.log(err));

export default app;
