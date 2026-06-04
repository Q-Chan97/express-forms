import { Router } from "express";
import { usersListGet, usersCreateGet, usersCreatePost, usersUpdateGet, usersUpdatePost, usersDeletePost } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", usersListGet);
userRouter.get("/create", usersCreateGet);
userRouter.post("/create", usersCreatePost);

userRouter.get("/:id/update", usersUpdateGet);
userRouter.post("/:id/update", usersUpdatePost);

userRouter.post("/:id/delete", usersDeletePost);

export default userRouter;