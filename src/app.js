// En app.js se va a instaciar exprees
import express from "express";
// import user from "./user/network.js";
import { user, story } from "./components";
import cors from "cors";

// por ende por ahora esta archivo solo va a exportar app
export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", user);
app.use("/story", story);
// las rutas deberian tener un archivo decidado para ellas
