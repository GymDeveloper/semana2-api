// En app.js se va a instaciar exprees
import express from "express";
// import user from "./user/network.js";
import { user, story } from "./components";

// por ende por ahora esta archivo solo va a exportar app
export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", user);
app.use("/story", story);
// las rutas deberian tener un archivo decidado para ellas
