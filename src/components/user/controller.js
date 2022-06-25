import { prisma } from "../../../db";
import { sign } from "../../auth";
import { hasPassword } from "../../helper/password";
import axios from "axios";

const data = [];

export const index = async (req, res) => {
  const users = await prisma.user.findMany();

  return res.status(200).json({
    ok: true,
    users,
  });
};

export const store = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      ...req.body,
      password: await hasPassword(req.body.password),
    },
  });

  return res.status(201).json({
    ok: true,
    data: user,
  });
};

// update user
export const update = (req, res) => {
  const { id } = req.params;
  const { name, email, phone_number } = req.body;

  const user = data.find((u) => u.id === Number(id));

  if (!user) {
    return res.status(200).json({
      ok: false,
      data: "User not found",
    });
  }

  user.name = name;
  user.email = email;
  user.phone_number = phone_number;

  return res.status(200).json({
    ok: true,
    data: user,
  });
};

// delete user
export const destroy = (req, res) => {
  const { id } = req.params;

  const user = data.find((u) => u.id === Number(id));

  if (!user) {
    return res.status(200).json({
      ok: false,
      data: "User not found",
    });
  }

  data.splice(data.indexOf(user), 1);

  return res.status(200).json({
    ok: true,
    data: "User deleted",
  });
};

export const login = async (req, res) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(500).json({
        ok: false,
        data: "User not found",
      });
    }

    if ((await hasPassword(req.body.password)) === user.password) {
      user.token = sign({
        email: req.body.email,
        password: req.body.password,
      });

      return res.status(200).json({
        ok: true,
        data: user,
      });
    } else {
      return res.status(500).json({
        ok: false,
        data: "No match",
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      data: error.message,
    });
  }
};

export const callback = async (req, res) => {
  const { code } = req.query;

  const response = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: "9fbae9364e97e6c8ac5c",
      client_secret: "0e739b546036a0879be0d4d071d409070c9b603a",
      code,
    }
  );

  const access_token = response.data.split("=");

  return res.status(200).json({
    ok: true,
    data: access_token[1].replace("&scope", ""),
  });
};
