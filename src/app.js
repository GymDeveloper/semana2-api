// En app.js se va a instaciar exprees
import express from "express";
import network from "./network.js";

// por ende por ahora esta archivo solo va a exportar app
export const app = express();
app.use("/", network);
// las rutas deberian tener un archivo decidado para ellas
