/**
 * Nuestro archivo que contenga
 * la logica de la app
 */

// al crear una funcion que export podemos usar esta para
// importar el otro artchivo
const data = [];

export const index = (req, res) => {
  return res.status(200).json({
    ok: true,
    data,
  });
};

export const store = (req, res) => {
  req.body.id = data.length + 1;
  const user = req.body;

  const findUser = data.find(
    (u) => u.name === user.name || u.email === user.email
  );

  if (findUser) {
    return res.status(200).json({
      ok: false,
      data: "User already exits",
    });
  }

  data.push(user);

  return res.status(201).json({
    ok: true,
    data: user,
  });
};
