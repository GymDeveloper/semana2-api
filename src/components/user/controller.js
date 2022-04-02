/**
 * Nuestro archivo que contenga
 * la logica de la app
 */

// al crear una funcion que export podemos usar esta para
// importar el otro artchivo
const data = [];
export const index = (req, res) => {
  res.json({
    data: "test success",
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;
  req.body.id = data.length + 1;
  data.push(req.body);

  res.json({
    data: {
      type: "login",
      email,
      password,
    },
  });
};
