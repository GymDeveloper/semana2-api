import { Router } from "express";

const testRouter = Router();

testRouter.route("/").get((req, res) => {
  res.json({
    data: "test sucess",
  });
});

// que variable exportamos aqui?
export default testRouter;
