import { Router } from "express";
import * as controller from "./controller";
// import { index, login } from "./controller.js";

const testRouter = Router();

testRouter.route("/").get(controller.index);
testRouter.route("/login").post(controller.login);
// que variable exportamos aqui?
export default testRouter;
