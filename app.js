import express from "express";
import path from "node:path";

import userRouter from "./routes/userRouter.js";

const PORT = 3000;
const app = express();
const __dirname = import.meta.dirname;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server running on port ${PORT}`);
})