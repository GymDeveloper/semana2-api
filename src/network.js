import { Router } from "express";
import { index, login } from "./controller.js";

const testRouter = Router();

testRouter.route("/").get(index);
testRouter.route("/login").post(login);
// que variable exportamos aqui?
export default testRouter;
