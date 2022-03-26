import express from "express";

const app = express();

// como creo una ruta en express?
app.get("/", (req, res) => {
  // cuando vamos a construir un API las respuestas
  // que enviemos deben ser en formato JSON
  // res tiene la opcion de poder enviar una formarto con JSON
  // res.json
  res.json({
    data: "success",
  });
});

//route get test
app.get("/test", (req, res) => {
  res.json({
    data: "success",
  });
});

// como inicio un servidor en express?
// recuereden que pueden usar cualquier puerto
// sin embargo los recomendados por la comunidad son 3000 - 6000 - 9000 - 3001
app.listen(3000);
