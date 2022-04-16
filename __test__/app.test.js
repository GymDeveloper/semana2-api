import request from "supertest";
import { app } from "../src/app";

describe("Lista de Usuarios", () => {
  test("METHOD GET", async () => {
    const result = await request(app).get("/user");

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

