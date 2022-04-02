import { Router } from "express";
import * as Controller from "./controller";

const storyRouter = Router();

storyRouter.route("/").get(Controller.list);
storyRouter.route("/").post(Controller.store);

export default storyRouter;
