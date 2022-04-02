import { Router } from "express";

const storyRouter = Router();

storyRouter.route("/").get((req, res) => {
  res.json({
    message: "Hello from story",
  });
});

export default storyRouter;
