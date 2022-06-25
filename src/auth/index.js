import jwt from "jsonwebtoken";
import { secret } from "../../config";

export const sign = (payload) => {
  return jwt.sign(payload, secret);
};

const verify = (token) => {
  return jwt.verify(token, secret);
};

const getToken = (authorization, res) => {
  if (authorization === null) {
    return res.json({
      ok: false,
      status: 403,
      data: { message: "Token not found" },
    });
  }

  if (authorization.indexOf("Bearer") === -1) {
    return res.json({
      res,
      ok: false,
      status: 403,
      data: { message: "Format token invalid" },
    });
  }

  //? Bearer <token>
  return authorization.split(" ")[1];
};

export const checkToken = (req, res, next) => {
  //? Esto obtiene el valor de mi hader con el key authorization
  const authorization = req.headers.authorization || null;
  //? obtengo el token
  const token = getToken(authorization, res);
  //? nos toca validar el token
  const decoded = verify(token);

  //? Valido si el decoded tiene algun error
  if (!decoded) {
    return res.json({
      res,
      ok: false,
      status: 403,
      data: { message: "Invalid Token" },
    });
  }

  //? Guardo el decoded dentro del request
  req.decoded = decoded;

  //? Todo esta ok puede seguir
  next();
};
