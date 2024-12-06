import express from "express"
import { signin, signup } from "./user.controller.js";
import { checkEmailExit } from "../../middleware/checkEmailExit.js";

const userRouter = express.Router();

userRouter.post('/signup' ,checkEmailExit, signup)

userRouter.post('/signin', signin)

export default userRouter;