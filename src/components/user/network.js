import { Router } from "express";
import * as controller from "./controller";
// import { index, login } from "./controller.js";

const testRouter = Router();

testRouter.route("/").get(controller.index);
testRouter.route("/store").post(controller.store);
// que variable exportamos aqui?
export default testRouter;
