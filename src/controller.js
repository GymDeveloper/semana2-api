/**
 * Nuestro archivo que contenga
 * la logica de la app
 */

// al crear una funcion que export podemos usar esta para
// importar el otro artchivo
export const index = (req, res) => {
  res.json({
    data: "test success",
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;

  res.json({
    data: {
      type: "login",
      email,
      password,
    },
  });
};

// destructuracion de objetos
const obj = {
  name: "claudia",
  age: "23",
  lastname: "perez",
};
// si queremos accede a un element de un objeto ".name"
const { name: nombre, age, lastname } = obj;
console.log(nombre); // claudia
console.log(age); // 23
console.log(lastname); // perez
