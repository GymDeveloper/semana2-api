import hash from "object-hash";

export const hasPassword = async (password) => {
  return hash(password);
};
